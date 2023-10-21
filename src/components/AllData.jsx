import { useState } from "react";
import { getAllInfo } from "../services/getAllInfo";
import { useEffect } from "react";
import Form from "./Form";
import { useLocation } from "react-router-dom";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const AllData=({mainRef,id,activateAdvice,desactivateAllData})=>{
  const url = useLocation();
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
  },[id])
 

  return(
    <>
       {loading && <div className = "loader-container"><CircularProgress color = "success"/></div> }
      {!loading &&
        <Form       
        onSubmit={"updatePaciente"}
        initialValues={paciente}
        title={`Informacion del paciente: ${paciente.nombre} ${paciente.apellidos}`}  
        subtitle={"Todos los datos del paciente"}
        id = {id}
        mainRef={mainRef}
        activateAdvice={activateAdvice}
        desactivateAllData={desactivateAllData}
        />
      }
    
     </>

  )

}



export default AllData;