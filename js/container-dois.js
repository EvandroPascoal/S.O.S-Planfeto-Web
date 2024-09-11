
const h3 = document.querySelector('.caixa h3');
const img = document.querySelector('.caixa figure img');


const heading = document.querySelector('h4');


const caixaDoisSections = document.querySelectorAll('.container-tres .caixa-dois');
const caixaTresSections = document.querySelectorAll('.container-tres .caixa-tres');


let isCaixaDoisVisible = false;
let isCaixaTresVisible = false;


const observer = new IntersectionObserver(entries => {
  let headingVisible = false;

  entries.forEach(entry => {
    const caixaDois = entry.target.querySelector('.caixa-dois');
    const caixaTres = entry.target.querySelector('.caixa-tres');

    
    if (entry.isIntersecting) {
      
      if (entry.target === h3) {
        h3.classList.add('visible-h3');
      } else if (entry.target === img) {
        img.classList.add('visible-img');
      }

     
      if (caixaDois) {
        caixaDois.classList.add('animate__animated', 'animate__fadeInLeft');
        caixaDois.classList.remove('animate__fadeOutLeft');
        isCaixaDoisVisible = true; 
      }

     
      if (caixaTres) {
        caixaTres.classList.add('animate__animated', 'animate__fadeInRight');
        caixaTres.classList.remove('animate__fadeOutRight');
        isCaixaTresVisible = true;
      }

    } else {
     
      if (entry.target === h3) {
        h3.classList.remove('visible-h3');
      } else if (entry.target === img) {
        img.classList.remove('visible-img');
      }

      
      if (caixaDois) {
        caixaDois.classList.remove('animate__fadeInLeft');
        caixaDois.classList.add('animate__fadeOutLeft');
        isCaixaDoisVisible = false; 
      }

    
      if (caixaTres) {
        caixaTres.classList.remove('animate__fadeInRight');
        caixaTres.classList.add('animate__fadeOutRight');
        isCaixaTresVisible = false; 
      }
    }

 
    headingVisible = isCaixaDoisVisible || isCaixaTresVisible;

   
    if (headingVisible) {
      heading.classList.add('animate__animated', 'animate__fadeInUp', 'fixed');
      heading.classList.remove('animate__fadeOutDown');
    } else {
      heading.classList.add('animate__animated', 'animate__fadeOutDown');
      heading.classList.remove( 'fixed');
    }
  });
}, { threshold: 0.1 }); 


observer.observe(h3);
observer.observe(img);
caixaDoisSections.forEach(section => observer.observe(section.parentElement));
caixaTresSections.forEach(section => observer.observe(section.parentElement));
