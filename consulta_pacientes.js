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
    })
    .catch(err => {
      console.log("Error: " + err);
      handleError();
    });
}
function handlePacientes() {
  const divs = [];
  Pacientes.forEach((paci) => {
    //const div = document.createElement("div");
    const paciData =
      `<tr><td>${paci.docu_paci}</td>
      <td>${paci.genero}</td>
      <td>${paci.prim_nomb_paci}</td>
      <td>${paci.segu_nomb_paci}</td>
      <td>${paci.prim_apel_paci}</td>
      <td>${paci.segu_apel_paci}</td>
      <td>${paci.ubic_paci}</td>
      <td>${paci.direc_paci}</td>
      <td>${paci.ciudad_paci}</td>
      <td>${ paci.tele_paci}</td>
      <td>${ paci.usuario_paci}</td>
      <td>${ paci.docu_fami}</td>
      <td>${paci.docu_medi}</td>
      <td>${paci.docu_enfer}</td></tr>`;
    divs.push(paciData);
  });
  document.getElementById("cargando").remove();
  const info = document.getElementById("info-pacientes");
  //divs.forEach(div => info.appendChild(div));
  const table = document.createElement("table");
  table.innerHTML=`
  <tr> 
    <th>Documento</th>
    <th>Genero</th>
    <th>Primer nombre</th>
    <th>Segundo nombre</th>
    <th>Primer apellido</th>
    <th>Segundo apellido</th>
    <th>Ubicacion</th>
    <th>Direccion</th>
    <th>Ciudad</th>
    <th>Telefono</th>
    <th>Usuario</th>
    <th>Documento familiar</th>
    <th>Documento medico</th>
    <th>Documento enfermera</th>
  </tr>`;
  //divs.forEach(div => info.appendChild(div));
  divs.forEach(div => table.innerHTML += div);
  info.appendChild(table)
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