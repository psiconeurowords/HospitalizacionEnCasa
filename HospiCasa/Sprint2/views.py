import datetime
import json
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotAllowed, HttpResponseBadRequest, HttpResponseServerError

from .models import pacientes, familiares, medicos

def home(request):
    return HttpResponse("Esta es la pagina principal de hospitalizacion en casa") #pagina inicial

def nuevomedico(request):#registro de medicos
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            #print(data)
            #print(type(data))
            Medi = medicos (
                docu_medi = data["docu_medi"],
                genero = data["genero"],
                prim_nomb_medi = data["prim_nomb_medi"],
                segu_nomb_medi = data["segu_nomb_medi"],
                prim_apel_medi = data["prim_apel_medi"],
                segu_apel_medi = data["segu_apel_medi"],
                especialidad = data["especialidad"],
                regist_medi = data["regist_medi"],
                usuario_med = data["usuario_med"],
                contrasena_med = data["contrasena_med"],
                isAdmin = data["isAdmin"],
            )
            Medi.save()
            return HttpResponse("Medico agregado")
        except:
            return HttpResponseBadRequest("Error en los datos recibidos")
    else:
        return HttpResponseNotAllowed(['POST'], "Método inválido")
    


def nuevopaciente(request): #registro de pacientes
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            #print(data)
            #print(type(data))
            Paci = pacientes (
                docu_paci = data["docu_paci"],
                genero = data["genero"],
                fech_naci_paci = data["fech_naci_paci"],
                prim_nomb_paci = data["prim_nomb_paci"],
                segu_nomb_paci = data["segu_nomb_paci"],
                prim_apel_paci = data["prim_apel_paci"],
                segu_apel_paci = data["segu_apel_paci"],
                ubic_paci = data["ubic_paci"],
                direc_paci = data["direc_paci"],
                ciudad_paci = data["ciudad_paci"],
                tele_paci = data["tele_paci"],
                usuario_paci = data["usuario_paci"],
                contrasena_paci = data["contrasena_paci"],
                isAdmin = data["isAdmin"],
                docu_fami = data["docu_fami"],
                docu_medi = data["docu_medi"],
                docu_enfer = data["docu_enfer"],
            )
            Paci.save()
            return HttpResponse("Paciente agregado")
        except:
            return HttpResponseBadRequest("Error en los datos recibidos")
    else:
        return HttpResponseNotAllowed(['POST'], "Método inválido")
    

def nuevofamiliar(request): #registro de familiar
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            #print(data)
            #print(type(data))
            Fami = familiares (
                docu_fami = data["docu_fami"],
                genero = data["genero"],
                prim_nomb_fami = data["prim_nomb_fami"],
                segu_nomb_fami = data["segu_nomb_fami"],
                prim_apel_fami = data["prim_apel_fami"],
                segu_apel_fami = data["segu_apel_fami"],
                tel_fami = data["tel_fami"],
                dir_fami = data["dir_fami"],
                corr_fami = data["corr_fami"],
                usuario_fami = data["usuario_fami"],
                contrasena_fami = data["contrasena_fami"],
                isAdmin = data["isAdmin"],
                docu_paci = data["docu_paci"],
                parentesco = data["parentesco"],
            )
            Fami.save()
            return HttpResponse("Familiar asignado a paciente")
        except:
            return HttpResponseBadRequest("Error en los datos recibidos")
    else:
        return HttpResponseNotAllowed(['POST'], "Método inválido")



def LeerTodosLosPacientes(request): #consulatr base de datos de pacientes
    if request.method == 'GET':
        try:
            Pacientes = pacientes.objects.all()
            if (not Pacientes):
                return HttpResponseBadRequest("No existen pacientes registrados en el sistema.")
            todosLosPacientes = []
            for paci in Pacientes:
                data = {"docu_paci": paci.docu_paci, "genero": paci.genero, "prim_nomb_paci": paci.prim_nomb_paci,"segu_nomb_paci": paci.segu_nomb_paci, 
                        "prim_apel_paci": paci.prim_apel_paci, "segu_apel_paci": paci.segu_apel_paci, "ubic_paci": paci.ubic_paci, "direc_paci": paci.direc_paci, 
                        "ciudad_paci": paci.ciudad_paci, "tele_paci": paci.tele_paci, "usuario_paci": paci.usuario_paci,"docu_fami": paci.docu_fami,
                        "docu_medi": paci.docu_medi, "docu_enfer": paci.docu_enfer}
                todosLosPacientes.append(data) 
            print (todosLosPacientes)             
            resp = HttpResponse()
            print (HttpResponse())  
            resp.headers['Content-Type'] = "text/json"
            print (resp.headers['Content-Type'])  
            resp.content = json.dumps(todosLosPacientes)
            return resp
        except:
            return HttpResponseServerError("Error de servidor")
    else:
        return HttpResponseNotAllowed(['GET'], "Método inválido")
    
  
    
def LeerUnPaciente(request, docu_paci):
    if request.method == 'GET':
        try:
            Paci = pacientes.objects.filter(docu_paci = docu_paci).first()
            if (not Paci):
                return HttpResponseBadRequest("El documento consultado no se encuentra")
            datos = {"documentodelpaciente": Paci.docu_paci, 
                     "primernombre": Paci.prim_nomb_paci, 
                     "segundonombre": Paci.segu_nomb_paci, 
                     "primerapellido": Paci.prim_apel_paci, 
                     "segundoapellido": Paci.segu_apel_paci, 
                     "direccion": Paci.direc_paci, 
                     "ciudad": Paci.ciudad_paci}
            resp = HttpResponse()
            resp.headers['Content-Type'] = "text/json"
            resp.content = json.dumps(datos)
            return resp
        except:
            return HttpResponseServerError("Error de servidor")
    else:
        return HttpResponseNotAllowed(['GET'], "Método inválido")
