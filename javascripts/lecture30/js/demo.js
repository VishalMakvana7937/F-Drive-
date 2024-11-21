// try,catch and time
try{

    setTimeout(() => {
        try {
            const x = 10;
            const y = '20';
            
            console.log(ans = x + y1);
        } catch (error) {
            console.log("i am student = = = "+error);
            console.log(error.name); // ReferenceError
            console.log(error.message); // y1 is not defined
            console.log(error.stack); // ReferenceError and y1 is not defined
        }
    }, 3000) // 3 second bofor
    
}catch(arr){
    // console.log("i am student = = = "+arr);
}

// try and catch
try{
    const p = () => {
        var a = 20;
        var b = 30;
    
        console.log(ans = a1 + b);
    }
    p();
}catch(arr){
    console.log(arr);
    if(arr == 'ReferenceError: a1 is not defined'){
        document.write('arr is found')
    }else{
        document.write('arr is not found')
    }                                                                                                                                
}

// try and catch and finally
try{
    var i = 33;
    var j = 20;

    console.log(a = i + j1);
}catch(arr){
    console.log("my error "+arr);
}finally{
    console.log("my error name is vishal makvana")
}

// type of 7 error in javascript
// error checking

try{
    var o = 10;
    var v = 20;

    console.log(ans = o1 + v);
}catch(err){
    if(err instanceof ReferenceError){
        console.log('ReferenceError');
    }else if(err instanceof TypeError){
        console.log('TypeError');
    }else{
        console.log('Unknown Error');
    }
}