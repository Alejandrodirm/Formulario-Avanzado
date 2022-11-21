//funcion validar correo
function esCorreoValido() {
    var correo = document.getElementById("correo").value;
    var correoPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!correo.match(correoPattern)) {
    }
}