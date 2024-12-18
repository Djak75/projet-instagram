
    function toggleMenu() {
      const navMenu = document.getElementById('navMenu');
      navMenu.classList.toggle('active');
    }

    function closeMenu() {
      document.getElementById('navMenu').classList.remove('active');
    }
    



    // le bouton de commutation s
const themeToggle = document.getElementById('themeToggle');
const body = document.body;


if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    themeToggle.checked = true; // Active le bouton d
}


themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled'); // le mode sombre
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled'); // le mode clair
    }
});



const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
const searchContainer = document.getElementById('search-container');


searchIcon.addEventListener('click', (e) => {
    e.stopPropagation(); // 
    searchBar.classList.add('active');
    searchBar.focus(); 
});


document.addEventListener('click', (e) => {
    if (!searchContainer.contains(e.target)) {
        searchBar.classList.remove('active');
    }
});


searchBar.addEventListener('focusout', () => {
    setTimeout(() => {
        searchBar.classList.remove('active');
    }, 200); 
});