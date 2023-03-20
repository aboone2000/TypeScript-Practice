"use strict";
//Example 1
const anchor = document.querySelector('a');
// Using the ! operator lets the file know that this query selector exsits in index.html.
//if(anchor){
//   console.log(anchor.href)
//}
console.log(anchor.href);
//Example 2
//const form = document.querySelector('form')!
const form = document.querySelector('.new-item-form');
//console.log(form.children)
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
