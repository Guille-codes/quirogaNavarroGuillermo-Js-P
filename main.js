// function multiplicador(capitalInicial, interes, meses){
//     let multiplicador = capitalInicial * interes * meses
//     return multiplicador
// }
    
// let ingresar = prompt("Porfavor ")

// while(ingresar.toLowerCase() == "si"){
//     let capitalInicial = prompt("Ingrese capital inicial. (En pesos)")
//     let interes = parseFloat(prompt("Ingrese el interes. (En decimal con . )"))
//     let meses = parseInt(prompt("Ingrese la cantidad de meses."))
    
//     console.log("Su capital final es: " + multiplicador(capitalInicial, interes, meses))
//     alert("Su capital final es: " + multiplicador(capitalInicial, interes, meses))

//     ingresar = prompt("¿Quiere hacer otro calculo? Responder Si o No.")
// }





let ingresar = prompt("Hola bienvenido a LOOKSHIRT, tu tienda favorita. \n\nSi estas buscando tu marca preferida:\n[SI] Continuar\n[NO] Cerrar")
while(ingresar.toLowerCase() == "si"){
    let instruccion = prompt("Selecciona tu marca preferida y luego tu prenda. \n💠 [1] Adidas\n💠 [2] Nike\n💠 [3] Topper\n💠 [4] Vans")
    switch(instruccion){
    case "1":
    alert("El catalogo de ADIDAS se muestra por consola a continuación: ")

        class Producto {
            constructor(id, prenda, precio, talle){
                this.id = id,
                this.prenda = prenda,
                this.precio = precio,
                this.talle = talle
            }
            mostrarData(){
                console.log(`[${this.id}] Productos de Adidas \nPrenda: ${this.prenda} \nPrecio: ${this.precio} \nTalle: ${this.talle}`)
            }
        }

        const prenda1 = new  Producto(1,"Zapatillas NIKE 5", 45000, "42")
        const prenda2 = new  Producto(2,"Zapatillas GAMECOURT 2.0 para tenis", 35600, "36")
        const prenda3 = new  Producto(3,"Camiseta TITULAR ARGENTINA 22", 15000, "xl")
        const prenda4 = new  Producto(4,"Camiseta TITULAR OFICIAL BOCA JUNIORS 22/23", 28000, "M")

        const tiendaAdidas= []
        tiendaAdidas.push(prenda1, prenda2, prenda3, prenda4)
        console.log(tiendaAdidas)
        
        const filtro = tiendaAdidas.find(prenda => prenda.id === 3)
        console.log(filtro)
        const comprobacion = tiendaAdidas.some(prenda => prenda.nombre ===`Supremacy`)
        console.log(comprobacion)
        const menorPrecio = tiendaAdidas.filter(prenda => prenda.precio < 16000)
        console.log(menorPrecio)

        for(let producto of tiendaAdidas){
        producto.mostrarData()
        }
        break;

        //CASE 2//CASE 2//CASE 2//CASE 2//CASE 2//CASE 2//CASE 2//CASE 2//CASE 2//CASE 2//CASE 2//CASE 2//CASE 2
        //CASE 2//CASE 2//CASE 2//CASE 2//CASE 2//CASE 2//CASE 2//CASE 2//CASE 2//CASE 2//CASE 2//CASE 2//CASE 2

    case "2":
        alert("El catalogo de NIKE se muestra por consola a continuación: ")

        class Producto2 {
            constructor(id2, prenda2, precio2, talle2){
                this.id2 = id2,
                this.prenda2 = prenda2,
                this.precio2 = precio2,
                this.talle2 = talle2
            }
            mostrarData(){
                console.log(`[${this.id2}] Productos de Nike \nPrenda: ${this.prenda2} \nPrecio: ${this.precio2} \nTalle: ${this.talle2}`)
            }
        }

        const prenda5 = new  Producto2(5,"Zapatillas Nike Air Vapormax", 105000, "42")
        const prenda6 = new  Producto2(6,"Zapatillas Nike Droid", 55600, "36")
        const prenda7 = new  Producto2(7,"Pantalon Nike Essentials 22", 25000, "xl")
        const prenda8 = new  Producto2(8,"Campera Nike Pro Therma-fit", 20000, "M")

        const tiendaNike= []
        tiendaNike.push(prenda5, prenda6, prenda7, prenda8)
        console.log(tiendaNike)
        
        const filtro2 = tiendaNike.find(prenda2 => prenda2.id2 === 3)
        console.log(filtro2)
        const comprobacion2 = tiendaNike.some(prenda2 => prenda2.nombre2 ===`Pantalon`)
        console.log(comprobacion2)
        const menorPrecio2 = tiendaNike.filter(prenda2 => prenda2.precio2 < 26000)
        console.log(menorPrecio2)

        for(let producto2 of tiendaNike){
        producto2.mostrarData()
        }
        break;

        //CASE 3//CASE 3//CASE 3//CASE 3//CASE 3//CASE 3//CASE 3//CASE 3//CASE 3//CASE 3//CASE 3//CASE 3//CASE 3
        //CASE 3//CASE 3//CASE 3//CASE 3//CASE 3//CASE 3//CASE 3//CASE 3//CASE 3//CASE 3//CASE 3//CASE 3//CASE 3

    case "3":
        alert("El catalogo de Topper se muestra por consola a continuación: ")

        class Producto3 {
            constructor(id3, prenda3, precio3, talle3){
                this.id3 = id3,
                this.prenda3 = prenda3,
                this.precio3 = precio3,
                this.talle3 = talle3
            }
            mostrarData(){
                console.log(`[${this.id3}] Productos de Topper \nPrenda: ${this.prenda3} \nPrecio: ${this.precio3} \nTalle: ${this.talle3}`)
            }
        }

        const prenda9 = new  Producto3(9,"Zapatillas Topper X-Forcer", 16000, "42")
        const prenda10 = new  Producto3(10,"Zapatillas Topper Ultralight II", 25600, "36")
        const prenda11 = new  Producto3(11,"Buzo topper", 15000, "l")
        const prenda12 = new  Producto3(12,"Camiseta topper estampada", 8000, "M")

        const tiendaTopper= []
        tiendaTopper.push(prenda9, prenda10, prenda11, prenda12)
        console.log(tiendaTopper)
        
        const filtro3 = tiendaTopper.find(prenda3 => prenda3.id3 === 3)
        console.log(filtro3)
        const comprobacion3 = tiendaTopper.some(prenda3 => prenda3.nombre3 ===`Buzo`)
        console.log(comprobacion3)
        const menorPrecio3 = tiendaTopper.filter(prenda3 => prenda3.precio3 < 16000)
        console.log(menorPrecio3)

        for(let producto3 of tiendaTopper){
        producto3.mostrarData()
        }
        break;

        //CASE 4//CASE 4//CASE 4//CASE 4//CASE 4//CASE 4//CASE 4//CASE 4//CASE 4//CASE 4//CASE 4//CASE 4//CASE 4
        //CASE 4//CASE 4//CASE 4//CASE 4//CASE 4//CASE 4//CASE 4//CASE 4//CASE 4//CASE 4//CASE 4//CASE 4//CASE 4

    case "4":
        alert("El catalogo de VANS se muestra por consola a continuación: ")

        class Producto4 {
            constructor(id4, prenda4, precio4, talle4){
                this.id4 = id4,
                this.prenda4 = prenda4,
                this.precio4 = precio4,
                this.talle4 = talle4
            }
            mostrarData(){
                console.log(`[${this.id4}] Productos de Vans \nPrenda: ${this.prenda4} \nPrecio: ${this.precio4} \nTalle: ${this.talle4}`)
            }
        }

        const prenda13 = new  Producto4(13,"Zapatillas Vans Clasicc", 45000, "42")
        const prenda14 = new  Producto4(14,"Zapatillas Vans Colors", 35600, "36")
        const prenda15 = new  Producto4(15,"Camiseta Vans", 15000, "xl")
        const prenda16 = new  Producto4(16,"Pulseras Vans", 28000, "M")

        const tiendaVans= []
        tiendaVans.push(prenda13, prenda14, prenda15, prenda16)
        console.log(tiendaVans)
        
        const filtro4 = tiendaVans.find(prenda4 => prenda4.id4 === 15)
        console.log(filtro4)
        const comprobacion4 = tiendaVans.some(prenda4 => prenda4.nombre4 ===`Nike`)
        console.log(comprobacion4)
        const menorPrecio4 = tiendaVans.filter(prenda4 => prenda4.precio4 < 16000)
        console.log(menorPrecio4)

        for(let producto4 of tiendaVans){
        producto4.mostrarData()
        }
        break;

        //VALOR DESCONOCIDO//VALOR DESCONOCIDO//VALOR DESCONOCIDO//VALOR DESCONOCIDO//VALOR DESCONOCIDO//VALOR DESCONOCIDO
        //VALOR DESCONOCIDO//VALOR DESCONOCIDO//VALOR DESCONOCIDO//VALOR DESCONOCIDO//VALOR DESCONOCIDO//VALOR DESCONOCIDO

    default:
        prompt("Error al ingresar el caracter. Vuelva a intentar.")
        break;     
}
ingresar = prompt("¿Quiere continuar viendo el catalogo? Responda Si o No.") 
}



