let nombre ='padrote';

let username = nombre || 'Anonimo';

console.log(username);


function fn1 (){
    console.log("function 1");
    return false;
}

function fn2(){
    console.log('function 2');
    return true;

}


let x = fn1() && fn2();

