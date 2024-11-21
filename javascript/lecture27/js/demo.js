let p = document.getElementById("para");
console.log(p);

function hide(){
    p.style.display = "none";
}

function show(){
    p.style.display = "block";
}

function toggle(){
    if(p.style.display == "none"){
        p.style.display = "block";
    }else{
        p.style.display = "none";
    }
}