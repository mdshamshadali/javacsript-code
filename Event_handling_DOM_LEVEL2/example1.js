const heading = document.querySelector("h3");
heading.addEventListener('dblclick',function(){
    this.style.fontStyle= "italic";
});

const imgs = document.querySelector("img");

imgs.addEventListener('mouseover',function(){
    this.src = "open.jpg";
});

imgs.addEventListener('mouseover',function(){
     this.style.width= "400px";
});

