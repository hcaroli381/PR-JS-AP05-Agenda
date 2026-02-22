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
    if (!inputNombre.checkValidity()) {
        inputNombre.reportValidity();
        return;
    }
    if (!inputApellidos.checkValidity()) {
        inputApellidos.reportValidity();
        return;
    }
    if (Telefonos.length === 0) {
        alert("Añade al menos 1 teléfono.");
        return;
    }

    listaContactos.push({ nombre: inputNombre.value, apellidos: inputApellidos.value, Telefonos: Telefonos.ToString() });
    guardarEnStorage();
}

//Mostrar contactos
function mostrarContactos() {
    if (listaContactos.length === 0) {
        secContactos.innerHTML = "<p>No hay contactos</p>";
        return;
    }

    for (let i = 0; i < listaContactos.length; i++) {
        const contacto = listaContactos[i];

        let telefonosHtml;
        for (let j = 0; j < contacto.Telefonos.length; j++) {
            telefonosHtml = `<li>${contacto.Telefonos[j]}</li>`;
        }
    }

    const div = document.createElement("div");
    div.innerHTML = `${contacto.nombre}, ${contacto.apellidos}
    <ul>${telefonosHtml}</ul>`;

    const boton = document.createElement("button");
    boton.innerHTML = "Borrar";
    boton.addEventListener("click", function () {
        borrarContacto(contacto);
    });

    div.appendChild(boton);
    secContactos.appendChild(div);
}


// Array de telefonos
function addTelefonos() {
    if (!inputTelefonos.checkValidity()) {
        inputTelefonos.reportValidity();
        return;
    }
    if (inputTelefonos.value === "") {
        alert("Introduce un número de teléfono.");
        return;
    }

    const confirmar = confirm("¿Seguro?");


    if (confirmar) {
        Telefonos.push(inputTelefonos.value);
        mostrarTelefonos();
    }


    return;
}

// Mostrar telefonos
function mostrarTelefonos() {
    listaTelefonos.innerHTML = "";
    for (let i = 0; i < Telefonos.length; i++) {
        listaTelefonos.innerHTML = `<li>${Telefonos[i]}</li>`;
    }
}

// guardar contactos
function guardarEnStorage() {
    localStorage.setItem("listaContactos", JSON.stringify(listaContactos));
}

// Eventos       

btnGuardarContacto.addEventListener("click", function (event) {
    event.preventDefault();
    cargarContacto();
});


btnAddTel.addEventListener("click", addTelefonos);

btnLimpiar.addEventListener("click", function (event) {
    listaTelefonos.innerHTML = "";
    Telefonos.length = 0;
});

