describe("getBoxVolume(obj)", () => {
    it("Debe devolver el volúmen de la caja, (obj)", () => {
        const size =  { 
          width: 2, 
          length: 5, 
          height: 1 
      } 
        const result = getBoxVolume(size)

      expect(result).to.be.eql(10) // aserción
    })
})


describe("round(number)", () => {
  it("Debe devolver un objeto con el número redondeado hacia abajo (Math.floor), hacia arriba (Math.ceil) y dependiendo de su punto flotante (Math.round), (number)", () => {
      const number =  13.3
      const result = round(number)

    expect(result).to.be.eql({ floor: 13, ceil: 14, roun: 13 }) // aserción
  })

  it("Debe devolver un objeto con el número redondeado hacia abajo (Math.floor), hacia arriba (Math.ceil) y dependiendo de su punto flotante (Math.round), (number)", () => {
  const number1 =  5.7
  const result1 = round(number1)

expect(result1).to.be.eql({floor: 5, ceil: 6, roun: 6}) // aserción
  })
})

describe("merge(info1, infor2)", () => {
  it("Debe devolver un objeto con la unión de los 2 objetos, (info1, infor2)", () => {
      const info1 =  {a: 1, b: 2, c: 3}
      const infor2 = {d: 4, b: 5}
      const result = merge(info1, infor2)

    expect(result).to.be.eql({a: 1, b: 2, c: 3, d: 4}) // aserción
  })
})


describe("diferenciaEntreObjetos(info1, infor2)", () => {
  it("Debe devolver un objeto con las propiedades que no se repiten entre ambos objetos, (info1, infor2)", () => {
      const info1 = {a: 1, b: 2, c: 3}
      const info2 = {d: 4, b: 5}
      const result = diferenciaEntreObjetos(info1, info2)

    expect(result).to.be.eql({a: 1, c: 3, d: 4}) // aserción
  })
})

describe("eliminarPropiedades(data, propos)", () => {
  it("Debe devolver un objeto sin las propiedades especificadas en el array en props, (data, props)", () => {
      const data = {a: 1, b: 2, c: 3}
      const props = ["c"]
      const result = eliminarPropiedades(data, props)

    expect(result).to.be.eql({a: 1, b: 2}) // aserción
  })
})

describe("filtrarPropiedades(obj, arr)", () => {
  it("Debe devolver un objeto con solo las propiedades especificadas en el array, (obj, arr)", () => {
      const obj = {a: 1, b: 2, c: 3}
      const arr = ["c", "b"]
      const result = filtrarPropiedades(obj, arr)

    expect(result).to.be.eql({b: 2, c: 3}) // aserción
  })
})

describe("comprarProductos(dinero, productos)", () => {
  it("Debe devolver un objeto, (dinero, productos)", () => {
      const productos = {cookies: 60, chocolate: 110, soda: 120}
      const dinero = 55
      const result = comprarProductos(productos, dinero)

    expect(result).to.be.an('object')// aserción
  })
  it("Debe devolver un objeto con dichos productos, teniendo como valor 'true' si puede comprarlo o 'false' si no puede, (dinero, productos)", () => {
    const productos = {cookies: 60, chocolate: 110, soda: 120,}
    const dinero = 115
    const result = comprarProductos(dinero, productos)

  expect(result).to.be.eql({cookies: true, chocolate: true, soda: false})// aserción
  })
})

describe("puedoComprarProductos(dinero, productos)", () => {
  it("Debe devolver 'true' si puede comprar todos los productos, (dinero, productos)", () => {
      const productos = {cookies: 60, chocolate: 110, soda: 120}
      const dinero = 300
      const result = puedoComprarProductos(dinero, productos)

    expect(result).to.be.true// aserción
  })
  it("Debe devolver 'false' si no puede comprar todos los productos, (dinero, productos)", () => {
    const productos = {cookies: 60, chocolate: 110, soda: 120}
    const dinero = 38
    const result = puedoComprarProductos(dinero, productos)

  expect(result).to.be.false// aserción
  })
})

describe("obtenerExperiencia(puntajes, desafios)", () => {
  it("Debe devolver la cantidad total de experiencia obtenida, (puntajes, desafios)", () => {
      const puntajes = { EASY: 10, MEDIUM: 50, HARD: 100}
      const desafios = { EASY: 3, MEDIUM: 4, HARD: 2}
      const result = obtenerExperiencia(puntajes, desafios)

    expect(result).to.be.eql(430)// aserción
  })
})

describe("getStringInfo(str)", () => {
  it("Debe devolver un objeto con la cantidad de letras, espacios y números que contiene, (str)", () => {
    const str = "H3ll0 Wor1d"
    const result = getStringInfo(str)

    expect(result).to.be.eql({letters: 7, numbers: 3, spaces: 1})// aserción
  })
})

describe("getParagraphInfo(str)", () => {
  it("Debe devolver un objeto con la cantidad de letras, espacios y números que contiene, (str)", () => {
    const str = "Do. Or do not. There is no try."
    const result = getParagraphInfo(str)

    expect(result).to.be.eql({letters: 21, words: 8, sentenses: 3})// aserción
  })
})

describe("countWords(str)", () => {
  it("Debe devolver un objeto con cada palabra que hay y la cantidad de veces que aparece, (str)", () => {
    const str = "El que compra pocas capas pocas capas paga"
    const result = countWords(str)

    expect(result).to.be.eql({el: 1, que: 1, compra: 1, pocas: 2, capas: 2, paga: 1})// aserción
  })
})

describe("busquedaLaboral(requisitos, postulante) ", () => {
  it("Debe devolver 'false' si la persona no se ajusta a los requisitos de la búsqueda laboral, (requisitos, postulante)", () => {
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
    const result = busquedaLaboral(requisitos, postulante)

    expect(result).to.be.false
  })
  it("Debe devolver 'true' si la persona se ajusta a los requisitos de la búsqueda laboral, (requisitos, postulante)", () => {
    const requisitos = {
      experience: 1, 
      languages: ["JavaScript", "HTML"], 
      location: ["Buenos Aires"],
      remuneration: 40000
  }
    const postulante = {
      experience: 6, 
      languages: ["HTML"], 
      location: ["Buenos Aires"],
      remuneration: 30000
  }
    const result = busquedaLaboral(requisitos, postulante)

    expect(result).to.be.true
  })
})

describe("parseQueryParams(url)", () => {
  it("Debe devolver un objeto con cada palabra que hay y la cantidad de veces que aparece, (url)", () => {
    const url = "http://www.exercises.com?keyword=objects&language=javascript&level=intermediate"
    const result = parseQueryParams(url)

    expect(result).to.be.eql({keyword: "objects", language: "javascript", level: "intermediate"}) 
  })
})

