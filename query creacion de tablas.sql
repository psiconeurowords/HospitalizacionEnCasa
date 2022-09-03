#Creacion de tabla medicos

CREATE TABLE medicos (
    docu_medi int NOT NULL,
    prim_nomb_medi varchar (20) NOT NULL,
    segu_nomb_medi varchar(20),
    prim_apel_medi varchar(20) NOT NULL,
    segu_apel_medi varchar(20),
    usuario_med varchar (30) NOT NULL,
    contrasena_med varchar (12) NOT NULL,
    PRIMARY KEY (docu_medi)
);
#Creacion de tabla enfermeros

CREATE TABLE enfermeros (
    docu_enfer int NOT NULL,
    prim_nomb_enfer varchar (20) NOT NULL,
    segu_nomb_enfer varchar(20),
    prim_apel_enfer varchar(20) NOT NULL,
    segu_apel_enfer varchar(20),
    usuario_enfer varchar (30) NOT NULL,
    contrasena_enfer varchar (12) NOT NULL,
    PRIMARY KEY (docu_enfer)
);

#Creacion de tabla auxiliares

CREATE TABLE auxiliares (
    docu_auxi int NOT NULL,
    prim_nomb_auxi varchar (20) NOT NULL,
    segu_nomb_auxi varchar(20),
    prim_apel_auxi varchar(20) NOT NULL,
    segu_apel_auxi varchar(20),
    usuario_auxi varchar (30) NOT NULL,
    contrasena_auxi varchar (12) NOT NULL,
    PRIMARY KEY (docu_auxi)
);

#Creacion de tabla familiares

CREATE TABLE familiares (
    docu_fami int NOT NULL,
    prim_nomb_fami varchar (20) NOT NULL,
    segu_nomb_fami varchar(20),
    prim_apel_fami varchar(20) NOT NULL,
    segu_apel_fami varchar(20),
    tel_fami int NOT NULL,
    dir_fami varchar (30) NOT NULL,
    corr_fami varchar (35) NOT NULL,
    usuario_fami varchar (30) NOT NULL,
    contrasena_fami varchar (12) NOT NULL,
    PRIMARY KEY (docu_fami) 
    );

#Creacion de tabla pacientes

CREATE TABLE pacientes (
    docu_paci int NOT NULL,
    prim_nomb_paci varchar (20) NOT NULL,
    segu_nomb_paci varchar(20),
    prim_apel_paci varchar(20) NOT NULL,
    segu_apel_paci varchar(20),
    ubic_paci varchar(20) NOT NULL,
    direc_paci varchar(30) NOT NULL,
    tele_paci int NOT NULL,
    usuario_paci varchar (30) NOT NULL,
    contrasena_paci varchar (12) NOT NULL,
    docu_fami int NOT NULL,
    docu_medi int NOT NULL,
    docu_enfer int NOT NULL,
	PRIMARY KEY (docu_paci),
    FOREIGN KEY (docu_fami) REFERENCES familiares(docu_fami), -- clave foranea a documento de familiar
    FOREIGN KEY (docu_medi) REFERENCES medicos(docu_medi), -- clave foranea a documento de medicos
    FOREIGN KEY (docu_enfer) REFERENCES enfermeros(docu_enfer) -- clave foranea a documento de enfermeros
);


#Creacion de tabla signos

CREATE TABLE signos (
    docu_paci int NOT NULL,
    fecha date NOT NULL,
    hora time NOT NULL,
    oximetria int NOT NULL,
    frec_resp int NOT NULL, 
    frec_card int NOT NULL,
    temperatura int NOT NULL,
    pre_arte varchar(8) NOT NULL,
    glucem int NOT NULL,
    fecha_diag date NOT NULL,
    diag_paci varchar (30) NOT NULL,
    suge_cuidado text(100) NOT NULL,
    FOREIGN KEY (docu_paci) REFERENCES pacientes(docu_paci) -- clave foranea a documento de paciente
);

    

