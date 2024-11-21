var p;
var o = " ";

for(p=1;p<=10;p++){
    o += `<p>${p}</p>`; 
    document.getElementById("value").innerHTML = o;
    document.getElementById("value1").innerHTML += "A = "+p;
    console.log(p);
}
                                                                                    