

function scrollToTop() {
    window.scrollTo(0, 0);
}


//Make the div grayscale
const grayscale = document.getElementById("grayscale");
grayscale.classList.remove("card-container");

const hide = document.getElementById("alert");
hide.style.display = "none";


//Pop-up appear
const alertTimeout = setTimeout(tipAlert, 2500);    
    function tipAlert() {
        var show = document.getElementById("alert")
        show.style.display = "flex";
        grayscale.classList.add("card-container");
    }

    function hideAlert() {
        var hide = document.getElementById("alert");

            if (hide.style.display === "none") {
                hide.style.display = "flex";
            } else {
                hide.style.display = "none";
            }
            
        }

function removeBlur() {
    var removeBlur = document.getElementById("grayscale");
    removeBlur.classList.remove("card-container");
}
    

const hr = document.getElementById("hr");
hr.remove();



for (let i = 1; i <= 4; i++) {
    const showBtn = document.getElementById(`link${i}`);
    const imageHover = document.getElementById(`imageHover${i}`);
    const overlay = document.getElementById(`overlay${i}`);
  
    imageHover.addEventListener("mouseover", () => {
      showBtn.classList.remove("hidden");
      overlay.classList.remove("hidden");
    });
  
    imageHover.addEventListener("mouseout", () => {
      showBtn.classList.add("hidden");
      overlay.classList.add("hidden");
    });
  };
  
