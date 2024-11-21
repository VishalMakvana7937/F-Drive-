// Armstrong number 0,1,153,370,371,407
function ans(){
    var x = document.getElementById("room").value;
    var sum = 0;
    var temp=x;
    var y;

    while(temp>0){
        y = temp % 10;
        sum += y**3;
        temp = parseInt(temp/10);;
    }

    document.getElementById("values1").innerHTML = x,sum;

    if(x==sum){
        document.getElementById("values2").innerHTML = "yes! Armstrong";
    }else{
        document.getElementById("values2").innerHTML = "not! Armstrong";
    }
}