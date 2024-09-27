// function shaim() {
//   let x = document.getElementById("mydiv");
//   x.onclick = changecolor;
// }
// function changecolor() {
//   this.style.color = "red";
// }
// window.onload = shaim;

let x = document.getElementById("mydiv");
x.onclick = function () {
  this.style.color = "red";
};
