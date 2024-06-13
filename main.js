#! /usr/bin/env node
import inquirer from 'inquirer';
// our set up is ready we can start now
console.log("welcome to quiz world");
console.log("Each Question is of 10 marks\n");
let marks = 0;
let userInput = await inquirer.prompt([
    {
        type: 'list',
        name: 'question1',
        message: "1. Which is the capital city of pakistan?",
        choices: ["karachi", "lahore", "islamabad", "peshawar"]
    },
    {
        type: 'list',
        name: 'question2',
        message: "2. Which is the constitution of pakistan ?",
        choices: [1956, 1962, 1973, 1998]
    },
    { type: 'list',
        name: 'question3',
        message: "3. Who was the first govornor journal of pakistan?",
        choices: ["quaid -e- azam", "liquat ali khan", "ayub khan", "yayha khan"]
    },
    { type: 'list',
        name: 'question4',
        message: "4. Who was ibrahim raisi?",
        choices: ["chief of army staff", "primeminister", "presidient", "suprem leader"]
    },
    { type: 'list',
        name: 'question5',
        message: "5. how many days in a year?",
        choices: [362, 363, 364, 365]
    }
]);
const { question1, question2, question3, question4, question5 } = userInput;
// this is called destructuring 
let correctOptions = ["islamabad", 1973, "quaid -e- azam", "presidient", 365];
if (question1 === "islamabad")
    marks += 10;
if (question2 === 1973)
    marks += 10;
if (question3 === "quaid -e- azam")
    marks += 10;
if (question4 === "presidient")
    marks += 10;
if (question5 === 365)
    marks += 10;
console.log(marks);
function myAnswers() {
    console.log(`\n correct Options :`, correctOptions);
    if (marks == 50) {
        console.log(`\nCongragulations! you got full ${marks}marks`);
    }
    else if (marks > 0) {
        console.log(`\nYou got ${marks} marks, out of 50`);
    }
    else {
        console.log(`\n Unfortunately! You got ${marks} marks out of 50`);
    }
}
myAnswers();
