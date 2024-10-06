const coffeevideo = document.querySelector("#coffee-video");
const squares = document.querySelectorAll(".square");
squares.forEach(square => {
  square.style.display = "none";
});
const text = document.querySelectorAll("h3");
text.forEach(tex => {
    tex.style.display = "none";
});

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
    text.forEach(tex => {
        tex.style.display = "block";
    });

  });

const lsquare = document.getElementById("lsquare");
const csquare = document.getElementById("csquare");
const rsquare = document.getElementById("rsquare");

const long_lsquare = document.getElementById("leftclick");
const long_csquare = document.getElementById("centerclick");
const long_rsquare = document.getElementById("rightclick");

lsquare.addEventListener("click", function() {
    long_lsquare.style.display = "block";
});

csquare.addEventListener("click", function() {
    long_csquare.style.display = "block";
});

rsquare.addEventListener("click", function() {
    long_rsquare.style.display = "block";
});

//Close windows
long_lsquare.addEventListener("click", function() {
    long_lsquare.style.display = "none";
});

long_csquare.addEventListener("click", function() {
    long_csquare.style.display = "none";
});

long_rsquare.addEventListener("click", function() {
    long_rsquare.style.display = "none";
});


