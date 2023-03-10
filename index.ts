// Explicit types
let character: string
let age: number
let isLoggedIn: boolean


//age ='Lugi': This change cannot work because the variable age is already is give a specific type, so it cannot be used differently unless changed in the variable above.
age = 30
//age = 30: Works because the value is a number


//isLoggedIn = 25 Cannot work because the value is a number but the Type in line #3 canonly be a boolean which is (true or false)

//Arrays
let ninjas: string[] = ["a", "b", "c", "d", "e" ]
//ninjas array should only be a string since the type is a String[]

ninjas.push('f')
//.push('f') adds the value 'f' to the end of the array.



// Union types
let mixed: (string|number|boolean)[] = []
mixed.push('hello')
mixed.push(30)
mixed.push(true)
console.log(mixed)
//The mixed array is allowed to have  "String" and/OR "Boolean" and/OR "Number" Typs in the array since they are declared at the creaing of the variable above.



let uid: string|number
uid ='123'
uid =123

// Objects
let ninjaOne: object
ninjaOne = {name: 'yoshi', age: 30}

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
    // Any variable can be declared a object without using the 'Object' Type just add the curly brackets, but when creating the properties define what Type is allowed in the properties     
}

ninjaTwo = {name: 'mario', age: 20, beltColor: 'black'}
//The ninjaTwo Variable can be redeclared but has to have the same properties, but can switch the values of each property.