var btnOne = document.querySelector("#btnOne");
var btnTwo = document.querySelector("#btnTwo");
var btwThree = document.querySelector("#btnThree");
var btnFour = document.querySelector("#btnFour");
var btnFive = document.querySelector("#btnFive");
var btnSix = document.querySelector("#btnSix");
var btnSeven = document.querySelector("#btnSeven");
var red  = document.querySelector(".red");
var green  = document.querySelector(".green");
var blue  = document.querySelector(".blue");
var yellow  = document.querySelector(".yellow");
var purple  = document.querySelector(".purple");
var brown  = document.querySelector(".brown");
var orange  = document.querySelector(".orange");


btnOne.addEventListener("click", function() {
        red.setAttribute('class','figure red square')
        green.setAttribute('class','figure green square')
        blue.setAttribute('class','figure blue square')
        yellow.setAttribute('class','figure yellow square')
        purple.setAttribute('class','figure purple square')
        brown.setAttribute('class','figure brown square')
        orange.setAttribute('class','figure orange square')
      }
    );


