"use strict"

const Switcher = document.querySelector(".btn");

Switcher.addEventListener("click",function (){
document.body.classList.toggle("dark-theme");
   
    var className =document.body.classList;
    if(className == "light-theme") {
      this.textContent = "escuro";
    }
    else {
      this.textContent = "claro";
      
    }
});


