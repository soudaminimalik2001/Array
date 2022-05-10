var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var sum=0;
var sum1=0;
for (var i=0;i<elements.length;i++){
    if (elements[i]%2==0){
        sum+=elements[i]
    }
    else{
        sum1+=elements[i]
    }
}
console.log(sum);
console.log(sum1);