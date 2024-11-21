const ajaxapicall = () => {
    // XMLHttpRequest creat object (Using new keyword)
    var http = new XMLHttpRequest();
    // search fake api (URL)
    http.open('get','https://jsonplaceholder.typicode.com/comments',true);
    console.log("http === ",http);
    http.onreadystatechange = function () {
        console.log(this.responseText);
        console.log(typeof this.responseText);
        // Using setTimeout
        setTimeout(() => {
            document.getElementById('api').innerHTML = this.responseText;
        }, 2000);
    }
    http.send();
}
// ajaxapicall();

// error message
// if(this.readyState == 4 && this.status == 200){
   
// }