// parameter function with arguments
function maxvalue(a,b,c){

    if(a>b){
        if(a>c){
            console.log("A is max");
        }else{
            console.log("C is max");
        }
    }else{
        if(b>c){
            console.log("B is max");
        }else{
            console.log("C is max");
        }
    }

}
maxvalue(20,10,30);

// parameter function with arguments
function mulvalue(x,n=10){

    for(i=1;i<=n;i++){
        // console.log(i);
        var s = `${x} * ${i} = ${x * i}`;
        console.log(s);
    }

}
mulvalue(5,8);

// return type function 
function sumvalue(a,b){

    var ans = a + b;
    return(
        ans
    )
    
}
var s = sumvalue(10,20);
console.log("Ans is:- "+s);

var p = sumvalue(10,40);
console.log("Ans is:- "+p)

