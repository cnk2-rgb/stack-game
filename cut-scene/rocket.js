const rocketvideo = document.querySelector("#rocket-video");
const rocketaudio = document.querySelector("#rocket-audio");
const closevid = document.querySelector("#close-comp-video");
const jumpvid = document.querySelector("#jump-video");

rocketvideo.style.display = "none";
jumpvid.style.display = "none";

document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
      // Code to execute when the spacebar is pressed
      console.log('Spacebar pressed!'); 
      closevid.style.display = "none";
      jumpvid.style.display = "block";
      rocketaudio.play();
    }
  });

jumpvid.addEventListener("ended", (event) => {
    console.log(
        "Video stopped coffee scene",
    );
    jumpvid.style.display = "none";
    rocketvideo.style.display = "block";
    rocketvideo.play();

});

rocketvideo.addEventListener("ended", (event) => {
    console.log(
      "Video stopped coffee scene",
    );
    window.location.replace("../nebula/snake.html");

  });