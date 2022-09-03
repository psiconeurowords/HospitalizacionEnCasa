-- insercion de datos en la tabla medicos

INSERT INTO medicos (docu_medi, prim_nomb_medi, segu_nomb_medi, prim_apel_medi, segu_apel_medi, usuario_med, contrasena_med)
VALUES 
('1057570578','Juan','Manuel','Perez','Orozco','jperezo','875075'),
('176845','Jose','Miguel','Meza','Fernandez','jmezaf','548671'),
('1057570515','Juan','Marco','Gomez','Ordoñez','jgomezo','815073');

-- insercion de datos en la enfermeros

INSERT INTO enfermeros (docu_enfer, prim_nomb_enfer, segu_nomb_enfer, prim_apel_enfer, segu_apel_enfer, usuario_enfer, contrasena_enfer)
VALUES 
('1072466321','Andrea','Magnolia','Pineda','Ordoñez','apinedao','213664'),
('1062466345','Josefa','Maria','Mendez','Majarrez','jmendezm','543664'),
('1052166378','Leonidas','Miguel','Diaz','Sanchez','ldiazs','873661');

-- insercion de datos en la tabla auxiliares

INSERT INTO auxiliares (docu_auxi, prim_nomb_auxi, segu_nomb_auxi, prim_apel_auxi, segu_apel_auxi, usuario_auxi, contrasena_auxi)
VALUES 
('724663261','Daniela','Maritza','Parra','Orjuela','dparrao','162366'),
('624663485','Marcela','Mariana','Morales','Moreno','mmoralesm','584366'),
('521663798','Lina','Maria','Espinel','Sanchez','lespinels','897366');

-- insercion de datos en la tabla familiares

INSERT INTO familiares (docu_fami, prim_nomb_fami, segu_nomb_fami, prim_apel_fami, segu_apel_fami, tel_fami, dir_fami, corr_fami, usuario_fami, contrasena_fami)
VALUES 
('721663261','Fernando','Antonio','Gomez','Soler','3216549','cr 12 # 13 - 16 la pradera','djuolin@hotmail.com','fgomezs','987654'),
('724663861','Federico','Melquiades','Estevez','Diaz','3216587','cr 6 # 18- 16 los jardines','estevezn@hotmail.com','festevezd','789654'),
('762466623','Amalia','Aminta','Gil','Suarez','3216549','cr 1 # 08 - 19 puerta grande','amalinta@hotmail.com','agils','132666');

-- insercion de datos en la tabla pacientes

INSERT INTO pacientes (docu_paci, prim_nomb_paci, segu_nomb_paci, prim_apel_paci, segu_apel_paci, ubic_paci, direc_paci, tele_paci, usuario_paci, contrasena_paci, docu_fami,
    docu_medi, docu_enfer)
VALUES 
('618547','Juan','Eudaldo','Arriaga','Ramirez','5.068656,-74.383984','carrera 14 # 5 67','321456789','jarriagar','987654', '721663261','1057570578','1072466321'),
('648543','Alberto','Andres','Triana','Rodriguez','5.068656,-72.383984','carrera 15 # 9 67','321497898','atrianar','981234','724663861','176845','1062466345'),
('688565','German','Enrique','Delgado','Perez','5.068656,-79.383984','carrera 4 # 5 15','321453088','gdelgadop','987092','762466623','1057570515','1062466345');

-- insercion de datos en la tabla signos

INSERT INTO signos (docu_paci, fecha, hora, oximetria, frec_resp, frec_card, temperatura, pre_arte, glucem, fecha_diag, diag_paci, suge_cuidado)
VALUES 
('618547','2012-10-25','18:20:00','95','20','70','37','90/60','90','2012-10-26','hipertension arterial','tomar acetaminofen cada 8 horas'),
('648543','2012-10-27','15:10:00','95','20','70','37','90/60','80','2012-10-28','hipoglicemia','dieta baja en azucar'),
('688565','2012-10-28','10:05:00','95','20','70','37','90/60','100','2012-10-29','intoxicacion','tomar suero');


