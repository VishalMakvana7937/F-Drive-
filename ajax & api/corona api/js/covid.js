var obj = {
    AN : 'Andaman and Nicobar Islands',
    AP : 'Andhra Pradesh',
    AR : 'Arunachal Pradesh',
    AS : 'Assam',
    BR : 'Bihar',
    CH : 'Chandigarh',
    CT : 'Chhattisgarh',
    DN : 'Dadra and Nagar Haveli',
    DD : 'Daman and Diu',
    DL : 'Delhi',
    GA : 'Goa',
    GJ : 'Gujarat',
    HR : 'Haryana',
    HP : 'Himachal Pradesh',
    JK : 'Jammu and Kashmir',
    JH : 'Jharkhand',
    KA : 'Karnataka',
    KL : 'Kerala',
    LD : 'Lakshadweep',
    MP : 'Madhya Pradesh',
    MH : 'Maharashtra',
    MN : 'Manipur',
    ML : 'Meghalaya',
    MZ : 'Mizoram',
    NL : 'Nagaland',
    OR : 'Odisha',
    PY : 'Puducherry',
    PB : 'Punjab',
    RJ : 'Rajasthan',
    SK : 'Sikkim',
    TN : 'Tamil Nadu',
    TG : 'Telangana',
    TR : 'Tripura',
    UP : 'Uttar Pradesh',
    UT : 'Uttarakhand',
    WB : 'West Bengal',
}
let table = document.getElementById('table');
const getData = () => {
    fetch('https://data.covid19india.org/v4/min/data.min.json').then((response) => {
        console.log(response);
        return response.json();
    }).then((data) => {
        console.log("data",data);
        for(const key in data){
            for(const keys in obj){
                if(key == keys){
                    table.innerHTML += `
            <tr class="con">
                <td>${obj[keys]}</td>
                <td>${data[key].total.confirmed}</td>
                <td>${data[key].total.deceased}</td>
                <td>${data[key].total.recovered}</td>
                <td>${data[key].total.tested}</td>
                <td>${data[key].total.vaccinated1}</td>
                <td>${data[key].total.vaccinated2}</td>
            </tr>`
                }
            }
        }
    }).catch((err) => {
        console.log(err);
    })
}
getData();