

function data(){
    fetch('https://dog.ceo/api/breeds/list/all').then((r) => {
        console.log("res",r.json().then((r) => {
            console.log("Response",r);
        }));
    }).catch((e) => {
        console.log("Error",e);
    })
}