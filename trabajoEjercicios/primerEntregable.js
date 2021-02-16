const suma= (a, b) => {
    return a+b ;
}

const multipli = (a,b) => {
    return a*b;
}

const div = (a, b) => {
    if(a>b){
        return a/b;
    }else{
        return null;
    }
}

const ejercicio1 = (a,b) =>{
    return"La cantidad de formas que se puede vestir es: "+ suma(a,b);
}

const ejercicio2 = (a,b) =>{
    return"La cantidad de parejas distintas es: "+ multipli(a,b);
}

const ejercicio3 = a=>{
    return "la cantidad de embajadores, es: "+a;
}

const ejercicio4 = (a, b) =>{
    if(a>99){
        return ejercicio4(a-1,b+1)
    }else{
        return b
    }
}

const ejercicio5 = (a,b) =>{
    return"Las opciones que se tienen de lectura, son:  "+ suma(5,7)
}

const ejercicio6 = (a,b,c) => {
    return "las opciones de compra de arroz, son: " + suma(suma(a,b),c)
}

console.log(ejercicio1(4,5) + ejercicio2(9,7) + ejercicio3(20)+"la cantidad de numeros de 3 cifras es: "+ ejercicio4(999,0)+ ejercicio5(5,7) + ejercicio6(6,4,5))

