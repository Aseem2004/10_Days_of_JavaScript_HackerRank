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

function getLetter(s) {
    let letter;
    // Write your code here
    switch(s[0].toLowerCase()){
        
        case 'a': 
        letter='A';
        break;
        
        case 'e': 
        letter='A';
        break;
        
        case 'i': 
        letter='A';
        break;
        
        case 'o': 
        letter='A';
        break;
        
        case 'u': 
        letter='A';
        break;
        
        case 'b': 
        letter='B';
        break;
        
        case 'c': 
        letter='B';
        break;
        
        case 'd': 
        letter='B';
        break;
        
        case 'f': 
        letter='B';
        break;
        
        case 'g': 
        letter='B';
        break;
        
        case 'h': 
        letter='C';
        break;
        
        case 'j': 
        letter='C';
        break;
        
        case 'k': 
        letter='C';
        break;
        
        case 'l': 
        letter='C';
        break;
        
        case 'm': 
        letter='C'; 
        break;
        
        default:
        letter='D'  
        break;   

    }
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}