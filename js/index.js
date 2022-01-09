let ref_links = {
    "Home": "index.html",
    "projects": "projects.html",
    "resume": "resume.html"
}

var bio = {
    "name": "Abdelrahman Emad",
    "role": "SW Engineer <br> AI & Deep Learning Enthusiast",
    "contacts": {
        "mobile": "+201100436648",
        "email": "a.emad02018@gmail.com",
        "github": "https://github.com/Emad2018",
        "linkedIn": "https://www.linkedin.com/in/abdelrahman-emadeldeen/",
        "location": "Cairo,Egypt",
        "timezone": "GMT+2"
    },
    "welcome": `Hello my Friend and welcome in my personal Website 👋<br> <br>
    I'm Abdelrahman Emad`,
    "about": `A SW Developer with a demonstrated history of working in the automotive industry.<br><br>Skilled in Autosar,Python, C/C++,ML/DL,Computer Vision and Sensor Fusion.
    <br><br>when I started working on this website,It was for making a real project for my HTML,CSS and JS self-study 😂.
    <br> <br>But now I am trying to share my knowladge and adding as much as I can of my projects that I have done to help other learners.`,
    "skills": [],
    "bioPic": "images/myimage.jpg"
};
var education = {
    "schools": [
        {
            "name": "Ain Shams University",
            "city": "Cairo",
            "degree": "Bachelor",
            "major": "Mecatronics",
            "graduationDate": "2013-2018",
            "logo": "images/ainshams.png",
            "website": "https://eng.asu.edu.eg/",
            "graduationProjectTitle": "Advanced Driver Assistance System",
            "graduationProjectThesis": "files/ADAS thesis.pdf"
        }
    ],
    "certificates": [
        {
            "title": "AWS Certified Machine Learning – Specialty",
            "school": "AWS",
            "dates": "AUG-2021",
            "programUrl": "https://aws.amazon.com/certification/certified-machine-learning-specialty/",
            "certificatePic": "images/certificates/AWSML.jpg",
            "certificateId": "https://www.credly.com/badges/429b8f32-8b62-47cc-b390-0e56136fabc3",
            "description": "AWS Certified Machine Learning - Specialty is intended for individuals who perform a development or data science role and have more than one year of experience developing, architecting, or running machine learning/deep learning workloads in the AWS Cloud. Before you take this exam, we recommend you have "

        },
        {
            "title": "Web Development Professional Nanodegree Program",
            "school": "Udacity",
            "dates": "Sep-2021",
            "programUrl": "https://egfwd.com/specializtion/professional-web-development/",
            "certificatePic": "images/certificates/WEBPRO.svg",
            "certificateId": "https://confirm.udacity.com/URRGFSGK",
            "description": "Learn advanced Javascript, Dom methods and how to work with APIs. You will be able to add interactivity and different services to your website and make it more engaging and alive! "

        },
        {
            "title": "Machine Learning Engineer Nanodegree",
            "school": "Udacity",
            "dates": "April-2021",
            "programUrl": "https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009t",
            "certificatePic": "images/certificates/MLND.jpg",
            "certificateId": "https://confirm.udacity.com/VCHEK59N",
            "description": "Learn advanced machine learning techniques and algorithms and how to package and deploy your models to a production environment. Gain practical experience using Amazon SageMaker to deploy trained models to a web application and evaluate the performance of your models. A/B test models and learn how to update the models as you gather more data, an important skill in industry. "

        },
        {
            "title": "Self-Driving Car Engineer Nanodegree",
            "school": "Udacity",
            "dates": "Jan-2021",
            "programUrl": "https://www.udacity.com/course/self-driving-car-engineer-nanodegree--nd013",
            "certificatePic": "images/certificates/SDND.jpg",
            "certificateId": "https://confirm.udacity.com/CKJJCYQR",
            "description": "You'll first apply computer vision and deep learning to automotive problems, including detecting lane lines, predicting steering angles, and more. Next, you'll learn sensor fusion, which you'll use to filter data from an array of sensors in order to perceive the environment. Finally, you'll have an opportunity to run your code in a simulation on Udacity's self-driving car. "
        }

    ]
};
var work = {
    "jobs":
        [
            {
                "employer": "Avelabs",
                "title": "SW Engineer II",
                "dates": "May 2019-Present",
                "description": "Full-time",
                "tasks":
                    ["Creation of NVM blocks using DaVinci Developer and Davinci Configurator.",
                        "Implement different types of Indication flags to detect any failures in the NVM operations .",
                        "Creation of SWCs for Application Layer and RTE Ports using Vector DaVinci Developer.",
                        "Perform (Unit Testing), Using CANoe, and Lauterbach Trace32 tools for fixing the software bugs.",
                        "Dealing with JIRA and Plastic tool for tracking the tickets and apply the process of branch merging."
                    ],
                "employerLogo": "images/Avelabs-Egypt-9253-1543344533-og.png"
            }

        ],
    "internships":
        [
            {
                "employer": "Avelabs",
                "title": "Automotive SW Development Bootcamp",
                "dates": "Feb 2019-May 2019",
                "description": "internship",
                "tasks":
                    ["Get hands-on experience by coding real-life projects using Embedded C.",
                        "Create drivers for HW Interfacing and Communication protocols.",
                        "Learn data structures and algorithms by solving practice problems.",
                        "attend sessions about Makefiles,ARM Architecture, Software Engineering & Practices",
                    ],
                "employerLogo": "images/Avelabs-Egypt-9253-1543344533-og.png"
            }

        ]
}

var jobIds = [];
var certificatesIds = [];
function display_header() {
    $("#headerName p").append(bio.name);
    $("#headerName h3").append(bio.role);

    $("#social-logos .github-logo a").attr("href", bio.contacts.github);
    $("#social-logos .linkedin-logo a").attr("href", bio.contacts.linkedIn);
    $("#social-logos .gmail-logo a").attr("href", "mailto:" + bio.contacts.email);


}
function display_about() {
    var replacedText = "";
    replacedText = HTMLbioPic.replace("%data%", bio.bioPic)
    $("#bioPic").append(replacedText);
    $("#about .welcome").append(bio.welcome);
    $("#about .message").append(bio.about);


}

function display_jobs(jobtype) {
    var replacedText = "";
    for (var i = 0; i < work[jobtype].length; i++) {
        var classid = jobtype + i;
        var orginfo = classid + "-orgInfo";
        var jobInfo = classid + "-jobInfo";
        var currentJob = work[jobtype][i];

        replacedText = HTMLorgInfo.replace("%id%", orginfo);
        $('#' + jobtype).append(replacedText);

        replacedText = HTMLPic.replace("%data%", currentJob.employerLogo);
        $('#' + orginfo).append(replacedText);

        replacedText = HTMLjobInfo.replace("%id%", jobInfo);
        $('#' + jobtype).append(replacedText);

        replacedText = HTMhx.replace("%x%", "3").replace("%data%", currentJob.title);
        $('#' + jobInfo).append(replacedText);
        replacedText = HTMhx.replace("%x%", "4").replace("%data%", currentJob.description + ' (' + currentJob.dates + ')');
        $('#' + jobInfo).append(replacedText);
        $('#' + jobInfo).css({ "margin-bottom": "100px" })

        $('#' + jobInfo).append(HTMLul);

        for (var j = 0; j < currentJob.tasks.length; j++) {
            replacedText = list_element.replace('%class%', "task" + j).replace('%data%', currentJob.tasks[j]);
            $('#' + jobInfo + " ul").append(replacedText);
        }
    }
}
function display_schools() {
    var replacedText = "";
    for (var i = 0; i < education.schools.length; i++) {
        var classid = "schoole" + i;
        var schoolLogo = classid + "-logo";
        var schoolinfo = classid + "-info";
        var currentschool = education.schools[i];

        replacedText = HTMLorgInfo.replace("%id%", schoolLogo);
        $('#schools').append(replacedText);

        replacedText = HTMLPic.replace("%data%", currentschool.logo);
        $('#' + schoolLogo).append(replacedText);

        replacedText = HTMLjobInfo.replace("%id%", schoolinfo);
        $('#schools').append(replacedText);


        replacedText = HTMhx.replace("%x%", "3").replace("%data%", currentschool.degree + " of " + currentschool.major);
        $('#' + schoolinfo).append(replacedText);
        replacedText = a_element.replace("%href%", currentschool.website).replace('%data%', currentschool.name);
        replacedText = HTMhx.replace("%x%", "5").replace("%data%", replacedText + ", " + currentschool.city + ' (' + currentschool.graduationDate + ')');
        $('#' + schoolinfo).append(replacedText);
        replacedText = HTMhx.replace("%x%", "5").replace("%data%", "Graduation Project: " + currentschool.graduationProjectTitle);
        $('#' + schoolinfo).append(replacedText);
        replacedText = HTMhx.replace("%x%", "5").replace("%data%", "Project Grade: Excellent");
        $('#' + schoolinfo).append(replacedText);
        replacedText = HTMLlinkButton.replace("%color%", "primary").replace("%href%", currentschool.graduationProjectThesis).replace('%data%', 'Download the project Thesis');
        $('#' + schoolinfo).append(replacedText);

        $('#' + schoolinfo).css({ "margin-bottom": "100px" })
    }
}
function create_model_html(id, title, img, school, dates, content, phref, chref) {
    var replacedText = "";
    replacedText += '<div class="modal fade" id=' + id + ' tabindex="-1" aria-hidden="true">';
    replacedText += '<div class="modal-dialog modal-dialog-scrollable modal-lg"><div class="modal-content"><div class="modal-header">';
    replacedText += '<h5 class="modal-title">' + title;
    replacedText += '</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>';
    replacedText += '</div> <div class="modal-body">'
    replacedText += HTMLPic.replace("%data%", img).replace("%alt%", title);

    replacedText += '<P>' + school + ", " + dates + '</P>' + content + '</div><div class="modal-footer">';
    replacedText += '<button type="button" class="btn btn-secondary p-3" data-bs-dismiss="modal">Close</button>';
    replacedText += HTMLlinkButton.replace("%color%", "primary").replace("%href%", phref).replace('%data%', 'Program Details');
    replacedText += HTMLlinkButton.replace("%color%", "primary").replace("%href%", chref).replace('%data%', 'Graduation Certification');

    replacedText += '</div></div></div></div>';

    return replacedText;
}

function display_certificates() {
    var replacedText = "";
    for (var i = 0; i < education.certificates.length; i++) {
        var classid = "certificates" + i;
        var currentCertificate = education.certificates[i];
        replacedText = HTMCertificateInfo.replace("%id%", classid);
        $('#certificates').append(replacedText);

        replacedText = HTMLPic.replace("%data%", currentCertificate.certificatePic).replace("%alt%", currentCertificate.title);
        $('#' + classid).append(replacedText);



        replacedText = HTMLCertificateDetailsButton.replace("%id%", "#" + classid + 'button').replace("%data%", currentCertificate.title + ' Details');
        $('#' + classid + ' figure').append(replacedText);

        replacedText = create_model_html(classid + 'button', currentCertificate.title, currentCertificate.certificatePic, currentCertificate.school
            , currentCertificate.dates, currentCertificate.description, currentCertificate.programUrl, currentCertificate.certificateId);
        $('#models').append(replacedText);

    }

}


display_header();
display_about();
display_jobs("jobs");
display_jobs("internships");
display_schools();
display_certificates();


$('#certificates div').on("mouseleave", function (event) {

    // $(this).css({ "background-color": "rgba(255, 255, 255, 0)" });
});

$('#certificates div').on("mousemove", function (event) {
    // $(this).css({ "background-color": "rgba(0, 0, 0, 0.5)" });
});

$('#certificates div').on("click", function (event) {
    //$(this).css({ "background-color": "rgba(255, 0, 0, 0.5)" });
});