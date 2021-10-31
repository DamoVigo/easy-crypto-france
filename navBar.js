const navLinks = document.querySelectorAll('.nav-link')
const menuToggle = document.getElementById('navbarNavAltMarkup')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false})
navLinks.forEach((e) => {
    e.addEventListener('click', () => { bsCollapse.toggle() })
})