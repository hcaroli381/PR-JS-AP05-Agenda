const inputNombre = document.querySelector("#inpNombre");
const inputApellidos = document.querySelector("#inpApellidos");
const inputTelefonos = document.querySelector("#inpTelNumero");
const btnGuardarContacto = document.querySelector("#btnGuardarContacto");
const btnLimpiar = document.querySelector("#btnLimpiar");
const btnAddTel = document.querySelector("#btnAddTel");
const listaTelefonos = document.querySelector("#ulTelefonos");
const secContactos = document.querySelector("#secContactos");
let listaContactos;
listaContactos = [];

let Telefonos = [];
let id;



// Añadir un contacto
function cargarContacto() {
    listaContactos.push({ nombre : inputNombre.value, apellidos: inputApellidos.value, Telefonos : Telefonos.ToString() });
    localStorage.setItem("listaContactos", JSON.stringify(listaContactos));
}


// Array de telefonos
function addTelefonos() {
    const confirmar = confirm("¿Seguro?");

    
    if (confirmar) {
        Telefonos.push[inputTelefonos.value];
        mostrarTelefonos();
    }
   

    return;
}

// Mostrar telefonos
function mostrarTelefonos() {
    listaTelefonos.innerHTML += `<li>${inputTelefonos.value}</li>`;
    return;
}

// Eventos

btnGuardarContacto.addEventListener("click", function (event) {
    event.preventDefault();
    cargarContacto();
} );


btnAddTel.addEventListener("click", addTelefonos);

btnLimpiar.addEventListener("click", function (event) {
    listaTelefonos.innerHTML = "";
    Telefonos.length = 0;
});

