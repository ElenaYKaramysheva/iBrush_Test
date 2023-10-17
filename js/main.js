/*=============================
           Mobile Menu
=============================*/

const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu');
const headerButton = document.querySelector('.header__button');
  burger.addEventListener(
    'click', function() {
      headerMenu.classList.toggle('header__menu--active');
      headerButton.classList.toggle('header__button--active');
      burger.classList.toggle('burger--active');
  }) 

/*=============================
        Posts-slider
=============================*/

const SectionSwiper = new Swiper('.posts-slider', {
  
    pagination: {
      el: '.posts-slider__bullets',
      clickable: true,
      modifierClass: 'posts-slider__',
      bulletClass: 'posts-slider__bullet',
      bulletActiveClass: 'posts-slider__bullet--active',
    },

    slidesPerView: 3,

    spaceBetween: 30,

    breakpoints: {
      300: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
