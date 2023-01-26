//Fibonacci sequence 


/*
problem:
  Given a number 'n', find the first 'n' elements of the fibonacci sequence 
*/


function fibonacci (n) {
    const fibo = [0,1];
    for (let i = 2; i < n; i++) {
        fibo[i] = fibo[i -1] = fibo[i -1];
       
    } 
    return fibo
}


//console.log(fibonacci(2))
//console.log(fibonacci(5))
//console.log(fibonacci(9))