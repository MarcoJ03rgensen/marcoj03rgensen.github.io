
# Create CSS file with modern, professional styling
css_content = '''/* ===================================
   Global Styles
   =================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #8B4513;
    --secondary-color: #D2691E;
    --dark-color: #2C1810;
    --light-color: #F5E6D3;
    --text-color: #333;
    --white: #fff;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: var(--dark-color);
    text-align: center;
}

/* ===================================
   Header & Navigation
   =================================== */
header {
    background-color: var(--dark-color);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: var(--shadow);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
}

.logo h1 {
    color: var(--white);
    font-size: 1.8rem;
    margin-bottom: 0.2rem;
}

.subtitle {
    color: var(--secondary-color);
    font-size: 0.9rem;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: var(--white);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--secondary-color);
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 4px;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background-color: var(--white);
    transition: 0.3s;
}

/* ===================================
   Hero Section
   =================================== */
.hero {
    background: linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.7)), 
                url('ruins.png') center/cover no-repeat;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 80px;
}

.hero-content {
    color: var(--white);
    max-width: 800px;
    padding: 2rem;
}

.hero-content h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--white);
    animation: fadeInUp 1s ease;
}

.hero-content p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    animation: fadeInUp 1.2s ease;
}

.cta-button {
    display: inline-block;
    padding: 1rem 2.5rem;
    background-color: var(--primary-color);
    color: var(--white);
    text-decoration: none;
    border-radius: 5px;
    font-weight: 600;
    transition: background-color 0.3s ease, transform 0.3s ease;
    animation: fadeInUp 1.4s ease;
}

.cta-button:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
}

/* ===================================
   About Section
   =================================== */
.about {
    padding: 5rem 0;
    background-color: var(--white);
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.about-text p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.8;
}

.about-image img {
    width: 100%;
    border-radius: 10px;
    box-shadow: var(--shadow);
}

/* ===================================
   Research Section
   =================================== */
.research {
    padding: 5rem 0;
    background-color: var(--light-color);
}

.research-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.research-card {
    background-color: var(--white);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: var(--shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.research-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.research-card h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

/* ===================================
   Projects Section
   =================================== */
.projects {
    padding: 5rem 0;
    background-color: var(--white);
}

.project-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: var(--shadow);
    cursor: pointer;
    height: 300px;
}

.project-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(44, 24, 16, 0.9), transparent);
    color: var(--white);
    padding: 2rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.project-item:hover img {
    transform: scale(1.1);
}

.project-item:hover .project-overlay {
    transform: translateY(0);
}

.project-overlay h3 {
    margin-bottom: 0.5rem;
}

/* ===================================
   Contact Section
   =================================== */
.contact {
    padding: 5rem 0;
    background-color: var(--light-color);
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.contact-info h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.contact-details {
    margin-top: 2rem;
}

.contact-details p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form input,
.contact-form textarea {
    padding: 1rem;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}

.submit-button {
    padding: 1rem 2rem;
    background-color: var(--primary-color);
    color: var(--white);
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-button:hover {
    background-color: var(--secondary-color);
}

/* ===================================
   Footer
   =================================== */
footer {
    background-color: var(--dark-color);
    color: var(--white);
    text-align: center;
    padding: 2rem 0;
}

/* ===================================
   Animations
   =================================== */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ===================================
   Responsive Design
   =================================== */
@media (max-width: 768px) {
    .nav-links {
        position: fixed;
        right: -100%;
        top: 80px;
        flex-direction: column;
        background-color: var(--dark-color);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        padding: 2rem 0;
    }

    .nav-links.active {
        right: 0;
    }

    .hamburger {
        display: flex;
    }

    .hero-content h2 {
        font-size: 2rem;
    }

    .hero-content p {
        font-size: 1.1rem;
    }

    .about-content,
    .contact-content {
        grid-template-columns: 1fr;
    }

    h2 {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .hero-content h2 {
        font-size: 1.5rem;
    }

    .logo h1 {
        font-size: 1.3rem;
    }

    .research-grid {
        grid-template-columns: 1fr;
    }
}'''

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

print("✓ styles.css created")
