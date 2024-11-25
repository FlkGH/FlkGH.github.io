themeButton = document.getElementById('themeSwitch');
themeIcon = themeButton.querySelector('i');

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('darkMode');

    if (document.body.classList.contains('darkMode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
});