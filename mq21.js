var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
var array=[];
for (var i of n){
    if(!array.includes(i)){
        array.push(i)
    }
}
console.log(array);

// remove duplicate elements