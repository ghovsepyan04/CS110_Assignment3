//Using a for loop, write a program that reverses a given array.
//Example arr = [1, 2, 3]

const arr = [1, 2, 3];
let result =[];

for (let i = arr.length-1; i >=0; i--) {
    result.push(arr[i]);
}

console.log(result);