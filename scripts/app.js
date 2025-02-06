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

async function changeLanguage(lang) {
    const translations = await fetchTranslations(lang);
    applyTranslations(translations);
    localStorage.setItem('selectedLanguage', lang);
    
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.id === `lang-${lang}`) {
            btn.classList.add('active');
        }
    });
}

document.getElementById('lang-en').addEventListener('click', () => changeLanguage('en'));
document.getElementById('lang-id').addEventListener('click', () => changeLanguage('id'));
document.getElementById('lang-zh').addEventListener('click', () => changeLanguage('zh'));

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

document.querySelector('.hamburger').addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('https://your-backend.com/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please check your connection.');
    }
});