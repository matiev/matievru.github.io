/* Tabs
---------------------------------------- */
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

/* Modal images class
---------------------------------------- */
class Group {
  constructor(pictureGroup) {
    this.pictureGroup = pictureGroup,
    this.init()
  }
  init() {
    Array.from(this.pictureGroup.querySelectorAll('img')).forEach((item, i) => {
      if (item.closest('img')) {
        item.setAttribute('data-i', i);
      }
    });

    window.addEventListener('click', event => {
      if (event.target.closest('img') && event.target !== imgInner) {
        this.slide = event.target.getAttribute('data-i');
        imgInner.src = event.target.src;
        modal.append(imgInner, close);
        // document.body.append(modal);        
        document.documentElement.append(modal);
        this.imageGroup = event.target.parentElement.querySelectorAll('img');
        // if (this.imageGroup.length > 1) {
        //   modal.append(imgPrev, imgNext);
        // }
        // else {
        //   modal.replaceChildren(imgInner)
        // }
        this.imageGroup.length > 1 ? modal.append(imgPrev, imgNext) : modal.replaceChildren(imgInner);
      }      
      // else if (event.target.closest('.modal') || event.target.closest('.close')) {
      else if (event.target == modal || event.target == close) {
        // modal.remove()
        modal.parentElement.removeChild(modal);
      }
    });

    imgPrev.addEventListener('click', () => {
      this.goo = -1;
    });
    imgNext.addEventListener('click', () => {
      this.goo = 1;
    });
    /* for safari */
    close.addEventListener('click', () => {
      modal.remove();
    });
    /* ---------- */
  }

  get goo() {
    return this.slide;
  }
  set goo(n) {
    this.slide = (+this.slide + n + this.imageGroup.length) %this.imageGroup.length;
    imgInner.src = this.imageGroup[this.slide].src
  }
}

let pictureGroups = document.querySelectorAll('.picture__group');
let modal = document.createElement('div');
let imgInner = document.createElement('img');
modal.classList.add('modal');
imgInner.classList.add('img__inner');
let imgPrev = document.createElement('div');
let imgNext = document.createElement('div');
let close = document.createElement('div');
imgPrev.classList.add('img__prev');
imgNext.classList.add('img__next');
close.classList.add('close');
for (let pictureGroup of pictureGroups) {
  new Group(pictureGroup)
}