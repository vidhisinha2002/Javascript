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
 * Create the function factorial here
 */
function factorial(n)
{
    let ans=1;
    if(n==1||n==0)
        return ans;
    else{
        for(var i = n; i >= 1; i--){
      ans = ans * i;
    }
    
    return ans;
    }
}

function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
