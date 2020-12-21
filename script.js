const menuBars = document.querySelector("#menu-bars");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav1");
const nav2 = document.querySelector("#nav2");
const nav3 = document.querySelector("#nav3");
const nav4 = document.querySelector("#nav4");
const nav5 = document.querySelector("#nav5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control navigation animation
function navAnimation(toBeRemoved, toBeAdded) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${toBeRemoved}-${i+1}`, `slide-${toBeAdded}-${i+1}`);
    });
}

function toggleNav() {
    // Toggle menu bars open & closed
    menuBars.classList.toggle("change");
    // Toggle menu active
    overlay.classList.toggle("overlay-active")
    if(overlay.classList.contains("overlay-active")) {
        // Animate in overlay
        overlay.classList.replace("overlay-slide-out", "overlay-slide-in")
        // Animate in nav items
        navAnimation("out", "in")
    } else {
        // Animate out overlay
        overlay.classList.replace("overlay-slide-in", "overlay-slide-out")
        // Animate out nav items
        navAnimation("in", "out")
    }
}

// Event listeners
menuBars.addEventListener("click", toggleNav);
navItems.forEach(nav => nav.addEventListener("click", toggleNav));