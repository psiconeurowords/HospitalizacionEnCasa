const nuevoPacienteUrl = 'http://127.0.0.1:8000/nuevopaciente';

function recolectorDeDatos(evt){
    evt.preventDefault();

    const docu_paci= document.Formulario.docu_paci.value;
    const genero= document.Formulario.genero.value;
    const fech_naci_paci= document.Formulario.fech_naci_paci.value;
    const prim_nomb_paci= document.Formulario.prim_nomb_paci.value;
    const segu_nomb_paci= document.Formulario.segu_nomb_paci.value;
    const prim_apel_paci= document.Formulario.prim_apel_paci.value;
    const segu_apel_paci= document.Formulario.segu_apel_paci.value;
    const ubic_paci= document.Formulario.ubic_paci.value;
    const direc_paci= document.Formulario.direc_paci.value;
    const ciudad_paci= document.Formulario.ciudad_paci.value;
    const tele_paci= document.Formulario.tele_paci.value;
    const usuario_paci= document.Formulario.usuario_paci.value;
    const contrasena_paci= document.Formulario.contrasena_paci.value;
    const isAdmin= document.Formulario.isAdmin.value;
    const docu_fami= document.Formulario.docu_fami.value;
    const docu_medi= document.Formulario.docu_medi.value;
    const docu_enfer= document.Formulario.docu_enfer.value;

    const pacientes = {
        docu_paci : parseInt (docu_paci),
        genero : genero,
        fech_naci_paci : fech_naci_paci, 
        prim_nomb_paci : prim_nomb_paci,
        segu_nomb_paci : segu_nomb_paci,
        prim_apel_paci : prim_apel_paci,
        segu_apel_paci : segu_apel_paci,
        ubic_paci : ubic_paci,
        direc_paci : direc_paci,
        ciudad_paci : ciudad_paci,
        tele_paci : tele_paci,
        usuario_paci : usuario_paci,
        contrasena_paci : contrasena_paci,
        isAdmin : isAdmin,
        docu_fami :  parseInt (docu_fami),
        docu_medi :  parseInt (docu_medi),
        docu_enfer :  parseInt (docu_enfer),
    } 
    console.log(pacientes);
    alert(`El paciente ${pacientes.prim_nomb_paci} ${pacientes.prim_apel_paci} ha sido registrado en nuestro sistema`);
    const dataToSend = JSON.stringify(pacientes);
    sendData(dataToSend);
    console.log(dataToSend);
}   
    
function sendData (data){  
    fetch(nuevoPacienteUrl, {
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
    message.innerHTML = "Paciente ingresado exitosamente.";
    const info = document.getElementById("formData");
    info.appendChild(message);
}

function handleError() {
    document.getElementById("info").remove();
    const message = document.createElement("p");
    message.innerHTML = "No se pudo crear el paciente. Intente luego.";
    const info = document.getElementById("formData");
    info.appendChild(message);
}


document.Formulario.addEventListener('submit', recolectorDeDatos);