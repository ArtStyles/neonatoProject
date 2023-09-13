
const query = `{
    pacientes{
            edges{
                node{
                    id,
                    nombre
                }
            }
        }
    }
`
function makeFetch(query){
    return fetch("http://127.0.0.1:8000/graphql/",{

        method:'POST',
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({query})
        
    })
    .then(res => res.json())
    .then(data => {
        const pacientes = data.data.pacientes.edges
        
        pacientes.map((paciente, i) => {return(paciente.node)})
    })
}

