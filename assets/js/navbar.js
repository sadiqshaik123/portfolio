/* ==========================================================
   NAVBAR.JS
   Shaik Sadiq Portfolio
========================================================== */

let navbarInitialized = false;

function initNavbar() {

    if (navbarInitialized) return;

    navbarInitialized = true;

    initStickyNavbar();

    initMobileMenu();

    initActiveMenu();

    initDropdown();

}

initNavbar();

/* ==========================================
   Sticky Navbar
========================================== */

function initStickyNavbar(){

    const header=document.querySelector("header");

    if(!header) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>60){

            header.classList.add("scrolled");

        }

        else{

            header.classList.remove("scrolled");

        }

    });

}

/* ==========================================
   Mobile Navigation
========================================== */

function initMobileMenu(){

    const menu=document.querySelector(".nav-menu");

    const toggle=document.querySelector(".menu-toggle");

    if(!menu || !toggle) return;

    toggle.addEventListener("click",()=>{

        menu.classList.toggle("active");

        toggle.classList.toggle("active");

        if(menu.classList.contains("active")){

            document.body.style.overflow="hidden";

        }

        else{

            document.body.style.overflow="";

        }

    });

    document.querySelectorAll(".nav-menu a").forEach(link=>{

        link.addEventListener("click",()=>{

            menu.classList.remove("active");

            toggle.classList.remove("active");

            document.body.style.overflow="";

        });

    });

    window.addEventListener("resize",()=>{

        if(window.innerWidth>992){

            menu.classList.remove("active");

            toggle.classList.remove("active");

            document.body.style.overflow="";

        }

    });

}

/* ==========================================
   Active Menu
========================================== */

function initActiveMenu(){

    const currentPage=window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-menu a").forEach(link=>{

        const href=link.getAttribute("href");

        if(href===currentPage){

            link.classList.add("active");

        }

    });

}

/* ==========================================
   Dropdown (Future Ready)
========================================== */

function initDropdown(){

    document.querySelectorAll(".dropdown").forEach(dropdown=>{

        dropdown.addEventListener("mouseenter",()=>{

            dropdown.classList.add("show");

        });

        dropdown.addEventListener("mouseleave",()=>{

            dropdown.classList.remove("show");

        });

    });

}

/* ==========================================
   Close Mobile Menu on ESC
========================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        const menu=document.querySelector(".nav-menu");

        const toggle=document.querySelector(".menu-toggle");

        if(menu){

            menu.classList.remove("active");

        }

        if(toggle){

            toggle.classList.remove("active");

        }

        document.body.style.overflow="";

    }

});

/* ==========================================
   Close Menu on Outside Click
========================================== */

document.addEventListener("click",(e)=>{

    const menu=document.querySelector(".nav-menu");

    const toggle=document.querySelector(".menu-toggle");

    if(!menu || !toggle) return;

    const clickedInsideMenu = menu === e.target || menu.contains(e.target);

    const clickedToggle = toggle === e.target || toggle.contains(e.target);

    if(!clickedInsideMenu && !clickedToggle){

        menu.classList.remove("active");

        toggle.classList.remove("active");

        document.body.style.overflow="";

    }

});

/* ==========================================
   Navbar Shadow on Scroll
========================================== */

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(!header) return;

    header.style.boxShadow=window.scrollY>30
        ? "0 10px 30px rgba(0,0,0,.12)"
        : "none";

});

/* ==========================================
   Logo Click Animation
========================================== */

const logo=document.querySelector(".logo");

if(logo){

    logo.addEventListener("click",()=>{

        logo.classList.add("pulse");

        setTimeout(()=>{

            logo.classList.remove("pulse");

        },600);

    });

}

/* ==========================================
   Console
========================================== */

console.log(
    "%cNavbar Loaded ✓",
    "color:#2563EB;font-size:14px;font-weight:bold;"
);