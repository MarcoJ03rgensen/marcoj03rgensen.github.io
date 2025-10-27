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
        // LandscapeAcousticVST translations
        lavst_desc: 'A terrain-based, real-time sound propagation VST plugin designed for outdoor acoustic simulation using DEMs and ISO 9613-2 methods.',
        lavst_overview: 'This project implements real-time terrain-derived convolution and scientifically-grounded propagation modeling to simulate outdoor soundscapes for research and creative use.',
        lavst_desc_full: 'LandscapeAcousticVST is a real-time terrain-based sound propagation VST plugin designed to simulate outdoor acoustic environments using Digital Elevation Models (DEMs) and ISO 9613-2 acoustic propagation calculations.',
        lavst_core_features: 'Core Features',
        lavst_core_text: 'The plugin offers real-time convolution for terrain-derived impulse responses and ISO 9613-2 compliance for scientifically accurate acoustic propagation modeling. It supports multiple DEM formats (GeoTIFF, ESRI ASCII Grid, DTED, SRTM HGT, and ERDAS Imagine) through GDAL integration, with seamless QGIS integration via PyQGIS export scripts. The plugin is available as VST3, AU, and standalone applications across Windows, macOS, and Linux, and includes an interactive GUI with visual terrain mapping and point-and-click source/receiver selection.',
        lavst_tech_req: 'Technical Requirements',
        lavst_tech_text: 'To build the plugin, you need the JUCE Framework (7.0+), GDAL Library (3.0+), CMake (3.15+), and a C++17-compatible compiler. The documentation provides platform-specific installation instructions for Windows (vcpkg), macOS (Homebrew), and Linux (Ubuntu/Debian).',
        lavst_how_to: 'How to Use',
        lavst_how_text: 'Users can load DEM data by dragging and dropping GeoTIFF files or using the "Load DEM File" button. Analysis points are set by left-clicking to place a sound source and right-clicking to set the listener position, with the plugin automatically generating the impulse response. Adjustable parameters include temperature, humidity, ground type (Hard/Porous/Mixed), source and receiver heights, and dry/wet mix. The plugin processes audio in real-time through terrain-based convolution and allows export of impulse responses as WAV files.',
        lavst_scientific: 'Scientific Approach',
        lavst_sci_text: 'The plugin implements the ISO 9613-2 international standard for outdoor sound attenuation, including geometric spreading loss (divergence), temperature and humidity-dependent atmospheric absorption, ground effect modeling, and Fresnel knife-edge diffraction theory for terrain obstructions.',
        lavst_qgis: 'QGIS Integration Workflow',
        lavst_qgis_text: 'The plugin can be installed as a QGIS plugin or used with manual export scripts. Users open a DEM as a raster layer, create a point layer with source/receiver points, add a \'type\' attribute to distinguish sources from receivers, and run the qgis_export.py script in QGIS\'s Python Console. The generated configuration can then be imported into the plugin using the "Import QGIS Config" button, which automatically loads the DEM and sets analysis points.',
        lavst_archaeo: 'Archaeoacoustic Applications',
        lavst_archaeo_text: 'The documentation highlights three key applications for archaeology: soundscape reconstruction for modeling historical acoustic environments, site analysis for understanding acoustic properties of archaeological locations, and cultural interpretation to explore sound-landscape relationships in past societies.',
        lavst_performance: 'Performance Specifications',
        lavst_perf_text: 'The plugin achieves less than 5% CPU usage for typical scenarios, supports impulse response lengths up to 16,384 samples (370ms at 44.1kHz), has been tested with elevation grids up to 10k×10k, and maintains plugin latency plus convolution delay of typically less than 10ms.',
        lavst_dev: 'Development and Support',
        lavst_dev_text: 'The project is structured with C++ source code in the Source/ directory, UI assets and sample data in Resources/, QGIS integration scripts in scripts/, unit and integration tests in tests/, and documentation in docs/. The plugin is licensed under the MIT License and includes guidelines for contributing that emphasize C++17 standards, unit tests, Doxygen documentation, and validation against ISO 9613-2 reference calculations.',
        // Excavation page translations
        exc_status_completed: 'Completed',
        exc_overview: 'Overview',
        exc_overview_text: '<strong>Grabow 15</strong> is a Late Palaeolithic archaeological site in the Jeetzel Valley, Lower Saxony, Germany. The 2025 excavation (Aarhus University in collaboration with the Niedersächsisches Landesamt für Denkmalpflege) recovered a total of <strong>798 artefacts</strong> and provides important evidence for Federmesser-period amber-working and task-specific activity at the site.',
        exc_location: 'Location & Dating',
        exc_site: 'Site:',
        exc_period: 'Period:',
        exc_dating: 'Dating:',
        exc_dating_text: 'Allerød period (~14,185–13,703 cal. BP)',
        exc_elevation: 'Elevation:',
        exc_elevation_text: '~13.5 m above sea level',
        exc_setting: 'Setting:',
        exc_setting_text: 'Bank of a paleochannel in a dynamic fluvial landscape',
        
        // The 2025 Excavation
        exc_excavation: 'The 2025 Excavation',
        exc_campaign: 'Campaign details',
        exc_duration: 'Duration:',
        exc_duration_text: '5 May – 28 May 2025',
        exc_team: 'Team:',
        exc_team_text: 'Led by Prof. Thomas Terberger, Prof. Felix Riede, and PhD student Lasse Lukas Platz Herskind, together with undergraduate students from Aarhus University',
        exc_areas: 'Excavation areas:',
        exc_areas_text: 'Two main trenches (Areas A and B, ~10 m² total) and five test pits (0.5 × 0.5 m)',
        exc_methodology: 'Methodology',
        exc_method_text: 'Excavation followed single-context stratigraphic removal in 3–5 cm spits, with documentation by total station and GNSS. Wet sieving with UV inspection was used to recover small organic remains (including amber). All spatial data were digitized in QGIS for analysis.',
        
        // Key Findings
        exc_findings: 'Key Findings — 798 Artefacts',
        exc_material: 'Material distribution',
        exc_wood: 'Wood:',
        exc_wood_text: '387 — excellent organic preservation, primarily from Area B',
        exc_flint: 'Flint:',
        exc_flint_text: '264 — including burins and production debris',
        exc_amber: 'Amber:',
        exc_amber_text: '92 — indicates amber-working activities',
        exc_plant: 'Plant remains:',
        exc_plant_text: '33 — Betula, Salix, Populus charcoal identified',
        exc_bone: 'Bone:',
        exc_bone_text: '12 — mostly burnt fragments',
        exc_charcoal: 'Charcoal:',
        exc_charcoal_text: '10 — evidence of fire use',
        exc_stratigraphy: 'Stratigraphy',
        exc_strat_intro: 'Four geological horizons were documented:',
        exc_gh1: 'Topsoil (plough layer, ~30 cm)',
        exc_gh2: 'Light grey fluvial silt (~7–14 cm), partially sterile',
        exc_gh3: 'Allerød cultural layer with dark grey-brown sediment containing most artefacts',
        exc_gh4: 'Light grey sand with orange/yellow mottling (sterile)',
        exc_false_layer: 'A thin "false Allerød layer" (interpreted as a Younger Dryas flooding line) marks a transition within GH2.',
        
        // Lithic Technology
        exc_lithic: 'Lithic Technology: Evidence of Specialized Tool Production',
        exc_burins: 'Burins',
        exc_burins_text: 'Five burins were recovered — notable for the Late Palaeolithic. Three have double working edges and one shows multiple resharpening episodes with associated burin spalls. Burins are interpreted as engraving tools and are consistent with specialised working activities.',
        exc_flakes_head: 'Specialized flakes',
        exc_flakes_text: 'Two flakes with equilateral triangular cross-sections and retouched tips were found; these appear adapted for narrow scraping or engraving and may represent a local technical innovation related to amber working.',
        exc_interpretation: 'Interpretation',
        exc_interp_text: 'The abundance and character of burins, together with associated flake types, point to specialised amber-working activities at the site.',
        
        // Amber Analysis
        exc_amber_analysis: 'Amber Analysis',
        exc_amber_quantity: 'Quantity:',
        exc_amber_quantity_text: '1 in situ amber find and 91 additional amber fragments recovered by wet sieving (total 92 pieces), indicating substantial amber-related activity.',
        exc_amber_microscope: 'Microscopic observations',
        exc_amber_obs1: 'Pos. Nr. 206: crushing/impact waves suggesting mechanical working',
        exc_amber_obs2: 'Pos. Nr. 218: convex and concave impact waves on both sides — possible intentional striking',
        exc_amber_obs3: 'Pos. Nr. 247: lines initially appearing engraved, later identified as natural cracks from dehydration/heat',
        exc_amber_obs4: 'Pos. Nr. 297: thin flakes with glossy surfaces consistent with human workmanship',
        exc_amber_obs5: 'Pos. Nr. 323: distinctive beige colour; flat surface suggests flaking from a larger piece',
        exc_amber_conclusion: 'Although no finished objects were recovered, the combined evidence (impact-marked amber fragments, specialized burins, and spatial concentration of amber) strongly supports on-site amber processing.',
        
        // Environmental Context
        exc_env_context: 'Environmental Context',
        exc_beaver: 'Beaver disturbance',
        exc_beaver_text: 'Features interpreted as beaver disturbance penetrate GH2–GH4 and contain large quantities of wood debris, indicating significant post-depositional mixing in parts of the site.',
        exc_landscape: 'Landscape',
        exc_landscape_text: 'The site sits on a paleochannel in the Elbe floodplain, with evidence for seasonal/episodic flooding during the Allerød and good organic preservation due to fluvial sedimentation.',
        
        // Interpretation & Research
        exc_site_function: 'Interpretation: Site Function',
        exc_site_function_text: 'Grabow 15 is best interpreted as a specialised, temporary occupation focused on amber processing and related tasks. The lack of structural features, dispersed find patterns, and the concentration of amber and specialized tools point to episodic, task-specific use rather than permanent settlement.',
        exc_post_exc: 'Post-excavation Research',
        exc_post_exc_text: 'Ongoing analyses include radiocarbon dating (six selected samples), wood species identification, micro-XRF sediment analysis, macrofossil and biomarker analyses, and full digitization of spatial data in QGIS.',
        exc_significance: 'Significance & Research Questions',
        exc_significance_text: 'Grabow 15 contributes to understanding Late Palaeolithic resource exploitation, technological specialization, seasonal mobility, human responses to environmental change, and potential long-distance exchange networks involving amber.',
        
        // Project information
        exc_proj_info: 'Project information',
        exc_proj_ref: 'Project reference:',
        exc_proj_ref_text: 'NDL_JGA_2025-1',
        exc_proj_funding: 'Funding:',
        exc_proj_funding_text: 'Beckett-Fonden (100,000 DKK) and Queen Margrethe II\'s Archaeological Fund (45,000 DKK)',
        exc_proj_storage: 'Current storage:',
        exc_proj_storage_text: 'Moesgaard Campus, Aarhus University (until analyses complete; then return to NLD)',
        exc_proj_report: 'Report date:',
        exc_proj_report_text: 'June 2025',
        exc_credits: 'Credits',
        exc_credits_text: 'Report prepared by the Grabow 15 excavation team, Aarhus University, in collaboration with the Niedersächsisches Landesamt für Denkmalpflege. Excavation directed by Prof. Thomas Terberger, Prof. Felix Riede, and PhD student Lasse Lukas Platz Herskind.',
        
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
        // LandscapeAcousticVST translations
        lavst_desc: 'Et terrænbaseret real-time lydudbredel ses-VST-plugin designet til udendørs akustisk simulation ved hjælp af DEM\'er og ISO 9613-2-metoder.',
        lavst_overview: 'Dette projekt implementerer real-time terrænafledt foldning og videnskabeligt funderet udbredelsesmodellering til at simulere udendørs lydlandskaber til forskning og kreativ brug.',
        lavst_desc_full: 'LandscapeAcousticVST er et real-time terrænbaseret lydudbredelses-VST-plugin designet til at simulere udendørs akustiske miljøer ved hjælp af digitale højdemodeller (DEM\'er) og ISO 9613-2 akustiske udbredelsesberegninger.',
        lavst_core_features: 'Kernefunktioner',
        lavst_core_text: 'Pluginet tilbyder real-time foldning for terrænafledte impulsresponser og ISO 9613-2-overholdelse for videnskabeligt præcis akustisk udbredelsesmodellering. Det understøtter flere DEM-formater (GeoTIFF, ESRI ASCII Grid, DTED, SRTM HGT og ERDAS Imagine) gennem GDAL-integration med problemfri QGIS-integration via PyQGIS-eksportscripts. Pluginet er tilgængeligt som VST3, AU og standalone-applikationer på tværs af Windows, macOS og Linux og inkluderer en interaktiv GUI med visuel terrænkortlægning og punkt-og-klik kilde/modtager-valg.',
        lavst_tech_req: 'Tekniske krav',
        lavst_tech_text: 'For at bygge pluginet har du brug for JUCE Framework (7.0+), GDAL Library (3.0+), CMake (3.15+) og en C++17-kompatibel compiler. Dokumentationen giver platformsspecifikke installationsinstruktioner til Windows (vcpkg), macOS (Homebrew) og Linux (Ubuntu/Debian).',
        lavst_how_to: 'Sådan bruges det',
        lavst_how_text: 'Brugere kan indlæse DEM-data ved at trække og slippe GeoTIFF-filer eller bruge "Indlæs DEM-fil"-knappen. Analysepunkter indstilles ved at venstreklikke for at placere en lydkilde og højreklikke for at indstille lytterposition, hvor pluginet automatisk genererer impulsresponsen. Justerbare parametre omfatter temperatur, fugtighed, bundtype (hård/porøs/blandet), kilde- og modtagerhøjder samt tør/våd-mix. Pluginet behandler lyd i real-time gennem terrænbaseret foldning og muliggør eksport af impulsresponser som WAV-filer.',
        lavst_scientific: 'Videnskabelig tilgang',
        lavst_sci_text: 'Pluginet implementerer ISO 9613-2 international standard for udendørs lyddæmpning, inklusive geometrisk spredningstab (divergens), temperatur- og fugtighedsafhængig atmosfærisk absorption, jordeffektmodellering og Fresnel knivskant-diffraktionsteori for terrænforhindringer.',
        lavst_qgis: 'QGIS-integrationsworkflow',
        lavst_qgis_text: 'Pluginet kan installeres som et QGIS-plugin eller bruges med manuelle eksportscripts. Brugere åbner en DEM som et rasterlag, opretter et punktlag med kilde/modtager-punkter, tilføjer en \'type\'-attribut for at skelne kilder fra modtagere og kører qgis_export.py-scriptet i QGIS\'s Python Console. Den genererede konfiguration kan derefter importeres ind i pluginet ved hjælp af "Importer QGIS Config"-knappen, som automatisk indlæser DEM\'en og indstiller analysepunkter.',
        lavst_archaeo: 'Arkæoakustiske anvendelser',
        lavst_archaeo_text: 'Dokumentationen fremhæver tre nøgleapplika tioner for arkæologi: lydlandskabsrekonstruktion til modellering af historiske akustiske miljøer, lokalitetsanalyse for forståelse af akustiske egenskaber ved arkæologiske steder samt kulturel fortolkning for at udforske lyd-landskabs-relationer i tidligere samfund.',
        lavst_performance: 'Ydeevnespecifikationer',
        lavst_perf_text: 'Pluginet opnår mindre end 5% CPU-forbrug for typiske scenarier, understøtter impulsresponslængder op til 16.384 samples (370ms ved 44,1kHz), er blevet testet med højdegitter op til 10k×10k og opretholder plugin-latens plus foldningsforsinkelse på typisk mindre end 10ms.',
        lavst_dev: 'Udvikling og support',
        lavst_dev_text: 'Projektet er struktureret med C++-kildekode i Source/-mappen, UI-aktiver og eksempeldata i Resources/, QGIS-integrationsscripts i scripts/, enheds- og integrationstest i tests/ samt dokumentation i docs/. Pluginet er licenseret under MIT-licensen og inkluderer retningslinjer for bidrag, der lægger vægt på C++17-standarder, enhedstest, Doxygen-dokumentation og validering mod ISO 9613-2-referenceberegninger.',
        // Excavation page translations
        exc_status_completed: 'Afsluttet',
        exc_overview: 'Oversigt',
        exc_overview_text: '<strong>Grabow 15</strong> er en senpalæolitisk arkæologisk lokalitet i Jeetzel-dalen, Niedersachsen, Tyskland. Udgravningen i 2025 (Aarhus Universitet i samarbejde med Niedersächsisches Landesamt für Denkmalpflege) frembragte i alt <strong>798 genstande</strong> og giver vigtig dokumentation for Federmesser-periodens ravbearbejdning og opgavespecifikke aktivitet på lokaliteten.',
        exc_location: 'Lokalitet & datering',
        exc_site: 'Lokalitet:',
        exc_period: 'Periode:',
        exc_dating: 'Datering:',
        exc_dating_text: 'Allerød-periode (~14.185–13.703 kal. BP)',
        exc_elevation: 'Højde:',
        exc_elevation_text: '~13,5 m over havet',
        exc_setting: 'Beliggenhed:',
        exc_setting_text: 'Bred af en palæokanal i et dynamisk fluvialt landskab',
        
        // Udgravningen 2025
        exc_excavation: 'Udgravningen 2025',
        exc_campaign: 'Kampagnedetaljer',
        exc_duration: 'Varighed:',
        exc_duration_text: '5. maj – 28. maj 2025',
        exc_team: 'Team:',
        exc_team_text: 'Ledet af professor Thomas Terberger, professor Felix Riede og ph.d.-studerende Lasse Lukas Platz Herskind, sammen med bachelorstuderende fra Aarhus Universitet',
        exc_areas: 'Udgravningsområder:',
        exc_areas_text: 'To hovedfelter (Område A og B, ~10 m² i alt) og fem testfelter (0,5 × 0,5 m)',
        exc_methodology: 'Metodologi',
        exc_method_text: 'Udgravningen fulgte enkelt-kontekst stratigrafisk nedtagning i 3–5 cm spitlag, med dokumentation ved totalstation og GNSS. Vådsoldning med UV-inspektion blev brugt til at indsamle små organiske rester (herunder rav). Alle rumlige data blev digitaliseret i QGIS til analyse.',
        
        // Nøglefund
        exc_findings: 'Nøglefund — 798 artefakter',
        exc_material: 'Materialefordeling',
        exc_wood: 'Træ:',
        exc_wood_text: '387 — fremragende organisk bevarelse, primært fra Område B',
        exc_flint: 'Flint:',
        exc_flint_text: '264 — herunder stikler og produktionsaffald',
        exc_amber: 'Rav:',
        exc_amber_text: '92 — indikerer ravbearbejdningsaktiviteter',
        exc_plant: 'Planterester:',
        exc_plant_text: '33 — Betula, Salix, Populus trækul identificeret',
        exc_bone: 'Knogler:',
        exc_bone_text: '12 — hovedsageligt brændte fragmenter',
        exc_charcoal: 'Trækul:',
        exc_charcoal_text: '10 — bevis for brug af ild',
        exc_stratigraphy: 'Stratigrafi',
        exc_strat_intro: 'Fire geologiske horisonter blev dokumenteret:',
        exc_gh1: 'Matjord (plovlag, ~30 cm)',
        exc_gh2: 'Lysegråt fluvialt silt (~7–14 cm), delvist sterilt',
        exc_gh3: 'Allerød kulturlag med mørkegråbrunt sediment indeholdende de fleste artefakter',
        exc_gh4: 'Lysegråt sand med orange/gule marmoringer (sterilt)',
        exc_false_layer: 'Et tyndt "falsk Allerød-lag" (fortolket som en Yngre Dryas-oversvømmelseslinje) markerer en overgang inden for GH2.',
        
        // Litisk teknologi
        exc_lithic: 'Litisk teknologi: Bevis for specialiseret redskabsproduktion',
        exc_burins: 'Stikler',
        exc_burins_text: 'Fem stikler blev fundet — bemærkelsesværdigt for Senpalæolitikum. Tre har dobbelte arbejdskanter, og én viser flere opskærpningsepisoder med tilhørende stiklafslag. Stikler fortolkes som graverings-redskaber og er i overensstemmelse med specialiserede arbejdsaktiviteter.',
        exc_flakes_head: 'Specialiserede afslag',
        exc_flakes_text: 'To afslag med ligesidede trekantede tværsnit og retusjerede spidser blev fundet; disse synes tilpasset til snæver skrabning eller gravering og kan repræsentere en lokal teknisk innovation relateret til ravbearbejdning.',
        exc_interpretation: 'Fortolkning',
        exc_interp_text: 'Mængden og karakteren af stikler, sammen med tilhørende afslagstyper, peger på specialiserede ravbearbejdningsaktiviteter på lokaliteten.',
        
        // Ravanalyse
        exc_amber_analysis: 'Ravanalyse',
        exc_amber_quantity: 'Mængde:',
        exc_amber_quantity_text: '1 in situ ravfund og 91 yderligere ravfragmenter indsamlet ved vådsoldning (i alt 92 stykker), hvilket indikerer betydelig ravrelateret aktivitet.',
        exc_amber_microscope: 'Mikroskopiske observationer',
        exc_amber_obs1: 'Pos. Nr. 206: knus-/nedslagsbølger der antyder mekanisk bearbejdning',
        exc_amber_obs2: 'Pos. Nr. 218: konvekse og konkave nedslagsbølger på begge sider — mulig intentionel slagning',
        exc_amber_obs3: 'Pos. Nr. 247: linjer der oprindeligt fremtrådte graverede, senere identificeret som naturlige revner fra udtørring/varme',
        exc_amber_obs4: 'Pos. Nr. 297: tynde afslag med blanke overflader i overensstemmelse med menneskelig fremstilling',
        exc_amber_obs5: 'Pos. Nr. 323: karakteristisk beige farve; flad overflade antyder afspaltning fra et større stykke',
        exc_amber_conclusion: 'Selvom ingen færdige genstande blev fundet, understøtter de samlede beviser (nedslagsmærkede ravfragmenter, specialiserede stikler og rumlig koncentration af rav) stærkt ravbearbejdning på stedet.',
        
        // Miljøkontekst
        exc_env_context: 'Miljøkontekst',
        exc_beaver: 'Bæverforstyrrelse',
        exc_beaver_text: 'Strukturer fortolket som bæverforstyrrelse penetrerer GH2–GH4 og indeholder store mængder træaffald, hvilket indikerer betydelig postdepositionel blanding i dele af lokaliteten.',
        exc_landscape: 'Landskab',
        exc_landscape_text: 'Lokaliteten ligger på en palæokanal i Elbe-lavningen med bevis for sæson-/episodisk oversvømmelse under Allerød og god organisk bevarelse grundet fluvial sedimentering.',
        
        // Fortolkning & forskning
        exc_site_function: 'Fortolkning: Lokalitetsfunktion',
        exc_site_function_text: 'Grabow 15 fortolkes bedst som en specialiseret, midlertidig boplads fokuseret på ravbearbejdning og relaterede opgaver. Fraværet af strukturer, spredte fundmønstre og koncentrationen af rav og specialiserede redskaber peger på episodisk, opgavespecifik brug snarere end permanent bosættelse.',
        exc_post_exc: 'Efterudgravningsforskning',
        exc_post_exc_text: 'Igangværende analyser omfatter radiokulstof-datering (seks udvalgte prøver), træartsidentifikation, mikro-XRF sedimentanalyse, makrofossil- og biomarkøranalyser samt fuldstændig digitalisering af rumlige data i QGIS.',
        exc_significance: 'Betydning og forskningsspørgsmål',
        exc_significance_text: 'Grabow 15 bidrager til forståelsen af senpalæolitisk ressourceudnyttelse, teknologisk specialisering, sæsonmæssig mobilitet, menneskelige reaktioner på miljøændringer og potentielle langdistance-udvekslingsnetværk involverende rav.',
        
        // Projektinformation
        exc_proj_info: 'Projektinformation',
        exc_proj_ref: 'Projektreference:',
        exc_proj_ref_text: 'NDL_JGA_2025-1',
        exc_proj_funding: 'Finansiering:',
        exc_proj_funding_text: 'Beckett-Fonden (100.000 DKK) og Dronning Margrethe II\'s Archæologiske Fond (45.000 DKK)',
        exc_proj_storage: 'Nuværende opbevaring:',
        exc_proj_storage_text: 'Moesgaard Campus, Aarhus Universitet (indtil analyserne er færdige; derefter retur til NLD)',
        exc_proj_report: 'Rapportdato:',
        exc_proj_report_text: 'Juni 2025',
        exc_credits: 'Credits',
        exc_credits_text: 'Rapport udarbejdet af Grabow 15 udgravningsholdet, Aarhus Universitet, i samarbejde med Niedersächsisches Landesamt für Denkmalpflege. Udgravning ledet af professor Thomas Terberger, professor Felix Riede og ph.d.-studerende Lasse Lukas Platz Herskind.',
        
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