function myselect(){
    var cource = document.getElementById("myselect").value;

    switch (cource.toLowerCase()){

        case 'bca':
            document.getElementById("info").innerHTML = "<ul><li>Data base management system</li><li>Data structures and algorithms</li><li>Financial accounting</li></ul>";
            document.getElementById("error").innerHTML = "";
            break;
    
        case 'bsc':
            document.getElementById("info").innerHTML = "<ul><li>Sociology</li><li>Pharmacology</li><li>Pathology</li><li>Genetics</li></ul>";
            document.getElementById("error").innerHTML = "";
            break;
    
        case 'devloper':
            document.getElementById("info").innerHTML = "<ul><li>C</li><li>c++</li><li>Html</li><li>Css</li></ul>";
            document.getElementById("error").innerHTML = "";
            break;
    
        default:
            document.getElementById("error").innerHTML = "No valid data";
            document.getElementById("info").innerHTML = "";
            break;
    }
}