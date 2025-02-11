let currentLang = 'en';
const translations = {};

async function loadTranslations(lang) {
    try {
        const response = await fetch(`translations/${lang}.json`);
        translations[lang] = await response.json();
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

function updateContent() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        const keys = key.split('.');
        let translation = translations[currentLang];
        
        keys.forEach(k => {
            translation = translation?.[k];
        });

        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    document.documentElement.lang = currentLang;
}

async function fetchTranslations(lang) {
    try {
        const response = await fetch(`translations/${lang}.json`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error loading translations:', error);
        return {};
    }
}

function applyTranslations(translations) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        const value = key.split('.').reduce((obj, k) => obj && obj[k], translations);
        
        if (value) {
            element.textContent = value;
        } else {
            console.warn(`Translation missing for key: ${key}`);
        }
    });
}

// Language switcher functionality for both desktop and mobile
async function changeLanguage(lang, e) {
    if (e) e.preventDefault();
    const translations = await fetchTranslations(lang);
    applyTranslations(translations);
    localStorage.setItem('selectedLanguage', lang);
    
    // Update active state for both desktop and mobile links
    document.querySelectorAll('.language-switcher-desktop a, .language-switcher-mobile a').forEach(link => {
        const linkLang = link.id.replace('lang-', '').replace('-mobile', '');
        link.classList.toggle('active', linkLang === lang);
    });
}

// Desktop language switcher
document.getElementById('lang-en').addEventListener('click', (e) => changeLanguage('en', e));
document.getElementById('lang-id').addEventListener('click', (e) => changeLanguage('id', e));
document.getElementById('lang-zh').addEventListener('click', (e) => changeLanguage('zh', e));

// Mobile language switcher
document.getElementById('lang-en-mobile').addEventListener('click', (e) => changeLanguage('en', e));
document.getElementById('lang-id-mobile').addEventListener('click', (e) => changeLanguage('id', e));
document.getElementById('lang-zh-mobile').addEventListener('click', (e) => changeLanguage('zh', e));

document.addEventListener('DOMContentLoaded', async () => {
    const defaultLang = localStorage.getItem('selectedLanguage') || 'id';
    await changeLanguage(defaultLang);
    
    const translateElements = document.querySelectorAll('[data-translate]');
    console.log('Elements with data-translate:', translateElements.length);
});

window.addEventListener('load', () => {
    console.log('All resources loaded');
    console.log('Current translations:', document.querySelectorAll('[data-translate]').length);
});

const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const dropdowns = document.querySelectorAll('.dropdown');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Handle dropdowns on mobile
dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
            
            // Close other dropdowns
            dropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove('active');
                }
            });
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }
});

// Close menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }
});

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu after clicking
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        }
    });
});