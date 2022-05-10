var array=[2,4,6,8,10,12,14,16,18,20];
var max=array[0];
var max2=0
for (var i=0;i<array.length;i++){
    if (array[i]>max){
        
        max=array[i]
    }
    if (max2<array[i]<max){
        max2=array[i]
    }
}
console.log(max);
console.log(max2);


//     if (array[i]>max){
//         if (max>max2){
//             max2=max;
//         }
//         max=array[i];
//     }
//     else{
//         if (max2<array[i]){
//             max2=array[i];
//         }
//     }
// }
// console.log("max",max)
// console.log("max",max2)