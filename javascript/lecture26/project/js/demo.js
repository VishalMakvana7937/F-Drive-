let stu = [
    {   
        img : 'images/user.png',
        id : 3023,
        name : 'vishal makvana',
        contact : '23451 98231',
        gmail : 'vishal@gmail.com',
        active : false,
        class : 'A2',
        hobby : 'coding'
    },
    {
        img : 'images/user.png',
        id : 3023,
        name : 'vishal makvana',
        contact : '23451 98231',
        gmail : 'vishal@gmail.com',
        active : false,
        class : 'A2',
        hobby : 'coding'
    },
    {
        img : 'images/user.png',
        id : 3023,
        name : 'vishal makvana',
        contact : '23451 98231',
        gmail : 'vishal@gmail.com',
        active : false,
        class : 'A2',
        hobby : 'coding'
    }
]

let table = document.getElementById("datatable");
let s = document.getElementById("detail");
console.log(s);

console.log(table);

let data = ' ';

stu.forEach(user => {
    console.log(user);

    data += `<p class="images"><img src="images/user.png" alt="users"/></p> <p>Id = ${user.id}</p> <p>Name = ${user.name}</p> <p>Contac = ${user.contact}</p> <p>Gmail = ${user.gmail}</p> <p>Active = ${user.active}</p> <p>Hobby = ${user.hobby}</p>`;

        // for(let a in user){
            
        //     if(a != 'img'){
        //         data += `<p>${user[a]}</p>`;
        //     }

        // }

    // data += `</p>`;
    
    // data += `<tr> <td>${user.id}</td> <td>${user.name}</td> <td>${user.contact}</td> <td>${user.gmail}</td> <td>${user.active}</td> <td>${user.hobby}</td> <td>${user.id}</td> </tr>`
})

console.log(data);

table.innerHTML += data;