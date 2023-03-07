
function closeBtn() {
    var close = document.getElementById("f-screen")
    if (close.style.display === "none") {
        close.style.display = "block";
    } else {
        close.style.display = "none";
    }
    }
    
var hide = document.getElementById("alert");
hide.style.display = "none";



const alertTimeout = setTimeout(tipAlert, 2000);    

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

function stopTimeout() {
    clearTimeout(alertTimeout);

}
    
var elem = document.documentElement;
    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    }


    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }