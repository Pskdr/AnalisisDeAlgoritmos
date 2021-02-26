
const suma = (num, n) =>{
    if(num<n/2){
        console.log(num)
        return num +","+ suma(num+2,n)
    }else{
        return 0
    }
}

console.log(suma(5,100))