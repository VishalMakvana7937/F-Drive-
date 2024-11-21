var url = 'https://api.openweathermap.org/data/2.5/weather?lat=';
var key = '998dfb3a8735f12fd535fc7c60041144';
var city = 'surat';


    fetch(url).then((response) => {
        console.log(response);
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch((error) => {     
        console.log(error);
    })