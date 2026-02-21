// Loops : to execuete a file of code again and again
for (let i =1; i<=5; i++){
    console.log("i=" ,i);
    console.log("It's me!");
}  // blosscope

// calculate sum from 1 to 5

let sum=0;

for (let i =1 ; i<=5 ; i++ ) {
    sum+=i; // sum sum + i
    
}
console.log(sum)

// while loop

let i = 1;
while (i<=5) {
    console.log("i=",i);
    i++;
}

// do-while loop 
let a=20;
do {
    console.log(a);
    a++;
} while(a<=20);


// for-of loop : strings and arrays
let Name='Sarnav';
let length =0;
for ( let i of Name) {
    console.log(i);
    length++;
}
console.log(length)

// for-in loop : Objects

let student = {
    name : "Sarnav Kansal",
    age:18,
    cgpa : 8.7
};

for (let i in student) {
    console.log("key=",i,"value=",student[i]);
}


// Task :
let m;

for (let m=0;m<=100;m++) {
    if (m%2 === 0) {
        console.log(m);
    }

}

// let gamNumber = "18";
// let Guess =prompt("Guess the game Number.")

// while (gamNumber != Guess) {
//     prompt("You entered wrong number!");

// }
// console.log("Congo!")



let str1="Srnav";
let str2='Kansal';
console.log(str1.length);
console.log(str1[2]);

// Template Literals

let specialString =`This is a template literal.`

console.log(typeof specialString);

let object = {
    item:"pen",
    price:10
}
let output = `The price of this ${object.item} is ${object.price} ruppess!`
console.log(output)
console.log("The price of this", object.item , "is" , object.price ,"ruppess!")

let str="Sarnav\nKansal"
let str3="    Sar    Kan   nav   sal"
console.log(str) // \t for tab space between words
console.log(str.length)

// String Methods
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str3.trim());
console.log(str.slice(0,3));
console.log(str.concat(str3));
console.log(str.replace("a","i")); // replaceAll
console.log(str.charAt(5));
// strings are immutable in js


//Task
let fullName =prompt("Enter your full name!");
console.log(fullName);

let username= '@' + fullName+ fullName.length;
console.log(username);
