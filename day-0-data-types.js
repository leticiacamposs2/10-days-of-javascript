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
* As variáveis ​​'firstInteger', 'firstDecimal' e 'firstString' são declaradas para você - não as modifique.
* Imprima três linhas:
* 1. A soma de 'firstInteger' e a representação numérica de 'secondInteger'.
* 2. A soma de 'firstDecimal' e a representação numérica de 'secondDecimal'.
* 3. A concatenação de 'firstString' e 'secondString' ('firstString' deve ser a primeira).
*
* Parâmetro (s):
secondInteger - A representação de string de um número inteiro.
secondDecimal - A representação de string de um número de ponto flutuante.
secondString - Uma string que consiste em uma ou mais palavras separadas por espaço.
**/
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Escreva o código que usa console.log para imprimir a soma do 'firstInteger' e 'secondInteger' (convertido em um tipo Number) em uma nova linha.    
    console.log(firstInteger+parseInt(secondInteger));
    
    // Escreva o código que usa console.log para imprimir a soma de 'firstDecimal' e 'secondDecimal' (convertido em um tipo Number) em uma nova linha.    
    console.log(firstDecimal+parseFloat(secondDecimal));
    
    // Escreva o código que usa console.log para imprimir a concatenação de 'firstString' e 'secondString' em uma nova linha. A variável 'firstString' deve ser impressa primeiro.
    console.log(firstString + secondString);
}

