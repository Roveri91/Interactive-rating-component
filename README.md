## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [https://github.com/Roveri91/Interactive-rating-component.git](https://your-solution-url.com)
- Live Site URL: [ https://roveri91.github.io/Interactive-rating-component/](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Flexbox
- CSS Grid
- Class and Id Selector
- querySelectors

### What I learned

In this project i learn:

To select Element by Id, Class or name 

```js
  const thank = document.querySelector(".thanks");
  const submitButton = document.getElementById("submit");
  const rates = document.querySelectorAll(".btn");
```

To triggle event when user interact with the website

```js
  const submitButton = document.getElementById("submit");
   submitButton.addEventListener("click", () => {
        rating.classList.add("hide");
        thank.classList.remove("hide");  
 });
```

To add and remove classes to an HTML tag using JavaScript

```js
 const rating = document.querySelector(".rating");
 rating.classList.add("hide");
```

### Continued development

In the future i would like to keeep focusing on the CSS box element and display property

and use more JS in order to make a interactive website 

### Useful resources

- [Ex 1](https://www.youtube.com/watch?v=FKQkx-wGexo) - This video tutrial helps to understand how to add and remove class to a HTML tag element;

- [Ex 2](https://www.youtube.com/watch?v=SXb5LN_opbA) - This video clearly explain the .foreach function usefull for iterate inside the 5 rating choice;

## Author

- GitHub - [Roveri91](https://github.com/Roveri91)
- Frontend Mentor - [Roveri91](https://www.frontendmentor.io/profile/Roveri91)
