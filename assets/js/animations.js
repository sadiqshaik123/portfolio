/* ==========================================================
   ANIMATIONS.JS
   Shaik Sadiq Portfolio
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initScrollReveal();

    initCounterAnimation();

    initTypingEffect();

    initProgressBars();

    initParallax();

    initFloatingCards();

});

/* ==========================================================
   Scroll Reveal
========================================================== */

function initScrollReveal(){

    const elements=document.querySelectorAll(".reveal");

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },{

        threshold:.15

    });

    elements.forEach(item=>observer.observe(item));

}

/* ==========================================================
   Counter Animation
========================================================== */

function initCounterAnimation(){

    const counters=document.querySelectorAll(".counter");

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    });

    counters.forEach(counter=>observer.observe(counter));

}

function animateCounter(counter){

    const target=parseInt(counter.dataset.target);

    let current=0;

    const speed=Math.ceil(target/100);

    const update=()=>{

        current+=speed;

        if(current>=target){

            counter.textContent=target;

        }

        else{

            counter.textContent=current;

            requestAnimationFrame(update);

        }

    };

    update();

}

/* ==========================================================
   Typing Effect
========================================================== */

function initTypingEffect(){

    const element=document.querySelector(".typing-text");

    if(!element) return;

    const words=[

        "Java Backend Developer",

        "Generative AI Developer",

        "Spring Boot Expert",

        "LLM Engineer",

        "RAG Developer"

    ];

    let word=0;

    let char=0;

    let deleting=false;

    function type(){

        const current=words[word];

        if(!deleting){

            element.textContent=current.substring(0,char++);

            if(char>current.length){

                deleting=true;

                setTimeout(type,1500);

                return;

            }

        }

        else{

            element.textContent=current.substring(0,char--);

            if(char<0){

                deleting=false;

                word=(word+1)%words.length;

            }

        }

        setTimeout(type,deleting?60:100);

    }

    type();

}

/* ==========================================================
   Progress Bars
========================================================== */

function initProgressBars(){

    const bars=document.querySelectorAll(".progress-fill");

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const width=entry.target.dataset.width;

                entry.target.style.width=width+"%";

                observer.unobserve(entry.target);

            }

        });

    });

    bars.forEach(bar=>observer.observe(bar));

}

/* ==========================================================
   Hero Parallax
========================================================== */

function initParallax(){

    const image=document.querySelector(".hero-image img");

    if(!image) return;

    window.addEventListener("mousemove",(e)=>{

        const x=(window.innerWidth/2-e.clientX)/45;

        const y=(window.innerHeight/2-e.clientY)/45;

        image.style.transform=

        `translate(${x}px,${y}px)`;

    });

}

/* ==========================================================
   Floating Cards
========================================================== */

function initFloatingCards(){

    const cards=document.querySelectorAll(".floating-card");

    cards.forEach((card,index)=>{

        card.style.animation=

        `float ${3+index*.5}s ease-in-out infinite`;

    });

}

/* ==========================================================
   Timeline Animation
========================================================== */

const timeline=document.querySelectorAll(".timeline-item");

const timelineObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade-up");

        }

    });

});

timeline.forEach(item=>timelineObserver.observe(item));

/* ==========================================================
   Skill Card Hover
========================================================== */

document.querySelectorAll(".skill-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.04)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/* ==========================================================
   Project Card Tilt
========================================================== */

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateX=((y/rect.height)-0.5)*10;

        const rotateY=((x/rect.width)-0.5)*-10;

        card.style.transform=

        `perspective(900px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/* ==========================================================
   Fade Sections
========================================================== */

const sections=document.querySelectorAll("section");

const sectionObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade-in");

        }

    });

},{

    threshold:.12

});

sections.forEach(section=>{

    sectionObserver.observe(section);

});

/* ==========================================================
   Console
========================================================== */

console.log(

"%cAnimations Loaded ✓",

"color:#14B8A6;font-size:14px;font-weight:bold;"

);