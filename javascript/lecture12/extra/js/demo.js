function vishal(){

    var a = document.getElementById("tasck").value;

    switch (a){

        case '1':
        case '2':
        case '3':
        case '4':
            a = document.getElementById("values").innerHTML = '<ul><li>Winter</li></ul>';
            break;

        case '5':
        case '6':
        case '7':
        case '8':
            a = document.getElementById("values").innerHTML = '<ul><li>Summer</li></ul>';
            break;

        case '9':
        case '10':
        case '11':
        case '12':
            a = document.getElementById("values").innerHTML = '<ul><li>Monsoon</li></ul>';
            break;

        default:
            a = document.getElementById("values").innerHTML = 'wrong number';
            break;
    }
}