const anchors = document.querySelectorAll('.scroll');
const contactsNav = document.querySelector('.contacts-nav');
let isResizeble = true;


setTimeout(() => {
  try {
    if(isResizeble && contactsNav && window.pageYOffset > 100) {
      window.addEventListener('scroll', () => contactsNav.classList.add('contacts-nav--fixed'));

      isResizeble = false;
    } else if(window.pageYOffset < 100) {
      contactsNav.classList.add('contacts-nav--fixed');
    }
  } catch {
    let test = null;
  }
}, 500)

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    })
  })
}

const toggleClass = document.querySelector('.header');

setTimeout(() => {
  window.addEventListener('scroll',  () => {
    if (window.pageYOffset > toggleClass.getBoundingClientRect().bottom - 75) {
      toggleClass.classList.add('header--fixed');
    } else {
      toggleClass.classList.remove('header--fixed');
    }
  });
},1000);

