import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = process.env.TABLE_NAME || "Resumes";

const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
    "Access-Control-Allow-Methods": "OPTIONS,GET,POST",
    "Access-Control-Allow-Credentials": "true"
};

const createResponse = (statusCode, bodyData) => ({
    statusCode,
    headers: CORS_HEADERS,
    body: JSON.stringify(bodyData)
});

export const handler = async (event) => {
    const httpMethod = event.httpMethod || event.requestContext?.http?.method || event.requestContext?.httpMethod;

    if (httpMethod === "OPTIONS") {
        return createResponse(200, { message: "CORS preflight check successful" });
    }

    try {
        if (httpMethod === "GET") {
            const employeeId = event.queryStringParameters?.employeeId;

            if (!employeeId) {
                return createResponse(400, {
                    error: "BadRequest",
                    message: "Missing required query parameter: 'employeeId'"
                });
            }

            const command = new GetCommand({
                TableName: TABLE_NAME,
                Key: { employeeId }
            });

            const result = await docClient.send(command);

            if (!result.Item) {
                return createResponse(404, {
                    error: "NotFound",
                    message: `No profile record found for ID: '${employeeId}'`
                });
            }

            return createResponse(200, result.Item);
        }

        if (httpMethod === "POST") {
            let data;
            try {
                data = typeof event.body === "string" ? JSON.parse(event.body || "{}") : (event.body || {});
            } catch (parseError) {
                return createResponse(400, {
                    error: "InvalidJSON",
                    message: "Failed to parse JSON body.",
                    details: parseError.message
                });
            }

            if (!data.employeeId || !data.employeeId.trim()) {
                return createResponse(400, {
                    error: "BadRequest",
                    message: "Field 'employeeId' is required."
                });
            }

            const command = new PutCommand({
                TableName: TABLE_NAME,
                Item: data
            });

            await docClient.send(command);

            return createResponse(200, { message: "Saved to Cloud successfully!" });
        }

        return createResponse(405, {
            error: "MethodNotAllowed",
            message: `HTTP Method '${httpMethod}' is not supported.`
        });

    } catch (error) {
        console.error("Lambda Error:", error);
        const statusCode = error.$metadata?.httpStatusCode || 500;

        return createResponse(statusCode, {
            error: error.name || "InternalServerError",
            message: error.message || "An unexpected error occurred on the server."
        });
    }
};