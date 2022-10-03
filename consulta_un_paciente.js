const getPacienteUrl = 'http://127.0.0.1:8000/LeerUnPaciente/';

function LeerUnPaciente() {
  const parsedUrl = new URL(window.location.href);
  console.log(parsedUrl);
  const docu_paci = parsedUrl.searchParams.get("docu_paci");
  console.log(docu_paci);

  fetch(getPacienteUrl + docu_paci)

    .then(response => {
      console.log(response);
      if (response.ok || response.status == 400) {
        return response.text()
      } else {
        throw new Error(response.status)
      }
    })
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
    .then(data => {
      console.log(data);
      if (data.includes("No existe un usuario con ese documento")) {
        handleError(data);
      }
      const paciente = JSON.parse(data);
      handlePaciente(paciente);
    })
    .catch(err => {
      console.log("Error: " + err);
     handleError();
    });
}


function handlePaciente(paciente) {
  const paciDivs = [
 `<h3>Segundo nombre: ${paciente.segundonombre}</h3>
  <h3>Primer apellido: ${paciente.primerapellido}</h3>
  <h3>Segundo apellido: ${paciente.segundoapellido}</h3>
  <h3>Direccion: ${paciente.direccion}</h3>
  <h3>Ciudad: ${paciente.ciudad}</h3>`]; 

  const paciDataDiv = document.createElement("div");
  console.log(paciDivs);
  paciDataDiv.innerHTML = 
     `<h3>Documento del paciente: ${paciente.documentodelpaciente}</h3>
      <h3>Primer nombre: ${paciente.primernombre}</h3>`;
    paciDivs.forEach(paciDiv => paciDataDiv.innerHTML += paciDiv); 

document.getElementById("cargando").remove(); 
const info = document.getElementById("info-customers");
info.appendChild(paciDataDiv);

}

function handleError(err) {
  document.getElementById("cargando").remove();
  const message = document.createElement("p");
  if (err) {
    message.innerHTML = err;
  }else{
    message.innerHTML = "No se pudo cargar la información. Por favor intente mas tarde.";
  }
  const info = document.getElementById("info-customers");
  info.appendChild(message);
}

document.addEventListener("DOMContentLoaded", LeerUnPaciente);
