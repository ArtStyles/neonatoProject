import {makeFetch} from './makeFetch'
const query = `{
    pacientes{
        edges{
            node{
                id,
                nombre,
                nombreDeLaMadre,
                municipio,
                provincia,
                fecha,
            }
        }
    }
}`

export function getPacientes(){
    return makeFetch({query:query})
    .then(data => {return data})
}