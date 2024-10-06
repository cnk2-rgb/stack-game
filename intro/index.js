
const introvideo = document.querySelector("#intro-video");
const startbg = document.querySelector("#start-bg");
const introaudio = document.querySelector("#intro-audio");
const body = document.querySelector("body")

document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
      // Code to execute when the spacebar is pressed
      console.log('Spacebar pressed!'); 
      startbg.style.display = "none";
      introvideo.play();
      introaudio.play();
    }
  });

introvideo.addEventListener("ended", (event) => {
  //fadeout(); //may not be necessary
  console.log(
    "Video stopped either because it has finished playing or no further data is available.",
  );

  cont();
});

function cont() {

    body.addEventListener("click", (event) => {
        window.location.replace("../coffeeshop/coffee.html");
    });
}
