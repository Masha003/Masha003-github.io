# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript

### What I learned
This is my fisrt front-end mentor challenge! 

This project helped me recap the basics of HTML and CSS. It was more important for me to practice some of JavaScript essentials, and this project was a great start. I learned how to manipulate the DOM and to extract values from input elements depending on user's choice. 
I accomplished all these by the following JavaScript functions:


```js
for(let i=0; i<rating.length; i++){
    rating[i].addEventListener('click', function() {
        labRat[i].classList.add('checked');
        for(let j=0; j<rating.length; j++){
            if(i!=j){
                labRat[j].classList.remove('checked');
            }
        }
    });
}

function Submit(){
    let btn = document.querySelector('input[name="rating"]:checked');
    card.classList.add('hide');
    newCard.classList.remove('hide');
    ratValue.innerText = btn.value;
}
```

## Author

- Frontend Mentor - [@Masha003](https://www.frontendmentor.io/profile/Masha003)


## Acknowledgments

Credits to my favourite person and best friend who helped me out on this project - Alexandru Prohnitchi <3 :)
