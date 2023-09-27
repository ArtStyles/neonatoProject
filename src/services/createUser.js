import {makeFetch} from './makeFetch'


export function createUser({username,email,password,isStaff}){
    const query = `mutation{
        createUser(username:"${username}",password:"${password},email:"${email}",isStaff:"${isStaff}"){
          user{
            id,
            username,
            email,
          }
        }
      }`
    console.log(query)
    return makeFetch({query:query})
    .then(data => {return data})
}