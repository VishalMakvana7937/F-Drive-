// DOM full form Document Object Module

// creat html tage and array method
let movie = ["rrr","pathan","bajar","gadar 2"]

let div = document.createElement("div");
document.body.append(div);

let p1 = document.createElement("p");
p1.textContent = movie[0];
div.append(p1);

let p2 = document.createElement("p");
p2.textContent = movie[1];
div.append(p2);

let p3 = document.createElement("p");
p3.textContent = movie[2];
div.append(p3);

let p4 = document.createElement("p");
p4.textContent = movie[3];
div.append(p4);

// using forEach 
movie.forEach((movie) => {
    let p = document.createElement("p");
    p.textContent = movie;
    p.style.fontSize = "20px";
    p.style.color = 'blue';
    div.append(p);
})

// using getElementById and style method 
let movies1 = document.getElementById("movie-1");
let movies2 = document.getElementById("movie-2");
let movies3 = document.getElementById("movie-3");

movies1.addEventListener('click', () => {
    movies1.style.background = "lightblue";
    movies1.style.color = "white";
})

movies2.addEventListener('click', () => {
    movies2.style.background = "blue";
    movies2.style.color = "white";
})

movies3.addEventListener('click', () => {
    movies3.style.background = "red";
    movies3.style.color = "white";
})



let createButton = document.getElementById("create-btn");
let wrapper = document.getElementById("wrapper");

createButton.addEventListener("click", () => {
    let newButton = document.createElement("button");
    newButton.innerHTML = "Click me";
    wrapper.appendChild(newButton);
});