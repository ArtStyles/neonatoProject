const token = localStorage.getItem('token')
function login(){
    return fetch(url,{
        method:'POST',
        headers:{
            Authorization: `Token {}`
        }
    })
    .then(res => res.json())
    .then(data => {return data})
}

