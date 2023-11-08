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

/*=============================
        List-select
=============================*/

let select = function () {
  let selectHeader = document.querySelectorAll('.list-select__toggle');
  let selectOption =  document.querySelectorAll('.list-select__option');

  selectHeader.forEach( (item) => {
      item.addEventListener('click', selectToggle)
  }); 

  selectOption.forEach( (item) => {
      item.addEventListener('click', selectChoose)
  }); 

  function selectToggle() {
      this.parentElement.classList.toggle('list-select-active')
  }

  function selectChoose() {
      let text = this.innerText;
      let select = this.closest('.list-select');
      let currentText = this.closest('.list-select').querySelector('.list-select__toggle');
      currentText.innerText = text;
      select.classList.remove('list-select-active');
  }
      
};

select();

/*=============================
        Popup
=============================*/

let popup = document.getElementById('form-popup');
let popupBackground = document.querySelector('.popup-wrapper');
let popupToggle = document.querySelector('.header__button');
let popupClose = document.querySelector('.popup__close');

  popupToggle.onclick = function() {
    popup.style.display="block";
    popupBackground.style.display="block";
  };

  popupClose.onclick = function() {
    popup.style.display="none";
    popupBackground.style.display="none";
  };

  window.onclick = function(e) {
    if(e.target == popupBackground) {
      popup.style.display="none";
      popupBackground.style.display="none";
    }
  }
