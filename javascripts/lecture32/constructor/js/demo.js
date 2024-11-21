// user define constructor (using class simple constructor)
class file{
    constructor(s,id){
        console.log('my name is ',s);
        console.log('my gr id is ',id);
        this.s = s;
        this.id = id;
    }
}
let co = new file('vishal',2013);
console.log(co.s);
console.log(co.id);

class a{
    constructor(id,name,age){
        console.log(' = = = ',id);
        console.log(' + + + ',name);
        console.log(' * * * ',age);
        this.i = id;
        this.n = name;
        this.a = age;
    }
}
let s1 = new a(3091,'udit vaja',19);
let s2 = new a(8012,'ajay makvana',21);
console.log(s1);
console.log(s2);



// object constructor function
//              Or
// Custom Constructors
function Stu(fname,sname,age,clas){
    this.firstname = fname;
    this.secondname = sname;
    this.a = age;
    this.c = clas;
    this.city = 'Surat' 
}

var Student1 = new Stu('vishal','makvana',19,'A2');
// only for object ma property add mate
Student1.nationality = 'india';
// add method
Student1.name = function(){
    return this.firstname + " " + this.secondname;
}
console.log(Student1.name());
console.log(Student1);
// var Student2 = new Stu('ajay','makvana',20,'A6');
// console.log(Student2);
// var Student3 = new Stu('gautam','kasdiya',19,'A1');
// console.log(Student3);



// Object Constructor (Built-in Constructors)
// new Object
var n = new Object("vishal");
var q = new Object(19);
console.log("Name : "+n);
console.log("Age : "+q);

// new Array
var c = new Array('TaTa','Relice','BmW');
console.log(c);

// new Date
var d = new Date();
console.log(d);

// new Error
var e = new Error('A user-defined error has occurred.');
console.log(e);

// new Number
var l = new Number(1928);
console.log(l);

// new Boolean
// true or false
// true 
var k = new Boolean(1);
console.log(k);
// false (0,-0,null,false,NaN,undefined,"")
var b = new Boolean(0);
console.log(b);

// new RegExp
var d = new RegExp(20);
console.log(d);