// biga function no use karine
let p = document.getElementById("para");

function hidep(){
    p.style.display = "none";
}

function show(){
    // p.style.display = "block";
}

function toggle(){
    if(p.style.display == "none"){

        p.style.display = "block"

    }else{

        p.style.display = "none"

    }
}

let hidebtn = document.querySelector(".hidebtn");
hidebtn.addEventListener("click",hidep); 

let showbtn = document.querySelector(".showbtn");
showbtn.addEventListener("click",function() {
    p.style.display = "block";
})

let togglebtn = document.querySelector(".togglebtn");
togglebtn = addEventListener("click",toggle);

p.addEventListener("mouseenter",function (){
    p.style.color = "red";
    hidebtn.style.color = "white"
    hidebtn.style.backgroundColor = "blue";
})