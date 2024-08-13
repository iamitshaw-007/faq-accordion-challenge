const faqAccordianList = document.querySelectorAll('.faq-list');

faqAccordianList.forEach((faqAccordian) => {
  faqAccordian
    .querySelector('.faq-list__title')
    .addEventListener('click', function () {
      const faqDescriptionElement = faqAccordian.querySelector(
        '.faq-list__description'
      );
      const faqIconElement = faqAccordian.querySelector(
        '.faq-list__title-icon'
      );
      if (
        faqDescriptionElement.classList.contains(
          'faq-list__description--collapse'
        )
      ) {
        faqIconElement.src = 'images/icon-minus.svg';
        faqIconElement.alt = 'Minus Icon Illustration';
      } else {
        faqIconElement.src = 'images/icon-plus.svg';
        faqIconElement.alt = 'Plus Icon Illustration';
      }
      faqDescriptionElement.classList.toggle('faq-list__description--collapse');
    });
});
