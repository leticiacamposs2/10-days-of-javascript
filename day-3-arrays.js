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

/**
 * Retorne o segundo maior número da matriz.
 * @param {Number []} nums = Uma matriz de números.
 * @return {Number} O segundo maior número da matriz.
 **/
function getSecondLargest(nums) {
    //ordena o array em ordem crescente
    nums.sort(); 

    //cria um novo array com os elementos de nums sem números repetidos
    var newArray = [...new Set(nums)];

    //retorna o 2 maior número
    console.log(newArray[newArray.length-2]);
}
