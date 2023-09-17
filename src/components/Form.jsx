import { Box, Button, TextField} from "@mui/material";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useState } from "react";
import React from 'react';
import CheckField from "./CheckField";
import Advice from "./Advice";
import ScrollToFirstError from "../hooks/ScrollToFirstError";
import { useRef } from "react";
import {createPaciente} from "../services/createPaciente";


const Form = ({title,subtitle,initialValues}) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [advice,setAdvice] = useState(true);
  const boxRef = useRef(null);

  
  const HandleFormSubmit = (values) => {
    console.log(values);
    var empty = false;
    for (var key in values) {
      if(values[key] === null){
        empty = true;
        break;
      }
    }
    // if(empty === false){
    //   for (var y in values) {
    //       values[y] = "";
    //   }
    // } 
      createPaciente({params:values});
   
    setAdvice(false);
    setTimeout(() => setAdvice(true), 3000);
    window.scrollTo(0, 0);
    boxRef.current.scrollTo(0,0);
  };
  const handleOnChecked =({val,campo,})=>{
    if(val!==campo)
      val=campo;
    else
      val="EMPTY";
    return val;
    }

  return (
    <Box m="20px" style={{height:"100%"}}>
      
      <Header title={title} subtitle={subtitle} />
      <Box 
      style={{overflow:"auto",height:"108%", width:"100%",padding:"0px 0px 40px 0px"}} ref={boxRef}> 
        <Formik
        onSubmit={HandleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
        validateOnChange={false} 
        validateOnBlur={false}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit} >
            {<ScrollToFirstError myRef={boxRef}/>}
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}

            >
              <Accordion sx={{ gridColumn: "span 4", backgroundColor:colors.grey[700]} }
              
              defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                  <Typography color={colors.greenAccent[100]} variant="h5">
                   Identificación
                  </Typography>
                </AccordionSummary>
                <AccordionDetails style={{display:"grid",gap:"30px"}}>
                  
                <TextField
                    fullWidth               
                    type="date"
                    onChange={handleChange}
                    value={values.fecha}
                    name="fecha"
                    error={!!touched.fecha && !!errors.fecha}
                    helperText={touched.fecha && errors.fecha}
                    sx={{ gridColumn: "span 4" }}
                    
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Nombres"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nombre}
                    name="nombre"
                    error={!!touched.nombre && !!errors.nombre}
                    helperText={touched.nombre && errors.nombre}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Apellidos"
                    onChange={handleChange}
                    value={values.apellidos}
                    name="apellidos"
                    error={!!touched.apellidos && !!errors.apellidos}
                    helperText={touched.apellidos && errors.apellidos}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Nombre de la Madre"
                    onChange={handleChange}
                    value={values.nombreDeLaMadre}
                    name="nombreDeLaMadre"
                    error={!!errors.nombreDeLaMadre}
                    helperText={errors.nombreDeLaMadre}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Carnet de Identidad de la Madre"
                    onChange={handleChange}
                    value={values.carnetIdentidadMadre}
                    name="carnetIdentidadMadre"
                    error={!!errors.carnetIdentidadMadre}
                    helperText={errors.carnetIdentidadMadre}
                    sx={{ gridColumn: "span 2" }}
                  />
                                    <TextField
                    fullWidth
                    variant="filled"
                    type="tel"
                    label="Teléfono"
                    onChange={handleChange}
                    value={values.telefono}
                    name="telefono"
                    error={!!touched.telefono && !!errors.telefono}
                    helperText={touched.telefono && errors.telefono}
                    sx={{ gridColumn: "span 2"}}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Dirección"
                    onChange={handleChange}
                    value={values.direccion}
                    name="direccion"
                    error={!!touched.direccion && !!errors.direccion}
                    helperText={touched.direccion && errors.direccion}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Municipio"  
                    onChange={handleChange}
                    value={values.municipio}
                    name="municipio"
                    error={!!touched.municipio && !!errors.municipio}
                    helperText={touched.municipio && errors.municipio}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Provincia"
                    onChange={handleChange}
                    value={values.provincia}
                    name="provincia"
                    error={!!touched.provincia && !!errors.provincia}
                    helperText={touched.provincia && errors.provincia}
                    sx={{ gridColumn: "span 2" }}
                  />


                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Diagnóstico al Ingreso"
                    onChange={handleChange}
                    value={values.diagnosticoIngreso}
                    name="diagnosticoIngreso"
                    error={!!touched.diagnosticoIngreso  && !!errors.diagnosticoIngreso}
                    helperText={touched.diagnosticoIngreso && errors.diagnosticoIngreso}
                    sx={{ gridColumn: "span 4" }}
                  />

                  <CheckField title="Diagnóstico al egreso"
                      value={values.diagnosticoEgreso}
                      validation={true}
                      checkedAll={true}
                      cantElments={["Atresia Esofágica","Defectos de la Pared","Atresias y estenosis intestinales","Defectos diafragmáticos","Otros"]}
                      onChange={[()=>{
                        if( !values.diagnosticoEgreso.includes("Atresia Esofágica"))
                          setFieldValue("diagnosticoEgreso",values.diagnosticoEgreso+"Atresia Esofágica, ");
                        else
                          setFieldValue("diagnosticoEgreso", values.diagnosticoEgreso.replace("Atresia Esofágica, ",""));
                        },()=>{
                        if(!values.diagnosticoEgreso.includes("Defectos de la Pared") )
                          setFieldValue("diagnosticoEgreso",values.diagnosticoEgreso+"Defectos de la Pared, ");
                        else
                          setFieldValue("diagnosticoEgreso", values.diagnosticoEgreso.replace("Defectos de la Pared, ",""));
                        },()=>{
                        if(!values.diagnosticoEgreso.includes("Atresias y estenosis intestinales"))
                          setFieldValue("diagnosticoEgreso",values.diagnosticoEgreso+"Atresias y estenosis intestinales, ");
                        else
                          setFieldValue("diagnosticoEgreso", values.diagnosticoEgreso.replace("Atresias y estenosis intestinales, ",""))
                        },()=>{
                        if(!values.diagnosticoEgreso.includes("Defectos diafragmáticos"))
                          setFieldValue("diagnosticoEgreso",values.diagnosticoEgreso+"Defectos diafragmáticos, ");
                        else
                          setFieldValue("diagnosticoEgreso", values.diagnosticoEgreso.replace("Defectos diafragmáticos, ",""))
                        },()=>{
                          if(!values.diagnosticoEgreso.includes("Otros"))
                          setFieldValue("diagnosticoEgreso", values.diagnosticoEgreso+"Otros, ");
                        else
                          setFieldValue("diagnosticoEgreso", values.diagnosticoEgreso.replace("Otros, ",""))}]}              
                  /> 
                    <CheckField title="Resultado del alta"
                      value={values.alta}
                      checkBoxNames={["Vivo","Fallecido"]}
                      cantElments={["VIVO","MUERTO"]}
                      onChange={[()=>{setFieldValue("alta",handleOnChecked({val:values.alta,campo:"VIVO"}))
                        },()=>{
                          setFieldValue("alta",handleOnChecked({val:values.alta,campo:"MUERTO"}))
                        }]}              
                    />
                
              </AccordionDetails>
              </Accordion>
              <Accordion sx={{ gridColumn: "span 4",backgroundColor:colors.grey[700] }}defaultExpanded >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[100]} variant="h5">
                    Atención Primaria
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{display:"grid",gap:"30px"}}>

                  <CheckField title="Identificación de la embarazada como riesgo
                            si tenía antencedentes de otros hijos vivos
                            o fallecidos con malformaciones"
                      value={values.riesgo}
                      checkBoxNames={["Si","No","Np"]}
                      cantElments={["SI","NO","NP"]}
                      onChange={[()=>{setFieldValue("riesgo",handleOnChecked({val:values.riesgo,campo:"SI"}))
                        },()=>{
                          setFieldValue("riesgo",handleOnChecked({val:values.riesgo,campo:"NO"}))
                        },()=>{
                          setFieldValue("riesgo",handleOnChecked({val:values.riesgo,campo:"NP"}))
                        }]}             
                    /> 

                    <CheckField title="Comprobación del consejo genético"
                      value={values.genetico}
                      checkBoxNames={["Si","No","Np"]}
                      cantElments={["SI","NO","NP"]}
                      onChange={[()=>{setFieldValue("genetico",handleOnChecked({val:values.genetico,campo:"SI"}))
                        },()=>{
                          setFieldValue("genetico",handleOnChecked({val:values.genetico,campo:"NO"}))
                        },()=>{
                          setFieldValue("genetico",handleOnChecked({val:values.genetico,campo:"NP"}))
                        }]}                 
                    /> 

                    <CheckField title="Captación precoz"
                      value={values.precoz}
                      checkBoxNames={["Si","No"]}
                      cantElments={["SI","NO"]}
                      onChange={[()=>{setFieldValue("precoz",handleOnChecked({val:values.precoz,campo:"SI"}))
                        },()=>{
                          setFieldValue("precoz",handleOnChecked({val:values.precoz,campo:"NO"}))
                        }]}              
                    />     
                        
                    <TextField
                      fullWidth
                      sx={{ gridColumn: "span 2" }}   
                      type="number"
                      label="Numero de Controles de Embarazo"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.numeroControl}
                      name="numeroControl"
                      error={!!touched.numeroControl && !!errors.numeroControl}
                      helperText={touched.numeroControl && errors.numeroControl}

                    />
                 
                    <CheckField title="Diagnóstico prenatal"
                      value={values.diagPrenatal}
                      checkBoxNames={["Si","No"]}
                      cantElments={["SI","NO"]}
                      onChange={[()=>{setFieldValue("diagPrenatal",handleOnChecked({val:values.diagPrenatal,campo:"SI"}))
                        },()=>{
                          setFieldValue("diagPrenatal",handleOnChecked({val:values.diagPrenatal,campo:"NO"}))
                        }]}             
                    />            
                 
                   
                  </AccordionDetails>
              </Accordion>

              <Accordion sx={{ gridColumn: "span 4", backgroundColor:colors.grey[700]}}
              
              defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color={colors.greenAccent[100]} variant="h5">
                   Al regreso del neonato operado
                  </Typography>
                </AccordionSummary>
                <AccordionDetails style={{display:"grid",gap:"30px"}}>
                  
                <CheckField title="Hoja de Conferencia"
                      value={values.hojaConf}
                      checkBoxNames={["Si","No"]}
                      cantElments={["SI","NO"]}
                      onChange={[()=>{setFieldValue("hojaConf",handleOnChecked({val:values.hojaConf,campo:"SI"}))
                        },()=>{
                          setFieldValue("hojaConf",handleOnChecked({val:values.hojaConf,campo:"NO"}))
                        }]}              
                  />
                
                  <CheckField title="Programa de Acciones Inmediatas"
                      value={values.accionInmediatas}
                      checkBoxNames={["Si","No"]}
                      cantElments={["SI","NO"]}
                      onChange={[()=>{setFieldValue("accionInmediatas",handleOnChecked({val:values.accionInmediatas,campo:"SI"}))
                        },()=>{
                          setFieldValue("accionInmediatas",handleOnChecked({val:values.accionInmediatas,campo:"NO"}))
                        }]}             
                  />
                  
                  <CheckField title="Cronograma de Seguimiento"
                      value={values.cronogramaSeg}
                      checkBoxNames={["Si","No"]}
                      cantElments={["SI","NO"]}
                      onChange={[()=>{setFieldValue("cronogramaSeg",handleOnChecked({val:values.cronogramaSeg,campo:"SI"}))
                        },()=>{
                          setFieldValue("cronogramaSeg",handleOnChecked({val:values.cronogramaSeg,campo:"NO"}))
                        }]}                    
                  />

                </AccordionDetails>
              </Accordion>
               
              <Accordion sx={{ gridColumn: "span 4", backgroundColor:colors.grey[700]}}
              defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color={colors.greenAccent[100]} variant="h5">
                   Hogar materno
                  </Typography>
                </AccordionSummary>
                <AccordionDetails style={{display:"grid",gap:"30px"}}>
                
                <CheckField title="Información a la maternidad"
                      value={values.infoMaternidad}
                      checkBoxNames={["Si","No"]}
                      cantElments={["SI","NO"]}
                      onChange={[()=>{setFieldValue("infoMaternidad",handleOnChecked({val:values.infoMaternidad,campo:"SI"}))
                        },()=>{
                          setFieldValue("infoMaternidad",handleOnChecked({val:values.infoMaternidad,campo:"NO"}))
                        }]}             
                  />

                  <CheckField title="Coordinación entre los equipos de ginecología"
                      value={values.coordinacionEquipo}
                      cantElments={["SI","NO"]}
                      checkBoxNames={["SI","NO"]}
                      onChange={[()=>{setFieldValue("coordinacionEquipo",handleOnChecked({val:values.coordinacionEquipo,campo:"SI"}))
                        },()=>{
                          setFieldValue("coordinacionEquipo",handleOnChecked({val:values.coordinacionEquipo,campo:"NO"}))
                        }]}              
                  />
                  
                  <CheckField title="Criterio del cirujano"
                      value={values.criterioCirujano}
                      checkBoxNames={["Si","No","Np"]}
                      cantElments={["SI","NO","NP"]}
                      onChange={[()=>{setFieldValue("criterioCirujano",handleOnChecked({val:values.criterioCirujano,campo:"SI"}))
                        },()=>{
                          setFieldValue("criterioCirujano",handleOnChecked({val:values.criterioCirujano,campo:"NO"}))
                        },()=>{
                          setFieldValue("criterioCirujano",handleOnChecked({val:values.criterioCirujano,campo:"NP"}))
                        }]}               
                  /> 

                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ gridColumn: "span 4", backgroundColor:colors.grey[700]}}
              defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color={colors.greenAccent[100]} variant="h5">
                   Servicios de Neonatologias Provinciales
                  </Typography>
                </AccordionSummary>
                <AccordionDetails style={{display:"grid",gap:"30px"}}>

                  <CheckField title="Presencia del neonatologo en el salón de parto"
                      value={values.presenciaEnSalon}
                      checkBoxNames={["Si","No","Np"]}
                      cantElments={["SI","NO","NP"]}
                      onChange={[()=>{setFieldValue("presenciaEnSalon",handleOnChecked({val:values.presenciaEnSalon,campo:"SI"}))
                        },()=>{
                          setFieldValue("presenciaEnSalon",handleOnChecked({val:values.presenciaEnSalon,campo:"NO"}))
                        },()=>{
                          setFieldValue("presenciaEnSalon",handleOnChecked({val:values.presenciaEnSalon,campo:"NP"}))
                        }]}               
                  /> 
                
                  <CheckField title="Actuación de acuerdo a la afección"
                      value={values.actuacionAfeccion}
                      checkBoxNames={["Si","No","Np"]}
                      cantElments={["SI","NO","NP"]}
                      onChange={[()=>{setFieldValue("actuacionAfeccion",handleOnChecked({val:values.actuacionAfeccion,campo:"SI"}))
                        },()=>{
                          setFieldValue("actuacionAfeccion",handleOnChecked({val:values.actuacionAfeccion,campo:"NO"}))
                        },()=>{
                          setFieldValue("actuacionAfeccion",handleOnChecked({val:values.actuacionAfeccion,campo:"NP"}))
                        }]}              
                  /> 
                  
                  <CheckField title="Ginecólogo asignado"
                      value={values.ginecologoAsig}
                      checkBoxNames={["Si","No"]}
                      cantElments={["SI","NO"]}
                      onChange={[()=>{setFieldValue("ginecologoAsig",handleOnChecked({val:values.ginecologoAsig,campo:"SI"}))
                        },()=>{
                          setFieldValue("ginecologoAsig",handleOnChecked({val:values.ginecologoAsig,campo:"NO"}))
                        }]}                
                  /> 
                  
                  <CheckField title="Coordinacción del traslado"
                      value={values.coordinacionTraslado1}
                      checkBoxNames={["Si","No","Np"]}
                      cantElments={["SI","NO","NP"]}
                      onChange={[()=>{setFieldValue("coordinacionTraslado1",handleOnChecked({val:values.coordinacionTraslado1,campo:"SI"}))
                        },()=>{
                          setFieldValue("coordinacionTraslado1",handleOnChecked({val:values.coordinacionTraslado1,campo:"NO"}))
                        },()=>{
                          setFieldValue("coordinacionTraslado1",handleOnChecked({val:values.coordinacionTraslado1,campo:"NP"}))
                        }]}              
                  /> 

                </AccordionDetails>
              </Accordion>
              
              <Accordion sx={{ gridColumn: "span 4", backgroundColor:colors.grey[700]}}
              defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color={colors.greenAccent[100]} variant="h5">
                   Servicios de Neonatologias CERECINE
                  </Typography>
                </AccordionSummary>
                <AccordionDetails style={{display:"grid",gap:"30px"}}>
                
                <CheckField title="Coincidencia diagnóstica"
                      value={values.coincidenciaDiag}
                      checkBoxNames={["Si","No"]}
                      cantElments={["SI","NO"]}
                      onChange={[()=>{setFieldValue("coincidenciaDiag",handleOnChecked({val:values.coincidenciaDiag,campo:"SI"}))
                        },()=>{
                          setFieldValue("coincidenciaDiag",handleOnChecked({val:values.coincidenciaDiag,campo:"NO"}))
                        }]}               
                  /> 

                  <CheckField title="Coordinacción del traslado"
                      value={values.coordinacionTraslado2}
                      checkBoxNames={["Si","No","Np"]}
                      cantElments={["SI","NO","NP"]}
                      onChange={[()=>{setFieldValue("coordinacionTraslado2",handleOnChecked({val:values.coordinacionTraslado2,campo:"SI"}))
                        },()=>{
                          setFieldValue("coordinacionTraslado2",handleOnChecked({val:values.coordinacionTraslado2,campo:"NO"}))
                        },()=>{
                          setFieldValue("coordinacionTraslado2",handleOnChecked({val:values.coordinacionTraslado2,campo:"NP"}))
                        }]}              
                  /> 
                 
                  <CheckField title="Justificacion del Traslado"
                      value={values.justificTraslado}
                      checkBoxNames={["Si","No"]}
                      cantElments={["SI","NO"]}
                      onChange={[()=>{setFieldValue("justificTraslado",handleOnChecked({val:values.justificTraslado,campo:"SI"}))
                    },()=>{
                      setFieldValue("justificTraslado",handleOnChecked({val:values.justificTraslado,campo:"NO"}))
                    }]}             
                  /> 

                  <CheckField title="Evalauacion del Traslado"
                      value={values.evaluacionTrasl}
                      checkBoxNames={["E","MB","B","AT"]}
                      cantElments={["E","MB","B","AT"]}
                      onChange={[()=>{setFieldValue("evaluacionTrasl",handleOnChecked({val:values.evaluacionTrasl,campo:"E"}))
                        },()=>{
                          setFieldValue("evaluacionTrasl",handleOnChecked({val:values.evaluacionTrasl,campo:"MB"}))
                        },()=>{
                          setFieldValue("evaluacionTrasl",handleOnChecked({val:values.evaluacionTrasl,campo:"B"}))
                        },()=>{
                          setFieldValue("evaluacionTrasl",handleOnChecked({val:values.evaluacionTrasl,campo:"AT"}))
                        }]}              
                  /> 
                 
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Deficiencias del Traslado"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.deficienciasTrasl}
                    name="deficienciasTrasl"
                    error={!!touched.deficienciasTrasl && !!errors.deficienciasTrasl}
                    helperText={touched.deficienciasTrasl && errors.deficienciasTrasl}
                    sx={{ gridColumn: "span 4" }}
                  />

                  <CheckField title="Interconsulta con el cirujano"
                      value={values.interconsultCirujano}
                      checkBoxNames={["Si","No","Np"]}
                      cantElments={["SI","NO","NP"]}
                      onChange={[()=>{setFieldValue("interconsultCirujano",handleOnChecked({val:values.interconsultCirujano,campo:"SI"}))
                        },()=>{
                          setFieldValue("interconsultCirujano",handleOnChecked({val:values.interconsultCirujano,campo:"NO"}))
                        },()=>{
                          setFieldValue("interconsultCirujano",handleOnChecked({val:values.interconsultCirujano,campo:"NP"}))
                        }]}                  
                  /> 
                 
                  <CheckField title="Interconsulta médica"
                      value={values.interconsultMedica}
                      checkBoxNames={["Si","No","Np"]}
                      cantElments={["SI","NO","NP"]}
                      onChange={[()=>{setFieldValue("interconsultMedica",handleOnChecked({val:values.interconsultMedica,campo:"SI"}))
                        },()=>{
                          setFieldValue("interconsultMedica",handleOnChecked({val:values.interconsultMedica,campo:"NO"}))
                        },()=>{
                          setFieldValue("interconsultMedica",handleOnChecked({val:values.interconsultMedica,campo:"NP"}))
                        }]}                
                  /> 
                  
                  <CheckField title="Estudios para intervención Quirúrjica"
                      value={values.estudiosInterQuirurgica}
                      checkBoxNames={["Si","No","Np"]}
                      cantElments={["SI","NO","NP"]}
                      onChange={[()=>{setFieldValue("estudiosInterQuirurgica",handleOnChecked({val:values.estudiosInterQuirurgica,campo:"SI"}))
                        },()=>{
                          setFieldValue("estudiosInterQuirurgica",handleOnChecked({val:values.estudiosInterQuirurgica,campo:"NO"}))
                        },()=>{
                          setFieldValue("estudiosInterQuirurgica",handleOnChecked({val:values.estudiosInterQuirurgica,campo:"NP"}))
                        }]}             
                  /> 

                  <CheckField title="Documento de Contrarreferencia"
                      value={values.docContrarref}
                      checkBoxNames={["Si","No"]}
                      cantElments={["SI","NP"]}
                      onChange={[()=>{setFieldValue("docContrarref",handleOnChecked({val:values.docContrarref,campo:"SI"}))
                        },()=>{
                          setFieldValue("docContrarref",handleOnChecked({val:values.docContrarref,campo:"NO"}))
                        }]}             
                  /> 

                  <CheckField title="Programa de acciones de cada caso individual"
                      value={values.programaAcciones}
                      checkBoxNames={["Si","No"]}
                      cantElments={["SI","NO"]}
                      onChange={[()=>{setFieldValue("programaAcciones",handleOnChecked({val:values.programaAcciones,campo:"SI"}))
                        },()=>{
                          setFieldValue("programaAcciones",handleOnChecked({val:values.programaAcciones,campo:"NO"}))
                        }]}              
                  />   
                 
                  <CheckField title="Cronograma de atención"
                      value={values.cronogramaAtencion}
                      checkBoxNames={["Si","No"]}
                      cantElments={["SI","NO"]}
                      onChange={[()=>{setFieldValue("cronogramaAtencion",handleOnChecked({val:values.cronogramaAtencion,campo:"SI"}))
                        },()=>{
                          setFieldValue("cronogramaAtencion",handleOnChecked({val:values.cronogramaAtencion,campo:"NO"}))
                        }]}               
                  />         

                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ gridColumn: "span 4", backgroundColor:colors.grey[700]}}
              defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color={colors.greenAccent[100]} variant="h5">
                   Equipo Quirúrgico
                  </Typography>
                </AccordionSummary>
                <AccordionDetails style={{display:"grid",gap:"30px"}}>

                <CheckField title="Confirmación de segunda opinión"
                      value={values.confirSegundaOpinion}
                      checkBoxNames={["Si","No"]}
                      cantElments={["SI","NO"]}
                      onChange={[()=>{setFieldValue("confirSegundaOpinion",handleOnChecked({val:values.confirSegundaOpinion,campo:"SI"}))
                        },()=>{
                          setFieldValue("confirSegundaOpinion",handleOnChecked({val:values.confirSegundaOpinion,campo:"NO"}))
                        }]}              
                  />
                
                  <CheckField title="Verificar la integración del equipo quirúrgico"
                      value={values.verificarEquipoQuirurgico}
                      checkBoxNames={["Si","No"]}
                      cantElments={["SI","NO"]}
                      onChange={[()=>{setFieldValue("verificarEquipoQuirurgico",handleOnChecked({val:values.verificarEquipoQuirurgico,campo:"SI"}))
                        },()=>{
                          setFieldValue("verificarEquipoQuirurgico",handleOnChecked({val:values.verificarEquipoQuirurgico,campo:"NO"}))
                        }]}              
                  />
                 
                  <CheckField title="Verificar que el equipo anéstesico sea el asignado"
                      value={values.verificarEquipoAnestesico}
                      checkBoxNames={["Si","No"]}
                      cantElments={["SI","NO"]}
                      onChange={[()=>{setFieldValue("verificarEquipoAnestesico",handleOnChecked({val:values.verificarEquipoAnestesico,campo:"SI"}))
                        },()=>{
                          setFieldValue("verificarEquipoAnestesico",handleOnChecked({val:values.verificarEquipoAnestesico,campo:"NO"}))
                        }]}             
                  />
                  
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ gridColumn: "span 4", backgroundColor:colors.grey[700]}}
              defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color={colors.greenAccent[100]} variant="h5">
                  Centro Provincial de Genética de Holguín
                  </Typography>
                </AccordionSummary>
                <AccordionDetails style={{display:"grid",gap:"30px"}}>

                  <CheckField title="Clasificación"  
                    value={values.clasificacion} 
                    cantElments={["D","NO D"]}
                    onChange={[()=>{setFieldValue("clasificacion",handleOnChecked({val:values.clasificacion,campo:"D"}))
                  },()=>{
                    setFieldValue("clasificacion",handleOnChecked({val:values.clasificacion,campo:"NO D"}))
                  }]}    
                    checkBoxNames={["D","No D"]} />

                </AccordionDetails>
              </Accordion>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Aceptar
              </Button>
            </Box>
            {
              !advice && <Advice title="Datos añadidos correctamente" colorBox={"green"}/>
            }
          </form>
        )}
      </Formik>
      </Box>
     
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  fecha: yup.string().required("campo obligatorio"),
  nombreDeLaMadre: yup.string().required("campo obligatorio"),
  direccion: yup.string().required("campo obligatorio"),
  municipio: yup.string().required("campo obligatorio"),
  provincia: yup.string().required("campo obligatorio"),
  diagnosticoEgreso:yup.string().required("campo obligatorio"),

});

export default Form;