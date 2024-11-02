window.addEventListener('resize', () => {
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth > 857 && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    }
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

function expandMen(){
    const dropdowns = document.querySelector('.dropdowns');
    const navLinks = document.querySelector('.nav-links');


    dropdowns.addEventListener('mouseover', () => {
        navLinks.style.height = '250px';
    });

    dropdowns.addEventListener('mouseout', () => {
        navLinks.style.height = '165px';
    });
}
