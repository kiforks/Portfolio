function initNewsSwiper(slider) {
  if(document.querySelector('.no-swiper')) {
    return;
  }

  let mySwiper = new Swiper(`.${slider.container}`, {
    pagination: {
      el: `.${slider.bulletClass}` || `.${slider.blockClass}__pagination`,
      type: `bullets`,
      currentClass: `${slider.bulletClass}__current` || `${slider.blockClass}__current`,
      totalClass: `${slider.bulletClass}__total` || `${slider.blockClass}__total`,
      bulletClass: `${slider.bulletClass}__bullet` || `${slider.blockClass}__bullet`,
      bulletActiveClass: `${slider.bulletClass}__bullet--active` || `${slider.blockClass}__bullet--active`,
      clickable: true,
    },
    navigation: {
      nextEl: `.${slider.buttonClass}__button--next` || `.${slider.blockClass}__button--next`,
      prevEl: `.${slider.buttonClass}__button--prev` || `.${slider.blockClass}__button--prev`,
      disabledClass: `${slider.buttonClass}__button--disabled` || `${slider.blockClass}__button--disabled`,
    },
    autoplay: slider.autoplay,
    speed: 1000,
    loop: slider.loop,
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
    breakpoints: {
      320: {
        slidesPerView: slider.slidesPerViewMobile || 1
      },
      768: {
        spaceBetween: slider.spaceBetweenTablet || 15
      },
      1200: {
        spaceBetween: slider.spaceBetween || 30
      }
    }
  });
}


const news = {
  container: 'news__slider',
  blockClass: 'news',
  slidesPerView: 2,
  buttonClass: 'slider-buttons',
  bulletClass: 'slider-bullets'
};

const assortment = {
  container: 'assortment__gallery',
  blockClass: 'assortment',
  buttonClass: 'slider-buttons',
  bulletClass: 'slider-bullets',
  loop: true,
  autoplay: true
};

initNewsSwiper(news);
initNewsSwiper(assortment);
