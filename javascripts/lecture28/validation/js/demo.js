let fn = document.getElementById("fname");
let sn = document.getElementById("sname");
let e = document.getElementById("email");
let p = document.getElementById("password");
let cp = document.getElementById("c_pass");
let c = document.getElementById("city");

const Form = () => {
    event.preventDefault();
    console.log("helloo my name is vishal");

    let Obj = {
        fname : fn.value,
        sname : sn.value,
        email : e.value,
        password : p.value,
        c_pass : cp.value,
        city : c.value
    }

    if(Obj.fname == ''){
        document.getElementById("fnerr").innerHTML = "Please enter your first name../";
    }

    if(Obj.sname == ''){
        document.getElementById("snerr").innerHTML = "Please enter your second name../";
    }

    if(Obj.email == ''){
        document.getElementById("eerr").innerHTML = "Please enter your email../";
    }

    if(Obj.password == ''){
        document.getElementById("perr").innerHTML = "Please enter your password../";
    }

    if(Obj.c_pass == ''){
        document.getElementById("c_perr").innerHTML = "Please enter your conform password";
    }

    if(Obj.city == ''){
        document.getElementById("cerr").innerHTML = "Please enter your city../";
    }

    console.log(Obj);
}