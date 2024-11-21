// fetch syntex
// fetch().then(() => {

// }).then(() => {

// })
// fetch method (then() catch())
// dog api call method
 fetch('https://dog.ceo/api/breeds/list/all').then((res) => {
    console.log(res);
 }).catch((err) => {
    console.log(err);
 })

 fetch('https://dog.ceo/api/breeds/list/all').then((r) => {
    console.log(r.json().then((r) => {
        console.log(r);
    }));
 }).catch((e) => {
    console.log(e);
 })

 fetch('https://dog.ceo/api/breeds/list/all').then((response) => {
    response.json().then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    })
 }).catch((er) => {
    console.log(er);
 })

 fetch('https://dog.ceo/api/breeds/list/all').then((a) => {
    console.log(a);
    return a.json();
 }).then((d) => {
    console.log(d);
 }).catch((b) => {
    console.log(b);
 })