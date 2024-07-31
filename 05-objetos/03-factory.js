
function crearUsuario(name, email){

    return {
        email,
        name,
        active: true,
        recuperarClave: function(){
            console.log('recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Nicolas', 'nico@gmail.com')
let user2 = crearUsuario('George', 'george@gmail.com')

console.log(user1, user2)