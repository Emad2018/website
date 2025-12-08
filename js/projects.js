let homeContent = document.querySelector("#homeContent");

let page_sections =
    [
        {
            "id": "web",
            "courseName": "Web Development Professional Nanodegree Program",
            "school": "Udacity",
            "projects": [
                {
                    "title": "Landing Page",
                    "ref": "projects/FEND/Landing Page project/index.html",
                    "summary": `Build a landing page that uses JavaScript to create an interactive navigational experience for the user.`
                }

            ]
        }
        ,
        {
            "id": "ml",
            "courseName": "Machine learning Nanodegree Program",
            "school": "Udacity",
            "projects": [
                {
                    "title": "IMDB Sentiment Analysis",
                    "ref": "projects/MLND/IMDB Sentiment Analysis/index.html",
                    "summary": `construct a random tree model to predict the sentiment of a movie review. In addition,we will deploy this model to an endpoint and construct a very simple web app which will interact with our model's deployed endpoint..`
                }
            ]
        }
        ,
        {
            "id": "IOT",
            "courseName": "Internet of Things with AWS",
            "school": "Amazon Web Services",
            "projects": [
                {
                    "title": "Teltonika FMC150 Live Tracking",
                    "ref": "projects/IOT/FMC150LiveTracking/index.html",
                    "summary": `Create a live tracking web app that uses AWS IoT Core to receive data from a Teltonika FMC150 GPS tracker.`
                }
            ]
        }

    ];


function build_sections() {
    let text = "";


    for (let i = 0; i < page_sections.length; i++) {

        let section = page_sections[i];
        let section_id = section.id;
        let section_courseName = section.courseName;
        let section_school = section.school;
        let section_projects = section.projects;



        let newElement_section = document.createElement('section');
        let newElement_h1 = document.createElement('h1');
        let newElement_h2 = document.createElement('h2');
        let newElement_ol = document.createElement('ol');
        newElement_section.setAttribute("id", section_id);
        newElement_h1.innerText = section_courseName;
        newElement_h2.innerText = section_school;
        newElement_section.appendChild(newElement_h1);
        newElement_section.appendChild(newElement_h2);

        for (let i = 0; i < section_projects.length; i++) {
            let project = section_projects[i];
            let newElement_li = document.createElement('li');
            let html = `<a href="${project.ref}" ><h3>${project.title} </h3> </a> <p> ${project.summary}</p> `;

            newElement_li.innerHTML = html;
            newElement_ol.appendChild(newElement_li);


        }

        newElement_section.appendChild(newElement_ol);
        homeContent.appendChild(newElement_section);


    }
}
build_sections();
