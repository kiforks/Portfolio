function initSwiper(slider, thumbs) {
  if(document.querySelector('.no-swiper')) {
    return;
  }

  let sliderButtonPrev = document.querySelector('.contacts__button--prev');
  let sliderButtonNext = document.querySelector('.contacts__button--next');
  let addressList =  document.querySelectorAll('.contacts__address');
  let sliderList =  document.querySelectorAll('.contacts__item--main');
  let thumbsItem = document.querySelectorAll('.contacts__item--thumbs');

  let thumbSlider = new Swiper(`.${thumbs.container}`, {
    pagination: {
      el: `.${thumbs.blockClass}__pagination`,
      type: `bullets`,
      currentClass: `${thumbs.blockClass}__current`,
      totalClass: `${thumbs.blockClass}__total`,
      bulletClass: `${thumbs.blockClass}__bullet`,
      bulletActiveClass: `${thumbs.blockClass}__bullet--active`,
      clickable: true,
    },
    speed: 1000,
    direction: 'vertical',
    loop: thumbs.loop,
    slidesPerView: thumbs.slidesPerView || 1,
    spaceBetween: thumbs.spaceBetween || 30,
    freeMode: thumbs.freeMode,
    watchSlidesVisibility: thumbs.watchSlidesVisibility,
    watchSlidesProgress: thumbs.watchSlidesProgress,
    wrapperClass: `${thumbs.blockClass}__list`,
    slideClass: `${thumbs.blockClass}__item`,
    slideActiveClass: `${thumbs.blockClass}__item--active`,
    slideDuplicateActiveClass: `${thumbs.blockClass}__item-duplicate--active`,
    slideVisibleClass: `${thumbs.blockClass}__item--visible`,
    slideDuplicateClass: `${thumbs.blockClass}__item-duplicate`,
    slideNextClass: `${thumbs.blockClass}__item--next`,
    slideDuplicateNextClass: `${thumbs.blockClass}__item-duplicate--next`,
    slidePrevClass: `${thumbs.blockClass}__item--prev`,
    slideDuplicatePrevClass: `${thumbs.blockClass}__item-duplicate--prev`,
    slideBlankClass: `${thumbs.blockClass}__invisible-blank`,
    bulletClass: `${thumbs.blockClass}__bullet`,
    bulletActiveClass: `${thumbs.blockClass}__bullet--active`,
    modifierClass: `${thumbs.blockClass}__pagination`,
    hiddenClass: `${thumbs.blockClass}__hidden`,
    progressbarFillClass: `${thumbs.blockClass}__progressbar-fill`,
    clickableClass: `${thumbs.blockClass}__clickable`,
    lockClass: `${thumbs.blockClass}__lock`,
    progressbarOppositeClass: `${thumbs.blockClass}__progressbar-opposite`,
    breakpoints: {
      320: {
        direction: 'horizontal',
        slidesPerView: thumbs.slidesPerViewMobile || 1,
        spaceBetween: thumbs.spaceBetweenMobile || 5
      },
      768: {
        direction: 'vertical',
        spaceBetween: thumbs.spaceBetweenTablet || 5
      },
      1200: {
        spaceBetween: thumbs.spaceBetween || 30
      }
    }
  });

  let mySwiper = new Swiper(`.${slider.container}`, {
    pagination: {
      el: `.${slider.blockClass}__pagination`,
      type: `bullets`,
      currentClass: `${slider.blockClass}__current`,
      totalClass: `${slider.blockClass}__total`,
      bulletClass: `${slider.blockClass}__bullet`,
      bulletActiveClass: `${slider.blockClass}__bullet--active`,
      clickable: true,
    },
    navigation: {
      nextEl: `.${slider.blockClass}__button--next`,
      prevEl: `.${slider.blockClass}__button--prev`,
      disabledClass: `${slider.blockClass}__button--disabled`,
    },
    thumbs: {
      swiper: thumbSlider,
      slideThumbActiveClass: `${thumbs.blockClass}__thumb--active`,
      thumbsContainerClass: `${thumbs.container}-container`,
    },
    speed: 1000,
    autoplay: {
      delay: 5000
    },
    loop: slider.loop,
    freeMode: slider.freeMode,
    watchSlidesVisibility: slider.watchSlidesVisibility,
    watchSlidesProgress: slider.watchSlidesProgress,
    slidesPerView: slider.slidesPerView || 1,
    spaceBetween: slider.spaceBetween || 30,
    freeMode: slider.freeMode,
    watchSlidesVisibility: slider.watchSlidesVisibility,
    watchSlidesProgress: slider.watchSlidesProgress,
    wrapperClass: `${slider.blockClass}__list`,
    slideClass: `${slider.blockClass}__item`,
    slideActiveClass: `${slider.blockClass}__item--active`,
    slideDuplicateActiveClass: `${slider.blockClass}__item-duplicate--active`,
    slideVisibleClass: `${slider.blockClass}__item--visible`,
    slideDuplicateClass: `${slider.blockClass}__item-duplicate`,
    slideNextClass: `${slider.blockClass}__item--next`,
    slideDuplicateNextClass: `${slider.blockClass}__item-duplicate--next`,
    slidePrevClass: `${slider.blockClass}__item--prev`,
    slideDuplicatePrevClass: `${slider.blockClass}__item-duplicate--prev`,
    slideBlankClass: `${slider.blockClass}__invisible-blank`,
    bulletClass: `${slider.blockClass}__bullet`,
    bulletActiveClass: `${slider.blockClass}__bullet--active`,
    modifierClass: `${slider.blockClass}__pagination`,
    hiddenClass: `${slider.blockClass}__hidden`,
    progressbarFillClass: `${slider.blockClass}__progressbar-fill`,
    clickableClass: `${slider.blockClass}__clickable`,
    lockClass: `${slider.blockClass}__lock`,
    progressbarOppositeClass: `${slider.blockClass}__progressbar-opposite`,
  });

  function sliderToggle() {
    sliderList.forEach((slider, index) => {
      if(sliderList[index].classList.contains('contacts__item--active')) {
        addressList.forEach(address => {
          address.classList.remove('contacts__address--active');
        });

        addressList[index].classList.add('contacts__address--active');
      }
    })
  }

  if(sliderButtonPrev && sliderButtonNext && addressList && sliderList && thumbsItem) {
    sliderButtonNext.onclick = () => sliderToggle();

    sliderButtonPrev.onclick = () => sliderToggle(true);

    thumbsItem.forEach(button => button.onclick = () => sliderToggle(false, true));

    mySwiper.on('slideChange', function () {
      setTimeout(() => {
        sliderToggle()
      }, 0);
    });
  }
}

const contacts = {
  container: 'contacts__inner--main',
  blockClass: 'contacts',
  slidesPerView: 1
};

const thumbs = {
  container: 'contacts__inner--thumbs',
  blockClass: 'contacts',
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  spaceBetween: 9,
  slidesPerViewMobile: 4
};

initSwiper(contacts, thumbs);



