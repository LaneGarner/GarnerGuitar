const veggieBurger = document.getElementById("veggie-burger");
const veggieBurgerExpanded = document.getElementById("veggie-burger-expanded");
const mobileNav = document.getElementById("mobile-nav");
const heading = document.querySelector(".logo-heading");
const thumbnailLogo = document.querySelector(".thumbnail-logo");
const x = window.matchMedia("(max-width: 800px)")
const y = window.matchMedia("(max-width: 360px)")


mobileNav.style.display = "none";
veggieBurgerExpanded.style.display = "none";

veggieBurger.addEventListener("click", () => {
    mobileNav.style.display = "flex";
    veggieBurgerExpanded.style.display = "inline";
    veggieBurger.style.display = "none";
})

veggieBurgerExpanded.addEventListener("click", () => {
    mobileNav.style.display = "none";
    veggieBurgerExpanded.style.display = "none";
    veggieBurger.style.display = "inline";
})

document.addEventListener("scroll", () => {
    if (x.matches) {
        mobileNav.style.display = "none";
        veggieBurgerExpanded.style.display = "none";
        veggieBurger.style.display = "inline";
    } 
})

document.addEventListener("scroll", () => {
    // if (document.scrollTop === 0) {
        
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            thumbnailLogo.style.width = "5vw"
            heading.style.fontSize = "5vw";
        } else {
            thumbnailLogo.style.width = "8vw";
            heading.style.fontSize = "8vw";
        }

    // }
        
    
    // if (x.matches) {
    //     mobileNav.style.display = "none";
    //     veggieBurgerExpanded.style.display = "none";
    //     veggieBurger.style.display = "inline";
    // } 
})

window.addEventListener("resize", () => {
    if (!x.matches) {
        mobileNav.style.display = "none";
        veggieBurgerExpanded.style.display = "none";
        veggieBurger.style.display = "none";
        heading.style.display = "inline";
    }
})

window.addEventListener("resize", () => {
    if (x.matches) {
        mobileNav.style.display = "none";
        veggieBurgerExpanded.style.display = "none";
        veggieBurger.style.display = "inline";
        heading.style.display = "inline";
    } 
})

window.addEventListener("resize", () => {
    if (y.matches) {
        heading.style.display = "none";
        // veggieBurgerExpanded.style.display = "none";
        // veggieBurger.style.display = "inline";
    } 
})




// function myFunction(x) {
//     if (x.matches) { // If media query matches
//       document.body.style.backgroundColor = "yellow";
//     } else {
//      document.body.style.backgroundColor = "pink";
//     }
//   }
  
//   const x = window.matchMedia("(max-width: 800px)")
//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction) // Attach listener function on state changes





// }

// pageLoad();



//mailchimp
// (function ($) { 
//     window.fnames = new Array(); 
//     window.ftypes = new Array(); 
//     fnames[0] = 'EMAIL'; 
//     ftypes[0] = 'email'; 
//     fnames[1] = 'FNAME'; 
//     ftypes[1] = 'text'; }(jQuery)); 
//     var $mcj = jQuery.noConflict(true);