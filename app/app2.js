let wListLinks = document.querySelectorAll('.wrapper__list-link');
let wContentItems = document.querySelectorAll('.wrapper__content-item');

wContentItems.forEach((item, i) => {
  item.setAttribute('id', `tab-${i}`);
  wListLinks[i].setAttribute('href', `#${item.getAttribute('id')}`)
});

wListLinks.forEach((item, i) => {
  item.addEventListener('click', event => {
    event.preventDefault();
    let curLink = item;
    let contId = item.getAttribute('href');
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


/* Modal images
--------------------------------------- */
let imgs = document.querySelectorAll('.picture__group-img');
let modal = document.createElement('div');
let imgInner = document.createElement('img');
let close = document.createElement('div');
modal.classList.add('modal');
imgInner.classList.add('img__inner');
close.classList.add('close');

window.addEventListener('click', function(event) {
  if (event.target.closest('.picture__group-img')) {
    imgInner.src = event.target.src;
    document.body.append(modal);
    modal.append(imgInner);
    modal.append(close)
  }
  else if (event.target.closest('.modal') && !event.target.closest('.img__inner')) {
    modal.remove()
  }
});
// clean code no comments