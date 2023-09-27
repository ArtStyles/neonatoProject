
import { useState } from "react";
import { useEffect } from "react";
import Form from "../../components/Form";
import { values } from "../../data/initialValues";



const FormData=()=>{
    
  return(
    <>
      <Form 
      initialValues={values} 
      title={"Ingresar datos del paciente"} 
      subtitle={"Formulario con los datos a ingresar"}/>

    </>

  )

}

export default FormData;