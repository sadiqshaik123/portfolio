/*==========================================================
  SCRIPT.JS
  Shaik Sadiq Portfolio
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initNavbar();

    initSmoothScroll();

    initActiveNavigation();

    initScrollReveal();

    initBackToTop();

    initCounter();

    initTyping();

    initCurrentYear();

    initHeroStatsHover();

    initHeroParallax();

    initProjectModal();

});

/*==========================================================
  Sticky Navbar
==========================================================*/

function initNavbar(){

    const header = document.querySelector("header");

    if(!header) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 60){

            header.classList.add("scrolled");

        }

        else{

            header.classList.remove("scrolled");

        }

    });

}

/*==========================================================
  Mobile Menu
==========================================================*/

function initMobileMenu(){
    // Mobile menu behavior is handled by navbar.js
}

/*==========================================================
  Smooth Scroll
==========================================================*/

function initSmoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}

/*==========================================================
  Active Navigation
==========================================================*/

function initActiveNavigation(){

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-120;

            const height=section.clientHeight;

            if(window.scrollY>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

}

/*==========================================================
  Scroll Reveal
==========================================================*/

function initScrollReveal(){

    const reveals=document.querySelectorAll(".reveal");

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },{

        threshold:.15

    });

    reveals.forEach(item=>{

        observer.observe(item);

    });

}

/*==========================================================
  Back To Top
==========================================================*/

function initBackToTop(){

    const button=document.querySelector(".back-to-top");

    if(!button) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            button.style.display="flex";

        }

        else{

            button.style.display="none";

        }

    });

    button.addEventListener("click",(e)=>{

        e.preventDefault();

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/*==========================================================
  Animated Counter
==========================================================*/

function initCounter(){

    const counters=document.querySelectorAll(".counter");

    counters.forEach(counter=>{

        const target=+counter.dataset.target;

        const speed=80;

        function update(){

            const current=+counter.innerText;

            const increment=Math.ceil(target/speed);

            if(current<target){

                counter.innerText=current+increment;

                requestAnimationFrame(update);

            }

            else{

                counter.innerText=target;

            }

        }

        update();

    });

}

/*==========================================================
  Typing Effect
==========================================================*/

function initTyping(){

    const typing=document.querySelector(".typing-text");

    if(!typing) return;

    const words=[

        "Java Backend Developer",

        "Generative AI Developer",

        "Spring Boot Developer",

        "LLM Engineer",

        "RAG Developer"

    ];

    let wordIndex=0;

    let charIndex=0;

    let deleting=false;

    function type(){

        const word=words[wordIndex];

        if(!deleting){

            typing.textContent=word.substring(0,charIndex++);

            if(charIndex>word.length){

                deleting=true;

                setTimeout(type,1500);

                return;

            }

        }

        else{

            typing.textContent=word.substring(0,charIndex--);

            if(charIndex<0){

                deleting=false;

                wordIndex=(wordIndex+1)%words.length;

            }

        }

        setTimeout(type,deleting?60:100);

    }

    type();

}

/*==========================================================
  Current Year
==========================================================*/

function initCurrentYear(){

    const year=document.querySelector("#year");

    if(year){

        year.textContent=new Date().getFullYear();

    }

}

/*==========================================================
  Hero Parallax
==========================================================*/

function initHeroStatsHover(){

    const stats=document.querySelectorAll(".stat-box");

    if(!stats.length) return;

    const primary=getComputedStyle(document.documentElement).getPropertyValue("--primary").trim() || "#2563EB";

    stats.forEach((stat)=>{

        const setHoverState=(active)=>{

            stat.classList.toggle("is-hovered", active);

            stat.style.transform=active ? "translateY(-8px) scale(1.01)" : "";
            stat.style.boxShadow=active ? "0 18px 40px rgba(37,99,235,0.16)" : "";
            stat.style.borderColor=active ? primary : "";
            stat.style.backgroundColor=active ? "rgba(37,99,235,0.08)" : "";

        };

        stat.addEventListener("mouseenter",()=>setHoverState(true));

        stat.addEventListener("mouseleave",()=>setHoverState(false));

        stat.addEventListener("focusin",()=>setHoverState(true));

        stat.addEventListener("focusout",()=>setHoverState(false));

    });

}

function initHeroParallax(){

    const heroImage=document.querySelector(".hero-image img");

    if(!heroImage) return;

    window.addEventListener("mousemove",(e)=>{

        const x=(window.innerWidth/2-e.clientX)/50;

        const y=(window.innerHeight/2-e.clientY)/50;

        heroImage.style.transform=`translate(${x}px, ${y}px)`;

    });

}

/*==========================================================
  Project Details Modal
==========================================================*/

function initProjectModal(){

    const buttons=document.querySelectorAll(".project-details-btn");

    if(!buttons.length) return;

    const overlay=document.getElementById("projectModalOverlay");
    const modal=document.getElementById("projectModal");
    const meta=document.getElementById("projectModalMeta");
    const title=document.getElementById("projectModalTitle");
    const tech=document.getElementById("projectModalTech");
    const list=document.getElementById("projectModalList");
    const closeButton=document.getElementById("projectModalClose");

    if(!overlay || !modal || !meta || !title || !tech || !list || !closeButton) return;

    const projects={

        "squad-navigator":{

            title:"Squad Navigator - Enterprise Innovation Assistant",
            meta:"2026 • Python, FastAPI, LangChain, RAG, LLMs, PostgreSQL",
            tech:["Python","FastAPI","LangChain","RAG","LLMs","PostgreSQL"],
            bullets:[
                "Developed an enterprise Generative AI platform enabling employees to discover existing innovation ideas and onboard new use cases through conversational AI.",
                "Implemented Retrieval-Augmented Generation (RAG) architecture to provide context-aware knowledge retrieval and intelligent recommendations.",
                "Integrated vector databases for semantic search and efficient information retrieval.",
                "Built FastAPI-based backend services supporting chatbot interactions and workflow automation.",
                "Automated idea onboarding, contribution tracking, and innovation lifecycle management processes."
            ]

        },

        "digital-receipts":{

            title:"Enterprise Digital Receipts",
            meta:"2024 – 2026 • Java, Spring Boot, Vert.x, PostgreSQL, Docker, Kubernetes",
            tech:["Java","Spring Boot","Vert.x","PostgreSQL","Docker","Kubernetes"],
            bullets:[
                "Developed and maintained enterprise-grade backend microservices for secure digital receipt processing and management.",
                "Designed and implemented RESTful APIs with JWT-based authentication and authorization.",
                "Integrated external partner systems and managed certificate-based secure communications.",
                "Supported CI/CD pipelines using Jenkins, Docker, and Kubernetes.",
                "Monitored production applications using Splunk, Kibana, and OpenSearch to ensure high availability and performance."
            ]

        },

        "incident-resolution":{

            title:"AI-Powered Incident Resolution Assistant",
            meta:"2026 • Python, FastAPI, LangChain, Multi-Agent AI, RAG, PostgreSQL",
            tech:["Python","FastAPI","LangChain","Multi-Agent AI","RAG","PostgreSQL"],
            bullets:[
                "Developed an intelligent incident resolution platform that analyzes application errors and recommends actionable solutions using Generative AI.",
                "Designed a multi-agent architecture utilizing three Large Language Models (LLMs) for root cause analysis, solution generation, and validation.",
                "Implemented automated secret masking to remove sensitive information such as API keys, tokens, passwords, and URLs before AI processing.",
                "Integrated RAG pipelines to retrieve historical incidents, troubleshooting guides, and knowledge articles for contextual recommendations.",
                "Built a recommendation engine that consolidates responses from multiple AI models and provides ranked resolution suggestions."
            ]

        },

        "ai-friday":{

            title:"AI Friday Innovation Challenge - AI-nstein Squad",
            meta:"2026 • Python, Generative AI, Multi-Agent AI, RAG",
            tech:["Python","Generative AI","Multi-Agent AI","RAG"],
            bullets:[
                "Developed an AI-powered enterprise solution during the AI Friday innovation event to address business process automation challenges.",
                "Designed and implemented multiple AI agents to automate workflow execution and intelligent decision-making.",
                "Leveraged Large Language Models (LLMs) and RAG techniques to deliver accurate and context-aware responses.",
                "Collaborated with team members to deliver a working prototype within a constrained timeline.",
                "Received Special Mention recognition for innovation, technical excellence, and business impact."
            ]

        }

    };

    function openModal(projectKey){

        const project=projects[projectKey];

        if(!project) return;

        title.textContent=project.title;
        meta.textContent=project.meta;
        tech.innerHTML="";
        project.tech.forEach(item=>{
            const span=document.createElement("span");
            span.textContent=item;
            tech.appendChild(span);
        });
        list.innerHTML="";
        project.bullets.forEach(item=>{
            const li=document.createElement("li");
            li.textContent=item;
            list.appendChild(li);
        });

        overlay.hidden=false;
        modal.hidden=false;
        overlay.classList.add("is-open");
        modal.classList.add("is-open");
        document.body.classList.add("modal-open");

    }

    function closeModal(event){

        if(event){
            event.preventDefault();
            event.stopPropagation();
        }

        overlay.hidden=true;
        modal.hidden=true;
        overlay.classList.remove("is-open");
        modal.classList.remove("is-open");
        document.body.classList.remove("modal-open");

    }

    buttons.forEach(button=>{
        button.addEventListener("click",(event)=>{
            event.preventDefault();
            event.stopPropagation();
            openModal(button.dataset.project);
        });
    });

    overlay.addEventListener("click",closeModal);
    modal.addEventListener("click",(event)=>event.stopPropagation());
    closeButton.addEventListener("click",closeModal);

    document.addEventListener("keydown",(event)=>{
        if(event.key === "Escape") closeModal(event);
    });

}

/*==========================================================
  Utility
==========================================================*/

console.log("%cShaik Sadiq Portfolio","color:#2563EB;font-size:18px;font-weight:bold;");