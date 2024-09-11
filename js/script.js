
const section = document.querySelector('.container-um');
const paragraphs = document.querySelectorAll('.texto p');

paragraphs.forEach(p => {
  p.style.opacity = 0;
});


let timeouts = [];

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
     
      paragraphs.forEach((p, index) => {
        let delay = 0;

        if (index === 0) {
       
          delay = 500;
        } else {
          
          delay = 500 + (index * 1000);
        }

     
        const timeoutId = setTimeout(() => {
          p.classList.add('animate__fadeInUp');
          p.style.opacity = 1; 
        }, delay);

        
        timeouts.push(timeoutId);
      });
    } else {
     
      paragraphs.forEach(p => {
        p.classList.remove('animate__fadeInUp');
        p.style.opacity = 0; 
      });

     
      timeouts.forEach(timeoutId => clearTimeout(timeoutId));
      timeouts = []; 
    }
  });
}, { threshold: 0.1 }); 

sectionObserver.observe(section);






const cards = document.querySelectorAll('.card');
const icons = document.querySelectorAll('.icons');


const toggleCardFlip = (card) => {
  if (card.style.transform === 'rotateX(180deg) rotateZ(-180deg)') {
    card.style.transform = 'rotateY(0deg)';
  } else {
    card.style.transform = 'rotateX(180deg) rotateZ(-180deg)';
  }
};


cards.forEach(card => {
  const cardIcons = card.querySelector('.icons');
  
  card.addEventListener('click', (event) => {
  
    if (cardIcons.contains(event.target)) {
      return;
    }
    toggleCardFlip(card);
  });
  
 
  cardIcons.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});


document.addEventListener('click', (event) => {
  cards.forEach(card => {
    if (!card.contains(event.target) && !card.querySelector('.icons').contains(event.target)) {
      card.style.transform = 'rotateY(0deg)';
    }
  });
});




document.addEventListener("DOMContentLoaded", function() {
  const section = document.querySelector(".container-quatro");
  const h5Element = document.querySelector(".h5-animation");
  const cardContainers = document.querySelectorAll(".card-animation");

  const observerOptions = {
    threshold: 0.3, 
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        
        setTimeout(() => {
          h5Element.style.opacity = "1";
          h5Element.style.visibility = "visible";
        }, 50); 
        h5Element.classList.add("animate__animated", "animate__fadeInDown");

        
        const isSmallScreen = window.matchMedia("(max-width: 1380px)").matches;

        if (isSmallScreen) {
          
          cardContainers.forEach((container) => {
            setTimeout(() => {
              container.style.opacity = "1";
              container.style.visibility = "visible";
            }, 50); 

            container.classList.add("animate__animated", "animate__fadeInUp");
            container.style.animationDelay = `0s`; 
          });
        } else {
         
          cardContainers.forEach((container, index) => {
            setTimeout(() => {
              container.style.opacity = "1";
              container.style.visibility = "visible";
            }, index * 500); 

            container.classList.add("animate__animated", "animate__fadeInUp");
            container.style.animationDelay = `${index * 0.3}s`; 
          });
        }
      } else {
       
        h5Element.style.opacity = "0";
        h5Element.style.visibility = "hidden";
        h5Element.classList.remove("animate__fadeInDown");

        cardContainers.forEach((container) => {
          container.style.opacity = "0";
          container.style.visibility = "hidden";
          container.classList.remove("animate__fadeInUp");
        });
      }
    });
  }, observerOptions);

  sectionObserver.observe(section);
});



document.addEventListener('DOMContentLoaded', function () {
  const observeer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          const h6 = document.querySelector('#animated-h6');
          
          if (entry.isIntersecting) {
              h6.classList.remove('animate__fadeOut');
              h6.classList.add('animate__animated', 'animate__fadeIn');
          } else {
              h6.classList.remove('animate__fadeIn');
              h6.classList.add('animate__fadeOut');
          }
      });
  }, { threshold: 0.5 });

  observeer.observe(document.querySelector('.container-cinco'));
});





