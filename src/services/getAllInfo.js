import {makeFetch} from './makeFetch'


export function getAllInfo({id}){
    const query = `{
        paciente( id:"${id}"){ 
            fecha,
            nombre,
            apellidos,
            nombreDeLaMadre,
            carnetIdentidadMadre,
            direccion,
            municipio,
            provincia,
          
            
        }
    }`
    return makeFetch({query:query})
    .then(data => {return data})
}