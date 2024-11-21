// let stu = [
//     {
//         id : 3023,
//         name : 'vishal makvana',
//         contact : '23451 98231',
//         gmail : 'vishal@gmail.com',
//         active : false,
//         class : 'A2',
//         hobby : 'coding'
//     },
//     {
//         id : 3071,
//         name : 'ajay makvana',
//         contact : '98453 23091',
//         gmail : 'ajay@gmail.com',
//         active : true,
//         class : 'A9',
//         hobby : 'coding'
//     },
//     {
//         id : 3031,
//         name : 'denish patel',
//         contact : '23451 98231',
//         gmail : 'denish@gmail.com',
//         active : false,
//         class : 'A210',
//         hobby : 'coding'
//     }
// ]

// let table = document.getElementById("datatable");

// console.log(table);

// let data = ' ';

// stu.forEach(user => {
//     console.log(user);
    
//     data += `<tr> <td>${user.id}</td> <td>${user.name}</td> <td>${user.contact}</td> <td>${user.gmail}</td> <td>${user.active}</td> <td>${user.hobby}</td> <td>${user.id}</td> </tr>`
// })

// console.log(data);

// table.innerHTML += data;

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
        id : 3071,
        name : 'ajay makvana',
        contact : '98453 23091',
        gmail : 'ajay@gmail.com',
        active : true,
        class : 'A9',
        hobby : 'coding'
    },
]

let table = document.getElementById("datatable");

console.log(table);

let data = ' ';

stu.forEach(user => {
    console.log(user);

    data += `<tr><td><img src="images/user.png" alt="users" /></td>`;

        for(let a in user){
            
            if(a != 'img'){
                data += `<td>${user[a]}</td>`;
            }

        }

    data += `</tr>`;
    
    // data += `<tr> <td>${user.id}</td> <td>${user.name}</td> <td>${user.contact}</td> <td>${user.gmail}</td> <td>${user.active}</td> <td>${user.hobby}</td> <td>${user.id}</td> </tr>`
})

console.log(data);

table.innerHTML += data;