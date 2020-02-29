# Landing Page

[![Netlify Status](https://api.netlify.com/api/v1/badges/265ed584-60b2-41c9-a3e6-f0de705a2ddc/deploy-status)](https://app.netlify.com/sites/udacity-landing-page-project/deploys)

Udacity's [second project](https://udacity-landing-page-project.netlify.com/) for the Front End Developer Nanodegree Program.

## Files

The starter code is [here](https://github.com/udacity/fend/tree/refresh-2019/projects/landing-page). 

## Submission

Students needed to submit a multi-section page, with a dynamically updating nav menu based on the amount of content that is added to the page. 

To complete the project it was required to modify mainly the ```js/app.js``` file. Minor modifications had to be added to the ```index.html``` and ```css/styles.css``` files.

## Required Skills & Useful Resources

* [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) & [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
* [Understanding the DOM Tree and Nodes](https://www.digitalocean.com/community/tutorials/understanding-the-dom-tree-and-nodes)
* Accessing the DOM: [querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector), [querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll), getElementbyId(), getElementsByClassName(), etc.
* [HTMLCollection vs NodeList](https://medium.com/@layne_celeste/htmlcollection-vs-nodelist-4b83e3a4fb4b)
* [Introduction to browser events](https://javascript.info/introduction-browser-events)
* [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
* [Why is event delegation better?](https://gomakethings.com/why-is-javascript-event-delegation-better-than-attaching-events-to-each-element/)
* The [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) & [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) properties
* [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
* [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) (=, ==, ===, etc.)
* [getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
* [scrollTo()](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo)
* [How to modify attributes, classes & styles?](https://www.digitalocean.com/community/tutorials/how-to-modify-attributes-classes-and-styles-in-the-dom)
* [How to add active class to current element?](https://www.w3schools.com/howto/howto_js_active_element.asp)
* [How to get all siblings of an element?](https://stackoverflow.com/questions/4378784/how-to-find-all-siblings-of-currently-selected-object)
* [How to test if an element is in the viewport?](https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/)
* [How to detect when a visitor has stopped scrolling?](https://gomakethings.com/detecting-when-a-visitor-has-stopped-scrolling-with-vanilla-javascript/)
* [=> vs function](https://medium.com/the-non-traditional-developer/arrow-functions-vs-traditional-functions-in-javascript-8ff1a48ede12)
* [Functions - Understanding the Basics](https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99)
* [Common beginner's mistakes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto)
* [Clean Code](https://github.com/ryanmcdermott/clean-code-javascript)
* [A few principles of clean code](https://x-team.com/blog/principles-clean-code/)
* [Udacity JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
* [Udacity Git Commit Message Style Guide](https://udacity.github.io/git-styleguide/)
* [README Renderer](https://www.makeareadme.com/)
* [A curated list of awesome READMEs](https://github.com/matiassingers/awesome-readme)

## Details 

### Interface and Architecture

> The project should have a structure like the one shown below. All files shown must be present and the ```app.js``` must successfully render a home page with clear design and functionality added when ```index.html``` is loaded in the browser. No errors should display in console.

```
css
- styles.css    
index.html
js
- app.js
README.md
```
#### Usability

All features are usable across modern desktop, tablet, and phone browsers. Hamburger navigation bar* appears on smaller screens.

#### Styling

Styling has been added for active states.

#### HTML Structure

There are at least 4 sections that have been added to the page. Sections are collapsible/hideable with a click on their headings*.

### Landing Page Behavior

#### Navigation

Navigation is built dynamically as an unordered list.

#### Section & Navigation Active State

It is clear which section and navigation item* are being viewed while scrolling through the page.

👇

![Scrolling through and clicking](https://i.imgur.com/98JsPTO.gif)

#### Scroll 

When clicking an item from the navigation menu, the link scrolls to the appropriate section (rather than giving the default jump). Navigation bar changes opacity while the user is no longer scrolling*.

### Documentation

The ```README.md``` file has non-default text in it that is specific to this project and uses correct markdown.

#### Code Quality & Comments

Code is formatted with consistent, logical, and easy-to-read formatting as described in the [Udacity JavaScript Style Guide](hhttp://udacity.github.io/frontend-nanodegree-styleguide/javascript.html). Comments are present and effectively explain longer code procedure when necessary.

## Optional  

Marked with * are suggested extras, which were added to make this project stand out.

## Thanks

Thanks to the mentors and other students at [Udacity Knowledge](https://knowledge.udacity.com/) and to my friend [Katerina Loschinina](https://github.com/kateloschinina) for their help & patience 😊
