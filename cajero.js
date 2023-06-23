let saldoActual = saldo(500, 10000);
let montoDeposito;
let montoRetiro;
let operaciones;
let cuentaDestino;
let monto;
let telefono;
let cedualaDestinatario;
let montoPagoM;
let porsentaje;
function saldo(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
};
function comicion(a) {
    return a * 0.05
}
alert("Bienvenidos al cajero automatico de RoxBanco, tu Banco de confianza.");
let cedula = prompt(`Ingrsese su numero de cedula:`);
if (cedula <= 999999) {
    alert("cedula no encontrada")
}else{
    let pin = prompt(`Ingresu su Pin`);
    alert(`Bienvenido Usuario ${cedula}`);
    menu()
    function menu() {
        operaciones = prompt(`Que operacion va a realizar:
        1: Ver el saldo actual.
        2: Realizar retiros.
        3: Realizar depositos.
        4: Realizar transferencia a otra cuenta.
        5: Pago movil
        Otro: cerrar el cajero.
        `)
        switch(operaciones){
            case "1":
                saldoDisponible();
                break;
            case "2":
                retirar();
                break;
            case "3":
                depositar();
                break;
            case "4":
                transferir();
                break;
            case "5":
                pagoMovil();
                break;
            default: 
                alert("Operacion finalizada. Que tenga feliz dia usuario " + cedula);
        }
    };
    function saldoDisponible(){
        alert(`Tu saldo actual es: ${saldoActual}$`);
        menu();
    }
    function retirar(){
        alert(`Tu saldo actual es: ${saldoActual}$`);

        montoRetiro = prompt("Ingrese el monto a retirar");
        if(saldoActual - montoRetiro >= 0){
            saldoActual = saldoActual - montoRetiro;
            alert(`Retiro exitoso, tu saldo actual es: ${saldoActual}$`);
        }else{
            alert("Fondos insuficientes");
        }
        menu();
    }
    function depositar(){
        montoDeposito = parseInt(prompt(
            `Su saldo disponible es ${saldoActual}$.
        Ingrese el monto a depositar:`
        ));
        saldoActual = saldoActual + montoDeposito;
        alert(`Deposito exitoso, tu saldo actual es: ${saldoActual}$`);
        menu();
    }
    function transferir(){
        alert(`Tu saldo actual es: ${saldoActual}`);
        cuentaDestino = prompt("Ingrese la cuenta destino");
        monto = prompt("Ingrese el monto a transferir");
        if(saldoActual - monto >= 0){
            saldoActual = saldoActual - monto;
            alert(`Transferencia exitosa a la cuenta ${cuentaDestino}, tu saldo actual es: ${saldoActual}$`);
        }else{
            alert("Fondos insuficientes");
        }
        menu();
    }
    function pagoMovil() {
        alert(`Tu saldo actual es: ${saldoActual}$`);
        telefono = prompt("Ingrese el numero de telefono del destinatario:");
        cedualaDestinatario = prompt("Ingrese el numero de cedula del destinatario:");
        montoPagoM = prompt("Ingrese el monto a transferir");
        alert(`Codigo digital de un solo uso: ${saldo(1000, 9999)}`)
        prompt(`Ingrese el codigo digital de un solo uso`)
        porsentaje = comicion(montoPagoM);
        if ((saldoActual - montoPagoM - porsentaje) >= 0) {
            saldoActual = saldoActual - montoPagoM - porsentaje;
            alert(`Se realizado un pago de ${montoPagoM}$, al titular de la cedula ${cedualaDestinatario}, con una comicion de: ${porsentaje}$ tu saldo actual es: ${saldoActual}$`);
        }else{
            alert("Fondos insuficientes");
        }
        menu();
    }
}