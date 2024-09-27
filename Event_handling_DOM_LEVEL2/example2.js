let img = document.querySelector("img");

img.addEventListener('mouseover', function(){
    this.style.width = "400px";

});
img.addEventListener('mouseover', function(){
      setTimeout(() => {
        this.src="open.jpg";
      } , 2000)

});