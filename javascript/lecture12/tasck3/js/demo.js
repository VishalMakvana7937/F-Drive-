function inte(){
    var p = document.getElementById("rooms").value;
    var i = 10.5;
    var y = document.getElementById("room1").value;
    var r;

    if(y>3 && y<=5){
        r = 3;
    }else if(y>5 && y<=8){
        r = 5;
    }else if(y>8 && y<=12){
        r = 12;
    }else{
        r = 15;
    }

    var o = (p * r * y) / 100;
    var im = p + o;
    
    document.getElementById("value").innerHTML = "Principal Amount :- "+p;
    document.getElementById("value1").innerHTML = "Interest Rate :- "+i;
    document.getElementById("value2").innerHTML = "Number Of Years :- "+y;
    document.getElementById("value3").innerHTML = "Rupees :- "+r;
    document.getElementById("value4").innerHTML = "Total Interest :- "+o;
    document.getElementById("value5").innerHTML = "Total Interest and Principal Amount:- "+im;
  }