function sta(){

    let n = document.getElementById("room").value;
    var i = 1;
    var s = 1;

    while(i<=n){

    s = s * i 
    i++
        document.getElementById("values").innerHTML = "Factorial is = " + s;
    }

}
