import { useState } from "react";
import { getAllInfo } from "../../services/getAllInfo";
import { useEffect } from "react";
import Form from "../../components/Form";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader";

const AllData=()=>{
  const url = useLocation();
  const id = url.search.replace("?","");
  console.log(id);
  const [paciente, setPaciente] = useState([])
  const [loading, setLoading] = useState(true)

    useEffect(() => {
    setLoading(true);
    getAllInfo({id:id})
    .then(data => {
      setPaciente(data.data.paciente)
      console.log(data.data.paciente)
      setLoading(false)
    })
  },[])
 

  return(
    <>
       {loading && <div className = "loader-container"><Loader/></div> }
      {!loading &&
        <Form       
        onSubmit={"updatePaciente"}
        initialValues={paciente}
        title={`Informacion del paciente: ${paciente.nombre} ${paciente.apellidos}`}  
        subtitle={"Todos los datos del paciente"}
        id = {id}
        />
      }
    
     </>

  )

}



export default AllData;