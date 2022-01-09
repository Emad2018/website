let education = {
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
        },
        {
            "title": "Sensor Fusion Nanodegree",
            "school": "Udacity",
            "dates": "Nov-2020",
            "programUrl": "https://www.udacity.com/course/sensor-fusion-engineer-nanodegree--nd313",
            "certificatePic": "images/certificates/SFND.jpg",
            "certificateId": "https://confirm.udacity.com/ECKCNMKP",
            "description": "Learn to detect obstacles in lidar point clouds through clustering and segmentation, apply thresholds and filters to radar data in order to accurately track objects, and augment your perception by projecting camera images into three dimensions and fusing these projections with other sensor data. Combine this sensor data with Kalman filters to perceive the world around a vehicle and track objects over time."

        },
        {
            "title": "Intro to Self-Driving Cars Nanodegree",
            "school": "Udacity",
            "dates": "Aug-2020",
            "programUrl": "https://www.udacity.com/course/intro-to-self-driving-cars--nd113",
            "certificatePic": "images/certificates/ISDND.jpg",
            "certificateId": "https://confirm.udacity.com/AKKFHCMS",
            "description": "In this program, you’ll sharpen your Python skills, apply C++, apply matrices and calculus in code, and touch on computer vision and machine learning. These concepts will be applied to solving self-driving car problems. At the end, you’ll be ready for our Self-Driving Car Engineer Nanodegree program!"

        },
        {
            "title": "Computer Vision Nanodegree",
            "school": "Udacity",
            "dates": "Aug-2020",
            "programUrl": "https://www.udacity.com/course/computer-vision-nanodegree--nd891",
            "certificatePic": "images/certificates/CVND.jpg",
            "certificateId": "https://confirm.udacity.com/GKZMGA4M",
            "description": "Learn cutting-edge computer vision and deep learning techniques—from basic image processing, to building and customizing convolutional neural networks. Apply these concepts to vision tasks such as automatic image captioning and object tracking, and build a robust portfolio of computer vision projects."

        },
        {
            "title": "AI Programming with Python Nanodegre",
            "school": "Udacity",
            "dates": "Aug-2020",
            "programUrl": "https://www.udacity.com/course/ai-programming-python-nanodegree--nd089",
            "certificatePic": "images/certificates/AIPYTHON.jpg",
            "certificateId": "https://confirm.udacity.com/PWJAHH4C",
            "description": "Learn the essential foundations of AI: the programming tools (Python, NumPy, PyTorch), the math (calculus and linear algebra), and the key techniques of neural networks (gradient descent and backpropagation)."

        },
        {
            "title": "C++ Nanodegree",
            "school": "Udacity",
            "dates": "July-2020",
            "programUrl": "https://www.udacity.com/course/c-plus-plus-nanodegree--nd213",
            "certificatePic": "images/certificates/CPLUSPLUSND.jpg",
            "certificateId": "https://confirm.udacity.com/VGMGPHHF",
            "description": "Get hands-on experience by coding five real-world projects. Learn to build a route planner using OpenStreetMap data, write a process monitor for your computer, and implement your own smart pointers. Finally, showcase all your newfound skills by building a multithreaded traffic simulator and coding your own C++ application."

        },

        {
            "title": "FWD Web Development Challenger Track",
            "school": "Udacity",
            "dates": "Oct-2020",
            "programUrl": "https://egfwd.com/specializtion/challenger-web-development/",
            "certificatePic": "images/certificates/FWDWEB1.jpg",
            "certificateId": "https://graduation.udacity.com/confirm/QXEPD2XJ",
            "description": "the web specialization track is an opportunity to develop your programming skills gradually through a fully integrated and stackable learning journey. The program starts by introducing Javascript concepts and slowly progressing towards React to become a front-end developer."

        }
    ]
};
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

display_certificates();