const navBar = document.querySelector('.nav-bar');
const navLinks = document.querySelector('.nav-links');
const allNavLinks = document.querySelectorAll('.nav-link');
const navLogo = document.querySelector('.nav-logo');
const navForm = document.querySelector('.nav-form');
/* nav links opacity */


// mouseover
navLinks.addEventListener('mouseover',(e) => {
    if(e.target.className === 'nav-link'){
        let hovered = e.target;   
        allNavLinks.forEach(link => {
            if(link != hovered){
                link.classList.add('opacity')
                navLogo.classList.add('opacity')
                navForm.classList.add('opacity')
            }
        })
    };
});
// mouse out
navLinks.addEventListener('mouseout',() => {
    allNavLinks.forEach(link => {
        link.classList.remove('opacity')
        navLogo.classList.remove('opacity')
        navForm.classList.remove('opacity')
    })
});

/* Scroll to view */

navLinks.addEventListener('click', (e) => {
    e.preventDefault()

    if(e.target.classList.contains('nav-link')){
        const id = e.target.getAttribute('href')
        document.querySelector(id).scrollIntoView({behavior:'smooth'})
    }
})





