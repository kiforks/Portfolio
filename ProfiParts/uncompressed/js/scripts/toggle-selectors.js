'use strict';

function toggleSelectors(button, selector, accessibility = false, focus = false) {
  const acc = () => accessibility ? visuallyHidden : closedSelector;
  const toggleSelector = document.querySelectorAll(`.${selector}`);
  const toggleButton = document.querySelectorAll(`.${button}`);
  const closedSelector = `${selector}--active`;
  const visuallyHidden = 'visually-hidden';
  const hidingClass = acc();
  const focusOpenClass = `${selector}--opened`;

  if(focus) {
    toggleButton.forEach(buttonItem => {
      buttonItem.onfocus = () => {
        toggleSelector.forEach(selectorItem => {
          let classList = selectorItem.classList;

          if(!(classList.contains(focusOpenClass))){
            classList.add(focusOpenClass);
          }
        })
      };
      buttonItem.onblur = () => {
        toggleSelector.forEach(selectorItem => {
          selectorItem.classList.remove(focusOpenClass);
        })
      }
    })
  } else {
    toggleButton.forEach(buttonItem => {
      buttonItem.addEventListener('click', event => {
        event.preventDefault();

        toggleSelector.forEach(selectorItem => {
          let classList = selectorItem.classList;

          classList.contains(hidingClass) ? classList.remove(hidingClass) : classList.add(hidingClass);
        })
      })
    })
  }
}

toggleSelectors('header__button', 'header');
toggleSelectors('header__main-link', 'main-body');
toggleSelectors('modal__button', 'main-body');
toggleSelectors('header__main-link', 'modal');
toggleSelectors('modal__button', 'modal');
toggleSelectors('modal__form-button--link', 'main-body');
toggleSelectors('modal__form-button--link', 'modal');

