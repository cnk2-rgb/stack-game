const coffeevideo = document.querySelector("#coffee-video");
const squares = document.querySelectorAll(".square");
const cont = document.querySelector("#continue");
const wonkyaudio = document.querySelector("#wonky-audio");

document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
      // Code to execute when the spacebar is pressed
      console.log('Spacebar pressed!'); 
      wonkyaudio.play();
    }
  });

squares.forEach(square => {
  square.style.display = "none";
});

cont.style.display = "none";

const determinedvideo = document.querySelector("#determined-video");

determinedvideo.addEventListener("ended", (event) => {
    console.log(
      "Video stopped determined scene",
    );
    determinedvideo.style.display = "none";
    coffeevideo.play();

  });

coffeevideo.addEventListener("ended", (event) => {
    console.log(
      "Video stopped coffee scene",
    );
    squares.forEach(square => {
        square.style.display = "block";
    });
    cont.style.display = "block";

  });

cont.addEventListener("click", (event) => {
    window.location.replace("../cut-scene/rocket.html");
});




