
# Create a comprehensive README file with setup instructions
readme_content = '''# Marco Jørgensen - Archaeology Student Website

A professional, responsive website for archaeology student Marco Birkedahl Jørgensen, showcasing research interests, projects, and contact information.

## 🗂️ Files Included

- `index.html` - Main HTML structure
- `styles.css` - Complete styling and responsive design
- `script.js` - Interactive features and animations
- `excavation.png` - AI-generated archaeological excavation image
- `pottery.png` - AI-generated pottery artifacts image
- `ruins.png` - AI-generated ancient ruins image

## 🚀 Quick Start

### Option 1: Local Setup
1. Download all files to a single folder
2. Ensure all image files (excavation.png, pottery.png, ruins.png) are in the same folder as index.html
3. Open `index.html` in your web browser

### Option 2: Deploy to Web
You can host this website for free using:
- **GitHub Pages**: Upload files to a GitHub repository and enable Pages
- **Netlify**: Drag and drop the folder onto netlify.com
- **Vercel**: Connect your repository or upload files directly

## ✨ Features

### Design
- Modern, professional archaeology-themed design
- Responsive layout that works on desktop, tablet, and mobile
- Smooth scrolling and animations
- Fixed navigation header

### Sections
1. **Hero**: Eye-catching introduction with call-to-action
2. **About**: Personal introduction with archaeological focus
3. **Research**: Four key research interest areas
4. **Projects**: Visual gallery of archaeological work
5. **Contact**: Information and contact form

### Interactive Elements
- Mobile hamburger menu
- Smooth scroll navigation
- Hover effects on cards and images
- Parallax scrolling effect
- Fade-in animations on scroll
- Contact form validation

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #8B4513;      /* Saddle brown */
    --secondary-color: #D2691E;    /* Chocolate */
    --dark-color: #2C1810;         /* Dark brown */
    --light-color: #F5E6D3;        /* Light beige */
}
```

### Content
- Edit text directly in `index.html`
- Replace email address in the contact section
- Update research interests and project descriptions

### Images
- Replace the three PNG files with your own images
- Keep the same filenames or update references in `index.html`
- Recommended dimensions: 1200x800px minimum

## 📱 Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## 🔧 Technical Details

### Technologies Used
- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)

### Performance Features
- Optimized CSS with minimal reflows
- Efficient JavaScript event listeners
- Intersection Observer API for scroll animations
- No external dependencies or frameworks

## 📝 Contact Form

The contact form currently shows an alert message. To make it functional:

1. **Using FormSpree** (easiest):
   - Sign up at formspree.io
   - Replace form action in HTML:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Using EmailJS**:
   - Sign up at emailjs.com
   - Add EmailJS SDK to HTML
   - Update JavaScript to use EmailJS service

3. **Backend Integration**:
   - Create a server endpoint (Node.js, PHP, Python)
   - Update fetch call in `script.js`

## 📋 Checklist Before Going Live

- [ ] Update email address in contact section
- [ ] Add real social media links (if desired)
- [ ] Test on multiple devices and browsers
- [ ] Optimize images for web (compress if needed)
- [ ] Set up contact form backend
- [ ] Add Google Analytics (optional)
- [ ] Create favicon.ico file
- [ ] Test all navigation links
- [ ] Proofread all text content

## 🌐 SEO Optimization (Optional)

Add to `<head>` section in index.html:
```html
<meta name="description" content="Marco Jørgensen - Archaeology student specializing in landscape phenomenology, GIS analysis, and spatial archaeology">
<meta name="keywords" content="archaeology, GIS, landscape phenomenology, Denmark, archaeological research">
<meta name="author" content="Marco Birkedahl Jørgensen">
```

## 📄 License

Free to use and modify for personal use.

---

**Last Updated**: October 2025  
**Created for**: Marco Birkedahl Jørgensen'''

with open('README.md', 'w', encoding='utf-8') as f:
    f.write(readme_content)

print("✓ README.md created")
print("\n" + "="*50)
print("All website files created successfully!")
print("="*50)
