//Using while write a program that prints the following figure for given number of lines.
//Example n = 3, n = 5

const num = 5;
let count = 0;
let sign = "";

while (count < num) {
    sign += "+"; 
    count ++;
}

count = 0;

while (count < num) {
    console.log(sign);
    count ++;
}


