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
      if (faqDescriptionElement.style.display === 'block') {
        faqDescriptionElement.style.display = 'none';
        faqIconElement.src = 'images/icon-plus.svg';
      } else {
        faqDescriptionElement.style.display = 'block';
        faqIconElement.src = 'images/icon-minus.svg';
      }
    });
});
