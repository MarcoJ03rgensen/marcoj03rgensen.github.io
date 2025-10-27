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

if (contactForm) {
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
}

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
        // CircuitscapeQGIS translations
        circuitscape_desc: 'CircuitscapeQGIS is a QGIS plugin that integrates Circuitscape functionality for landscape connectivity analysis directly into QGIS. It supports resistance rasters, focal points, background task processing and multiple solver options.',
        circuitscape_goal1: 'Provide a simple, reproducible interface to run Circuitscape from within QGIS.',
        circuitscape_goal2: 'Support common workflows: resistance rasters, focal points, and export of current maps.',
        circuitscape_goal3: 'Offer robust background processing and automatic CRS handling for focal layers.',
        circuitscape_feat1: 'Run Circuitscape in resistance or conductance mode.',
        circuitscape_feat2: 'Background processing with the QGIS Task Manager.',
        circuitscape_feat3: 'Automatic CRS transformation for focal points.',
        circuitscape_feat4: 'Multiple solver options (fast AMG, precise CHOLMOD).',
        circuitscape_feat5: 'Convenient export options (ASCII raster for downstream tools).',
        circuitscape_usage: 'Load a resistance raster and (optionally) focal points in QGIS, open the CircuitscapeQGIS plugin, configure inputs and solver, and run. Monitor progress in the QGIS Task Manager — outputs will be added to the map when complete.',
        circuitscape_requirements: 'Requirements: QGIS 3.16+ and Circuitscape (Julia or Python implementation).',
        circuitscape_julia: 'Julia (recommended)',
        circuitscape_python: 'Python (alternative)',
        circuitscape_changelog: 'Version 1.0.0 — Initial WIP release with UI, task manager integration, and basic solver options.',
        // Multi-Layer Cost Surface Generator translations
        mlcsg_desc: 'A QGIS plugin for generating cost surfaces combining DEM slope analysis and land cover resistance for circuit theory and connectivity analysis.',
        mlcsg_goal1: 'Provide robust, configurable cost surface generation for ecological and archaeological connectivity studies.',
        mlcsg_goal2: 'Allow users to combine DEM-derived slope resistance and categorical land-cover resistance in weighted layers.',
        mlcsg_goal3: 'Produce outputs compatible with Circuitscape, Omniscape and other connectivity tools.',
        mlcsg_goal4: 'Offer reproducible settings and calibration options for slope→resistance conversions.',
        mlcsg_feat1: 'DEM Slope Analysis with multiple slope→resistance methods (exponential, linear, biometric, anisotropic, threshold).',
        mlcsg_feat2: 'Land cover resistance mapping with automatic category detection and CSV import/export.',
        mlcsg_feat3: 'Temporary file control for processing large rasters.',
        mlcsg_feat4: 'Export to ASCII raster (.asc) for downstream circuit-theory tools.',
        mlcsg_feat5: 'Progress reporting and user-friendly UI in QGIS.',
        mlcsg_usage: 'The plugin expects a DEM and a categorical land-cover raster loaded in QGIS. Use the "Analyze Land Cover Values" button to populate categories, set resistance values (0-1), choose slope weight and method, and generate the combined cost surface.',
        mlcsg_install: 'Manual installation instructions and a ZIP install option are available in the plugin README on the GitHub repository. Outputs are ASCII rasters compatible with most circuit analysis tools.',
        mlcsg_changelog: 'Version 1.0.4 — Added multiple slope→resistance methods, biometric calibration UI, CSV import/export, and various UI and robustness improvements.',
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
        // CircuitscapeQGIS translations
        circuitscape_desc: 'CircuitscapeQGIS er et QGIS-plugin, der integrerer Circuitscape-funktionalitet til landskabskonnektivitetsanalyse direkte i QGIS. Det understøtter modstandsrastere, fokuspunkter, baggrundsopgavebehandling og flere løsningsmuligheder.',
        circuitscape_goal1: 'Tilbyde en simpel, reproducerbar grænseflade til at køre Circuitscape fra QGIS.',
        circuitscape_goal2: 'Understøtte almindelige arbejdsgange: modstandsrastere, fokuspunkter og eksport af strømkort.',
        circuitscape_goal3: 'Tilbyde robust baggrundsbehandling og automatisk CRS-håndtering af fokallag.',
        circuitscape_feat1: 'Kør Circuitscape i modstands- eller konduktanstilstand.',
        circuitscape_feat2: 'Baggrundsbehandling med QGIS Task Manager.',
        circuitscape_feat3: 'Automatisk CRS-transformation af fokuspunkter.',
        circuitscape_feat4: 'Flere løsningsmuligheder (hurtig AMG, præcis CHOLMOD).',
        circuitscape_feat5: 'Bekvemme eksportmuligheder (ASCII-raster til downstream-værktøjer).',
        circuitscape_usage: 'Indlæs et modstandsraster og (valgfrit) fokuspunkter i QGIS, åbn CircuitscapeQGIS-pluginet, konfigurer input og løser, og kør. Overvåg fremskridt i QGIS Task Manager — output tilføjes til kortet, når det er færdigt.',
        circuitscape_requirements: 'Krav: QGIS 3.16+ og Circuitscape (Julia- eller Python-implementering).',
        circuitscape_julia: 'Julia (anbefalet)',
        circuitscape_python: 'Python (alternativ)',
        circuitscape_changelog: 'Version 1.0.0 — Initial WIP-udgivelse med UI, task manager-integration og grundlæggende løsningsmuligheder.',
        // Multi-Layer Cost Surface Generator translations
        mlcsg_desc: 'Et QGIS-plugin til generering af omkostningsflader, der kombinerer DEM-hældningsanalyse og jorddækningsmodstand til kredsløbsteori og konnektivitetsanalyse.',
        mlcsg_goal1: 'Levere robust, konfigurerbar generering af omkostningsflader til økologiske og arkæologiske konnektivitetsstudier.',
        mlcsg_goal2: 'Tillade brugere at kombinere DEM-afledt hældningsmodstand og kategorisk jorddækningsmodstand i vægtede lag.',
        mlcsg_goal3: 'Producere output kompatibelt med Circuitscape, Omniscape og andre konnektivitetsværktøjer.',
        mlcsg_goal4: 'Tilbyde reproducerbare indstillinger og kalibreringsmuligheder for hældning→modstand-konverteringer.',
        mlcsg_feat1: 'DEM-hældningsanalyse med flere hældning→modstand-metoder (eksponentiel, lineær, biometrisk, anisotrop, tærskel).',
        mlcsg_feat2: 'Jorddækningsmodstandskortlægning med automatisk kategoridetektering og CSV-import/eksport.',
        mlcsg_feat3: 'Midlertidig filkontrol til behandling af store rastere.',
        mlcsg_feat4: 'Eksport til ASCII-raster (.asc) til downstream kredsløbsteori-værktøjer.',
        mlcsg_feat5: 'Fremskridtsrapportering og brugervenlig UI i QGIS.',
        mlcsg_usage: 'Pluginet forventer en DEM og et kategorisk jorddækningsraster indlæst i QGIS. Brug "Analyser jorddækningsværdier"-knappen til at udfylde kategorier, indstil modstandsværdier (0-1), vælg hældningsvægt og metode, og generer den kombinerede omkostningsflade.',
        mlcsg_install: 'Manuelle installationsinstruktioner og en ZIP-installationsmulighed er tilgængelige i plugin-README på GitHub-repositoriet. Output er ASCII-rastere kompatible med de fleste kredsløbsanalyseværktøjer.',
        mlcsg_changelog: 'Version 1.0.4 — Tilføjede flere hældning→modstand-metoder, biometrisk kalibreringsUI, CSV-import/eksport og forskellige UI- og robusthedforbedringer.',
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