let pairs= [
    
        [1,{name:"Nicolas"}],
    
        [2, {name: "Felipe"}],

        [3, {name:"Chanchito" }]

];


function toColletion(arr){
    let collection = [];
    for(idx in arr){
        let element = arr[idx];
        collection[idx] = element[1];
        collection[idx].id = element[0]
    }

    return collection;
}

let result = toColletion(pairs);
console.log(result);
