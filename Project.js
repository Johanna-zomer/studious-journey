function myFunction() {
    let person = prompt("Please enter your name", "");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hey " + person + "!";
       }
    };
function readNumber() {
   let num;
   
   do {
      num = prompt ("Enter a number please",0);
   } while (!isFinite (num));
   if (num === 11)return "Gefeliciteerd je hebt gewonnen";
   if (num >=0 && num <11 && num >11 && num <25)return "Dat is niet correct";
   document.getElementById("guess").innerHTML 
}

