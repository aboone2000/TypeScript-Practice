"use strict";
//Lesson 15: Interfaces
Object.defineProperty(exports, "__esModule", { value: true });
const Invoices_js_1 = require("./classes/Invoices.js");
const invOne = new Invoices_js_1.Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoices_js_1.Invoice('luigi', 'work on the luigi website', 300);
console.log(invOne, invTwo);
let invoices = [];
Invoices_js_1.Invoice.push(invOne);
Invoices_js_1.Invoice.push(invTwo);
console.log(invoices);
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
