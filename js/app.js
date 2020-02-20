/* JS IS <3 */




// adds anchor class for nav
const addClassesSections = document.getElementsByTagName('section');
for (let i = 0; i < addClassesSections.length; i++) {
  addClassesSections[i].classList.add('anchor-for-nav');
}

// calls for sections by class & returns NodeList
// loop: creats <li>, calls for data attribute (data-nav) & adds link
const nodeList = document.getElementsByClassName('anchor-for-nav');
const ul = document.getElementById('navbar__list');
for (let i = 0; i < nodeList.length; i++) {
  let sectionLink = nodeList[i].getAttribute('data-nav');
  let li = document.createElement('li');
  li.innerHTML = sectionLink.link('#' + nodeList[i].getAttribute('id'));
  ul.appendChild(li);
}

// adds class, ID & scroll to newly created <a>
const addLinkStyle = document.querySelectorAll('a');
for (let i = 0; i < addLinkStyle.length; i++) {
  addLinkStyle[i].classList.add('menu__link')
  addLinkStyle[i].setAttribute('id', 'section' + [i+1]);
}
const anchorScrollSmooth = document.getElementsByClassName('anchor-for-nav');
for (let i = 0; i < anchorScrollSmooth.length; i++) {
  let topElement = anchorScrollSmooth[i];
  let linkScroll = addLinkStyle[i]; // scroll
  const top = topElement.getBoundingClientRect().top + window.pageYOffset
  linkScroll.addEventListener('click', (elem) => {
    elem.preventDefault();
    let scrollSet = {
      top: top,
      left: 0,
      behavior: 'smooth'
    };
    window.scrollTo(scrollSet);
  });
}

// active 
const windowBounding = (element) => {
  const distance = element.getBoundingClientRect();
  return (
    distance.top >= 0 && 
    distance.left >= 0 &&
    distance.bottom <= window.innerHeight
  );
}
const addScrolls = document.querySelectorAll('section');
for (let i = 0; i < addScrolls.length; i++) {
  window.addEventListener('scroll', () => {
    if (windowBounding(addScrolls[i])) {
      addScrolls[i].classList.add('your-active-class')
      addLinkStyle[i].classList.add('active')
    } else {
      addScrolls[i].classList.remove('your-active-class')
      addLinkStyle[i].classList.remove('active')

    }
  });
}

// adds attribute to <li> UNUSED
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
burgerMenu.onclick = function burger() {
  let burgerBar = document.querySelector('.navbar__menu');
  if (burgerBar.style.display === 'block') {
    burgerBar.style.display = 'none';
  } else {
    burgerBar.style.display = 'block';
  }
}

// collapsible/hideable section 

// (1) siblings of h2
const allSiblings = function(elem) {
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
  headerClick[i].addEventListener('click', function() {
    for (const elementSibling of elementSiblings) {
      if (elementSibling.style.display === 'none') {
        elementSibling.style.display = 'block';
      } else {
        elementSibling.style.display = 'none';
      }
    }
  });
}

// HELPER

const divsA = document.querySelectorAll('.landing__container');
for (let i = 0; i < divsA.length; i++)
  console.log(divsA[i]) // returns divs

const elements = document.querySelectorAll('.landing__container');
for (const elem of elements)
  console.log(elem.children) // returns HTMLCollection

console.log(divsA)
console.log(elements) // returns NodeList

console.log(divsA[0].innerHTML)
console.log(elements[0].innerHTML)

const children = elements.childNodes;
console.log(divsA[0].firstElementChild);

// returns element’s position within the viewport
const navbar__menu = document.querySelector('.navbar__menu');
const bounding = navbar__menu.getBoundingClientRect();
console.log('element’s position', bounding);