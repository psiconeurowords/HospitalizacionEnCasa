from django.db import models

class medicos(models.Model):
  docu_medi = models.IntegerField(primary_key='docu_medi')
  genero = models.CharField(max_length=12)
  prim_nomb_medi = models.CharField(max_length=20)
  segu_nomb_medi = models.CharField(max_length=20, null = True)
  prim_apel_medi = models.CharField(max_length=20)
  segu_apel_medi = models.CharField(max_length=20, null = True)
  especialidad = models.CharField(max_length=25)
  regist_medi = models.CharField(max_length=15)
  usuario_med = models.CharField(max_length=30)
  contrasena_med = models.CharField(max_length=12)
  
class enfermeros(models.Model):
  docu_enfer = models.IntegerField(primary_key='docu_enfer')
  genero = models.CharField(max_length=12)
  prim_nomb_enfer = models.CharField(max_length=20)
  segu_nomb_enfer = models.CharField(max_length=20, null = True)
  prim_apel_enfer = models.CharField(max_length=20)
  segu_apel_enfer = models.CharField(max_length=20, null = True)
  usuario_enfer = models.CharField(max_length=30)
  contrasena_enfer = models.CharField(max_length=12)
  isAdmin = models.BooleanField(default=False) # por postman se crean usuarios normales y por sql se crearian los admin
  
class auxiliares(models.Model):
  docu_auxi = models.IntegerField(primary_key='docu_auxi')
  genero = models.CharField(max_length=12)
  prim_nomb_auxi = models.CharField(max_length=20)
  segu_nomb_auxi = models.CharField(max_length=20, null = True)
  prim_apel_auxi = models.CharField(max_length=20)
  segu_apel_auxi = models.CharField(max_length=20, null = True)
  usuario_auxi = models.CharField(max_length=30)
  contrasena_auxi = models.CharField(max_length=12)
  isAdmin = models.BooleanField(default=False) # por postman se crean usuarios normales y por sql se crearian los admin
  
class familiares(models.Model):
  docu_fami = models.IntegerField(primary_key='docu_fami')
  genero = models.CharField(max_length=12)
  prim_nomb_fami = models.CharField(max_length=20)
  segu_nomb_fami = models.CharField(max_length=20, null = True)
  prim_apel_fami = models.CharField(max_length=20)
  segu_apel_fami = models.CharField(max_length=20, null = True)
  tel_fami = models.IntegerField()
  dir_fami = models.CharField(max_length=30)
  corr_fami = models.CharField(max_length=30)
  usuario_fami = models.CharField(max_length=30)
  contrasena_fami = models.CharField(max_length=12)
  isAdmin = models.BooleanField(default=False) # por postman se crean usuarios normales y por sql se crearian los admin
  docu_paci = models.ForeignKey('pacientes', on_delete=models.CASCADE)
  parentesco = models.CharField(max_length=14)
  
class pacientes (models.Model):
  docu_paci = models.IntegerField(primary_key='docu_paci')
  genero = models.CharField(max_length=12)
  fech_naci_paci = models.DateField()
  prim_nomb_paci = models.CharField(max_length=20)
  segu_nomb_paci = models.CharField(max_length=20, null = True)
  prim_apel_paci = models.CharField(max_length=20)
  segu_apel_paci = models.CharField(max_length=20, null = True)
  ubic_paci = models.CharField(max_length=20)
  direc_paci = models.CharField(max_length=30)
  ciudad_paci = models.CharField(max_length=30)
  tele_paci = models.IntegerField()
  usuario_paci = models.CharField(max_length=30)
  contrasena_paci = models.CharField(max_length=12)
  isAdmin = models.BooleanField(default=False) # por postman se crean usuarios normales y por sql se crearian los admin
  docu_fami = models.ForeignKey('familiares', on_delete=models.CASCADE)
  docu_medi = models.ForeignKey('medicos', on_delete=models.CASCADE)
  docu_enfer = models.ForeignKey('enfermeros', on_delete=models.CASCADE)

class signos (models.Model):
  docu_paci = models.IntegerField()
  fecha = models.DateField()
  hora = models.TimeField()
  oximetria = models.IntegerField ()
  frec_resp = models.IntegerField ()
  frec_card = models.IntegerField ()
  temperatura = models.IntegerField ()
  pre_arte = models.CharField (max_length=8)
  glucem = models.IntegerField()
  fecha = models.DateField()
  diag_paci = models.CharField(max_length=30)
  suge_cuidado = models.CharField(max_length=100)
  docu_paci = models.ForeignKey('pacientes', on_delete=models.CASCADE)