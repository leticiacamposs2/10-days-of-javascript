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
* Determine os comprimentos laterais originais e retorne uma matriz:
* - O primeiro elemento é o comprimento do lado mais curto
* - O segundo elemento é o comprimento do lado mais longo
* 
 * Parâmetro (s):
 * literais: A matriz de seqüências de caracteres do literal do modelo marcado.
 * expressões: a matriz de valores de expressão do literal do modelo marcado (ou seja, [área, perímetro]).
*/
function sides(literals, ...expressions) {
    const [a, p] = expressions;
    const s1 = (p + Math.sqrt(Math.pow(p, 2)-16*a))/4;
    const s2 = (p - Math.sqrt(Math.pow(p, 2)-16*a))/4;
    return ([s2, s1]);
}


function main() {
    let s1 = +(readLine());
    let s2 = +(readLine());
    
    [s1, s2] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    
    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);
}