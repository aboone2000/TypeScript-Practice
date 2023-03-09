// Arrays
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad')
//names.push(3) : The Variable cannot add any other types excpect from what is specificly already declared above. No (Numbers, Booleans)

// numbers variable can only declare the same type which below is only numbers
let numbers = [10, 20, 30, 40, 50, 60,]

numbers.push(25)
//numbers.push('shaun')
//numbers[1] = 'shaun'



//The mixed variable can declare any TYPE as long as it is declared when the variable is first defined.
let mixed = ['ken', 4, 'chun-li', 8, 9]

mixed.push('ryu')
mixed.push(10)
mixed[0] = 3

// Objects
let ninja = {
    name: 'mario',
    belt:'black',
    age:30
}


ninja.age = 40
ninja.name = 'ryu'
//ninja.age = '30': The ninja variable number could have been changed, but age was already set as Number Type in the beginning so can't change it now.
//ninja.skills = ['fighting']: The skills property couldn't be added to the object because it wasn't declared in the object

ninja = {
    name:'yoshi',
    belt:'orange',
    age:40,
    //skills:[]: The Ninja object can be declared as a new object but the redeclared object has to have the same exact Types no new added Types allowed if using the same object name.
}