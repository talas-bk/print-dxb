'use strick'

import { Swiper } from 'swiper';
import { EffectCube, Pagination , Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../scss/style.scss'

const swiper = new Swiper('.cubeSwiper', {
  modules: [EffectCube, Pagination],
  loop:true,
   effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows:true,
        shadowOffset: 30,
        // shadowScale: 0.94,
      },
      pagination: {
        el: ".swiper-pagination",
      },


      breakpoints: {
    768: {
      grabCursor:false,
      cubeEffect: {
          slideShadows:false
      }
   
    },
    // when window width is >= 320px
    1024: {
      grabCursor:false,
      cubeEffect: {
          slideShadows:false
      }
   
    },
    // when window width is >= 1200px
    1280: {
       grabCursor:false,
      cubeEffect: {
          slideShadows:false
      }
    },
    // when window width is >=1440px
    1440: {
      grabCursor:false,
      cubeEffect: {
          slideShadows:false
      }
    }
  },
});


const mySwiper = new Swiper(".mySwiper", {
     modules:[Navigation,Pagination],
      loop:true,
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el:".work-section .swiper-pagination",
        clickable:true,
      },
      mousewheel: true,
      preventClicks:true,


  breakpoints: {
    768: {
       slidesPerView:2,
       spaceBetween:30,
    },
    // when window width is >= 320px
    1024: {
      slidesPerView:3,
      spaceBetween:20,
    },
    // when window width is >= 1200px
    1280: {
      slidesPerView:4,
      spaceBetween:20,
    },
    // when window width is >=1440px
    1440: {
      slidesPerView:3,
      spaceBetween:20,

    }
  },
    });


  
  // Burger menu
   const btnBurger = document.querySelector('.burger')
   const menuWindow = document.querySelector('.head');

   function aciveBurger () {
      btnBurger.addEventListener('click', () => {
        menuWindow.classList.toggle('active')
        btnBurger.classList.toggle('active')
      })
   }

   aciveBurger();
/////////////////////////////////////////////////////////////////////////


// Section and text appears

const allTexts = document.querySelectorAll('.text');
const sections = document.querySelectorAll('section');
const serviceCards = document.querySelectorAll('.service-card');
const materialCards = document.querySelectorAll('.cards-material');

const allSections = [sections,serviceCards,allTexts,materialCards,]


// const observer = new IntersectionObserver ((entry,observ)=> {
    
//   const entries = entry[0];
//    if  (!entries.isIntersecting) return;
//      entries.target.classList.remove('hiden');
//      entries.target.unobserve(observ)  
// },

//  {
//   threshold:0.4,
//   root:null

//  }
// )

// allSections.forEach((nodelist)=>{

//    nodelist.forEach((el) => {
//     observer.observe(el);
//     el.classList.add('hiden')

//    })
// })