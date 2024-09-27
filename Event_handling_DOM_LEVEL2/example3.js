const x = document.querySelectorAll("li");
x.forEach(item => {
  item.addEventListener("click", () => {
    item.style.color = "red";
  });
});

const btn = document.querySelector("#additem");
const ul = document.querySelector("ul");
btn.addEventListener("click", () => {
    let task = prompt('what you want to next?');
    ul.innerHTML += "<li>" +task +"</li>";
})
