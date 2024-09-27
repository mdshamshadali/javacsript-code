var shaim = document.getElementById("mytext");
shaim.onkeypress = (e) => {
  alert("you press something  " + String.fromCharCode(e.charCode));
};
