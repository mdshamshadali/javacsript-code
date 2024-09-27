var shaim = document.getElementById("mytext");
 shaim.onkeypress = (e) =>{
    if(e.charCode<48 || e.charCode>57){
    alert("you press the key only digit");
     return false;
    }
     };