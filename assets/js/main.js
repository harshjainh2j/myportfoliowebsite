/*=============== SHOW SIDEBAR ===============*/
const navMenu=document.getElementById('sidebar')
const navToggle=document.getElementById('nav-toggle')
const navClose=document.getElementById('nav-close')









/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-sidebar')
    })
}



/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-sidebar')
    })
}

/*=============== SKILLS TABS ===============*/
const tabs=document.querySelectorAll('[data-target]')
const tabContent=document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener("click",()=>
    {const target=document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents=>{
         tabContents.classList.remove("skills__active")
        })

        target.classList.add('skills__active')


        tabs.forEach(tab=>{
         tab.classList.remove("skills__active")
        })

        tab.classList.add('skills__active')
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Work =====*/

const linkWork=document.querySelectorAll('.work__item')

function activeWork(){
linkWork.forEach(L=>L.classList.remove('active-work'))
this.classList.add('active-work')
}
linkWork.forEach(L=>L.addEventListener('click',activeWork))
/*===== Work Popup =====*/

document.addEventListener('click',(e)=>{
if(e.target.classList.contains("work__button")){
togglePortfolioPopup()
portfolioItemDetails(e.target.parentElement)
}})

function togglePortfolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open")
}
document.querySelector(".portfolio__popup-close").addEventListener('click',togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnail img").src=portfolioItem.querySelector(".work__img").src
    document.querySelector(".portfolio__popup-subtitle span").innerHTML=portfolioItem.querySelector(".work__title").innerHTML

}


/*=============== SERVICES MODAL ===============*/

const modalViews=document.querySelectorAll(".services__modal")
const modalBtns=document.querySelectorAll(".services__button")
const modalCloses=document.querySelectorAll(".services__modal-close")

let modal=function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i)
    })
})

modalCloses.forEach((modalClose)=>{
modalClose.addEventListener('click',()=>{
    modalViews.forEach((modalView=>{
        modalView.classList.remove('active-modal')
    }))
})
})

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/

const inputs=document.querySelectorAll(".input")
function focusFunc(){
    let parent=this.parentNode;
    parent.classList.add("focus");
}
function blurFunc(){
    let parent=this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

inputs.forEach((input)=>{
    input.addEventListener("focus",focusFunc),
    input.addEventListener("blur",blurFunc)
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('.nav__menu a[href^="#"]');
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active-link");
        } else {
          link.classList.remove("active-link");
        }
      });
    }
  });
}


/*=============== SHOW SCROLL UP ===============*/
