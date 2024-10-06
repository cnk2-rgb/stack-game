const coffeevideo = document.querySelector("#coffee-video");
const squares = document.querySelectorAll(".square");
// squares.forEach(square => {
//   square.style.display = "none";
// });

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

  });




