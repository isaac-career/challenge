

const miArregloDeEnteros = [4,88,12,78,90,9];

//console.log(resultado);


function getByIdx(miArreglo, idx){
const extension = miArreglo.length;

console.log(extension);

    //let extension = miArreglo.length; 
    if(idx >= extension){
        console.log(extension);
        console.log('el indice solicitado es menor que el tamaño del Arreglo');
    
}
        else
        {
            
        


    console.log(miArreglo[idx]);
        }

}


let resultado = getByIdx(miArregloDeEnteros, 8);

