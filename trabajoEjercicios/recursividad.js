
const factorial = (num) => {
    if(num > 1){
        return num*factorial(num-1)
    }else{
        return 1
    }
}


console.log("el factorial de 5: es "+ factorial(5))

const fib = (num) =>{
    if(num<2){
        return num
    }else{
        return fib(num-1) + fib(num-2)
    }
}

console.log(fib(8))
const main = () =>{
    
}