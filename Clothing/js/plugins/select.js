function selectInit(selector, selectOptionItem) {
  $('.' + selector).each(function() {
    const _this = $(this),
      selectOption = _this.find('.' + selectOptionItem),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 300; // длительность анимации

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
      class: 'new-select',
      html: _this.children('.' + selectOptionItem + '--disabled').html()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
      class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
      $('<div>', {
        class: 'new-select__item',
        html: $('<span>', {
          html: selectOption.eq(i).html()
        })
      })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
      if ( !$(this).hasClass('on') ) {
        $(this).addClass('on');
        selectList.slideDown(duration);

        selectItem.on('click', function() {
          let chooseItem = $(this).data('value');

          $('select').val(chooseItem).attr('selected', 'selected');
          selectHead.html( $(this).find('span').html() );

          selectList.slideUp(duration);
          selectHead.removeClass('on');
        });

      } else {
        $(this).removeClass('on');
        selectList.slideUp(duration);
      }
    });
  });
}

selectInit('select', 'select__option');
selectInit('patterns__features--dsp', 'patterns__feature--dsp');
selectInit('patterns__features--metal', 'patterns__feature--metal');
selectInit('patterns__features--figure', 'patterns__feature--figure');

