import {Invoice} from './classes/Invoices.js'

const invOne = new Invoice('mario', 'work on the mario website', 250);
 const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
 
 console.log(invOne, invTwo);
 
 let invoices:Invoice[] = []
 Invoice.push(invOne);
 Invoice.push(invTwo);
 
 console.log(invoices);
 
 
 
 const form = document.querySelector( '.new-item-form' ) as HTMLFormElement
 
 
 //inputs
 const type = document.querySelector('#type') as HTMLSelectElement
 const tofrom = document.querySelector('#tofrom') as HTMLInputElement
 const details = document.querySelector('#details') as HTMLInputElement
 const amount = document.querySelector('#amount') as HTMLInputElement
 
 
 form.addEventListener('submit', (e:Event)=>{
     e.preventDefault();
 
     console.log(
         type.value,
         tofrom.value,
         details.value,
         amount.valueAsNumber
     )
 } )



 //Lesson 14: Modules