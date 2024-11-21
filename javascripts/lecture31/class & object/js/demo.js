class file{
    // constructor
    constructor(y){
        document.write('my name is ',y);
    }

    fileobj = (i,n,a) => {

        let obj = {
            id : 30,
            name : 'vishal',
            age : 19
        }
        // console.log(obj.id,obj.name,obj.age);
        return obj;
    }
}

let co = new file('vishal');
console.log(' = = = ',co.fileobj(1246,'ajay',19));

class A{
    // constructor
    constructor(n,c){
        this.name = n;
        this.contact = c;
    }

    // Prototype Method
    // function
    Hii(){
        console.log('hi.....');
    }

    // static Method
    // static Method ma call karva class no use thay se
    static h = "something something";
    // static function
    static hello(){
        console.log('Heloo my name is vishal');
    }
}
let sd = new A('vishal',9106122988);
console.log(sd);
sd.Hii();   
console.log(A.h);
A.hello();

