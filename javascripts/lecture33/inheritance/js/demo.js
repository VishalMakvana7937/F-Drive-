class Car{
    constructor(name){
        console.log("my car name is ",name);
        this.n = name;
    }

    colo(l){
        console.log(`My ${this.n} color is ${l}`);
    }
}
class cname extends Car {
    // constructor using super keyword
    constructor(name){
        super(name);
    }

    heloo(i){
        console.log("I am ",i);
    }
}
var c = new cname('BmW');
console.log(c.n);
c.colo('red');
c.heloo('Full stack web devlopment');

// Overriding Method or Property
// example 1
class X{
    helloo(){
        console.log('My name is vishal makvana');
    }
}
class Y extends X{
    helloo(){
        console.log('I am full stack web devlopment');
    }
}
// example 2
let Z = new Y();
Z.helloo();

class Student1{
    constructor(name){
        this.n = name;
    }
    
    Hii(p){
        console.log(`Heloo my name is ${this.n}`)
    }
}
class Student2 extends Student1{
    constructor(name){
        super (name);
    }

    Hii(p){
        console.log(`My best friend is ${this.n}`)
    }
}
let s = new Student2('vishal');
console.log(s.n);
s.Hii('vishal');

// multiple inheritance
class A{
    constructor(n){
        this.name = n;
    }
}
class B extends A{

}
class C extends B{

}
let ABC = new C(12);
console.log(ABC);

