/*combinar tablas pacientes y medicos y se muestra la info de documento del paciente, primer nombre del paciente, 
primer apellido del paciente, primer nombre del medico y primer apellido del medico.*/

SELECT pacientes.docu_paci, pacientes.prim_nomb_paci, pacientes.prim_apel_paci, medicos.prim_nomb_medi, medicos.prim_apel_medi
FROM pacientes INNER JOIN medicos ON pacientes.docu_medi = medicos.docu_medi;

/*combinar tablas pacientes y familiares y se muestra la info de documento del paciente, primer nombre del paciente, 
primer apellido del paciente, primer nombre del familiar y primer apellido del familiar.*/

SELECT pacientes.docu_paci, pacientes.prim_nomb_paci, pacientes.prim_apel_paci, familiares.prim_nomb_fami, familiares.prim_apel_fami
FROM pacientes INNER JOIN familiares ON pacientes.docu_fami = familiares.docu_fami;

/*combinar tablas pacientes y signos y se muestra la info de documento del paciente, primer nombre del paciente, 
primer apellido del paciente, diagnostico del paciente y sugerencias de cuidado.*/

SELECT pacientes.docu_paci, pacientes.prim_nomb_paci, pacientes.prim_apel_paci, signos.diag_paci, signos.suge_cuidado
FROM pacientes INNER JOIN signos ON pacientes.docu_paci = signos.docu_paci;

/*Saber cuales son los pacientes del medico identificado con la cedula numero 1057570578 y los datos completos de los pacientes*/

SELECT * FROM pacientes
WHERE (docu_medi = '1057570578');

/*Saber cuales son los nombres y apellidos de los pacientes del medico identificado con la cedula numero 1057570578*/

SELECT prim_nomb_paci, segu_nomb_paci, prim_apel_paci, segu_apel_paci FROM pacientes
WHERE (docu_medi = '1057570578');


