// nested function...
function sumf(x,y){
    function divf(z){

        console.log("i'am chaild fun...");
    
        for(i=1;i<=10;i++){
            var p = `${z} / ${i} = ${z/i}`;
            console.log(p);
        }
        
    }

    var ans = x + y;
    console.log("I'am parent fun..",ans);

    divf(ans);
}
sumf(20,10);

// closure  function...
function clof(){

    console.log("i'am closure  fun...");

    function pare(){
        console.log("i'am parent fun...");
    }

    return pare;

}
var h = clof();
console.log(h);
h();

// IIFE (Immediately Invoked Function Expression)
(function(d){
    console.log("I'am IIEF fun...",d);
}) (32);