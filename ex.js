
// let fruits = ['Apple', 'Banana', 'Orange']
 
// let a=fruits.splice(1,0,"lemon","kiwi");
// console.log(a);

// var input=require("readline-sync");
// var a=input.questionInt("enter number:");
// var b=input.questionInt("enter number2:");
// var c=a-b;
// console.log(c);

// var array=[12,13,5,7,12,6,5,7,12,13,8,9,12];
// var array1=[];
// for (i=0;i<array.length;i++){
//     for (j of array){
//         if (array[i]==array[j]){
//             array1.push(array[i])
//         }
//     }
// }
// console.log(array1)

var a="soudamini";
var b=[...a];
// console.log(b)
var c=0;
for (var i=0;i<b.length;i++){
    if (b[i]=="i"){
        c++
    }
}
console.log(c)