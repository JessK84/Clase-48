

const personajes = {
    nonmbre: 'Luke',
    apellido: 'Skywalker',
    edad: 23,
    profesion: 'Jedi',
    poderes: true,
    amigues: ['Han Solo', 'Chewaka'],
    // origen = {
    //     galaxia: 'xxxx',
    //     pueblo: 'yyyyyyy',
    //     ciudad: 'mmmmmmmmm',
    // }

}

// Para acceder a cada propiedad:
personajes.nombre //'Luke'

// Para agregar elementos al objeto
personajes1.nombreCompleto.nombre = 'Leia'
personajes1.nombreCompleto.apellido = 'Skywalker'
const personajes1 = {
    nombreCompleto = {
        nombre: 'Leia',
        apellido = 'Skywalker',

    }
}

const nombreCompleto = personajes1.nombreCompleto
const nombre = nombreCompleto.nombre

personajes.nombreCompleto.nombre //Igual que decir esto

// Para acceder a cada propiedad de cada objeto, de igual manera que para crearlo
// personajes.nombreCompleto.nombre
// 'Leia'
// personajes.nombreCompleto.apellido
// 'Skywalker'


// Puede haber una variable que diga:
const nombreDelPersonaje = nombreCompleto
personaje = [nombreDelPersonaje]
// Return 'Leia Skaywalker'
// Para chequear que sin un objeto está en una variable
// nombreCompleto in personaje
// true
//


// PARA RECORRER OBJETOS
for (let prop in personajes) {
    console.log(prop)
}


// PARA RECORRER OBJETOS ANIDADOS
for (let prop in personajes) {
    console.log(personajes[prop])
}


// CLASE 49 -  DESTRUCTURING
// Ejemplos:
const size = { 
    width: 2, 
    length: 2, 
    height: 5 
}

//  Punto - 1 
// const width = size.width
// const height = size.height
// const length = size.length

// Destructuring o Destructurar
// Todo esto, reemplaza lo de arriba - Punto 1
// Desestructuro la propiedad width, height y length de size
// Las variables deben tener el mismo nombre que las propiedades
const { width, height, length} = size;

const volumen = width * height * length

const msg = `
Tamaño de la caja:
- Ancho ${width}
- Alto ${height}
- Largo ${length}
`

// persona es un objeto
const saludarPersona = persona => {
    const {nombre, apellido, edad} = persona
    // de esta manera sabemos que es un objeto. 
    // El problema es que ocualta información

}


const volumen = { 
    width: 2, 
    length: 4, 
    height: 3 
}
// const {propiedad} = objeto // Para asignarle nuevo nombre a la variable
// const {propiedad = valorPorDefault} = objeto 
// const {propiedad: nuevoNombre} = objeto 
// const {propiedad: nuevoNombre = valorPorDefault} = objeto 

const getVolumne = (size = {}) => {
    const {
        width: w =0,
        length: l = 0, 
        height: h = 0
    } = size //Descontructing o Desestructurar

    return width * length * height
}

// Ejemplo  que simplifica getVolumne
const calculteVolumne = ({width, length, height}) => { //Descontructing o Desestructurar
    return width * length * height
}

const {width: ancho, length: alto} = size
// Entonces ancho será = 2 y alto = 4
// Sirve para cambiar el nombre de una variable cuando nos queda más cómodo

const person = {
    fullName: {
     firsName : 'Leia',
     lastName: 'Skywalker'
    }
}

// Para desestructurarlo
// const {fullName: { firsName, lastName} }

const { fullName: {firsName: name = '', lastName: surname= '' } }

