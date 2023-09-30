// ===========================Navbar scrolling Effect===========================
// <!-- Select html element by id -->
const navbar = document.getElementById('navbar');
const navTopMenu = document.getElementById('navTopMenu');
const navTop = document.getElementById('navTop');
const navBottom = document.getElementById('navBottom');
const menuCategories = document.getElementById('menuCategories');

// <!-- Action -->
document.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 80) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0px';
        navbar.style.left = '0px';
        navbar.style.width = '100%';
        navbar.style.zIndex = 10;
        navbar.classList.add('res-active-nav'); //responsive class for navbar
        navTopMenu.style.display = 'none';
        navBottom.style.display = 'none';
        navTop.style.height = '100%';
        navTop.style.padding = '14px 0';
        menuCategories.style.removeProperty('display');
    }
    else {
        navbar.style.removeProperty('position');
        navbar.style.removeProperty('top');
        navbar.style.removeProperty('left');
        navbar.style.removeProperty('width');
        navbar.style.removeProperty('zIndex');
        navbar.classList.remove('res-active-nav'); //responsive class for navbar
        navTopMenu.style.removeProperty('display');
        navBottom.style.removeProperty('display');
        navTop.style.removeProperty('height');
        navTop.style.removeProperty('padding');
        menuCategories.style.display = 'none';
    }

});


// =========================== Language switch ===========================
const bangla = document.getElementById('lang-bn');
const english = document.getElementById('lang-en');
const languageSelector = document.getElementById('language-selector');
const lang = document.querySelector('html[lang]');
const langStore = window.localStorage.getItem('language');

// <!-- Bangla Handler -->
bangla.addEventListener('click', () => {
    window.localStorage.setItem('language', 'bn')
    window.location.reload();
});
// <!-- English Handler -->
english.addEventListener('click', () => {
    window.localStorage.setItem('language', 'en');
    window.location.reload();
});

document.addEventListener('DOMContentLoaded', () => {
    // <!-- Set Bangla -->
    if (langStore === 'bn') {
        lang.setAttribute('lang', 'bn');
        bangla.classList.add('language-active');
        english.classList.remove('language-active');
        languageSelector.innerText = 'BN'

        fetch(`./language.json`)
            .then(response => response.json())
            .then(data => {
                const bn = data.bn;
                // Apply translations to elements
                const elements = document.querySelectorAll('[lang-data]');
                elements.forEach(element => {
                    const key = element.getAttribute('lang-data');
                    if (bn[key]) {
                        element.innerText = bn[key];
                        element.style.fontFamily = 'banglaFont'
                    }
                });
            });
    }
    // <!-- Set English -->
    else {
        lang.setAttribute('lang', 'en');
        english.classList.add('language-active');
        bangla.classList.remove('language-active');
    }
});
