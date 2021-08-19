// var projects = {
//     "udacity": [{
//         "ndname": "Web Development Professional Nanodegree Program",
//         "ndprojects": [
//             {
//                 "name": "Landing Page",
//                 "description": "Build a landing page that uses JavaScript to create an interactive navigational experience for the user.",
//                 "url": "/FEND/index.html"
//             }
//         ]
//     }],
//     "aws": [],

// };

// function display_certificates() {
//     var replacedText = "";
//     for (var i = 0; i < projects.udacity.length; i++) {
//         var currentCertificate = projects.udacity[i];
//         var classid = currentCertificate.ndname;
//         replacedText = new_12section.replace("%id%", classid);
//         $('#udacity').append(replacedText);

//         replacedText = HTMLPic.replace("%data%", currentCertificate.certificatePic).replace("%alt%", currentCertificate.title);
//         $('#' + classid).append(replacedText);



//         replacedText = HTMLCertificateDetailsButton.replace("%id%", "#" + classid + 'button').replace("%data%", currentCertificate.title + ' Details');
//         $('#' + classid + ' figure').append(replacedText);

//         replacedText = create_model_html(classid + 'button', currentCertificate.title, currentCertificate.certificatePic, currentCertificate.school
//             , currentCertificate.dates, currentCertificate.description, currentCertificate.programUrl, currentCertificate.certificateId);
//         $('#models').append(replacedText);

//     }

// }

// display_certificates();