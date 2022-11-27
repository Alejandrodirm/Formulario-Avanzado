function cuenta() {
    //atributos
    nombre;
    apellidos;
    contra;
    correo;
}
//get
this.getNombre = function () {
    return this.nombre;
}
this.getApellidos = function () {
    return this.apellidos;
}
this.getCorreo = function () {
    return this.correo;
}
this.getContra = function () {
    return this.contra;
}
//set
this.setNombre = function (nombre) {
    this.nombre = nombre;
}
this.setApellidos = function (apellidos) {
    this.apellidos = apellidos;
}
this.setContra = function (contra) {
    this.contra = contra;
}
this.setCorreo = function (correo) {
    this.correo = correo;
}
this.getJson = function () {
    var cuentaJson = {
        nombre: this.nombre,
        apellidos: this.apellidos,
        contra: this.contra,
        correo: this.correo,
    }
    return cuentaJson;
}
var cuenta = new cuenta();
//funcion validar nombre
function esNombreValido() {
    valido = true;
    var nombrePattern = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    let nombre = document.getElementById("nombre").value;
    if (!nombre.match(nombrePattern) & nombre != "") {
        valido = false;
        document.getElementById("nombreerr").innerHTML = "Incorrecto";
        $("#nombreerr").text("Incorrecto").css("color", "red");
    } else {
        document.getElementById("nombreerr").innerHTML = "";
        $("#nombreerr").css("display", "none");
        setNombre(nombre);
        validar();
    }
    return valido;
}
//funcion validar apellido
function esApellidoValido() {
    valido = true;
    var apellidoPattern = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    var apellidos = document.getElementById("pApellido").value;
    if (!apellidos.match(apellidoPattern) & apellidos != "") {
        valido = false;
        document.getElementById("apellidoserr").innerHTML = "Incorrecto";
        $("#apellidoserr").text("Incorrecto").css("color", "red");
    } else {
        document.getElementById("apellidoserr").innerHTML = "";
        setApellidos(apellidos);
        validar();
    }
    return valido;
}
//contraseña
function esContraValido() {
    valido = true;
    var contraPattern = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    var contra = document.getElementById("contra").value;
    if (!contra.match(contraPattern) & contra != "") {
        valido = false;
        document.getElementById("contraerr").innerHTML = "Incorrecto";
        $("#contraerr").text("Incorrecto").css("color", "red");
    } else {
        document.getElementById("contraerr").innerHTML = "";
        $("#contraerr").css("display", "none");
        setContra(contra);
        validar();
    }
    return valido;
}
//funcion validar correo
function esCorreoValido() {
    valido = true;
    var correo = document.getElementById("correo").value;
    var correoPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!correo.match(correoPattern) & correo != "") {
        valido = false;
        document.getElementById("correoerr").innerHTML = "Incorrecto";
        $("#correoerr").text("Incorrecto").css("color", "red");
    } else {
        document.getElementById("").innerHTML = "";
        $("#correoerr").css("display", "none");
        setCorreo(correo);
        validar();
    }
    return valido;
}
function $(selector) {
    return document.querySelector(selector);
}
function validar() {
    if (esContraValido&esNombreValido&esApellidoValido&esCorreoValido) {
        localStorage.setItem('usuario', JSON.stringify(user));
        let button = document.querySelector(".button");
        //button.disabled = true;
        button.addEventListener('click', () => {
            location.href = "/login.html"
        })

    } else {
       // button.disabled = false;
    }
}