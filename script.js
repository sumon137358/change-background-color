const body = document.querySelector("body");
body.style.backgroundColor = "green";
const btn = document.querySelector(".btn");
// console.log(btn);
btn.addEventListener("click", changeBackgroundColor);

let colorLists = [
  "green",
  "red",
  " yellow",
  " blue",
  "black",
  "orange",
  "pink",
  "yellow",
  "purple",
  "green",
];
function changeBackgroundColor() {
  const randomColor = parseInt(Math.random() * colorLists.length + 1);
  body.style.backgroundColor = colorLists[randomColor];
}
