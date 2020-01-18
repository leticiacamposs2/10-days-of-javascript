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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 * 
 * Cada letra é impressa em uma nova linha.
 * Em seguida, as vogais são impressas na mesma ordem em que apareceram .
 * Em seguida, as consoantes são impressas na mesma ordem em que apareceram .
 * 
 */

function vowelsAndConsonants(s) { //javascriptloops
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let v of s) {
        if (vowels.includes(v)) {
            console.log(v);
        }
    }

    for (let v of s) {
        if (!vowels.includes(v)) {
            console.log(v);
        }
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}