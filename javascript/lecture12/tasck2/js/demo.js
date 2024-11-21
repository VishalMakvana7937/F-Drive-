function vishal(){

    var a = document.getElementById("tasck").value;

    switch (a){

        case '1':
            a = document.getElementById("values").innerHTML = '<ul><li>January</li><li>February</li><li>March</li><li>April</li></ul>';
            break;

        case '2':
            a = document.getElementById("values").innerHTML = '<ul><li>May</li><li>June</li><li>July</li><li>August</li></ul>';
            break;

        case '3':
            a = document.getElementById("values").innerHTML = '<ul><li>September</li><li>October</li><li>November</li><li>December</li></ul>';
            break;

        default:
            a = document.getElementById("values").innerHTML = 'wrong number';
            break;
    }
}