const rocketvideo = document.querySelector("#rocket-video");
const rocketaudio = document.querySelector("#rocket-audio");
const closevid = document.querySelector("#close-comp-video");

document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
      // Code to execute when the spacebar is pressed
      console.log('Spacebar pressed!'); 
      closevid.style.display = "none";
      rocketvideo.play();
      rocketaudio.play();
    }
  });