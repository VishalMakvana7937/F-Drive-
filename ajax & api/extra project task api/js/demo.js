const url = 'https://restcountries.com/v3.1/all';
const country = document.getElementById('country');
let count = 1;

fetch(url).then((response) => {
    console.log(response);
    return response.json();
}).then((data) => {
    console.log(data);
    data.forEach(ele => {
        console.log(ele);  
        var a = [];
        for(key in ele.languages){
            a.push(ele.languages[key]);
            console.log("a ======= ",a);
            console.log(ele.languages[key]);
        }      
        country.innerHTML += `
            <tr>
                <td>${count}</td> 
                <td><img src="${ele.flags.png}" alt="${count}"</td> 
                <td>${ele.name.common}</td>
                <td>${a}</td>
            </tr>
            `
            count++;    
    });
}).catch((err) => {
    console.log(err);
})