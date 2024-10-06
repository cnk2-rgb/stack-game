const coffeevideo = document.querySelector("#coffee-video");
const squares = document.querySelectorAll(".square");
squares.forEach(square => {
  square.style.display = "none";
});

coffeevideo.addEventListener("ended", (event) => {
    console.log(
      "Video stopped coffee scene",
    );
    squares.forEach(square => {
        square.style.display = "block";
    });

  });

const lsquare = document.getElementById("lsquare");
const csquare = document.getElementById("csquare");
const rsquare = document.getElementById("rsquare");

const long_lsquare = document.getElementById("long-lsquare");
const long_csquare = document.getElementById("long-csquare");
const long_rsquare = document.getElementById("long-rsquare");

// lsquare.addEventListener("mouseover", function() {
//     long_lsquare.style.display = "block";
// });

// csquare.addEventListener("mouseover", function() {
//     long_csquare.style.display = "block";
// });

// rsquare.addEventListener("mouseover", function() {
//     long_rsquare.style.display = "block";
// });

