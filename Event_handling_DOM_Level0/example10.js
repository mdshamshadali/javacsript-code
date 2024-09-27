var x = document.getElementById("mytext");
var s = document.getElementById("sp1");

x.onkeypress = (e) => {
    if(e.charCode >= 48 && e.charCode <= 57){
        s.innerHTML= "Correct!";
        x.style.outline = "none";
        s.style.color = 'green';
        x.style.border = "solid 1px green";     

    }
    else{
        s.innerHTML= "Only digit Allowed!";
        x.style.outline = "none";
        s.style.color = 'red';
        x.style.border = "solid 1px red";
       // return false;
       e.preventDefault;
        
    }
}