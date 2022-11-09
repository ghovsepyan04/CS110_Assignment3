//Given two numbers num1 and num2, using addition arithmetic operation only, write a program 
//that calculates multiplication of given two numbers. Your program must use while loop.
//Example: num1 = 4; num2 = 3;

const num1 = 4;
const num2 = 3;

let count = 0;
let result = 0;

while (count < num1) {
    result += num2;
    count ++;
}
 console.log(result)