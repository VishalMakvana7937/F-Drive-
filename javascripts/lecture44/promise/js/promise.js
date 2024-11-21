
// promise condition example
let complete = false; // true or false
let prom = new Promise(function(resolve,reject){
    if(complete){
        resolve("i am succsessfull");
    }else{
        reject("i am failed");
    }
}); 
console.log(prom);

// promise using peramiter(value return) example
function promise(com){
    return new Promise(function(resolve,reject){
        console.log('Fetching data, Please wait....');
        // using setTimeout function
        setTimeout(() => {
            if(com){
                resolve("i am succsessfull");
            }else{
                reject("i am failed");
            }
        },3000)
    });
}
promise(true).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});