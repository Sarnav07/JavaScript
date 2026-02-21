let marks= [ 97, 80,90,96,98];
console.log(marks);
console.log(marks.length);

let heros=["Ironman", "Hulk" , "Captain America","SpiderMan" , "AntMan","Vision","Black Panther"];
console.log(heros);
console.log(typeof heros);
console.log(heros[0]);
marks[0]=90;
console.log(marks[0]) // strings in js are immutable but array are mutable

// loops : iterable -> strings , objects , arrays   

for ( let i=0 ; i<heros.length;i++) {
    console.log(heros[i])
}

for (let el of heros) {
    console.log(el);
}

//Task 
let mar = [85,97,44,37,76,60];
let len = mar.length;
let sum=0;
// for (let i=0;i<len;i++) {
//     sum+=mar[i];
// };
for (let value of mar) {
    sum+=value;
}
console.log(`total marks are : ${sum}`);
let average = sum/len;
console.log(average)



let prices=[250,645,300,900,50];
let i=0;
// let offer=10;
// let le=prices.length;

// for(let i=0;i<le;i++) {
//     prices[i]-=prices[i]/10;
// }
// console.log(prices)
for (let val of prices){
    let offer=val/10;
    prices[i]-=offer;
    console.log(`Value after offer${prices[i]}`)
    i++;
}

let cg=[9,9,9];
cg.push(9);
cg.push(8,8,8);
console.log(cg);
cg.pop();
console.log(cg);
console.log(cg.toString());

console.log(heros.concat(mar,cg));
console.log(cg.unshift(8));
console.log(cg.shift());

console.log(heros.slice(1,3));

console.log(cg.slice(1,2,10,10));

// Task

let company = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix" ];

let removeFirst = company.shift();
console.log(removeFirst);
console.log(company);

let removeAdd= company.splice(1,1,"Ola");
console.log(removeAdd);
console.log(company);

let add = company.push("Amazon");
console.log(add);
console.log(company);

