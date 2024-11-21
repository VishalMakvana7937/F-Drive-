function va(){
    var number = document.getElementById("room").value;
    var a = 1;
    var result;

    while(a<=10){
        result = a * number;
        var o = `${number} * ${a} = ${result}<br>`; 
        document.getElementById("values").innerHTML += o;
        // console.log(`${number} * ${a} = ${result}`);
        a++;
        
    }
}