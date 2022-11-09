//Write a program that given a positive decimal number, will print its binary value. 
//Hint: You can combine the remainders into a string and then reverse the string for the correct result.
//Example num = 20

let num = 20;
let result = "";

while (num > 0) {
    result = num % 2 + result;
    num = Math.floor(num / 2);
}

console.log(result);
