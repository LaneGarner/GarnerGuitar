const veggieBurger = document.getElementById("veggie-burger");
const veggieBurgerExpanded = document.getElementById("veggie-burger-expanded");
const mobileNav = document.getElementById("mobile-nav");


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