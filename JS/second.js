console.log("Second js file");
//function
function makeBlue() {
  const blue = (document.body.style.backgroundColor = "blue");
}
//set function onclick
const Green = document.getElementById("make-green");
Green.onclick = makeGreen;

function makeGreen() {
  document.body.style.backgroundColor = "green";
}

//anonymous function
const red = document.getElementById("make-red");
// console.log(red);
red.onclick = function () {
  document.body.style.backgroundColor = "red";
};

///add eventlistner set function

const goldenRod = document.getElementById("make-goldenrod");
// console.log(goldenRod);

goldenRod.addEventListener("click", makeGoldenRod);

function makeGoldenRod() {
  document.body.style.backgroundColor = "GoldenRod";
}

//add listener anonyomous function
const hotPink = document.getElementById("hot-pink");
//          console.log(hotPink);

hotPink.addEventListener("click", function () {
  document.body.style.backgroundColor = "HotPink";
});

//direct shortut
document.getElementById("make-maroon").addEventListener("click", function () {
  document.body.style.backgroundColor = "Maroon";
});
