function nombreResolucion(ancho, alto){
    let resultado = 0;

    if(ancho >= 7680 && alto >= 4320){
        resultado = '8K Resolution';
    }else{
        if(ancho >= 3840 && alto >= 2160){
            resultado = '4K Resolution';
        }else{
            if(ancho >= 2560 && alto >= 1440){
                resultado = 'FHD Resolution';
            }else{
                if(ancho >= 1920 && alto >= 1080){
                    resultado = 'HD Resolution';
                }else{
            return false; 
                }

            }


        }

    return resultado;
    }
}



let nombre =  nombreResolucion(7690, 20);

console.log(nombre);