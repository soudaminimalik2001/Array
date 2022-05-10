var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"];

for(var j of char_list){
    var count=0
    for(var k of char_list){
        if (j === k){
            count+=1
        }
    }
    console.log(j,count," times");

}
