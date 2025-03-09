// Kereső funkció
function searchPages() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const items = document.getElementsByClassName('page-item');

    for (let item of items) {
        const title = item.getAttribute('data-title');
        if (title.includes(input)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }
}

// Téma váltó funkció
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
}

// Ikon frissítése
function updateThemeIcon() {
    const button = document.getElementById('themeToggle');
    const isDark = document.body.classList.contains('dark-theme');
    button.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
}

// Téma és ikon betöltése az oldal indulásakor
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    updateThemeIcon();
});
