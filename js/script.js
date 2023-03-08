
var hide = document.getElementById("alert");
hide.style.display = "none";


const alertTimeout = setTimeout(tipAlert, 1000);    
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

function removeBlur() {
    var removeBlur = document.getElementById("blur");
    removeBlur.classList.remove("card-container");
}
    

const hr = document.getElementById("hr");
hr.remove();



// const showBtn = document.getElementById("link1");
// const imageHover= document.getElementById("imageHover1");
// const overlay = document.getElementById("overlay1");

// imageHover.addEventListener("mouseover", (event) => {
//     showBtn.classList.remove("hidden");
//     overlay.classList.remove("hidden");
// });
// imageHover.addEventListener("mouseout", (event) => {
//     showBtn.classList.add("hidden");
//     overlay.classList.add("hidden");
// });


// const showBtn2 = document.getElementById("link2");
// const imageHover2= document.getElementById("imageHover2");
// const overlay2 = document.getElementById("overlay2");

// imageHover2.addEventListener("mouseover", (event) => {
//     showBtn2.classList.remove("hidden");
//     overlay2.classList.remove("hidden");
// });
// imageHover2.addEventListener("mouseout", (event) => {
//     showBtn2.classList.add("hidden");
//     overlay2.classList.add("hidden");
// });


// const showBtn3 = document.getElementById("link3");
// const imageHover3= document.getElementById("imageHover3");
// const overlay3 = document.getElementById("overlay3");

// imageHover3.addEventListener("mouseover", (event) => {
//     showBtn3.classList.remove("hidden");
//     overlay3.classList.remove("hidden");
// });
// imageHover3.addEventListener("mouseout", (event) => {
//     showBtn3.classList.add("hidden");
//     overlay3.classList.add("hidden");
// });



for (let i = 1; i <= 3; i++) {
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
      imgZoom.classList.remove("hover:scale-125");
    });
  }
  