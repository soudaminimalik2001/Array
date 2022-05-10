var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var sum=0;
var sum1=0;
var c=0;
var c1=0;
for (i=0;i<elements.length;i++){
    if (elements[i]%2==0){
        c++
        sum+=elements[i]
    }
    else{
        c1++
        sum1+=elements[i]
    }
}
var avg=sum/c
console.log(avg);
console.log(c);
console.log(sum);
var avg1=sum1/c1
console.log(avg1);
console.log(c1);
console.log(sum1);
