// Github Link
// https://github.com/bradtraversy/50projects50days

const accordianItemHeaders = document.querySelectorAll(
  '.accordian-item-header'
);

accordianItemHeaders.forEach((accordianItemHeader) => {
  accordianItemHeader.addEventListener('click', (e) => {
    accordianItemHeader.classList.toggle('active');
    const accordianItemBody = accordianItemHeader.nextElementSibling;
    if (accordianItemHeader.classList.contains('active')) {
      accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + 'px';
    } else {
      accordianItemBody.style.maxHeight = 0;
    }
  });
});
