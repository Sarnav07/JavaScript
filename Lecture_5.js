function myFunction() {
    console.log("Hello!")
}

myFunction();

function output(msg) {
    console.log(msg);
}

function sum(a,b) {
    console.log("sum = ",a+b);
    let s= a+b;
    return s;
}

let val =sum(1,10);
console.log(val);


// Arrow functions

const arrowSum = (a,b) => {
    console.log(a+b);
};
    
console.log(arrowSum(1,2));

const arrowMultiplication = (a,b)=> {
    console.log(a*b);
};

console.log(arrowMultiplication(2,4));

// Practice 

function vowelsCount (string) {
    let count = 0;
    for(const char of string) {
        if (char === 'a'|| char === 'e' || char === 'i'|| char ==='o'|| char==='u') {
            count+=1;
        }
    }
    console.log(count);
    return count;
}
vowelsCount("sarnav");

const arrowVowelsCount = (string) => {
    let count = 0;
    for(const char of string) {
        if (char === 'a'|| char === 'e' || char === 'i'|| char ==='o'|| char==='u') {
            count+=1;
        }
    }
    console.log(count);
    return count;
}

arrowVowelsCount("sarnav");

// For-each method :for arrays and strings
// arr.forEach(callBackFunction)
// functions can be passed as normal variables and get returned from different functions
// CallBack function is a function passed as an argument to another function.


// inside forEach method arrow function is preferrd 

let heros=["Ironman", "Hulk" , "Captain America","SpiderMan" , "AntMan","Vision","Black Panther"];

heros.forEach( (val , idx , array) => { // val is value at each index
    console.log(val,idx , array );
    console.log(val.toUpperCase());  // forEach only for arrays 
    // higher order method/function  : function that use other function as parameters or return other functions
})


let numbers = [1,2,3,4,5,10,6,,7];

numbers.forEach((val)=> {
    console.log(val**2);
})

let newArray = numbers.map((val)=> {
    return val;
}) // similar to forEach but also creates array 
console.log(val);

// filter : to get true conditon satisfies

let evenArray = numbers.filter((val) => {
    return val%2==0;
})
console.log(evenArray);

// reduce : to get single output

const out = numbers.reduce((result,current)=>{
    return result+current;
})
console.log(out);

const greater = numbers.reduce((result,current) => {
    // if (result>current) {
    //     return result;
    // } else {
    //     return current;
    // }
    return result > current ? result : current;
})
console.log(greater)

//Practice

let marks=[60,70,80,90,92,94,96,98];
const aboveNinety = marks.filter((val)=> {
    return val>90;
})
console.log(aboveNinety);

let n=prompt("Enter the number to array upto");
let numberArray=[];
for (let i=1;i<n;i++) {
    numberArray.push(i);
}
console.log(numberArray);

const summation= numberArray.reduce((result,current) => {
    return result+current;
})
console.log(summation);

const Multiplication = numberArray.reduce((result,current)=>{
    return result*current;
})
console.log(Multiplication);


