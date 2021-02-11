/**
 * !. Comentarios
 * - Tipo bloque:
 * */
 
 // Coemntario de linea
 // TODO: ejemplo de la extension TODO
 // BUG: Ejemplo de la extension TODO

 console.log("1" + 1);
 console.log("aló")
 console.log("ekizde")



 const suma = (num,numm) => {
    console.log(num+numm)
 }
 suma(5,8);


 const retorno = num => {
    return(num)
 }


 const alados = num => {
   console.log(num**2+2)
 } 

 alados(2);


 const pares = num =>{
      if(num==0){
         return 0;
      }else{
         if(num%0){
            console.log(num+","+pares(num-1))
         }else{
            pares(num-1)
         }
      }
 }

 const positivos = num =>{
      if(num<0){
         return 0
      }else{
         console.log(num)
         positivos(num-1)
      }
 }
 positivos(100);

 const positivosSuma = (num,suma) =>{
   if(num<0){
      return console.log(suma)
   }else{
      positivosSuma(num-1,num+suma)
   }
}

positivosSuma(100,0)