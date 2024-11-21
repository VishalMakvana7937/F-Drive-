function room(){
    var unit = document.getElementById("total").value;;
    var r;
    var p;

    if(unit>=1 && unit<=50){
        r = unit * 1;
    }else if(unit>=51 && unit<=100){
        r = 50 * 1 + (unit - 50) * 2;
    }else if(unit>=101 && unit<=250){
        r = 50 * 1 + 100 * 2 + (unit - 150) * 3;
        if(unit>150){
            p = r * 0.20;
            r += p;
        }else{
            console.log("No extra charge"); 
        }
    }else if(unit>=251){
        r = 50 * 1 + 100 * 2 + 250 * 3 + (unit-400) * 4;
        if(unit>150){
            p = r * 0.20;
            r += p;
        }else{
            console.log("No extra charge"); 
        }
    }

    document.getElementById("values").innerHTML = "Total = "+r;
}