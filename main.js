
// Nombre
alert(`¡Bienvenido! Vamos a encontrar su habitación ideal`)

let nombre = prompt('Ingresar su nombre:');
while (!isNaN(nombre)) {
    alert("Error! Ingrese un nombre valido.");
    nombre = prompt('Ingresar su nombre:');
    }

// Apellido
let apellido = prompt('Ingresar su apellido:');
while (!isNaN(apellido)) {
    alert("Error! Ingrese un apellido valido.");
    apellido = prompt('Ingresar su apellido:');
    }

// Edad
function calculo_edad(edad){
    var patron = /^[1-9]+$/
    while(true){
        if(edad === null || edad < 18 || patron.test(edad) === false){
            edad = prompt('Lo sentimos, este proceso debe realizarlo un mayor de edad')
        }
        if(edad === null || edad > 110 || patron.test(edad) === false){
            edad = prompt('Lo sentimos, debe elegir una edad real')
        }
        else{
            return edad
        }
    };
}
let edad = calculo_edad(prompt('Ingrese su edad: '))


// Email
let email = prompt('Ingresar su email:');
while (!isNaN(email)) {
    alert("Error! Ingrese un email valido.");
    email = prompt('Ingresar su email:');
    }


alert(`Confirmado. Ahora busquemos tu habitación ideal`) 



// Habitaciones disponibles en el hotel
const habitaciones = [
    { tipo: "Individual", capacidad: 1 },
    { tipo: "Doble", capacidad: 2, niñosPermitidos: 1 },
    { tipo: "Triple", capacidad: 3, niñosPermitidos: 2 }
];

  // Función para filtrar habitaciones según las preferencias del usuario
function filtrarHabitaciones(capacidad, niños) {
    return habitaciones.filter(habitacion => {
        if (niños > 0 && (!habitacion.niñosPermitidos || habitacion.niñosPermitidos < niños)) {
        return false;
        }
        return habitacion.capacidad >= capacidad;
    });
}

  // Función para validar la entrada del usuario
function validarEntradaPersonas(mensaje) {
    let entrada;
    do {
        entrada = parseInt(prompt(mensaje));
        if (isNaN(entrada) || entrada < 1 || entrada > 5) {
        alert("Por favor, ingrese un número entre 1 y 5.");
        }
    } while (isNaN(entrada) || entrada < 1 || entrada > 5);
    return entrada;
}

function validarEntradaNinos(mensaje) {
    let entrada;
    do {
        entrada = parseInt(prompt(mensaje));
        if (isNaN(entrada) || entrada < 0 || entrada > 2) {
        alert("Por favor, ingrese un número entre 0 y 2.");
        }
    } while (isNaN(entrada) || entrada < 0 || entrada > 2);
    return entrada;
}

// Preguntar al usuario sobre el número de personas y niños 
const personas = validarEntradaPersonas("Ingrese el número de huespedes (Solo permitimos hasta 5 huespedes en total):");
const niños = validarEntradaNinos("Ingrese el número de niños (entre 0 y 2):");

// Filtrar habitaciones según las preferencias del usuario
const habitacionesDisponibles = filtrarHabitaciones(personas, niños);

  // Recomendar habitación ideal
if (habitacionesDisponibles.length > 0) {
    console.log("Habitaciones disponibles:");
    for (const habitacion of habitacionesDisponibles) {
        console.log(`- ${habitacion.tipo}`);
    }
    console.log("Recomendamos elegir:", habitacionesDisponibles[0].tipo);
    alert(`Habitaciones disponibles: ${habitacionesDisponibles.map(h => h.tipo).join(", ")}. Recomendamos elegir ${habitacionesDisponibles[0].tipo}.`);
    } else {
    console.log("Lo sentimos, no hay habitaciones disponibles que cumplan con sus preferencias.");
    alert("Lo sentimos, no hay habitaciones disponibles que cumplan con sus preferencias.");
}
