
    function toggleMenu() {
      const navMenu = document.getElementById('navMenu');
      navMenu.classList.toggle('active');
    }

    function closeMenu() {
      document.getElementById('navMenu').classList.remove('active');
    }
    



    // Sélectionner le bouton de commutation et le corps de la page
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Initialisation : Vérifie le mode enregistré dans le localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    themeToggle.checked = true; // Active le bouton de commutation
}

// Ajouter un événement au bouton de commutation
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled'); // Enregistrer le mode sombre
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled'); // Enregistrer le mode clair
    }
});
s

// script.js
const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
const searchContainer = document.getElementById('search-container');

// Ouvrir la barre quand on clique sur l'icône
searchIcon.addEventListener('click', (e) => {
    e.stopPropagation(); // Empêche le clic de se propager
    searchBar.classList.add('active');
    searchBar.focus(); // Met le focus directement sur l'input
});

// Fermer la barre quand on clique ailleurs
document.addEventListener('click', (e) => {
    if (!searchContainer.contains(e.target)) {
        searchBar.classList.remove('active');
    }
});

// Fermer aussi quand on perd le focus
searchBar.addEventListener('focusout', () => {
    setTimeout(() => {
        searchBar.classList.remove('active');
    }, 200); // Petit délai pour éviter les conflits
});