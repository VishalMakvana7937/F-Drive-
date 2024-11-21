// var array = [1,2,3,4,5];
var array = ['vivo','lenovo','samsung','oppo','jio'];
console.log(array);
array [3] = 20;
console.log(array);
console.log(array.length);

function room(pas,arr){
    array [pas] = arr;
}      
room(1,99);
console.log(array);

for(i = 0;i<=array.length-1;i++){
    console.log(`array[${i}] == ${array[i]}`);
}

var a = new Array(30);
console.log("arrey === ",a.length);
a [0] = 10;
a [1] = 20;
a [2] = 40;
console.log(a);

var p = [1,2,3,[4,5,6],[7,8,9]];
console.log(p[3]);
console.log(p[4]);
// console.log(p[5]);



