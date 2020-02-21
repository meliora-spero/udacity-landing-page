/* JS IS <3 */


// adds anchor class for nav
const addClassesSections = document.getElementsByTagName('section');
for (let i = 0; i < addClassesSections.length; i++) {
  addClassesSections[i].classList.add('anchor-for-nav');
}

// calls for sections by class & returns NodeList
const nodeList = document.getElementsByClassName('anchor-for-nav');

// loop: creats <li>, calls for data attribute (data-nav) & adds link
const ul = document.getElementById('navbar__list');
for (let i = 0; i < nodeList.length; i++) {
  let sectionLink = nodeList[i].getAttribute('data-nav');
  let li = document.createElement('li');
  li.innerHTML = sectionLink.link('#' + nodeList[i].getAttribute('id'));
  ul.appendChild(li);
}

// adds class, ID & scroll to new <a>
const menuLink = document.querySelectorAll('li a');
for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].classList.add('menu__link')
  menuLink[i].setAttribute('id', 'section' + [i+1]);
}

for (let i = 0; i < nodeList.length; i++) {
  const top = nodeList[i].getBoundingClientRect().top + window.pageYOffset
  menuLink[i].addEventListener('click', (elem) => {
    elem.preventDefault();
    let scrollSet = {
      top: top,
      left: 0,
      behavior: 'smooth'
    };
    window.scrollTo(scrollSet);
  });
}

// adds active & scroll
const windowBounding = (element) => {
  const distance = element.getBoundingClientRect();
  return (
    distance.top >= 0 && 
    distance.left >= 0 &&
    distance.bottom <= window.innerHeight
  );
}
const scrolls = document.querySelectorAll('section');
for (let i = 0; i < scrolls.length; i++) {
  window.addEventListener('scroll', () => {
    if (windowBounding(scrolls[i])) {
      scrolls[i].classList.add('your-active-class')
      menuLink[i].classList.add('active')
    } else {
      scrolls[i].classList.remove('your-active-class')
      menuLink[i].classList.remove('active')

    }
  });
}

// adds attribute to <li> //UNUSED BUT FUN//
const attr = document.querySelectorAll('li');
for (let i = 0; i < attr.length; i++) {
  attr[i].setAttribute('data-section', ''); // adds empty data-section
} 
attr.forEach((item, i) => console.log(i + 1)); // returns 1, 2, etc.
attr.forEach((elem, i) => {
  if (!elem.dataset.section.length) {
    elem.dataset.section = i + 1
  }
});

// hamburger menu click
const burgerMenu = document.querySelector('.navbar__menu__burger');
burgerMenu.addEventListener('click', () => {
  let burgerBar = document.querySelector('.navbar__menu');
  if (burgerBar.style.display === 'block') {
    burgerBar.style.display = 'none';
  } else {
    burgerBar.style.display = 'block';
  }
}
);

// collapsible/hideable section 
// in two steps

// (1) siblings of h2
const allSiblings = (elem) => {
  let siblings = [];
  let sibling = elem.parentNode.firstChild;
  // loop through each sibling 
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling
  }
  return siblings;
};

// (2) h2 click
const headerClick = document.querySelectorAll('h2');
for (let i = 0; i < headerClick.length; i++) {
  const elementSiblings = allSiblings(headerClick[i]);
  headerClick[i].addEventListener('click', () => {
    for (const elementSibling of elementSiblings) {
      if (elementSibling.style.display === 'none') {
        elementSibling.style.display = 'block';
      } else {
        elementSibling.style.display = 'none';
      }
    }
  });
}

// opacity change
const noLongerScrolling = (callback) => {
	if (!callback || typeof callback !== 'function') return;
	let isScrolling;
	window.addEventListener('scroll', (event) => {
		window.clearTimeout(isScrolling);
		isScrolling = setTimeout(() => {
      callback();
    }, 3000);
	}, false);
};

const menuHide = document.querySelector('.navbar__menu');
noLongerScrolling(() => {
  menuHide.style.opacity = '0.1';
  menuHide.style.transition = "all 2s";
}
);

const eventsMenu = (event) => {
  menuHide.style.opacity = '1';
};

window.addEventListener('scroll', eventsMenu);
window.addEventListener('mouseover', eventsMenu);


// HELPER

const divsA = document.querySelectorAll('.landing__container');
for (let i = 0; i < divsA.length; i++)
  console.log(divsA[i]); // returns divs

const elements = document.querySelectorAll('.landing__container');
for (const elem of elements)
  console.log(elem.children); // returns HTMLCollection

console.log(divsA);
console.log(elements); // returns NodeList

console.log(divsA[0].innerHTML);
console.log(elements[0].innerHTML);

const children = elements.childNodes
console.log(divsA[0].firstElementChild);

// returns element’s position within the viewport
const navbar__menu = document.querySelector('.navbar__menu');
const bounding = navbar__menu.getBoundingClientRect();
console.log('element’s position', bounding);