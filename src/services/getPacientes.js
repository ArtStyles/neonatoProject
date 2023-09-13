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

const selectAllDataquery = `




`

export function getPacientes(){
    return makeFetch({query:query})
    .then(data => {return data})
}