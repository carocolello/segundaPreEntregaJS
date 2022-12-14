//**** Academia Coderhous e****//


// Clase alumno

class Alumno {
    constructor(nombre, apellido, dni, nota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.nota = nota;
    }
}

const alumnoUno = new Alumno("Juan", "Perez", 46474849, 8);
const alumnoDos = new Alumno("Pepe", "Gomez", 75643924, 3);
const alumnoTres = new Alumno("Victoria", "Lara", 47503735, 6);
const alumnoCuatro = new Alumno("Manuela", "Gonzalez", 35475853, 7);
const alumnoCinco = new Alumno("Veronica", "Fernandez", 54647483, 9);
const alumnoSeis = new Alumno("Julian", "Lopez", 64738394, 10);

const arrayAlumnos = [];

arrayAlumnos.push(alumnoUno);
arrayAlumnos.push(alumnoDos);
arrayAlumnos.push(alumnoTres);
arrayAlumnos.push(alumnoCuatro);
arrayAlumnos.push(alumnoCinco);
arrayAlumnos.push(alumnoSeis);

console.log(arrayAlumnos);


// Opciones del menú 

function menu() {
    alert("Bienvenido a Coderhouse!");
    let opcionMenu = parseInt(prompt("Ingrese una opción: \n 1) Dar de alta un alumno \n 2) Dar de baja un alumno \n 3) Buscar alumnos reprobados  \n 4) Salir"));
    return opcionMenu;
}


// 1) Dar de alta alumno

function altaAlumno() {
    let nombre = prompt("Ingrese el nombre del nuevo alumno: ");
    let apellido = prompt("Ingrese el apellido del nuevo alumno: ");
    let dni = prompt("Ingrese el dni del nuevo alumno: ");
    let nota = prompt("Ingrese la nota del nuevo alumno: ");

    let alumno = new Alumno(nombre, apellido, dni, nota)
    arrayAlumnos.push(alumno);
    console.log(arrayAlumnos);
}


// 2) Dar de baja al último alumno

function bajaAlumno() {
    let apellido = prompt("Ingrese el apellido del alumno a dar de baja: (Lopez)");
    let alumno = arrayAlumnos.find (alumno => alumno.apellido === "Lopez");

    let eliminado = arrayAlumnos.pop();
    console.log(arrayAlumnos);
}


// 3) Buscar alumnos reprobados

function buscarAlumno() {
    let alumnoReprobado = alert("Buscar alumnos reprobados: ");
    let buscado = arrayAlumnos.find (alumno => {
        return alumno.nota < 4;
    });
    console.log(buscado);
}


// 4) Salir

function salirPrograma() {
    alert("Gracias por utilizar nuestra plataforma. Vuelva pronto!");
}


// Ejecución del programa

let opcion = menu();

switch (opcion) {
    case 1:
        altaAlumno();
        break;
    case 2:
        bajaAlumno();
        break;
    case 3:
        buscarAlumno();
        break;
    case 4:
        salirPrograma();
        break;
    default:
        alert("Opción incorrecta, intenta nuevamente!");
        break;
}