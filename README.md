# FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](/images/final-screenshot.png)

### Links

- [Solution Repository](https://github.com/humbruno/faq-accordion)
- [Live URL](https://humbruno.github.io/faq-accordion/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

By far, the biggest challenge with this one was setting up the images differentiation between mobile and desktop.

I tried several different approaches before landing on a `div`for each one and giving it a `display: none` property on the opposing media query.

This helped me realize that there isn't always a "correct" way of doing things and that there are multiple ways to tackle a problem.

The accordion expansion animation is something I haven't been able to improve, as the animation has a "snap" feeling to it.

The accordion initially has a `max-height: 0` property which changes to `max-height: 500px` when active. This is theoreticaly an "unnatainable" max height that an FAQ item will never have, and it´s so the content adjusts itself to the amount of letters in each item.

The animation was a lot smoother when I set a fixed height such as `height: 50px` when expanding, but this isn't a scalable solution as not every item has the same number of letters therefore needs more/less space.

I am overall satisfied with the final results but do realize there is much to improve on when it comes to preparing my code structure ahead of starting to write it.
