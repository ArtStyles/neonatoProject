import {makeFetch} from './makeFetch'
const query = `{
    pacientes{
        edges{
            node{
                id,
                nombre,
                nombreMadre,
                municipio,
                provincia,
                createdAt,
            }
        }
    }
}`

export function getPacientes(){
    return makeFetch({query:query})
    .then(data => {return data})
}