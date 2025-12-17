let number1 = parseInt(prompt("gib hier die 1 zahl ein"));
let number2 = parseInt(prompt("gib hier die 2 Zahl ein"));
let result = 0;

let x = parseInt(prompt("press 1 = +, 2 = -, 3 = *, 4 = / "));



if (x == 1){
result = number1 + number2;
} else if (x == 2){
    result = number1 - number2;
} else if (x == 3){ 
    result = number1 * number2;
}  else { 
    result = number1 / number2;
}
console.log( result);