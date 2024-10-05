
const introvideo = document.querySelector("#intro-video");

function fadeout() { 
    var fade= document.getElementById("intro-video"); 
      
    var intervalID = setInterval(function () { 
  
if (!fade.style.opacity) { 
    fade.style.opacity = 1; 
} 
  
  
if (fade.style.opacity > 0) { 
    fade.style.opacity -= 0.2; 
} 
  
else { 
    clearInterval(intervalID); 
    window.location.replace("../landing/landing.html");
} 
  
    }, 200); 
};

introvideo.addEventListener("ended", (event) => {
  //fadeout(); //may not be necessary
  console.log(
    "Video stopped either because it has finished playing or no further data is available.",
  );
  window.location.replace("../landing/landing.html");
});
