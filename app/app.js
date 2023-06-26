let wListLinks = document.querySelectorAll('.wrapper__list-link');
let wContentItems = document.querySelectorAll('.wrapper__content-item');

wContentItems.forEach((item, i) => {
  item.setAttribute('id', `tab-${i}`);
  wListLinks[i].setAttribute('id', `#${item.getAttribute('id')}`)
});

wListLinks.forEach((item, i) => {
  item.addEventListener('click', event => {
    // event.preventDefault();
    let curLink = item;
    let contId = item.getAttribute('id');
    let curCont = document.querySelector(contId);
    if (!curLink.closest('.wrapper__list-link--active')) {
      wListLinks.forEach(item => item.classList.remove('wrapper__list-link--active'));
      wContentItems.forEach(item => item.classList.remove('wrapper__content-item--show'));
      curLink.classList.add('wrapper__list-link--active');
      curCont.classList.add('wrapper__content-item--show');
    }
  });
});

wListLinks[0].click();