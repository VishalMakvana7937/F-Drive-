// syntex
// fetch(url).then(() => {

// }).catch(() => {

// })
// Fetch method (then() and catch())
// dog api call method
fetch('https://dog.ceo/api/breeds/list/all').then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

fetch('https://dog.ceo/api/breeds/list/all').then((r) => {
    console.log("res",r.json().then((r) => {
        console.log("Response",r);
    }));
}).catch((e) => {
    console.log("Error",e);
})

fetch('https://dog.ceo/api/breeds/list/all').then((responsive) => {
    responsive.json().then((id => {
        console.log("successful",id);
    })).catch((e) => {
        console.log("fail",e);
    })
}).catch((error) => {
    console.log(error);
});