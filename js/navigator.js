const navbarCollapse = document.getElementById('navbarNav');
const navbar = document.querySelector('.navbar');

const toggleNavbarBackground = () => {
    if (window.innerWidth < 992) { // sólo en vista responsive
        if (navbarCollapse.classList.contains('show')) {
            navbar.classList.remove('bg-transparent');
            navbar.classList.add('bg-dark');
        } else {
            navbar.classList.remove('bg-dark');
            navbar.classList.add('bg-transparent');
        }
    }
};

// Escuchar el toggle del menú
navbarCollapse.addEventListener('shown.bs.collapse', toggleNavbarBackground);
navbarCollapse.addEventListener('hidden.bs.collapse', toggleNavbarBackground);

// Asegura que se mantenga transparente si se cambia tamaño de ventana
window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
        navbar.classList.remove('bg-dark');
        navbar.classList.add('bg-transparent');
    }
});

