let toggleNavStatus = false;

let toggleNav=function (){
    let getToggle= document.quereySelector(".nav.main.ul");
    let getToggleLinks=document.querySelectorAll(".nav-main.a");
    let selectedColors = ["grey","pink","purple","yellow","green"]

  if (toggleNavStatus === false) {
    getToggle.style.background= "1";
}
let arrayLength=getToggleLinks.length;
    for (var i=0; i<arrayLength; i++) {
    getToggleLinks [i].style.background= "grey, pink,purple, yellow, green";

    } else if(toggleNavStatus === true) {
        getToggle.style.background= "0";
    }
    let arrayLength=getToggleLinks.length;
    for (var i=0; i<arrayLength; i++) {
        getToggleLinks [i].style.background= "0";
    }      

