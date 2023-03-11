
// Fibonacci
// 0,1,1,2,3,5,8,13,21,34...
// (+01=1 / 1+1=2 / 1+2=3 / 2+3=5 / 3+5=8 / 5+8=13 / 8+13=21 / 13+21=34...)
function fibo(numero){
    if(numero == 0) return 0
    if(numero == 1) return 1
    if(numero == 2) return 1
    return fibo(numero - 2) + fibo(numero - 1) 
}


let contador = 0 // condicion inicial 

// do{
//     console.log({ contador, fibo: fibo(contador)})
//     contador = contador + 1 // condicion incremental
// }while(contador <= 10); //expresion o condicion limite

// contador = 12 inicial

// while(contador <= 10){  critica
//     console.log({ contador, fibo: fibo(contador)})
//     contador = contador + 10 incremental
// }


//estructura importante

for(let index = 0; index <= 10; index = index * 2){
    console.log({ index, fibo: fibo(index)})
}


