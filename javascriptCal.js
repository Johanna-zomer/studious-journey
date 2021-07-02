//Hey Kiddo
const kid = function (age) {
    if (age >= 18) {
    return "true";
    } else {
    return "false";
    }
};
console.log (kid(20));

const adult = function (age) {
       console.log (kid)
       if (age<18)
        return "Hey Kiddo";
        return "Hello there";
  
};
console.log (adult (19));

//VAT calculations
//VAT excercise 1
const vatCalculation = function (
    baseprice,
    vat 
){
  const sumWithVat = baseprice * vat;
  return sumWithVat;
};
// console.log (vatCalculation (100, 1.21));

//VAT excercise 2
const priceAndVat = function (
    vatCalculation,
    vat,
    amount
) {
 const basePrice = (vatCalculation/vat);
 const vatAmount = ((vatCalculation/vat)*amount);
 console.log (basePrice);
 console.log (vatAmount);
  };
console.log (priceAndVat(100, 1.09, 0.09));