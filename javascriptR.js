console.log ("Return statements");

//function for checking a big number
const checkBigNumber = function (numbers) {
   const check = numbers;
     if (check >100){
         return "true";
     }
      return "false";
 };
 const result = checkBigNumber (200);
 console.log (result);

//Bouncer at a club
 const Message = function (number1, number2){
     const sum = number1 - number2;
         if (sum >0){
         return "come in";
     }
     return "it's too busy now, come back later";  
 };
 const result = Message (200, 200);
 console.log (result);

// Calculating the average
const calculateAverage = function (numbers,number_length){
    const average = numbers.reduce((total,n)=>total+n/number_length);
    return average;
};
let age = [10, 12, 100, 20, 60];
calculateAverage (age);
console.log (age);


