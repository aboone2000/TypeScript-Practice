"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Lesson 16: Interfaces with classes
const Invoice_js_1 = require("../src/classes/Invoice.js");
const payment_js_1 = require("../src/classes/payment.js");
//let docOne: HasFormatter
//let docTwo: HasFormatter
//docOne = new Invoice('yoshi', 'web work', 250 )
//docTwo = new Invoice('mario', 'plumbing work', 350)
//let docs: HasFormatter[] =[]
//docs.push(docOne)
//docs.push(docTwo)
//
//console.log(docs)
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice_js_1.Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment_js_1.Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
