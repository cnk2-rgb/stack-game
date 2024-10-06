const coffeevideo = document.querySelector("#coffee-video");
const squares = document.querySelectorAll(".square");
const cont = document.querySelector("#continue");

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
    window.location.replace("../nebula/nebula.html");
});




