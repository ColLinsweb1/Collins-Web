// SCROLLREVEAL ANIMATION


const sr = ScrollReveal({
    origin: 'top',
    duration: 2000,
    distance: '60px',
    scale: 0.7,
    reset: false
});

sr.reveal('.header', { origin: 'top' });
sr.reveal('.sub-intro', { origin: 'top', delay : 300 });
sr.reveal('.intro-summary', { origin: 'top', delay : 600 });
sr.reveal('.line', { origin: 'left', delay : 700 });
sr.reveal('.intro-details', { origin: 'top', delay : 900 });
sr.reveal('.reveal-container', { origin: 'left', delay : 600, opacity: 0 });
sr.reveal('.intro-btn', { origin: 'top', delay : 1200 });
sr.reveal('.socials', { origin: 'bottom', delay : 1500 });


sr.reveal('.about-overall1', { origin: 'left', delay : 400 });
sr.reveal('.about-overall2', { origin: 'bottom', delay : 600 });


sr.reveal('.first-achievement', { origin: 'bottom', delay : 600});
sr.reveal('.first-achievement2', { origin: 'bottom', delay : 800});
sr.reveal('.first-achievement3', { origin: 'bottom', delay : 1000});


sr.reveal('.services-overall', { origin: 'top', delay : 600});
sr.reveal('.services-overall2', { origin: 'bottom', delay : 600});


sr.reveal('.skill-box1', { origin: 'left', delay : 300});
sr.reveal('.skill-box2', { scale : 0.8, delay : 500});
sr.reveal('.skill-box3', { origin: 'right', delay : 300});

sr.reveal('.project-overall', { origin: 'top', delay : 200});


sr.reveal('.contact-overall', { origin: 'top', delay : 200});
sr.reveal('.form-container', { origin: 'bottom', delay : 200});





// SCROLL PROGRESS BAR

const scrollProgressBar = document.getElementById("scroll-progress-bar");

window.addEventListener("scroll", ()=> {
    let scrollTop = document.documentElement.scrollTop;

    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("scroll-progress-bar").style.width = progress + "%";
});


// NAVBAR ONSCROLL CHANGES

const header = document.querySelector("#header");

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 10) {
        header.style.top = "-2px";
        header.style.background = "rgba(0, 255, 255, 0.02)";
        header.style.backdropFilter = "blur(30px)";
        header.style.borderBottom = "1px solid rgba(0, 255, 255, 0.09)";
        header.style.transition = "0.3s ease-in-out";
    }else {
        header.style.backdropFilter = "blur(0px)";
        header.style.borderBottom = "none";
        header.style.transition = "0.3s ease-in-out";
        header.style.background = "none";
        header.style.top = "0";
    }
});

// WHATSAPP BTN VISIBLE ON SCROLL
const whatsappIcon = document.getElementById("whatsapp-icon");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        whatsappIcon.classList.add("visible");
    } else {
        whatsappIcon.classList.remove("visible");
    }
});

// SCROLL TO TOP BTN

const scrollTop = document.getElementById("arrow");

window.addEventListener("scroll", ()=>{
     if(window.scrollY > 2000) {
        scrollTop.classList.add("show");
     }else{
        scrollTop.classList.remove("show");
     }
});


scrollTop.addEventListener("click", ()=>{
    window.scrollTo({
       top: 0,
       behaviour: 'smooth'
    });
});



// DARK MODE
const themeToggleContainer = document.getElementById("closing-statement-dark");
const themeToggleIcon = document.getElementById("theme-toggle-icon");

const setTheme = (theme) => {
    document.body.classList.toggle("light-mode", theme === "light");

    if (themeToggleIcon) {
        themeToggleIcon.classList.toggle("fa-sun", theme === "dark");
        themeToggleIcon.classList.toggle("fa-moon", theme === "light");
    }

    localStorage.setItem("portfolioTheme", theme);
};

const storedTheme = localStorage.getItem("portfolioTheme") || "dark";
setTheme(storedTheme);

if (themeToggleContainer) {
    themeToggleContainer.addEventListener("click", () => {
        const nextTheme = document.body.classList.contains("light-mode") ? "dark" : "light";
        setTheme(nextTheme);
    });
}


// MAIN CONTAINER IN VIEW - CHANGE NAVBAR STYLE

const mainContainer = document.querySelector(".main-container");
const homeNav = document.querySelector(".home-nav");

const observerOptions = {
    threshold: 0.1
};

const mainObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // Main container is in view
            homeNav.style.color = "cyan";
            homeNav.style.borderBottom = "2px solid rgba(0, 255, 255, 0.8)";
            homeNav.style.transition = "0.5s ease-in-out";
        } else {
            // Main container is out of view
            homeNav.style.color = "#8888AA";
            homeNav.style.borderBottom = "none";
            homeNav.style.transition = "0.5s ease-in-out";  
        }
    });
}, observerOptions);

mainObserver.observe(mainContainer);



// ABOUT CONTAINER IN VIEW - CHANGE NAVBAR STYLE

const aboutContainer = document.querySelector(".about-container");
const aboutNav = document.querySelector(".about-nav");

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // About container is in view
            aboutNav.style.color = "cyan";
            aboutNav.style.borderBottom = "2px solid rgba(0, 255, 255, 0.8)";
            aboutNav.style.transition = "0.5s ease-in-out";
        } else {
            // About container is out of view
            aboutNav.style.color = "#8888AA";
            aboutNav.style.borderBottom = "none";
            aboutNav.style.transition = "0.5s ease-in-out";
        }
    });
}, observerOptions);

aboutObserver.observe(aboutContainer);




// SERVICES CONTAINER IN VIEW - CHANGE NAVBAR STYLE

const servicesContainer = document.querySelector(".services-container");
const servicesNav = document.querySelector(".services-nav");

const servicesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // Services container is in view
            servicesNav.style.color = "cyan";
            servicesNav.style.borderBottom = "2px solid rgba(0, 255, 255, 0.8)";
            servicesNav.style.transition = "0.5s ease-in-out";
        } else {
            // Services container is out of view
            servicesNav.style.color = "#8888AA";
            servicesNav.style.borderBottom = "none";
            servicesNav.style.transition = "0.5s ease-in-out";
        }
    });
}, observerOptions);

servicesObserver.observe(servicesContainer);




// SKILL CONTAINER IN VIEW - CHANGE NAVBAR STYLE

const skillContainer = document.querySelector(".skill-container");
const skillsNav = document.querySelector(".skills-nav");

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // Skills container is in view
            skillsNav.style.color = "cyan";
            skillsNav.style.borderBottom = "2px solid rgba(0, 255, 255, 0.8)";
            skillsNav.style.transition = "0.5s ease-in-out";
        } else {
            // Skills container is out of view
            skillsNav.style.color = "#8888AA";
            skillsNav.style.borderBottom = "none";
            skillsNav.style.transition = "0.5s ease-in-out";
        }
    });
}, observerOptions);

skillsObserver.observe(skillContainer);


// PROJECT CONTAINER IN VIEW - CHANGE NAVBAR STYLE

const projectContainer = document.querySelector(".projects-container");
const projectsNav = document.querySelector(".projects-nav");

const projectsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // Projects container is in view
            projectsNav.style.color = "cyan";
            projectsNav.style.borderBottom = "2px solid rgba(0, 255, 255, 0.8)";
            projectsNav.style.transition = "0.5s ease-in-out";
        } else {
            // Projects container is out of view
            projectsNav.style.color = "#8888AA";
            projectsNav.style.borderBottom = "none";
            projectsNav.style.transition = "0.5s ease-in-out";
        }
    });
}, observerOptions);

projectsObserver.observe(projectContainer);




