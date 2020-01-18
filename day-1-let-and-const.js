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

function main() {
    // Escreva seu código aqui. 
    // Leia a entrada usando 'readLine ()' e 
    // imprima a saída usando 'console.log ()'.    
    const PI = Math.PI;
    let r = readLine();
    let area = PI * (r * r);
    let perimeter = 2 * ( PI * r);

    // Imprima a área do círculo:
    console.log(area);

    // Imprima o perímetro do círculo:
    console.log(perimeter);

    try {    
        // Tentativa de redefinir o valor da variável constante PI
        PI = 0;
        // Tentativa de imprimir o valor de PI        
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}