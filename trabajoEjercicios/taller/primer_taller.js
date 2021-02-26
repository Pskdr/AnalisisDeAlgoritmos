
var respuesta1 = 0;
const punto1 =(s, p) =>{
    console.time('problema 1')
    for (let i = 0; i<s; i++  ){
        respuesta1 += p
    }
    console.timeEnd('problema 1')
    return respuesta1

}

console.log(punto1(100, 4))

//entre rmenia y manizales hay 3 carreras de cuantas maneras...
var respuesta2 = 0;
const punto2 = (carreteras) =>{
    console.time('problema parte 2')
    for(let i =0; carreteras>i; i++){
        respuesta2 +=1;
    }
    console.time('problema parte 2')
    return respuesta2;
}

console.log(punto2(3))

/**
 * En tres mercados de una ciudad se venden arroz por bulto;
en el primer mercado hay disponibles seis tiendas, en el segundo cuatro y en el tercer mercado cinco tiendas.
¿De cuántas maneras puede realizarse la compra de un bulto de arroz?s m
 */
var respuesta3 = 0;
 const punto3 = (mercado1, mercado2, mercado3) =>{
     console.time('problema 3')
    for(let i =0; mercado1>i; i++){
        respuesta3 += 1;
    }
     for (let i = 0; mercado2 > i; i++) {
         respuesta3 += 1;
     }
     for (let i = 0; mercado3 > i; i++) {
         respuesta3 += 1;
     }
     console.timeEnd('problema 3')
     return respuesta3
 }

 console.log(punto3(6,4,5))


 /**
  * 4) Veinte países mantienen relaciones diplomáticas, cada país tiene un embajador en los otros países. Indique la cantidad de embajadores que hay en total.

  */
 var respuesta4 = 0;

 const punto4 = (embajadores, paises) =>{
     console.time('problema 4')
    for(let i= 0; paises>i; i++){
        respuesta4 += embajadores
    }
    console.timeEnd('problema 4')
    return respuesta4
 }
 console.log(punto4(1,20))


 /**
  * 5) Sofia trabaja en una tienda de ropa.
Se le ha asignado la tarea de vestir a un maniquí con una falda,
una blusa y un par de zapatos de una exposición de faldas,
blusas y zapatos que hacen juego.
Ya que todas las prendas combinan,ella puede elegir cualquier blusa,
cualquier falda y cualquier par de zapatos y el atuendo se verá bien.
Si hay 3 faldas, 5 blusas y 2 pares de zapatos, ¿De cuántas maneras distintas puede vestir al maniquí?
  */

  var respuesta5 = 0
  var conteo1 = 0
  var conteo2 = 0
  var conteo3 = 0

  const punto5 = (faldas, blusas, zapatos) =>{
      console.time('problema 5')
        for (let i = 0; i < faldas; i++) {
            conteo1 +=1  
        }
        for (let i = 0; i < blusas; i++) {
            conteo2 +=1  
        }
        for (let i = 0; i < zapatos; i++) {
            conteo3 +=1  
        }
      respuesta5 = conteo1*conteo2*conteo3
      console.timeEnd('problema 5')
      
      return respuesta5
  }

  console.log(punto5(3,5,2))

  /**
   * 6) En tres mercados de una ciudad se venden arroz por bulto; en el primer mercado
hay disponibles seis tiendas, en el segundo cuatro y el tercer mercado cinco.
¿De cuántas maneras puede realizarse la compra de un bulto de arroz?
   */

   var respuesta6 = 0

   const punto6 = (mercado1, mercado2, mercado3) =>{
       console.time('problema 6')
        for(let i=0; i<mercado1; i++){
                for (let i = 0; i < mercado2; i++) {
           
                    for (let i = 0; i < mercado3; i++) {
                    respuesta6 += 1
             }
            }
        }
       
       console.timeEnd('problema 6')
       return respuesta6
   }

   console.log(punto6(6,4,5))


   /**
    * parte 2 RECURSIVIDAD
    */



    /**
     * 1. Crear un array números aleatorios. El tamaño del array lo debe de ingresar el usuario.
     */
    
     const Rproblema1 = (t,a) =>{
        if(t>0){
            a.push(Math.random())
            Rproblema1(t-1,a)
        }else{
            return a
        }
     }

     const arreglo = [,] 
    console.log(Rproblema1(5,arreglo))
     
     const coneccion = () =>{
         Rproblema1(document.getElementById("ingreso").value,arreglo)
     }


     /**
      * Igual que el ejercicio anterior, pero meter en el array números aleatorios sin que se
        repitan
      * 
      */





     const Rproblema2 = (t,a) =>{
        if(t>0){
            let b = Math.random() 
            for(let i = 0; i<a.length; i++){
                if(a[i] === b){
                    Rproblema1(t,a)
                }
            }
            a.push(b)
            Rproblema1(t-1,a)
            
        }else{
            return a
        }
     }
     const coneccion2 = () =>{
        Rproblema2(document.getElementById("ingreso2").value,arreglo)
    }
     



     /**
      * 3. Escribe una función recursiva que dado un número entero n, retorne un array con todos
        los números enteros en orden decreciente desde n a 1.
      */
    
      const Rproblema3 = (n) =>{
            if(n>0 && n%2 === 0){
                arreglo.push(n)
            }else{

                if(n<0){
                    return arreglo;
                }else{
                    return Rproblema3(n-1)
                }
                
            }
      }

      const coneccion3 = () =>{
        Rproblema3(document.getElementById("ingreso3").value)
    }


    /**
     * 4. Escribir un programa que encuentre la suma de los enteros positivos pares desde N hasta
        comprobar que si N es impar se imprima un mensaje de error.
     */
    let suma = 0
    const Rproblema4 = (n) =>{
        if(n%2 != 0){
            return 0
        }else{
            return suma += n+Rproblema4(n-2)
        }
    }



    const coneccion4 = () =>{
        
        if(Rproblema4(document.getElementById("ingreso3").value) === 0){
            alert('Error')
        }else{
            console.log(Rproblema4(document.getElementById("ingreso3").value))
        }
    }

    