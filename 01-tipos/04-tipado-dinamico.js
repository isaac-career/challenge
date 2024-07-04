 let name = "george";
 let movie ="the hacker";
 let edad = 22;

 let personaje =  {
    nombre: "falcon",
    movie: "first hacker",
    edad: 34,


 };

 console.log(personaje);
 console.log(personaje.edad);
 console.log(personaje['nombre']);

 let llave = 'edad';
 personaje[llave] = 16
 ;
 console.log(personaje.edad);

 delete personaje.edad;
 console.log(personaje)
