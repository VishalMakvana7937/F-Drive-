// Function Declaration...
function mulf(a,b){
    // var a = 20;
    // var b = 10;
    
    console.log("Mul is:- "+ a * b);
}
mulf(2,2);

// Function Expression...
var divf = function(){
    var a = 10;
    var b = 2;

    console.log("Div is:- "+ a/b);
    console.log("Sub is:- ", a+b);
}
divf();

// Arrow Function.
var arrof = a => "Goog morning " + a;

var s = arrof("Rakesh");
console.log(s);
var o = arrof("jay");
console.log(o);

// recursion in javascript
function re(a){
    console.log(a);
     
    var num = a - 1;

    if(num > 0){
        re(num);
    }
}
re(20);






