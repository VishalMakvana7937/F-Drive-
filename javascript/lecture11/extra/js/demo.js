var a = 1;

switch (a){
    case 1:
        a = 'one';
        break;

    case 2:
        a = 'two';
        break;

    default:
        a = 'not found';
        break;
}
// console.log(`The value is ${a}`);
document.getElementById("value").innerHTML = `The value is ${a}`;