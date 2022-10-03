const nuevoMedicoUrl = 'http://127.0.0.1:8000/nuevomedico';

function recolectorDeDatos(evt){
    evt.preventDefault();

    const docu_medi= document.Formulario.docu_medi.value;
    const genero= document.Formulario.genero.value;
    const prim_nomb_medi= document.Formulario.prim_nomb_medi.value;
    const segu_nomb_medi= document.Formulario.segu_nomb_medi.value;
    const prim_apel_medi= document.Formulario.prim_apel_medi.value;
    const segu_apel_medi= document.Formulario.segu_apel_medi.value;
    const especialidad= document.Formulario.especialidad.value;
    const regist_medi= document.Formulario.regist_medi.value;
    const usuario_med= document.Formulario.usuario_medi.value;
    const contrasena_med= document.Formulario.contrasena_med.value;
    const isAdmin= document.Formulario.isAdmin.value;
    

    const medicos = {
        docu_medi : parseInt (docu_medi),
        genero : genero,
        prim_nomb_medi : prim_nomb_medi,
        segu_nomb_medi : segu_nomb_medi,
        prim_apel_medi : prim_apel_medi,
        segu_apel_medi : segu_apel_medi,
        especialidad : especialidad,
        regist_medi : regist_medi,
        usuario_med : usuario_med,
        contrasena_med : contrasena_med,
        isAdmin : isAdmin,
    } 
    console.log(medicos);
    alert(`El doctor ${medicos.prim_nomb_medi} ${medicos.prim_apel_medi} ha sido registrado en nuestro sistema`);
    const dataToSend = JSON.stringify(medicos);
    sendData(dataToSend);
    console.log(dataToSend);
}   
    
function sendData (data){  
    fetch(nuevoMedicoUrl, {
        method: "POST" ,
        headers: {
            "Content-Type": "text/json",
        },
        body:data
    })
        .then(response => {
            if (response.ok) {
                return response.text()
            } else {
                throw new Error(response.status)
            }
        })
        .then(data => {
            console.log(data);
            handleSuccess();
        })
        .catch(err => {
            console.log("Error: " + err);
            handleError();
        });

}

function handleSuccess() {
    document.getElementById("info").remove();
    const message = document.createElement("p");
    message.innerHTML = "Medico ingresado exitosamente.";
    const info = document.getElementById("formData");
    info.appendChild(message);
}

function handleError() {
    document.getElementById("info").remove();
    const message = document.createElement("p");
    message.innerHTML = "No se pudo crear el medico. Intente luego.";
    const info = document.getElementById("formData");
    info.appendChild(message);
}

document.Formulario.addEventListener('submit', recolectorDeDatos);