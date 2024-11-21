let stu = [
    {
        img : 'images/use.png',
        id : 3023,
        name : 'vishal makvana',
        contact : '23451 98231',
        gmail : 'vishal@gmail.com',
        active : false,
        class : 'A2',
        hobby : 'coding'
    }
]
// console.log(stu);

let table = document.getElementById("datatable");
let d = document.getElementById("detail");
// console.log(table);
// console.log(d);

let data = ' ';
// console.log(data);

stu.forEach(user => {
    console.log(user);

    data += `<p><img src="images/use.png" alt="users"/></p><h4>id = ${user.id}</h4><h4>NAME = ${user.name}</h4><h4>NAME = ${user.contact}</h4><h4>NAME = ${user.gmail}</h4><h4>NAME = ${user.active}</h4><h4>NAME = ${user.class}</h4><h4>NAME = ${user.hobby}</h4>`
})
console.log(data);

table.innerHTML += data;