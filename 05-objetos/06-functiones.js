function Usuario (nombre){
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U('George');

// console.log(user);


function of(Fn, arg){
    return new Fn(arg)
}

let user2 = of(Usuario, 'Isaac');
// console.log('====== user2 =========');
// console.log(user2);

function returned (){
    return function (){
        console.log('hi niggas');
    }

}

let saludo   = returned();
// console.log(saludo);
saludo();