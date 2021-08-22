/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let new_section = '<section id="%id%" data-nav="%data-nav%"><div class="landing__container"></div></section>'
const addSectionButton = document.querySelector('#addSectionButton');
let navbar__list = document.querySelector("#navbar__list");
let main_section = document.querySelector("main");
let section_event = "";
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // some code..
    section_event = "touchmove";
}
else {
    section_event = "mouseenter";
}

let page_sections = [
    {
        "title": "Section 1",
        "content":
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
        dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
        imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
        bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
        elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
        nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
        semper in tellus. Sed congue et odio sed euismod.

        Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
        luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
        porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`


    },
    {
        "title": "Section 2",
        "content":
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
        dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
        imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
        bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
        elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
        nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
        semper in tellus. Sed congue et odio sed euismod.
        
        Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
        luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
        porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`

    },
    {
        "title": "Section 3",
        "content":
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
        dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
        imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
        bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
        elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
        nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
        semper in tellus. Sed congue et odio sed euismod.
        
        Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
        luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
        porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`

    },
    {
        "title": "Section 4",
        "content":
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
        dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
        imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
        bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
        elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
        nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
        semper in tellus. Sed congue et odio sed euismod.
        
        Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
        luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
        porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`
    },

];

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function build_sections() {
    let text = "";


    for (let i = 0; i < page_sections.length; i++) {

        let section = page_sections[i];
        let section_title = section.title;
        let section_content = section.content;
        let section_id = "section" + (i + 1)

        text = new_section.replace("%id%", section_id).replace("%data-nav%", section_title);
        main_section.insertAdjacentHTML('beforeend', text);
        let selector = '#' + section_id + " div";
        let section_div = main_section.querySelector(selector);

        let newElement = document.createElement('h2');

        newElement.innerText = section_title;
        section_div.appendChild(newElement);

        newElement = document.createElement('p');
        newElement.innerText = section_content;
        section_div.appendChild(newElement);


    }
}

function add_newsection() {
    let text = "";

    let section = page_sections[page_sections.length - 1];
    let section_title = section.title;
    let section_content = section.content;
    let section_id = "section" + page_sections.length;

    text = new_section.replace("%id%", section_id).replace("%data-nav%", section_title);
    main_section.insertAdjacentHTML('beforeend', text);
    let selector = '#' + section_id + " div";


    let section_div = main_section.querySelector(selector);

    let newElement = document.createElement('h2');

    newElement.innerText = section_title;
    section_div.appendChild(newElement);
    newElement = document.createElement('p');
    newElement.innerText = section_content;
    section_div.appendChild(newElement);


}




/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function build_navbar() {
    for (let i = 0; i < page_sections.length; i++) {

        let section_id = "section" + (i + 1)
        let newAElement = document.createElement('a');
        let newliElement = document.createElement('li');

        newAElement.innerText = section_id;
        // Scroll to section on link click
        newAElement.setAttribute("href", "#" + section_id);
        newAElement.setAttribute("class", "menu__link");
        newliElement.appendChild(newAElement);
        navbar__list.appendChild(newliElement);
    }


}
function add_newnavbar() {


    let section_id = "section" + page_sections.length
    let newAElement = document.createElement('a');
    let newliElement = document.createElement('li');
    newAElement.innerText = section_id;
    // Scroll to section on link click
    newAElement.setAttribute("href", "#" + section_id);
    newAElement.setAttribute("class", "menu__link");

    newliElement.appendChild(newAElement);
    navbar__list.appendChild(newliElement);



}






// Add class 'active' to section when near top of viewport
function active_navbar(id) {
    let current_active_li = document.querySelectorAll("#navbar__list li.active");
    let nav_li = document.querySelectorAll("#navbar__list li");
    let section_num = id.replace("section", "");

    if (current_active_li.length > 0) {
        current_active_li[0].className = "";
    }
    nav_li[section_num - 1].className = "active";

}



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 


addSectionButton.addEventListener('click', function () {

    let new_title = document.querySelector("#new_title");
    let new_content = document.querySelector("#new_content");
    let errorHeader = document.querySelector("#errorHeader");
    if (new_title.value === "" || new_content.value === "") {

        errorHeader.innerText = "Missed title or content";
    }
    else {
        errorHeader.innerText = "";
        page_sections.push({ "title": new_title.value, "content": new_content.value });
        add_newsection();
        add_newnavbar();
        add_neweventlistner();
    }



    new_title.value = "";
    new_content.value = "";
})

function build_eventlistner() {
    let page_sections = document.querySelectorAll("main section");
    for (section of page_sections) {
        section.addEventListener(section_event, function (ev) {
            console.log(ev);

            var current = main_section.getElementsByClassName(" your-active-class");

            if (current.length > 0) {
                current[0].className = current[0].className.replace(" your-active-class", "");
            }
            // Set sections as active
            this.className = " your-active-class";
            active_navbar(this.id);

        })
    }

}

function add_neweventlistner() {
    let page_sections = document.querySelectorAll("main section");
    let section = page_sections[page_sections.length - 1];
    section.addEventListener(section_event, function (ev) {
        var current = main_section.getElementsByClassName(" your-active-class");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" your-active-class", "");
        }
        // Set sections as active
        this.className = " your-active-class";
        active_navbar(this.id);
    })
}

build_sections();
build_navbar();
build_eventlistner();