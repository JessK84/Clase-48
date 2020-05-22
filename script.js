// Objetos
// Hacer test unitarios y funciones puras (no deberían mutar los objetos pasados como argumentos)

// Volumen de caja
// Crear una función que devuelva el volumen de una caja cuando se le pase un objeto con las medidas de la misma, correspondientes al ancho, alto, y largo. El volumen se calcula multiplicando entre sí dichos valores.
// const size = { width: 2, length: 5, height: 1 } 
// getBoxVolume(size) // returns 10


const size = { 
    width: 2, 
    length: 5, 
    height: 1 
} 

const getBoxVolume = obj =>{
    let resultado = 1
    for (let i in obj ) {
        resultado*=obj[i]

    }
    return resultado
}


// Redondeo
// Hacer una función que dado un número, devuelva un objeto con el número redondeado hacia abajo (Math.floor), hacia arriba (Math.ceil) y dependiendo de su punto flotante (Math.round)
// round(13.3) //  returns { floor: 13, ceil: 14, round: 13 }

const round = numero =>{
    
    return {
    floor: Math.floor(numero),
    ceil: Math.ceil(numero), 
    roun: Math.round(numero)
    }
}


// Unión de objetos
// Crear una función que dos objetos como argumentos, y devuelva un objeto que sea la unión de ambos. Es decir, debe contener las propiedades de ambos objetos. Para aquellas propiedades que están compartidas entre ambos, como un objeto no puede tener propiedades repetidas, se debe priorizar el objeto del primer parámetro.
// const info1 = {a: 1, b: 2, c: 3}
// const info2 = {d: 4, b: 5}
// merge(info1, info2) // returns {a: 1, b: 2, c: 3, d: 4}

// const info1 = {a: 1, b: 2, c: 3}
// const info2 = {d: 4, b: 5}

const merge = (info1, info2) => {
    let resultado ={}

    for(let i in info1){
       resultado[i]=info1[i]
    }
    for (let i in info2) {
        if(!(i in resultado)) {
            resultado[i] = info2[i]
        }
    }
    return resultado
}

// Diferencia de objetos
// Igual que el anterior, pero debe devolver un objeto con las propiedades que no se repiten entre ambos objetos
// const info1 = {a: 1, b: 2, c: 3}
// const info2 = {d: 4, b: 5}
// differentiate(info1, info2) // returns {a: 1, c: 3, d: 4}


const diferenciaEntreObjetos = (info1, info2) => {
    let resultado ={};

    for(let i in info1){
        if(!(i in info2)) {
            resultado[i] = info1[i]
        } 
    }
    for (let i in info2) {
        if(!(i in info1)) {
            resultado[i] = info2[i]
        } 
    } 

    return resultado
}


// Eliminar propiedades
// Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto sin las propiedades especificadas en el array
// const data = {a: 1, b: 2, c: 3}
// const props = ["c"]
// removeProperties(data, props) // returns {a: 1}


// TERMINAR DE CERRAR
const eliminarPropiedades = (data, props) => {

    const nuevoObjeto ={};

    for(let prop in data) {
        if(!(props.includes(prop))){
            nuevoObjeto[prop]= data[prop]
        }
    }
    return nuevoObjeto
    
}

// Filtrar propiedades
// Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto con solo las propiedades especificadas en el array
// const data = {a: 1, b: 2, c: 3}
// const props = ["c", "b"]
// filterProperties(data, props) // returns {b: 2, c: 3}


const filtrarPropiedades = (obj, arr) => {

    const nuevoObjeto ={};

    for(let i in obj) {
      
        for(let j of arr) {
            if(j === i){
                nuevoObjeto[i]= obj[i]
            }
        }
    }
    return nuevoObjeto
}

// Comprar productos
// Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, devuelva un objeto con dichos productos, teniendo como valor true si puede comprarlo o false sino
// const products = { cookies: 60, chocolate: 110, soda: 120, }
// const money = 115
// buyProducts(money, products) // returns { cookies: true, chocolate: true, soda: false}


const comprarProductos = (dinero, productos) =>{
    let compraDeProductos = {};

    for (let producto in productos){
        if (productos[producto] <= dinero) {
            compraDeProductos[producto] = true

        } else {
            compraDeProductos[producto] = false
        }
    } 
    return compraDeProductos
}

// Comprar lista de productos
// Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, true si puede comprarlos a todos o false si no
// const products = { cookies: 60, chocolate: 110, soda: 120, }
// const money = 300
// canBuyAllProduct(money, products) // returns true


const puedoComprarProductos = (dinero, productos) => {

    for (let producto in productos){
        if (productos[producto] <= dinero) {
        } else {
            return false
        }
    } 
    return true
}

// Obtener experiencia
// Crear una función que dado un objeto que contenga niveles de experiencia y puntaje por cada nivel, y un objeto con la cantidad de desafíos realizados por cada nivel, devuelva la cantidad total de experiencia obtenida
// const score = { EASY: 10, MEDIUM: 50, HARD: 100}
// const challenges = { EASY: 3, MEDIUM: 4, HARD: 2}
// getXP(challenges, score) // returns 630 (3 * 10 + 4 * 50 + 2 * 100)


// TERMINAR DE CERRAR
const obtenerExperiencia = (puntajes, desafios) =>{
    let resultado= 0

    for (let puntaje in puntajes){           
        let parcial =puntajes[puntaje] * desafios[puntaje]
        resultado = resultado + parcial 
    } 
    return resultado
}


// Analizando strings
// Crear una función que dado un string devuelva un objeto con la cantidad de letras, espacios y números que contiene. Cualquier cosa que no sea un número o un espacio cuenta como una letra
// getStringInfo("H3ll0 Wor1d") // returns { LETTERS:  7, DIGITS: 3, SPACES: 1 }


// TERMINAR DE CERRAR
const getStringInfo = str => {
    const letter = str.split("")
 
    const newObjct = {letters: 0, numbers: 0, spaces: 0};
    
        for(let i of letter) {
            if(i === " ") {
             newObjct.spaces++
            } else if(!isNaN(Number(i))) {
                newObjct.numbers++
            } else  {
                newObjct.letters++
            }
        }
    return newObjct
}


// Analizando párrafos
// Crear una función que dado un string devuelva un objeto con la cantidad de letras, palabras y oraciones.
// getParagraphInfo("Do. Or do not. There is no try.") // returns { LETTERS:  21, WORDS: 8, SENTENCE: 3 }

const getParagraphInfo = str =>{
    const word = str.split(" ")
    console.log(word);
    const sentense = str.split(". ")
    const characters = str.split(" ").join("").split("")
   
    const newObjct = {letters: 0, words: 0, sentenses: 0};
    
        for(let i in word) {
            newObjct.words++
        }
        for(let i in sentense) {
            newObjct.sentenses++
        } 
        for (let character of characters){
            if(character !== "." ) {
                newObjct.letters++
            } 
        }
    return newObjct
}


// Contar palabras
// Crear una función que dado un string devuelva un objeto con cada palabra que hay y la cantidad de veces que aparece. La función debe ignorar el caso ("JavaScript" y "javascript" cuentan como una misma palabra) y el objeto devuelto debe tener todas sus propiedades en minúscula
// countWords("El que compra pocas capas pocas capas paga") // returns { el: 1, que: 1, compra: 1, pocas: 2, capas: 2, paga: 1 }


const countWords = str => {   
    const words = str.toLowerCase().split(" ")
    const newObjct ={};
    console.log(words);
    for(let word of words) { //Of porque es array, no objeto
        if(!(word in newObjct)) {
            newObjct[word] = 1
        } else {
            newObjct[word]++
        }
    }
    return newObjct

}


// Búsqueda laboral
// Crear una función que dada una persona y una búsqueda de empleo, devuelva true si la persona se ajusta a dicha búsqueda. Ambos objetos tienen la siguiente estructura:{
// experience: 1, 
// languages: ["JavaScript", "HTML"], 
// location: ["Buenos Aires"],
// remuneration: 40000}


// La persona es adecuada si:

// tiene igual o más años de experiencia que la búsqueda
// los lenguajes que conoce son los que contiene la búsqueda (puede conocer más, pero no afecta en nada)
// su locación está incluida dentro de las locaciones posibles de la búsqueda
// su remuneración (pretendida) es igual o menor a la de la búsqueda

//SIN RESOLVER

const busquedaLaboral = (requisitos, postulante) => {
  
    const experiencia = postulante.experience >= requisitos.experience;
    let lenguajes = false
     
    for (let lenguaje of postulante.languages) {
        lenguajes = requisitos.languages.includes(lenguaje) ? true : false
    } 
    const ciudad = requisitos.location.includes(postulante.location[0])
    const remuneracion = requisitos.remuneration >= postulante.remuneration
    
  
    return  experiencia && ciudad && lenguajes && remuneracion
}

// REQUISITOS
const requisitos = {
    experience: 1, 
    languages: ["JavaScript", "HTML"], 
    location: ["Buenos Aires"],
    remuneration: 40000
}
const postulante = {
    experience: 1, 
    languages: ["HTML"], 
    location: ["Córdoba"],
    remuneration: 40000
}
console.log(busquedaLaboral(requisitos, postulante))


// Parámetros de búsqueda
// Los parámetros de búsqueda en una URL son aquellos que vienen después del signo ? y se escriben como parametro=valor, separados por el signo &. Crear una función que dada una URL, devuelva un objeto con cada parámetro como clave con su respectivo valor.

// parseQueryParams("http://www.exercises.com?keyword=objects&language=javascript&level=intermediate") // returns { keyword: "objects", language: "javascript", level: "intermediate }


const parseQueryParams = url => {   
    let search = url.split("?")
    let keyWords = search[1].split("&")
    let object ={};
    let value =[]

    for(let keyWord in keyWords) { //Of porque es array, no objeto
           let objectAndValue=keyWords[keyWord]
           value.push(objectAndValue.split("="))
           console.log(value)
        // hay que pusheaarlo para que quede un array 2D
    }
    for (let i of value) {
        const newObject = i[0]
        console.log(newObject)
        object.newObject
        object[newObject] = i[1]
    }
    return object
}

// Crear una función que dado un string y un array de letras, devuelva un objeto con la cantidad de dichas letras que hay en cada palabra. La función debería tener un parámetro opcional que permite definir si va a ser sensible al caso o no (si "A" y "a" cuentan como dos letras distintas o no)
// findOcurrencies("Hello World", ["o", "l"])

/** returns
{
  hello: {
    o: 1,
    l: 2
  },   
  world: {
    o: 1,
    l: 1
  }
}**/