import json
from wsgiref import headers
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotAllowed, HttpResponseBadRequest, HttpResponseServerError

from .models import Medicos

def principal(request):
    return HttpResponse("Esta es la pagina principal de Hospitalizacion en casa")
    
def medicos(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            medicos = Medicos(
                docu_medi = data ["docu_medi"]
                genero = data ["genero"]
                prim_nomb_medi = data ["prim_nomb_medi"]
                segu_nomb_medi = data ["segu_nomb_medi"]
                prim_apel_medi = data ["prim_apel_medi"]
                segu_apel_medi = data ["segu_apel_medi"]
                especialidad = data ["especialidad"]
                regist_medi = data ["regist_medi"]
                usuario_med = data ["usuario_med"]
                contrasena_med = data ["contrasena_med"]
            )
            medicos.save()
            return HttpResponse("Datos del medico agregados")
        except:
            return HttpResponseBadRequest("Error en los datos recibidos")
    else:
        return HttpResponseNotAllowed(['POST'],"Metodo invalido")
    
def obtenerMedicos(request):
    if request.method == 'GET':
        try:
            medicos = Medicos.objects.all()
            datTodosLosMed = []
            for medico in medicos:
                datos = {"docu_medi": medico.docu_medi, "genero": medico.genero, "prim_nomb_medi": medico.prim_nomb_medi, 
                         "segu_nomb_medi": medico.segu_nomb_medi, "prim_apel_medi": medico.prim_apel_medi,
                         "segu_apel_medi": medico.segu_apel_medi, "especialidad": medico.especialidad,
                         "regist_medi": medico.regist_medi}
                datTodosLosMed.append(datos)
                resp = HttpResponse()
                resp.headers['Content-Type'] = 'text/json' 
                resp.content(json.dumps(datTodosLosMed))
                return resp
        except:
            return HttpResponseServerError("Error de servidor")
    else:
        return HttpResponseNotAllowed(['GET'],"Metodo invalido")