'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    
    let dayName = new Date(dateString[0]);

    if (dayName.toString().includes('Sun')) {
        return "Sunday";
    } else if (dayName.toString().includes('Mon')) {
        return "Monday";
    } else if (dayName.toString().includes('Tue')) {
        return "Tuesday";
    } else if (dayName.toString().includes('Wed')) {
        return "Wednesday";
    } else if (dayName.toString().includes('Thu')) {
        return "Thursday";
    } else if (dayName.toString().includes('Fri')) {
        return "Friday";
    } else {
        return "Saturday";       
    }
}


function main() {
    const d = +(readLine());
    
    for (let i = 0; i < d; i++) {
        const date = readLine();
        
        console.log(getDayName(date));
    }
}