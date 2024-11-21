let Stu = {
    id : 1730,
    name : 'vishal makvana',
    no : '95371 23456',
    gmail : 'vishal@gmail.com',
    class : 'A1'
}

console.log(Stu);

document.getElementById("id1").innerHTML = Stu.id;
document.getElementById("name1").innerHTML = Stu.name;
document.getElementById("no1").innerHTML = Stu.no;
document.getElementById("gmail1").innerHTML = Stu.gmail;
document.getElementById("class1").innerHTML = Stu.class;

document.getElementById("id2").innerHTML = Stu.id = 1450;
document.getElementById("name2").innerHTML = Stu.name = 'ajay makvana';
document.getElementById("no2").innerHTML = Stu.no = '94279 39701';
document.getElementById("gmail2").innerHTML = Stu.gmail = 'ajay@gmail.com';
document.getElementById("class2").innerHTML = Stu.class = 'A3';
