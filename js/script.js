

var hide = document.getElementById("alert");
hide.style.display = "none";

const alertTimeout = setTimeout(tipAlert, 2000);    

function tipAlert() {
    var show = document.getElementById("alert")
    show.style.display = "flex";
    window.blur()


}




function hideAlert() {
    var tip = document.getElementById("alert");
    if (tip.style.display === "none") {
        tip.style.display = "block";
    } else {
        tip.style.display = "none";
    }
    }

function stopTimeout() {
    clearTimeout(alertTimeout);

}
    
