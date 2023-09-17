import { PartyModeSharp } from '@mui/icons-material';
import {makeFetch} from './makeFetch'


export function createPaciente({params}){
    const query = `
    mutation {
        createPaciente(
            fecha:"${params.fecha.substring(0,10)}"
            nombre:"${params.nombre}"
            apellidos:"${params.apellidos}"
            nombreDeLaMadre:"${params.nombreDeMadre}"
            carnetIdentidadMadre:"${params.carnetIdentidadMadre}"
            direccion:"${params.direccion}"
            municipio:"${params.municipio}"
            provincia:"${params.provincia}"
            telefono:"${params.telefono}"
            diagnosticoIngreso:"${params.diagnosticoIngreso===null?"EMPTY":params.diagnosticoIngreso}"
            diagnosticoEgreso:"${params.diagnosticoEgreso===null?"EMPTY":params.diagnosticoEgreso}"
            alta:${params.alta==="null"?"EMPTY":params.alta}
            genetico:${params.genetico==="null"?"EMPTY":params.genetico}
            riesgo:${params.riesgo==="null"?"EMPTY":params.riesgo}
            precoz:${params.precoz==="null"?"EMPTY":params.precoz}
            numeroControl:${params.numeroControl}
            diagPrenatal:${params.diagPrenatal==="null"?"EMPTY":params.diagPrenatal}
            hojaConf:${params.hojaConf==="null"?"EMPTY":params.hojaConf}
            accionInmediatas:${params.accionInmediatas==="null"?"EMPTY":params.accionInmediatas}
            cronogramaSeg:${params.cronogramaSeg==="null"?"EMPTY":params.cronogramaSeg}
            infoMaternidad:${params.infoMaternidad==="0"?"EMPTY":params.infoMaternidad}
            coordinacionEquipo:${params.coordinacionEquipo==="null"?"EMPTY":params.coordinacionEquipo}
            criterioCirujano:${params.criterioCirujano==="empty"?"EMPTY":params.criterioCirujano}
            presenciaEnSalon:${params.presenciaEnSalon==="null"?"EMPTY":params.presenciaEnSalon}
            actuacionAfeccion:${params.actuacionAfeccion==="null"?"EMPTY":params.actuacionAfeccion}
            ginecologoAsig:${params.ginecologoAsig==="null"?"EMPTY":params.ginecologoAsig}
            coordinacionTraslado1:${params.coordinacionTraslado1==="null"?"EMPTY":params.coordinacionTraslado1}
            coincidenciaDiag:${params.coincidenciaDiag==="null"?"EMPTY":params.coincidenciaDiag}
            coordinacionTraslado2:${params.coordinacionTraslado2==="null"?"EMPTY":params.coordinacionTraslado2}
            justificTraslado:${params.justificTraslado==="null"?"EMPTY":params.justificTraslado}
            evaluacionTrasl:${params.evaluacionTrasl==="null"?"EMPTY":params.evaluacionTrasl}
            deficienciasTrasl:"${params.deficienciasTrasl}"
            interconsultCirujano:${params.interconsultCirujano==="null"?"EMPTY":params.interconsultCirujano}
            interconsultMedica:${params.interconsultMedica==="null"?"EMPTY":params.interconsultMedica}
            estudiosInterQuirurgica:${params.estudiosInterQuirurgica==="null"?"EMPTY":params.estudiosInterQuirurgica}
            docContrarref:${params.docContrarref==="null"?"EMPTY":params.docContrarref}
            programaAcciones:${params.programaAcciones==="null"?"EMPTY":params.programaAcciones}
            cronogramaAtencion:${params.cronogramaAtencion==="0"?"EMPTY":params.cronogramaAtencion}
            confirSegundaOpinion:${params.confirSegundaOpinion==="null"?"EMPTY":params.confirSegundaOpinion}
            verificarEquipoQuirurgico:${params.verificarEquipoQuirurgico==="null"?"EMPTY":params.verificarEquipoQuirurgico}
            verificarEquipoAnestesico:${params.verificarEquipoAnestesico==="null"?"EMPTY":params.verificarEquipoAnestesico}
            clasificacion:${params.clasificacion===""?"EMPTY":params.clasificacion}
        ) {
            paciente {
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
        }
    }`
    console.log(query);
    return makeFetch({query:query})
    .then(data => {return data})
}