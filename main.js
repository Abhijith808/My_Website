/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img, clock',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

 // JavaScript code to repeat the typewriter animation after completion
 const typewriter = document.querySelector('.typewriter-text');
 const text = typewriter.textContent;

 function animateTypewriter() {
   typewriter.textContent = '';

   let i = 0;
   function type() {
     if (i < text.length) {
       typewriter.textContent += text.charAt(i);
       i++;
       setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
     } else {
       setTimeout(animateTypewriter, 2000); // Adjust delay before repeating animation (in milliseconds)
     }
   }

   type();
 }

 animateTypewriter();

/*****img******/


 const image = document.querySelector('.image');
image.addEventListener('mouseover', () => {
  image.querySelector('img').style.filter = 'none';
});

image.addEventListener('mouseout', () => {
  image.querySelector('img').style.filter = 'grayscale(100%)';
});


//Project//


function rotateCard(event, card) {
  const cardRect = card.getBoundingClientRect();
  const x = event.clientX - cardRect.left;
  const y = event.clientY - cardRect.top;
  const centerX = cardRect.width / 2;
  const centerY = cardRect.height / 2;
  
  const rotateX = ((y - centerY) / centerY) * 10;
  const rotateY = ((centerX - x) / centerX) * 10;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function resetCard(card) {
  card.style.transform = "rotateX(0) rotateY(0)";
}
