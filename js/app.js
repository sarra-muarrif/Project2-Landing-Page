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

const FRAGMENT = document.createDocumentFragment();
const SECTIONS = document.querySelectorAll("section");
const NAV_BAR_MENU = document.querySelector(".navbar__menu");
const MENU = document.getElementById("navbar__list");
const MENU_ICON = document.querySelector(".hamburger__menu");

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

// Use isInViewport() helper function To check if an element is visible in the viewpor.
isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// 1* build the nav
/* 

  -Get unorderlist <ul>.
  -Get all sections.
  -Loop for all these sections.
     . Get section attributes id , data-nav
  -Create list item <li>.
     .Add class to list "menu__item".
  -Create Link <a>.
     .Add class to link "menu__link".
     .Add href to link `${sectionId}`.
     .Add text content `${sectionName}`.
   -Append itemLink <a> , to itemList <li>.
   -Append FRAGMENT , to itemList <li>.
   -Append FRAGMENT , MENU <ul>

*/
buildNav = () => {
    SECTIONS.forEach((section) => {
        let sectionId = section.getAttribute("id");
        let sectionName = section.getAttribute("data-nav");
        let itemList = document.createElement("li");
        itemList.classList.add("menu__item");
        let itemLink = document.createElement("a");
        itemLink.classList.add("menu__link");
        itemLink.setAttribute("href", `#${sectionId}`);
        itemLink.textContent = `${sectionName}`;
        itemList.appendChild(itemLink);
        FRAGMENT.appendChild(itemList);
    });
    MENU.appendChild(FRAGMENT);
}
buildNav();


// 2*  handle menu in the mobile screen
MENU_ICON.addEventListener("click", () => {
    NAV_BAR_MENU.classList.toggle("shownNavbarMenu");
    MENU_ICON.classList.toggle("showClose");
})

// 3* Scroll to section on link click
/*
     - Get The Nav list element 
     - Get target link
       * Get attribte "href" with out "#" by using sebsting() method.
       * remove old active menu link
       * set new active menu link
     - Scroll to target section
*/ 

MENU.addEventListener("click", (e) => {
    e.preventDefault();
    const targetLink = e.target;
    const targetSectionId = targetLink.getAttribute("href").substring(1,);
    const targetSection = document.getElementById(targetSectionId);
    const menuActiveLink = document.querySelector(".active");
    menuActiveLink.classList.remove("active");
    targetLink.classList.add("active");
    targetSection.scrollIntoView({ behavior: "smooth" })
})


// 4* Add class 'active' to section when near top of viewport
/*
   - Get All Sections.
   - Loops for All these Sections.
        // set active class for current section.
   - Get all menu links.
       Check if the current section in the view port .
               active link will be the section id.
               remove acive state from rest menu links .

   */

setActiveSection = () => {
    for (section of SECTIONS) {
        const elementOnScreen = isInViewport(section);
        section.classList.toggle("your-active-class", elementOnScreen);
        if (elementOnScreen) {
            const sectionId = section.getAttribute("id");
            let links = document.querySelectorAll(".menu__link");
            links.forEach((link) => {
                link.classList.toggle("active", link.getAttribute("href") === `#${sectionId}`);
            });

        }

    }
}

/**
 * End Main Functions
 * Begin Events
 *
 *
 *
*/
// Set sections as active
document.addEventListener("scroll", () => {
    setActiveSection();
})
// Scroll to top button
const scrollTopBut = document.querySelector("#btnscrollTop");
scrollTopBut.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});



