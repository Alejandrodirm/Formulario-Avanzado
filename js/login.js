function login(){

    let correo = document.getElementById("correo").value;
    let contra = document.getElementById("contra").value;
    if(correo!=""&contra!=""){
        if(correo.localeCompare(this.correo)|contra.localeCompare(this.contra)){
            location.href="coleccion.html"
        }else{
            alert("te has equivocado en el correo")
        }
    }else{
        alert("campos vacios");
    }

}

