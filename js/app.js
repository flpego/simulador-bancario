// user: flavio , password: 1234

// variables para simular transferencia a otra cuenta
let userMoneyMarcelo = 200;
let numberAccountMarcelo = 2;



//funcion para calcular montos y transacciones
const calculateAmount = (userMoney, parameter) => {

    if (parameter == "=") {
        //muestra el balance
        console.log(`Su dinero disponible en cuenta es de $${userMoney}`);

    } else if (parameter == "-") {
        //funcion para simular extraccion
        let withdraw = parseInt(prompt("Ingrese dinero a extraer"));
        if (withdraw <= userMoney) {
            userMoney -= withdraw;
            console.log(`Extraccion exitosa. Su balance es de $${userMoney}`);
        } else {
            console.log("No tiene suficiente dinero para realizar la extraccion")

        }

    } else if (parameter === "+") {
        //funcion para simular deposito
        let deposit = parseInt(prompt("Ingrese dinero"));
        userMoney += deposit;
        console.log(`Deposito exitoso. Su balance es de $${userMoney}`);
    } else if (parameter === "send") {
        //funcion para simular transferencia
        let numberAccount = parseInt(prompt("Ingrese numero de cuenta destino"));

        if (numberAccount === numberAccountMarcelo) {
            let amountToTransfer = parseInt(prompt("Ingrese monto a transferir"));
            if (amountToTransfer > userMoney) {
                console.log("No tiene suficiente dinero para realizar la transferencia");
            } else {
                userMoney -= amountToTransfer;
                userMoneyMarcelo += amountToTransfer;
                console.log(`Transferencia exitosa. Su balance es de $${userMoney}`);
                console.log(`Marcelo ahora tiene en su cuenta $${userMoneyMarcelo}`);
                return userMoney, userMoneyMarcelo;
            }
        } else if (numberAccount != numberAccountMarcelo) {
            console.log("El numero de cuenta ingresado no existe, por favor ingrese un numero de cuenta valido");
        } else {
            console.log("opcion no valida");

        }
    }
    return userMoney;
}

// funcion de inputs e interaccion con el usuario 
const actions = (userMoney) => {
    let optionA = 'Consultar balance en cuenta';
    let optionB = 'Retirar Dinero';
    let optionC = 'Ingresar Dinero';
    let optionD = 'Transferir Dinero';

    let newAction = "si";

    do {
        let actionOption = prompt(`Que desea hacer? Escriba la letra que corresponde: A:${optionA} - B: ${optionB} - C: ${optionC} - D: ${optionD}`).toLowerCase();

        switch (actionOption) {
            case "a":
                let balanceParameter = "="
                userMoney = calculateAmount(userMoney, balanceParameter);
                break;
            case "b":
                let withdrawParameter = "-";
                userMoney = calculateAmount(userMoney, withdrawParameter);
                break;
            case "c":
                let depositParameter = "+";
                userMoney = calculateAmount(userMoney, depositParameter);
                break;
            case "d":
                let transferParameter = "send";
                userMoney = calculateAmount(userMoney, transferParameter);
                break;

            default:
                console.log('opcion no valida');
                break;
        }
        newAction = prompt("Desea realizar otra operacion? Si - No").toLocaleLowerCase();
    } while (newAction === "si");
    //cuando sale del do while, se vuelve a ejecutar la funcion login para que inrgese un nuevo cliente
    alert("Gracias por usar nuestro banco");
    console.log("Gracias por usar nuestro banco");
    login();
}

// funcion que da el mensaje de bienvenida
const welcome = (user, userMoney) => {
    let welcomeMessage = `Bienvenido ${user}.Dinero disponible en su cuenta $ ${userMoney}`
    return welcomeMessage;
}

//funcion de logueo
const login = () => {
    alert("Bienvenido al banco Web de Prompts, Alerts y console.log, por favor inicie sesion");
    const user = prompt("Ingrese su nombre su usuario").toLowerCase();
    const password = prompt("Ingrese su password");
    if (user == "flavio" && password == "1234") {
        const numberAccountFlavio = 1;
        let userMoney = 1200;
        alert(welcome(user, userMoney));
        console.log(welcome(user, userMoney))
        actions(userMoney);
    } else {
        alert("Usuario y/o clave incorrectos");
        login();
    }
}

login();
