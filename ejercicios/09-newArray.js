function createArray(n){

    let myArray = [];

    for(let a=0;a<n;a++){
        myArray[a]=a+1;
    }

    return myArray;

}

let result = createArray(15)

console.log(result)