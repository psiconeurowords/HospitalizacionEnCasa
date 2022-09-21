const LeerTodosLosPacientesUrl = 'http://127.0.0.1:8000/LeerTodosLosPacientes';

let Pacientes = [];

function getPacientes() {
  fetch(LeerTodosLosPacientesUrl)
    .then(response => {
      if (response.ok) {
        return response.text()
      } else {
        throw new Error(response.status)
      }
    })
    .then(data => {
      console.log(data);
      Pacientes = JSON.parse(data);
      handlePacientes();
      print(data);
    })
    .catch(err => {
      console.log("Error: " + err);
      handleError();
    });
}
function handlePacientes() {
  const divs = [];
  Pacientes.forEach((paci) => {
    const div = document.createElement("div");
    div.innerHTML =
      `<h3>Documento: ${paci.docu_paci}</h3>
      <h3>Genero: ${paci.genero}</h3>
      <h3>Nombre1: ${paci.prim_nomb_paci}</h3>
      <h3>Nombre1: ${paci.prim_nomb_paci}</h3>
      <h3>Nombre2: ${paci.segu_nomb_paci}</h3>
      <h3>Apellido1: ${paci.prim_apel_paci}</h3>
      <h3>Apellido2: ${paci.segu_apel_paci}</h3>
      <h3>Ubicacion: ${paci.ubic_paci}</h3>
      <h3>Direccion: ${paci.direc_paci}</h3>
      <h3>Ciudad: ${paci.ciudad_paci}</h3> 
      <h3>Telefono: ${ paci.tele_paci}</h3>
      <h3>usuario: ${ paci.usuario_paci}</h3>
      <h3>docu_fami: ${ paci.docu_fami}</h3>
      <h3>docu_medi: ${paci.docu_medi}</h3> 
      <h3>docu_enfer:${paci.docu_enfer}</h3>`;
    divs.push(div);
  });
  document.getElementById("cargando").remove();
  const info = document.getElementById("info-pacientes");
  divs.forEach(div => info.appendChild(div));
}

function handleError() {
  document.getElementById("cargando").remove();
  const message = document.createElement("p");
  message.innerHTML = "No se pudo cargar la información. Intente luego.";
  const info = document.getElementById("info-pacientes");
  info.appendChild(message);
}

// ---------------------------------

document.addEventListener("DOMContentLoaded", getPacientes);