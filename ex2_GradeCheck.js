//Write a code that for a given grade from 0 to 100 will print:
//1. The letter grade of the user (Using if/else).
//2. Using the calculated grade letter, check if the grade is passing or failing (Using switch).
//Example: grade = 89, grade = 60

const grade = 60;
let letter = "";

if (grade >= 97) {
    letter += "A+";
}
else if (grade >= 93) {
    letter += "A"
}
else if (grade >= 90) {
    letter += "A-";
}
else if (grade >= 87) {
    letter += "B+";
}
else if (grade >= 83) {
    letter += "B";
}
else if (grade >= 80) {
    letter += "B-";
}
else if (grade >= 77) {
    letter += "C+";
}
else if (grade >= 73) {
    letter += "C";
}
else if (grade >= 70) {
    letter += "C-";
}
else if (grade >= 67) {
    letter += "D+";
}
else if (grade >= 63) {
    letter += "D";
}
else if (grade >= 60) {
    letter += "D-";
} else {
    letter += "F";
}

switch (letter) {
    case "A+":
    case "A":
    case "A-":
    case "B+": 
    case "B-": 
    case "B":
    case "C+": 
    case "C":
    case "C-":
        console.log('Your grade is ' + grade + ", which corresponds to " + letter + '. You passed\!');
        break;
    case "D+":
    case "D":
    case "D-":
    case "F":
        console.log('Your grade is ' + grade + ", which corresponds to " + letter + '. You failed\!');
}

