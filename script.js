
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
