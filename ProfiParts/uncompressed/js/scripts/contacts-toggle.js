function contactsToggle() {
  let toggleButton = document.querySelectorAll('.contacts__button-toggle');

  toggleButton.forEach(button => {

    button.onclick = event => {
      let parentRow = event.target.closest('.contacts__address');

      if(!parentRow) return;

      if(parentRow.classList.contains('contacts__address--active')) {
        parentRow.classList.remove('contacts__address--active');
      } else {
        parentRow.classList.add('contacts__address--active');
      }
    };
  })
}

contactsToggle();
