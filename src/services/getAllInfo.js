import {makeFetch} from './makeFetch'


export function getAllInfo({id}){
    const query = `{
        paciente( id:"${id}"){
            id 
            fecha
            nombre
            apellidos
            nombreDeLaMadre
            carnetIdentidadMadre
            direccion
            municipio
            provincia
            telefono
            diagnosticoIngreso
            diagnosticoEgreso
            alta
            genetico
            riesgo
            precoz
            numeroControl
            diagPrenatal
            hojaConf
            accionInmediatas
            cronogramaSeg
            infoMaternidad
            coordinacionEquipo
            criterioCirujano
            presenciaEnSalon
            actuacionAfeccion
            ginecologoAsig
            coordinacionTraslado1
            coincidenciaDiag
            coordinacionTraslado2
            justificTraslado
            evaluacionTrasl
            deficienciasTrasl
            interconsultCirujano
            interconsultMedica
            estudiosInterQuirurgica
            docContrarref
            programaAcciones
            cronogramaAtencion
            confirSegundaOpinion
            verificarEquipoQuirurgico
            verificarEquipoAnestesico
            clasificacion
            
        }
    }`
    return makeFetch({query:query})
    .then(data => {return data})
}