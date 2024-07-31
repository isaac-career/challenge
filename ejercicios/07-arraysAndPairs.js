let array = [{
    id: 1,
    name: 'hello'
},
{
    id: 2,
    name: 'yours'

},{
    id: 3,
    name: 'party'

}];


function toPais(){
    let pairs = [];

    for(idx  in array){
        let element = array [idx]
        pairs[idx] = [element.id, element]
    }
 
    return pairs;


}

let result = toPais(array);
console.log(result)