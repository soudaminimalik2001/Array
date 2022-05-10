var list1 = [1,2,3,4,5,6];

var list2 = [2,3,1,0,6,7];
var list3=[];
for (var i=0;list1[i].includes (list2[i]);i++){
    list3.push(i)
}
console.log(list3);