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
    //cria um novo array com os elementos de nums sem números repetidos
    const newArray = Array.from(new Set(nums));

    //ordena o array em ordem decrescente
    const reverseSorted = newArray.sort(function(a, b){return b - a})
    
    //retorna o 2 maior número
    return (reverseSorted[1]);
}
