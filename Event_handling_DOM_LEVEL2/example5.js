const ul = document.querySelector("ul");
  ul.addEventListener("click", (e) => {
    e.target.style.color = "red";
  });


const btn = document.querySelector("#additem");
btn.addEventListener("click", () => {
    let task = prompt('what you want to next?');
    ul.innerHTML += "<li>" +task +"</li>";
})
