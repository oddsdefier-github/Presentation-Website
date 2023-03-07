
var hide = document.getElementById("alert");
hide.style.display = "none";


const alertTimeout = setTimeout(tipAlert, 4000);    
function tipAlert() {
    var show = document.getElementById("alert")
    show.style.display = "flex";


}


function hideAlert() {
    var tip = document.getElementById("alert");
    if (tip.style.display === "none") {
        tip.style.display = "block";
    } else {
        tip.style.display = "none";
    }
    }

    