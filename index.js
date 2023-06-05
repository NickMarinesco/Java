let nombreUsuario = prompt("Bienvenido, ingrese su nombre");
while (nombreUsuario.trim() === "") {
    nombreUsuario = prompt("No ingresaste ningún nombre. Por favor, ingresa tu nombre");
}
let apellidoUsuario = prompt("Ingrese su Apellido");
while (apellidoUsuario.trim() === "") {
    apellidoUsuario = prompt("No ingresaste ningún apellido. Por favor, ingresa tu apellido")
}
alert("Nombre y Apellido: " + nombreUsuario + " " + apellidoUsuario);

let opciones = prompt("1-Compra Fernet\n2-Compra Cerveza\n3-Compra Vino\n4- Salir")
opciones = parseInt(opciones);

while (opciones !== 4) {
   
    let listaCompras = ""
    switch (opciones) {
        case 1:
            alert("Comprar Fernet");
            let cantidadFernet = prompt("Ingresa cantidad")
            cantidadFernet = parseInt(cantidadFernet);
            while (cantidadFernet <= 0) {
                alert("Cantidad Invalida, ingrese un numero valido")
                cantidadFernet = prompt("Ingresa Cantidad")
                cantidadFernet = parseInt(cantidadFernet)
            }

            let transaccionFernet = prompt("1- Tarjeta 2- Transferencia")
            transaccionFernet = parseInt(transaccionFernet);

            switch (transaccionFernet) {
                case 1:
                    prompt("Ingrese su numero de tarjeta")
                    alert("Compra Exitosa\nGracias por su compra");
                    break;
                case 2:
                    alert("CBU n° xxxxxxxxxxxxxxxxxxxxxx");
                    alert("Gracias por su compra¡¡\n Enviar comprobante a nm@gmail.com")
                    break;


            }
            listaCompras += cantidadFernet + " Fernet\n";


            break;

        case 2:
            alert("Comprar Cerveza");
            let cantidadCerveza = prompt("Ingresa cantidad");
            cantidadCerveza = parseInt(cantidadCerveza);
            while (cantidadCerveza <= 0) {
                alert("Cantidad Invalida, ingrese un numero valido")
                cantidadCerveza = prompt("Ingresa Cantidad")
                cantidadcerveza = parseInt(cantidadCerveza)
            }

            let transaccionCerveza = prompt("1- Tarjeta 2- Transferencia")
            transaccionCerveza = parseInt(transaccionCerveza);


            switch (transaccionCerveza) {
                case 1:
                    prompt("Ingrese su numero de tarjeta");
                    alert("Compra Exitosa\nGracias por su compra");
                    break;
                case 2:
                    alert("CBU n° xxxxxxxxxxxxxxxxxxxxxx");
                    alert("Gracias por su compra¡¡\n Enviar comprobante a nm@gmail.com")

                    break;
            }
            listaCompras += cantidadCerveza + " Cerveza\n";

            break;

        case 3:
            alert("Comprar Vino");
            let cantidadVino = prompt("Ingresa cantidad");
            cantidadVino = parseInt(cantidadVino);
            while (cantidadVino <= 0) {
                alert("Cantidad Invalida, ingrese un numero valido")
                cantidadVino = prompt("Ingresa Cantidad")
                cantidadVino = parseInt(cantidadVino)
            }
            let transaccionVino = prompt("1- Tarjeta 2- Transferencia")
            transaccionVino = parseInt(transaccionVino);

            switch (transaccionVino) {
                case 1:
                    prompt("Ingrese su numero de tarjeta");
                    alert("Compra Exitosa\nGracias por su compra");
                    break;
                case 2:
                    alert("CBU n° xxxxxxxxxxxxxxxxxxxxxx");
                    alert("Gracias por su compra¡¡\n Enviar comprobante a nm@gmail.com")

                    break;
            }
            listaCompras += cantidadVino + " Vino\n";

            break;

        default:

            alert("Gracias Vuelva Pronto¡¡")

            break;



    }
    if (listaCompras !== "") {
        alert("Lista de compras:\n" + listaCompras);


    }
    opciones = prompt("1-Compra Fernet\n2-Compra Cerveza\n3-Compra Vino\n4- Salir")
    opciones = parseInt(opciones);

}

