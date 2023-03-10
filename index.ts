//ANY Type
let age: any = 25

age = true
console.log(age)
//age is a boolean and equal to true.

age = 'hello'
console.log(age)
// age is changed to a String and equal to 'hello'.

age = {name: 'luigi'}
console.log(age)
// age is changed to a Object and it's name is 'luigi'. 
// With the ':any' Type it can use any type allowed. 
//Think twice before using the any type because you don't know what variables are going to be used in the future.



let mixed: any[] = []

mixed.push(5)
mixed.push('maario')
mixed.push(false)
console.log(mixed)
// The mixed array is allowed to implement and push any Type into the array.

let ninja : {name: any, age: any}
//when declaring a Value use the '='operator.
//when declaring a Type use the ':' Sign.

ninja = { name: 'ninja', age: 20}

console.log(ninja)



//Think twice before using the any type because you don't know what variables are going to be used in the future.