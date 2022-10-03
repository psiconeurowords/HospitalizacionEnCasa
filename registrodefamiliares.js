const nuevoFamiliarUrl = 'http://127.0.0.1:8000/nuevofamiliar';

function recolectorDeDatos(evt){
    evt.preventDefault();

    const docu_fami= document.Formulario.docu_fami.value;
    const genero= document.Formulario.genero.value;
    const prim_nomb_fami= document.Formulario.prim_nomb_fami.value;
    const segu_nomb_fami= document.Formulario.segu_nomb_fami.value;
    const prim_apel_fami= document.Formulario.prim_apel_fami.value;
    const segu_apel_fami= document.Formulario.segu_apel_fami.value;
    const tel_fami= document.Formulario.tel_fami.value;
    const dir_fami= document.Formulario.dir_fami.value;
    const corr_fami= document.Formulario.corr_fami.value;
    const usuario_fami= document.Formulario.usuario_fami.value;
    const contrasena_fami= document.Formulario.contrasena_fami.value;
    const isAdmin= document.Formulario.isAdmin.value;
    const docu_paci= document.Formulario.docu_fami.value;
    const parentesco= document.Formulario.parentesco.value;

    

    const familiares = {
        docu_fami : parseInt (docu_fami),
        genero : genero,
        prim_nomb_fami : prim_nomb_fami, 
        segu_nomb_fami : segu_nomb_fami,
        prim_apel_fami : prim_apel_fami,
        segu_apel_fami : segu_apel_fami,
        segu_apel_fami : segu_apel_fami,
        tel_fami: tel_fami, 
        dir_fami: dir_fami,
        corr_fami: corr_fami,
        usuario_fami: usuario_fami,
        contrasena_fami: contrasena_fami,
        isAdmin: isAdmin,
        docu_paci:  parseInt (docu_paci),
        parentesco:  parentesco,
    } 

    console.log(familiares);
    alert(` ${familiares.prim_nomb_fami} ${familiares.prim_apel_fami} ha sido registrado en nuestro sistema como acudiente`);
    const dataToSend = JSON.stringify(familiares);
    sendData(dataToSend);
    console.log(dataToSend);
}   
    
function sendData (data){  
    fetch(nuevoFamiliarUrl, {
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