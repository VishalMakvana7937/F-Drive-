let table = document.getElementById("table")

const myForm = (() => {
    event.preventDefault();
    console.log("Helooo....");

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;
    let country = document.getElementById("country").value;

    const myData = {
        fname : fname,
        lname : lname,
        email : email,
        age : age,
        password :password,
        country : country
    }
    console.log(myData);
    localStorage.setItem("myform",JSON.stringify(myData));
    getData();

    document.getElementById("fname").value = '';
    document.getElementById("lname").value = '';
    document.getElementById("email").value = '';
    document.getElementById("age").value = '';
    document.getElementById("password").value = '';
    document.getElementById("country").value = '';
})

let getData =  () => {
    let data = JSON.parse(localStorage.getItem('myform'));
    console.log("Data = = = ",data);

    if(data != null){

        let tr = document.createElement("tr");
        table.appendChild(tr);  

        for(const key in data){
            console.log("my data = = = = = = = ",data[key]);
            let td = document.createElement('td');
            td.textContent = data[key];
            tr.appendChild(td);
        }
    }else{
        table.innerHTML = `<tr>
        <th>fname</th>
        <th>lname</th>
        <th>Email</th>
        <th>Age</th>
        <th>password</th>
        <th>Country</th>
    </tr>`;
    }
}
getData();

const removeData = () => {
    localStorage.removeItem("myform");
    getData();
}

const editData = () => {
    
    let edit = JSON.parse(localStorage.getItem("myform"));
    console.log("Data =======> ", edit); 

    let fname = document.getElementById("fname").value = edit.fname;
    let lname = document.getElementById("lname").value = edit.lname;
    let email = document.getElementById("email").value = edit.email;
    let age = document.getElementById("age").value = edit.age;
    let password = document.getElementById("password").value = edit.password;
    let country = document.getElementById("country").value = edit.country;
}