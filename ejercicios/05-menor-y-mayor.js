const miArreglo = [22,4,-6,-1,100,999];

function getMenorMayor(arreglo){
    let menor = arreglo[0];
    let mayor = arreglo[0];
    //let a = arreglo.le

    for(const pivote of arreglo){
        menor = menor < pivote?menor: pivote;
        mayor = mayor > pivote?mayor: pivote;

    }

    return [menor,mayor];

}


let response = getMenorMayor(miArreglo);
console.log(response);