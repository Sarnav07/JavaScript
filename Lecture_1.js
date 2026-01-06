const fullName = "Sarnav";
var age = 19;
var height = 5.8;
var x = null;
var y = undefined;
const isStraight = true;
console.log('Here we go!')
console.log(height);
console.log(isStraight)

/* Variables are case-sensitive
only letters , digits , underscore and $ is allowed
only a letter, underscore or $ should be 1st letter 
reversed words can't be variable name */

/* fullName : Camel case
fullname : 
full_name : Snake case
full-name : Kebab case
FullName : Pascal case */

/* var : variable can be re-declared and updated . A global scope variable 
let : Variable cannot be re-declared but be updated . A block scope variable
const : Variable can be re-declared or updated . A block scope variable. Block : {} */

let a = 10;
a = 15;
console.log(a)

{
    let a = 18;
    console.log(a);
}

{
    let a = 19;
    console.log(a)
}

/* Data types in Js

Primitives ( fixed ) : Number ,String ,Boolean ,Undefined ,Null ,BigInt ,Symbol
Non-Primitives : Objects [ Arrays , Functions ] - Collection of values. ( key : value ) */

console.log(typeof age);

let c = BigInt("123")
console.log(c)

let d = Symbol("Hello!")
console.log(d)

const student = {
    name : "Sarnav" ,
    Age : 19,
    CGPA : 8.7 ,
}
console.log(student)
console.log(student.Age)
console.log(student["Age"])

// Practice Question : 1
const product = {
    title : "Ball Pen",
    rating : 4,
    offer : 5,
    price : 250,
    isDeal : true,
}
console.log(product)

// Practice Question : 2
