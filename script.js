// ===================================
// Mobile Navigation Toggle
// ===================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Animate hamburger icon
    hamburger.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===================================
// Smooth Scrolling
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Scroll Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .research-card, .project-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// Header Background on Scroll
// ===================================
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.backgroundColor = 'rgba(44, 24, 16, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'var(--dark-color)';
        header.style.backdropFilter = 'none';
    }

    lastScroll = currentScroll;
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitButton = contactForm.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
        } else {
            alert('Oops! There was a problem sending your message. Please try again.');
        }
    } catch (error) {
        alert('Oops! There was a problem sending your message. Please try again.');
    } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
});

// ===================================
// Dynamic Year in Footer
// ===================================
const footer = document.querySelector('footer p');
if (footer) {
    const currentYear = new Date().getFullYear();
    footer.textContent = footer.textContent.replace('2025', currentYear);
}

// ===================================
// Parallax Effect for Hero Section
// ===================================
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===================================
// Loading Animation
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// Simple i18n (English/Danish)
// Applies translations to elements with a data-i18n attribute
// Persists choice in localStorage under 'siteLang'
// ===================================
const translations = {
    en: {
        nav_home: 'Home',
        nav_about: 'About',
        nav_research: 'Research',
        nav_projects: 'Projects',
        nav_excavations: 'Excavations',
        nav_contact: 'Contact',
        hero_h2: 'Exploring the Past, Understanding the Present',
        hero_p: 'Archaeological research focused on landscape phenomenology, GIS analysis, and spatial archaeology',
        cta_contact: 'Get in touch',
        cta_games: 'Archaeological games',
        about_h2: 'About Marco Jørgensen',
        about_p1: "I'm <strong>Marco Birkedahl Jørgensen</strong>, an archaeology student passionate about understanding ancient landscapes and human movement patterns. My work combines traditional archaeological methods with cutting-edge GIS technology and computational analysis.",
        about_p2: 'My research interests include landscape phenomenology, circuit theory applications in movement analysis, and the development of QGIS plugins for archaeological spatial analysis. I\'m particularly interested in how digital elevation models and acoustic modeling can help us better understand ancient landscapes.',
        research_h2: 'Research Interests',
        research_card1_h3: 'Landscape Phenomenology',
        research_card1_p: 'Quantifying experiential aspects of landscapes through computational methods and GIS analysis',
        research_card2_h3: 'Movement Analysis',
        research_card2_p: 'Applying circuit theory and Steiner tree problem methods to understand ancient movement patterns',
        research_card3_h3: 'Acoustic Modeling',
        research_card3_p: 'Using digital elevation models to model sound propagation across archaeological landscapes',
        research_card4_h3: 'Spatial Archaeology',
        research_card4_p: 'Developing QGIS-compatible workflows and plugins for archaeological GIS applications',
        projects_h2: 'Projects',
        excavations_h2: 'Excavations',
        contact_h2: 'Contact',
        contact_getintouch: 'Get in touch',
        contact_paragraph: 'Interested in collaboration or have questions about my research? Feel free to reach out.',
        games_h2: 'Games',
        games_intro: 'Select a game to play. Currently available:',
        back_to_projects: '← Back to projects',
        back_to_excavations: '← Back to excavations',
        project_byline: 'By Marco Birkedahl Jørgensen',
        project_status: 'Status:',
        project_status_wip: 'Work in progress',
        project_goals: 'Goals',
        project_features: 'Key Features',
        project_usage: 'Usage Notes',
        project_technical: 'Technical & Development',
        project_author: 'Author:',
        project_repo: 'Repository and issue tracker:',
        project_install: 'Download / Install',
        project_changelog: 'Changelog (summary)',
        project_overview: 'Overview',
        project_description: 'Description',
        footer: '© 2025 Marco Birkedahl Jørgensen. All rights reserved.'
    },
    da: {
        nav_home: 'Hjem',
        nav_about: 'Om mig',
        nav_research: 'Forskning',
        nav_projects: 'Projekter',
        nav_excavations: 'Udgravninger',
        nav_contact: 'Kontakt',
        hero_h2: 'Udforsker fortiden, forstår nutiden',
        hero_p: 'Arkæologisk forskning med fokus på landskabsfænomenologi, GIS-analyse og rumlig arkæologi',
        cta_contact: 'Kontakt mig',
        cta_games: 'Arkæologiske spil',
        about_h2: 'Om Marco Jørgensen',
        about_p1: 'Jeg hedder <strong>Marco Birkedahl Jørgensen</strong> og er arkæologistuderende med en passion for at forstå fortidens landskaber og menneskers bevægelsesmønstre. Mit arbejde kombinerer traditionelle arkæologiske metoder med avanceret GIS-teknologi og computeranalyse.',
        about_p2: 'Mine forskningsinteresser omfatter landskabsfænomenologi, anvendelse af kredsløbsteori i bevægelsesanalyser samt udvikling af QGIS-plugins til rumlig arkæologisk analyse. Jeg er især interesseret i, hvordan digitale højdemodeller og akustisk modellering kan give os en dybere forståelse af fortidens landskaber.',
        research_h2: 'Forskningsområder',
        research_card1_h3: 'Landskabsfænomenologi',
        research_card1_p: 'Kvantificering af landskabers oplevelsesmæssige aspekter gennem computerbaserede metoder og GIS-analyse',
        research_card2_h3: 'Bevægelsesanalyse',
        research_card2_p: 'Anvendelse af kredsløbsteori og Steiner-træmetoder til at forstå fortidens bevægelsesmønstre',
        research_card3_h3: 'Akustisk modellering',
        research_card3_p: 'Brug af digitale højdemodeller til at simulere lydudbredelse i arkæologiske landskaber',
        research_card4_h3: 'Rumlig arkæologi',
        research_card4_p: 'Udvikling af QGIS-kompatible workflows og plugins til arkæologiske GIS-anvendelser',
        projects_h2: 'Projekter',
        excavations_h2: 'Udgravninger',
        contact_h2: 'Kontakt',
        contact_getintouch: 'Kom i kontakt',
        contact_paragraph: 'Interesseret i samarbejde, eller har du spørgsmål til min forskning? Du er meget velkommen til at kontakte mig.',
        games_h2: 'Spil',
        games_intro: 'Vælg et spil at spille. Aktuelt tilgængelige:',
        back_to_projects: '← Tilbage til projekter',
        back_to_excavations: '← Tilbage til udgravninger',
        project_byline: 'Af Marco Birkedahl Jørgensen',
        project_status: 'Status:',
        project_status_wip: 'Under udvikling',
        project_goals: 'Formål',
        project_features: 'Nøglefunktioner',
        project_usage: 'Brugsnotater',
        project_technical: 'Teknisk & Udvikling',
        project_author: 'Forfatter:',
        project_repo: 'Repository og issue tracker:',
        project_install: 'Download / Installer',
        project_changelog: 'Ændringslog (sammendrag)',
        project_overview: 'Oversigt',
        project_description: 'Beskrivelse',
        footer: '© 2025 Marco Birkedahl Jørgensen. Alle rettigheder forbeholdes.'
    }
};

function applyLanguage(lang) {
    const map = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (map[key]) {
            // preserve inner HTML if translation contains markup
            if (map[key].includes('<') && map[key].includes('>')) {
                el.innerHTML = map[key];
            } else {
                el.textContent = map[key];
            }
        }
    });

    // update lang-toggle pressed state
    document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });

    localStorage.setItem('siteLang', lang);
}

// Init language on load
window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('siteLang') || 'en';
    applyLanguage(saved);

    // attach handlers
    document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            applyLanguage(lang);
        });
    });
});