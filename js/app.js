var btnOne = document.querySelector("#btnOne");
var btnTwo = document.querySelector("#btnTwo");
var btnThree = document.querySelector("#btnThree");
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
var buttons2 = document.createElement("div");


buttons2.innerHTML = "<button> 8 <button> 9 <button> 10  <button> 11 <button> 12 <button> 13"
buttons2.id ="addbuttons";

// Get all the buttons inside buttons2
var buttons = buttons2.getElementsByTagName("button");

// Loop through the buttons and set their ids
for (var i = 0; i < buttons.length; i++) {
  buttons[i].id = "button-1" + (i+1);
}

//Ajoute feuilles de style
document.getElementsByTagName('head')[0].insertAdjacentHTML(
    'beforeend',
    '<link rel="stylesheet" href="css/figure8.css" />');

document.getElementsByTagName('head')[0].insertAdjacentHTML(
    'beforeend',
    '<link rel="stylesheet" href="css/figure9.css" />');

document.getElementsByTagName('head')[0].insertAdjacentHTML(
    'beforeend',
    '<link rel="stylesheet" href="css/.css" />');

document.getElementsByTagName('head')[0].insertAdjacentHTML(
    'beforeend',
    '<link rel="stylesheet" href="css/.css" />');

document.getElementsByTagName('head')[0].insertAdjacentHTML(
    'beforeend',
    '<link rel="stylesheet" href="css/.css" />');

document.getElementsByTagName('head')[0].insertAdjacentHTML(
    'beforeend',
    '<link rel="stylesheet" href="css/.css" />');

// Ajoute le bouton au corps du document
document.body.appendChild(buttons2);

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

btnTwo.addEventListener("click", function() {
    red.setAttribute('class','figure red sapin')
    green.setAttribute('class','figure green sapin')
    blue.setAttribute('class','figure blue sapin')
    yellow.setAttribute('class','figure yellow sapin')
    purple.setAttribute('class','figure purple sapin')
    brown.setAttribute('class','figure brown sapin')
    orange.setAttribute('class','figure orange sapin')
    }
    );

btnThree.addEventListener('click', function (){
    red.setAttribute('class','figure red PM')
    green.setAttribute('class','figure green PM')
    blue.setAttribute('class','figure blue PM')
    yellow.setAttribute('class','figure yellow PM')
    purple.setAttribute('class','figure purple PM')
    brown.setAttribute('class','figure brown PM')
    orange.setAttribute('class','figure orange PM')
    
});

btnFour.addEventListener('click', function (){
    red.setAttribute('class','figure red CM')
    green.setAttribute('class','figure green CM')
    blue.setAttribute('class','figure blue CM')
    yellow.setAttribute('class','figure yellow CM')
    purple.setAttribute('class','figure purple CM')
    brown.setAttribute('class','figure brown CM')
    orange.setAttribute('class','figure orange CM')
});

btnFive.addEventListener('click', function (){
    red.setAttribute('class','figure red pipe')
    green.setAttribute('class','figure green pipe')
    blue.setAttribute('class','figure blue pipe')
    yellow.setAttribute('class','figure yellow pipe')
    purple.setAttribute('class','figure purple pipe')
    brown.setAttribute('class','figure brown pipe')
    orange.setAttribute('class','figure orange pipe')
});

btnSix.addEventListener('click', function (){
    red.setAttribute('class','figure red pyramide')
    green.setAttribute('class','figure green pyramide')
    blue.setAttribute('class','figure blue pyramide')
    yellow.setAttribute('class','figure yellow pyramide')
    purple.setAttribute('class','figure purple pyramide')
    brown.setAttribute('class','figure brown pyramide')
    orange.setAttribute('class','figure orange pyramide')
});

btnSeven.addEventListener("click", function() {
    red.setAttribute('class','figure red squirel')
    green.setAttribute('class','figure green squirel')
    blue.setAttribute('class','figure blue squirel')
    yellow.setAttribute('class','figure yellow squirel')
    purple.setAttribute('class','figure purple squirel')
    brown.setAttribute('class','figure brown squirel')
    orange.setAttribute('class','figure orange squirel')
    }
);

btnEight.addEventListener("click", function() {
    red.setAttribute('class','figure red cat')
    green.setAttribute('class','figure green cat')
    blue.setAttribute('class','figure blue cat')
    yellow.setAttribute('class','figure yellow cat')
    purple.setAttribute('class','figure purple cat')
    brown.setAttribute('class','figure brown cat')
    orange.setAttribute('class','figure orange cat')
    }
);

btnNine.addEventListener("click", function() {
    red.setAttribute('class','figure red dof1')
    green.setAttribute('class','figure green dof1')
    blue.setAttribute('class','figure blue dof1')
    yellow.setAttribute('class','figure yellow dof1')
    purple.setAttribute('class','figure purple dof1')
    brown.setAttribute('class','figure brown dof1')
    orange.setAttribute('class','figure orange dof1')
    }
);

