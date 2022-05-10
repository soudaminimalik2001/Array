var number = 30;
var n = [10, 11, 12, 13, 14, 17, 18, 19];
var array=[];
for (var i of n){
    for (j of n){
        if (i+j==number){
            array.push([i,j])
        }
    }
}
console.log(array);


