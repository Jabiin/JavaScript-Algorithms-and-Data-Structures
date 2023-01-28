// factorial number





// problem:  given an intger `n` find the factorial of that intger.

function factorial(n){
    let facto = 1
    for (let i = 2; i <= n; i++) {
        facto = facto * i
    }
    return facto
}

// console.log(factorial(7))
// console.log(factorial(5))
// console.log(factorial(1))
