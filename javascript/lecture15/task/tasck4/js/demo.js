// function room(){
//     var a = document.getElementById("ans").value;
//     var len = a.length;
//     var i;
//     var msg;

//     for(i=0;i<len/2;i++){
//         if(a[i] != a[len-1-i]){
//             document.getElementById("value").innerHTML = "It is not a palindeom";
//         }else{
//             document.getElementById("value").innerHTML = "It is a palindeom";
//         }
//         // console.log(`${a}: ${msg}`); 
//     }
// }

function clas(){
    var num = document.getElementById("a1").value;
    var originalnum = num;
    var reverse = 0;

    while(num != 0){
        reverse = (reverse * 10) + (num % 10);
        console.log(reverse);
        num = parseInt(num/10);
        console.log(num);
    }
    if(originalnum == reverse){
        document.getElementById("valu").innerHTML = reverse+" is Palindrome number";
    }else{
        document.getElementById("valu").innerHTML = reverse+" is not Palindrome number";
    }
}