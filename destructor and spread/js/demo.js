// DESTRUCTOR method whith array
let num = [1,2,3,4,5,6,7,8,9,10];

let n1 = num[3];
let n2 = num[4];
let n3 = num[5];
let n4 = num[6];
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
let [a,b,c,d,e,f,i,j,k,m] = num;
console.log(a,b,c,d,e,f,i,j,k,m);

// DESTRUCTOR method whith object
let Stu = {
    name : 'vishal',
    age : 19,
    email : 'v@email.com'
}
console.log(Stu.name);
console.log(Stu.age);
console.log(Stu.email);
console.log(Stu);
let {name,age,email,contact = 9316287937} = Stu;
console.log(name,age,email,contact);

// SPREAD method
let s1 = [1,2,3,4,5,6,7];
let s2 = [8,9,10];
let s = [...s1,...s2];
console.log(s);
console.log(...s1,...s2);