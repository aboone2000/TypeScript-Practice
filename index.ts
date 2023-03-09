//TypeScript Basics:
// 1.Cannot change the Type afer already  being declared.
// 2. TypeScript code with have an error if a javascript file is open 

let character = 'mario'
let age = 30
let isBlackBelt = false

character = 'luigi'

//age = 'Yoshi'

age = 40

//isBlackBelt = 'yes'
isBlackBelt = true


const circ = (diameter: number) => {
    return diameter * Math.PI
}

console.log(circ(7.5))