//function declaration
function square (number1, number2) {
 const multiply1 = number1*number1;
 const multiply2 = number2*number2;
 const total = multiply1 + multiply2
 const doubled = total * total;
 return doubled;
}
console.log (square (1,2));

//function expression
const square = function (number1, number2){
    const multiply1 = number1*number1;
    const multiply2 = number2*number2;
    const total = multiply1 + multiply2
    const doubled = total * total;
    return doubled;
};
console.log (square (1,4));

//arrow function
const square = (number1, number2) => {
    const multiply1 = number1*number1;
    const multiply2 = number2*number2;
    const total = multiply1 + multiply2
    const doubled = total * total;
    return doubled;
};
console.log (square (1,3));
