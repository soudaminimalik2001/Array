// Array methods
// 1.join():-
// ------------------
// var fruits = [2, 5, 4,3];
// var b=fruits.join("*");
// console.log(b);
// o/p-2*5*4*3
// hints:-if you want to add something between the element like "and","*" then you can use join method 

// 2.delete():-
// ----------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];
// console.log(fruits);
// o/p-[<1 empty item>,"orange","Apple","Mango"]

// 3.concat():-
// --------------------
//const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2,arr3);
// console.log(myChildren);
// o/p-["Cecilie", "Lone","Emil", "Tobias", "Linus","Robin", "Morgan"]

// 4.length():-
// ------------------
// var a=["soudamini","kalyani","Namita","Anita"];
// const b=a.length;
// console.log(b);
// o/p-4

// 5.sort():-
// ------------------
//var a=["soudamini","kalyani","Namita","Anita"];
// a.sort();
// console.log(a);
// o/p-["Anita","Namita","kalyani","soudamini"]

// 6.pop():-
// ----------------
// var a=["soudamini","kalyani","Namita","Anita"];
// a.pop();
// console.log(a);
// o/p-["soudamini","kalyani","Namita"]

// var a=["soudamini","kalyani","Namita","Anita"];
// const b=a.pop();
// console.log(b);
// o/p:-Anita
// hints:-if we store pop in a other variable then it give which was removed.

// 7.push():-
// ------------------
//var a=["soudamini","kalyani","Namita","Anita"];
// a.push("chiku");
// console.log(a);
// o/p-["soudamini","kalyani","Namita","Anita","chiku"]

// 8.shift():-
// --------------------
//var a=["soudamini","kalyani","Namita","Anita"];
// a.shift();
// console.log(a);
// o/p-["kalyani","Namita","Anita"]

// 9.unshift():-
// --------------------
//var a=["soudamini","kalyani","Namita","Anita"];
// a.unshift("sister");
// console.log(a)
// o/p-["sister","soudamini","kalyani","Namita","Anita"];

// 10.reverse():-
// ----------------------
//var a=["soudamini","kalyani","Namita","Anita"];
// a.reverse();
// console.log(a);
// o/p-["Anita","Namita","kalyani","soudamini"]

// 11.isArray():-
// ---------------------
//var a=["soudamini","kalyani","Namita","Anita"];
// var check=Array.isArray(a)
// console.log(check)
// o/p-true

// 12.concat():-
// -----------------------
//var array=["soudamini","kalyani"];
// var array1=["Namita","Anita"];
// console.log(array.concat(array1));
// o/p-["soudamini","kalyani","Namita","Anita"]

// 13.indexof():-
// ---------------------
// var a=["soudamini","kalyani","Namita","Anita"];
// console.log(a.indexOf("kalyani"));
// o/p-1

// 14.splice():-
// -------------------------
// var a=["soudamini","kalyani","Namita","Anita"];
// var b=a.splice(1,1);
// console.log(b);
// console.log(a);
// a.splice(2,0,"chiku","liku","jisu")
// console.log(a)
// o/p-"kalyani"
// o/p-["soudamini","Namita","Anita"]
// o/p-["soudamini","kalyani","chiku","liku","jisu","Namita","Anita"]

// 15.toString():-
// --------------------
// var a=["soudamini","kalyani","Namita","Anita"];
// a.toString()
// var b=a.toString();
// console.log(a);
// console.log(b);
// o/p-["soudamini","kalyani","Namita","Anita"]
// o/p-soudamini,kalyani,Namita,Anita

// 16.fill():-
// ----------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi",1);
// console.log(fruits);
// 0/p:["banana","kiwi","kiwi","kiwi"]
// it give kiwi which are the given index.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi", 1,3);
// console.log(fruits);
// o/p:["banana","kiwi","kiwi","mango"];

// 17.copyWithin():-
// ---------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(2,0);
// console.log(fruits);
// ["banana","orange","banana","orange"]

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(3, "orange");
// console.log(fruits);
// o/p-["banana","orange","apple","banana"]
// if you are write the element then it by default copy the first element in the given index.

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.copyWithin(3, 0, 3);
// console.log(fruits);

// 18.entries:-
// ---------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let x of f) {
//   console.log(x);
// }
// o/p:
// [0,"banana"]
// [1,"orange"]
// [2,"apple"]
// [3,"mango"]

// 19.forEach():-
// -------------------------
// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach(function(arr){
//     console.log(arr)
// })
// o/p=apple
// orange
// cherry
// hints:-it give the  each element of the array

// 20.from():-
// -------------------
// var a=Array.from("ABCDEFG")
// console.log(a);
// // o/p-["A","B","C","D"."E","F","G"]

// 21.indexof():-
// ------------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = fruits.indexOf("Apple");
// console.log(index)
// o/p:-2

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// let index = fruits.indexOf("lemon");
// console.log(index);
// o/p=-1

// 22.key():-
// -------------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();
// for (let x of keys) {
//     console.log(x);
// }
// // o/p=0
// 1
// 2
// 3

// 23.lastindexof():-
// ----------------------------
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let index = fruits.lastIndexOf("Apple");
// console.log(index)
// o/p=2

// 24.slice():-
// ----------------------
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const myBest = fruits.slice(1, 4);
// console.log(myBest);

// 25.some():-
// -----------------------
// const ages = [3, 10, 18, 20];

// let a=ages.some(checkAdult);
// function checkAdult(age) {
//   return age < 18;
// }
// console.log(a)
// o/p=true
// if one of the element is satisfied the condition then it give true,else give false.

// 26.valueof():-
// -------------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const myArray = fruits.valueOf();
// console.log(myArray);
// o/p=["Banana", "Orange", "Apple", "Mango"]

// 27.every():-
// ------------------
// const ages = [32, 33, 16, 40];

// const a=ages.every(checkAge)

// function checkAge(age) {
//   return age > 18;
// }
// console.log(a);
// o/p=false
// if every element is greater than 18 then it give true,but 16 is less than 18 then it give false.

// 28.filter():-
// --------------------
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result);
// o/p:-[32,33,40]
// if age<18 given condition is false it give empty array([]).

// 29.find():-
// ------------------
// const ages = [32, 33, 16, 40];
// const result = ages.find(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result);
// o/p:-32
// hints:-it condition is true it give first element which is true,if condition is false then it give undefined.


// 30.findIndex():-
// ------------------
// const ages = [32, 33, 16, 40];
// const result = ages.findIndex(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result);
// o/p:0
// hints:-it give the first element index.


//31. includes():-
// -------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const a=fruits.includes("Apple");
// console.log(a);
// o/p:-true

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const a=fruits.includes(!"Apple");
// console.log(a);
// o/p:-false

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const a=fruits.includes("Banana", 3);
// console.log(a);
// o/p-false

// 32.map():-
// --------------------
// const fruits=["banana","orange","apple","mango"]
// const a=fruits.map(fname)
// function fname(val){
//     return val+"lemon"
// }
// console.log(a);
// o/p:-["bananalemon","orangelemon","applelemon","mangolemon"]

// 33.reduce():-
// ---------------
// const str=["t","s","e","b"]
// const best=str.reduce((accumlator,currentvalue)=>accumlator+currentvalue);
// console.log(best)
// o/p:-tseb

// 34.reduceRight():-
// const str=["t","s","e","b"]
// const b=str.reduceRight((accumlator,currentvalue)=>accumlator+currentvalue);
// console.log(b)
// o/p:-best

// 35.slice():-
// --------------------
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);
// o/p:-["orange","lemon"]

// 36.valueOf():-
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const myArray = fruits.valueOf();
// console.log(myArray);
// o/p:-["banana","orange","apple","mango"]