const myArray = [89,29,-3,-35, -14, 9,0]



function getPositiveNumbers(arrayToTest){
const arr = [];
    

    for (element of arrayToTest){
        if(element < 0){
            arr.push(element)
        }
    }

    return arr;

}


let result =  getPositiveNumbers(myArray)
console.log(result)
