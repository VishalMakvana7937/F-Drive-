var select = document.getElementById('select');
var pri = document.getElementById('pri');

var getdata = () => {

    var output = fetch('https://dog.ceo/api/breeds/list/all').then((response) => {
        console.log(response);
        return response.json();
    }).catch((error) => {
        console.log(error);
    });
    
    return output;

}
// getdata();

var dropdown = () => {

    var k = getdata();

    k.then((r) => {
        for(const key in r.message){
            // console.log(key);
            select.innerHTML += `
                <option value="${key}">${key}</option>
            `
        }
    }).catch((e) => {
        console.log(e);
    })
}
dropdown();

var dataFetchall = () => {
    pri.innerHTML = ``;
    event.preventDefault();
    var sele = select.value;

    fetch(`https://dog.ceo/api/breed/${sele}/images`).then((resp) => {
        return resp.json();
    }).then((respn) => {
        respn.message.forEach(element => {
            // console.log(element);

            pri.innerHTML += `<div class="col-4"><img src="${element}" class="img-fluid"></div>`

        });
    }).catch((err) => {
        console.log(err);
    });
}
// dataFetchall();