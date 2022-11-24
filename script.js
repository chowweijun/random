const navBar = document.querySelector('.nav-bar');
const navLinks = document.querySelector('.nav-links');
const allNavLinks = document.querySelectorAll('.nav-link');
const navLogo = document.querySelector('.nav-logo');
const navForm = document.querySelector('.nav-form');


/* nav links opacity */


// mouseover
navLinks.addEventListener('mouseover',(e) => {
    if(e.target.classList.contains('nav-link')){
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

/* open form/overlay */

const headerBtn = document.querySelector('.header-btn');
const modal = document.querySelector('.form-particulars');
const overlay = document.querySelector('.overlay');

headerBtn.addEventListener('click',() => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})

overlay.addEventListener('click',()=>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

/* make hidden content appear as we scroll */
/* INTL */

const allContent = document.querySelectorAll('.contents');

const contentCallback = function(entries,observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.remove('blur')
    })
}

const contentOptions = {
    root:null,
    threshold:0.5
}

const contentObserver = new IntersectionObserver(contentCallback,contentOptions)
allContent.forEach(content => contentObserver.observe(content))

/* reviews */
let array = []
const textBox = document.querySelector('#reviews-text');
const allReviews = document.querySelector('.allreviews');
const reviewList = document.querySelectorAll('.review');
const reviewBtn = document.querySelector('.reviews-btn');

const setLocalStorage = function(){
    localStorage.setItem('reviews',JSON.stringify(array,["textContent"]))
}

const getLocalStorage = function(){
    const data = JSON.parse(localStorage.getItem('reviews'))
    array = data
    data.forEach(string => newReview(string.textContent))
    
    
}

const newReview = function(string){
    const html = `<div class="review">${string}</div>`
    allReviews.insertAdjacentHTML("beforeend",html)
}

textBox.addEventListener('keydown',(e)=>{
    let string = textBox.value;
    if(e.keyCode == 13){
        e.preventDefault()
        if(string === "") return;
        newReview(string)
        textBox.value = ""
        array.push(document.querySelector('.review:last-child'))
        setLocalStorage()
    }
})

reviewBtn.addEventListener('click',()=> {
    localStorage.removeItem('reviews')
    array = []
    setLocalStorage()
    location.reload()
})

getLocalStorage()
setLocalStorage()

