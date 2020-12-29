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
const menueBar = document.querySelector("#navbar__list");
const sections = document.querySelectorAll('section');

console.log(sections, "sections")
console.log(menueBar, "menue")
// const sectionsId = sections.forEach(itemsid => console.log(itemsid.id, "id"))
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
//show and display burgerIcon
const navBarMenue = document.querySelector(".navbar__menu ");
const hamburgerMenu = document.querySelector(".hamburger__menu");
hamburgerMenu.addEventListener("click", () => {
    navBarMenue.classList.toggle("shownNavbarMenu");
    hamburgerMenu.classList.toggle("showClose");
})

// build the nav
function buildMenu() {
    sections.forEach((item) => {
        let listItems = document.createElement("li");
        listItems.classList.add("menu__item");
        let sectionName = item.getAttribute("data-nav");
        let sectionId = item.getAttribute("id");
        let anchor = document.createElement('a');
        anchor.classList.add("menu__link");
        anchor.setAttribute("href", `#${sectionId}`);
        anchor.textContent = `${sectionName}`;
        listItems.appendChild(anchor);
        menueBar.appendChild(listItems);
    })
}
// check if the element is in viewport or not
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0
    );
}
//Add class 'active' to section when near top of viewport
function setActiveCalss() {
    for (let i = 0; i < sections.length; i++) {
        if (isInViewport(sections[i])) {
            sections[i].classList.add("your-active-class")
            console.log(sections[i])
        } else {
            console.log("not on screen")
            sections[i].classList.remove("your-active-class")
        }
    }
}
// Scroll to anchor ID using scrollTO event
// Scroll to section on link click


/**
 * End Main Functions
 * Begin Events
 * 
 *
 * 
*/
// Build menu 
buildMenu();
// Set sections as active
document.addEventListener('scroll', () => {
    setActiveCalss();
})

// Scroll to top button
const scrollTop = document.querySelector('#btnscrollTop');
scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


