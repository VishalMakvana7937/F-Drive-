const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const key = "6752733ea402fcd2153d13b9589fc9e1";
const city = document.getElementById('info');
const cut = document.getElementById("cut");

const Fun = () => {
    var k = city.value;
    console.log(k);
    cut.innerHTML = ``;
    fetch(url + k + `&appid=${key}`).then((response) => {
        return response.json();
    }).then((data) => {
        console.log("data",data);
        cut.innerHTML += `
        <div class="container main">
            <div class="wind-1"><div class="wind-2"><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="" id="logo" width="200px"></h2></div></div>
            <div class="wind-1"><div class="wind-2"><h2>${data.wind.deg}&deg;</h2></div></div>
            <div class="wind-1"><div class="wind-2"><h2>${data.name}</h2></div></div>
            <div class="wind-1"><div class="wind-2"><h2>${data.coord.lon}</h2></div></div>
        </div>
        `
    }).catch((err) => {
        console.log("err" ,err);
    })
}
Fun();