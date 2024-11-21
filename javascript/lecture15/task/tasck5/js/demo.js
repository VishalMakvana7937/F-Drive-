// var a = 0;
// var b = 1;

// console.log(a);
// console.log(b);

// for(i=0;i<=10;i++){
//     temp = a + b;
//     console.log(temp); // 0 + 1 = 1
//     a = b; // 0 => 1
//     b = temp; // 1 => 1
// }
function ans(){
    var num = document.getElementById("v1").value;
    var x = 0;
    var y = 1;
    var fn = x;

    while(fn < num){
        // console.log(fn);
        fn = x + y;
        x = y;
        y = fn;
        console.log(fn);
        document.write(fn);
    }
}