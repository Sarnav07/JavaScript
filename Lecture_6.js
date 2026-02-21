// Document object Model

alert("Hello Guys!!");
console.log("Hello!");

// console.log() for elements
// console.dir() for objects
console.dir(window.document);

// document.body.style.background = "green";

// dynamic changes/manipulation : DOM

// DOM manipulation

let heading = document.getElementById("heading");
console.dir(heading);

//class can be same for multiple tags
let headingClass = document.getElementsByClassName("headingClass");
console.dir(headingClass);
console.log(headingClass);

let button = document.getElementById("myButton");
console.dir(button);

let paragraph = document.getElementsByTagName("p");
console.dir(paragraph);

// Query Selector : for all type  : returns node list 
let firstElements = document.querySelector("p"); // class start with a . (dot) , for id #
console.dir(firstElements);

let elements =  document.querySelectorAll("p");
console.dir(elements);

// Properties :
// tagName : returns tag for elements Nodes
// innerText : return the text context of the elements andits Children
// innerHTML : returns the plain text or HTML contents in the element 
// textContent : returns textual content even for hidden elements

console.log(button.tagName);
// DOM tree : text nodes, comment nodes , elements nodes

// parent , child , sibling : udes for navigation 

console.dir(document.body.firstChild);

let div= document.querySelector("div")
console.dir(div.innerText);
console.dir(div.innerHTML);

let Heading=document.querySelector("h1");
console.dir(heading.innerText); 


// Practice

let p1=document.querySelector("#P1");
console.dir(p1);
p1.innerText = p1.innerText + "From Me!";

