document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("formulario").addEventListener("submit", function(evento){
        let email=document.getElementById("mail").value;
        let rut=document.getElementById("rut").value;
        let contra2=document.getElementById("rePass").value;
        
        const coleccion=document.getElementById("formulario").getElementsByTagName("li");
        console.log(coleccion);
        console.log("mail: "+email+"\nrut: "+rut+"\ncontraseña: "+contra2);
        /*
        */
       if(email==""){
        coleccion[0].querySelector("span").innerHTML="el correo asdkajshd";
       }
        evento.preventDefault();
    })
    
});
function on() {
    document.getElementById("overlay").style.display = "block";
}
  
function off() {
    document.getElementById("overlay").style.display = "none";
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function hamburger() {
  var x = $("#navbar");
  if (x.attr("class") === "topnav" || x.attr("class") === "topnav sticky") {
    x.addClass("responsive");
  } else {
    x.removeClass("responsive");
  }
}
