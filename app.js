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
//navigation variables
//const navigation = document.getElementById('navbar__list');
//sections variables
let sections = document.querySelectorAll('section');
let myUl = document.getElementById("navbar__list");
let fragment = document.createDocumentFragment();



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
sections.forEach((section) =>{
    let text = section.getAttribute("data-nav");
    //create new li
    let newLi = document.createElement('li');
    //create link
    let newLink = document.createElement('a');
    let textNode = document.createTextNode(text);
    //append text to link
    newLink.appendChild(textNode);
    //append link to li
    newLi.appendChild(newLink);
    // Scroll to anchor using scrollIntoView event
    newLink.addEventListener('click', () => { 
        section.scrollIntoView({behavior: "smooth"});
      });
    //append li to fragment
    fragment.appendChild(newLi);
});
//append fragment to ul
myUl.appendChild(fragment);

// Add class 'active' to section when near top of viewport
function active_link(active_section) {
    // get the data nav from the section
    let section_nav = active_section.getAttribute('data-nav');
    //get all links
    let links = document.querySelectorAll('a');
    //loop on links
    links.forEach((link) =>{
        if(link.textContent == section_nav){
            links.forEach( (link) => {  
                link.classList.remove('your-active-class'); 
            });
            //add active class to active link
            link.classList.add('your-active-class');
        };
    });
  };

  function active_Class(){
  let links = document.querySelectorAll('a');
  //loop on sections
  sections.forEach((section) =>{
      //function to get position of section
      let rect = section.getBoundingClientRect();
      section.classList.remove('your-active-class');
      //condition check the position
      if( rect.top >= 0 && rect.top <= (window.innerHeight - 300 )) {
        sections.forEach( (section) => {  
            section.classList.remove('your-active-class'); 
        });
        section.classList.add('your-active-class');
        active_link(section);
      };
  });
};
window.addEventListener('scroll', active_Class);




/**
 * End Main Functions
 * Begin Events
 * 
*/



