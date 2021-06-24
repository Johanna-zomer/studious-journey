console.log();
const myAge = 20;
if (myAge >= 18 && myAge <25) {
    document.write ("Je krijgt 50% korting.");
} else {
    document.write ("Sorry, helaas geen korting.");
}
const firstName = true;
if (firstName === "Bram" || firstName === "Sarah"){
    document.write ("Gefeliciteerd, je krijgt een gratis biertje.");
} else {
    document.write ("Jammer je heet geen Bram of Sarah.");
}
const totalAmount = 26;
if (totalAmount <= 25) {
    document.write ("Sorry geen extra cadeau.");
} else if (totalAmount > 25 && totalAmount <= 50) {
    document.write ("Kijk eens, lekker gratis bitterballen erbij.");
} else if (totalAmount > 50 && totalAmount <=100) {
    document.write ("Kijk eens, lekker gratis een portie nachos erbij.");
} else if (totalAmount > 100) {
    document.write ("En voor jullie een lekkere fles Champagne.")
}
