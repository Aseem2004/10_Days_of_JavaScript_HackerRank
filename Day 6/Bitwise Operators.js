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

function getMaxLessThanK(n,k){
     let max=0;
     let a,b,bitwise;
     
     for (a=1;a<=n;a++) {
          for (b=a+1;b<=n;b++) {
               bitwise=(a&b); 
               
               if (bitwise<k && bitwise>max) {
                    max=bitwise;
               }    
          }  
     } 
     return max;
}


function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}