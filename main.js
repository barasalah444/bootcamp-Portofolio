

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');


sunIcon.classList.add('hidden-icon');

themeToggle.addEventListener('click', () => {
    if (htmlElement.getAttribute('data-theme') === 'dark') {
        // التغيير إلى الوضع الفاتح (Light Mode)
        htmlElement.setAttribute('data-theme', 'light');
        moonIcon.classList.add('hidden-icon');
        sunIcon.classList.remove('hidden-icon');
    } else {
        // العودة إلى الوضع الداكن (Dark Mode)
        htmlElement.setAttribute('data-theme', 'dark');
        sunIcon.classList.add('hidden-icon');
        moonIcon.classList.remove('hidden-icon');
    }
});