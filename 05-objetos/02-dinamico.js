const user = {id: 1};

user.name = 'george';
user.lastname = 'brown';
user.guardar = function (){
    console.log('Guardando',user.name)
}



user.guardar();

delete user.name;
delete user.lastname;

console.log('object after change ===========')
console.log(user)



