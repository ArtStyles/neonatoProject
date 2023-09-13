import { Box, Button, TextField} from "@mui/material";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import React from 'react';
import CheckField from "../../components/CheckField";
import Advice from "../../components/Advice";
import ScrollToFirstError from "../../hooks/ScrollToFirstError";
import { useRef } from "react";
import { values } from "../../data/initialValues";


const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const [actualizarDOM, setActualizarDOM] =useState(true);
  const handleOnChangeActualizarDOM = () => {
    setActualizarDOM(!actualizarDOM);
  };

  const [advice,setAdvice] = useState(true);
  const boxRef = useRef(null);

  const handleFormSubmit = (values) => {
    console.log(values);
    var empty = false;
    for (var key in values) {
      if(values[key] === ""){
        empty = true;
        break;
      }
    }
    if(empty === false){
      for (var y in values) {
          values[y] = "";
      }
     // handleOnChangeActualizarDOM();
    } 
    
    setAdvice(false);
    setTimeout(() => setAdvice(true), 3000);
    window.scrollTo(0, 0);
    boxRef.current.scrollTo(0,0);
  };
  const handleOnChecked =({val,campo,})=>{
    if(val!==campo)
      val=campo;
    else
      val='';
    return val;
    }

  return (
    <Box m="20px" style={{height:"100%"}}>
      
      <Header title="Ingresar paciente" subtitle="Formulario con los datos del paciente a ingresar" />
      <Box 
      style={{overflow:"auto",height:"108%", width:"100%",padding:"0px 0px 40px 0px"}} ref={boxRef}> 
        <Formik
        onSubmit={handleFormSubmit}
        initialValues={values}
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
                        if(!values.diagnosticoEgreso.includes("Atresia Esofágica"))
                          setFieldValue("diagnosticoEgreso","Atresia Esofágica, ");
                        else
                          setFieldValue("diagnosticoEgreso", values.diagnosticoEgreso.replace("Atresia Esofágica, ",""));
                        },()=>{
                        if(!values.diagnosticoEgreso.includes("Defectos de la Pared"))
                          setFieldValue("diagnosticoEgreso","Defectos de la Pared, ");
                        else
                          setFieldValue("diagnosticoEgreso", values.diagnosticoEgreso.replace("Defectos de la Pared, ",""));
                        },()=>{
                        if(!values.diagnosticoEgreso.includes("Atresias y estenosis intestinales"))
                          setFieldValue("diagnosticoEgreso","Atresias y estenosis intestinales, ");
                        else
                          setFieldValue("diagnosticoEgreso", values.diagnosticoEgreso.replace("Atresias y estenosis intestinales, ",""))
                        },()=>{
                        if(!values.diagnosticoEgreso.includes("Defectos diafragmáticos"))
                          setFieldValue("diagnosticoEgreso","Defectos diafragmáticos, ");
                        else
                          setFieldValue("diagnosticoEgreso", values.diagnosticoEgreso.replace("Defectos diafragmáticos, ",""))
                        },()=>{
                          if(!values.diagnosticoEgreso.includes("Otros"))
                          setFieldValue("diagnosticoEgreso","Otros, ");
                        else
                          setFieldValue("diagnosticoEgreso", values.diagnosticoEgreso.replace("Otros, ",""))}]}              
                  /> 
                  <CheckField title="Resultado del alta"
                      value={values.alta}
                      cantElments={["false","true"]}
                      onChange={[()=>{setFieldValue("alta",handleOnChecked({val:values.alta,campo:"false"}))
                        },()=>{
                          setFieldValue("alta",handleOnChecked({val:values.alta,campo:"true"}))
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
                      cantElments={["si","no","np"]}
                      onChange={[()=>{setFieldValue("riesgo",handleOnChecked({val:values.riesgo,campo:"si"}))
                        },()=>{
                          setFieldValue("riesgo",handleOnChecked({val:values.riesgo,campo:"no"}))
                        },()=>{
                          setFieldValue("riesgo",handleOnChecked({val:values.riesgo,campo:"np"}))
                        }]}             
                    /> 

                    <CheckField title="Comprobación del consejo genético"
                      value={values.genetico}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{setFieldValue("genetico",handleOnChecked({val:values.genetico,campo:"si"}))
                        },()=>{
                          setFieldValue("genetico",handleOnChecked({val:values.genetico,campo:"no"}))
                        },()=>{
                          setFieldValue("genetico",handleOnChecked({val:values.genetico,campo:"np"}))
                        }]}                 
                    /> 

                    <CheckField title="Captación precoz"
                      value={values.precoz}
                      cantElments={["si","no"]}
                      onChange={[()=>{setFieldValue("precoz",handleOnChecked({val:values.precoz,campo:"si"}))
                        },()=>{
                          setFieldValue("precoz",handleOnChecked({val:values.precoz,campo:"no"}))
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
                      cantElments={["si","no"]}
                      onChange={[()=>{setFieldValue("diagPrenatal",handleOnChecked({val:values.diagPrenatal,campo:"si"}))
                        },()=>{
                          setFieldValue("diagPrenatal",handleOnChecked({val:values.diagPrenatal,campo:"no"}))
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
                      cantElments={["si","no"]}
                      onChange={[()=>{setFieldValue("hojaConf",handleOnChecked({val:values.hojaConf,campo:"si"}))
                        },()=>{
                          setFieldValue("hojaConf",handleOnChecked({val:values.hojaConf,campo:"no"}))
                        }]}              
                  />
                
                  <CheckField title="Programa de Acciones Inmediatas"
                      value={values.acccionInmediatas}
                      cantElments={["si","no"]}
                      onChange={[()=>{setFieldValue("acccionInmediatas",handleOnChecked({val:values.acccionInmediatas,campo:"si"}))
                        },()=>{
                          setFieldValue("acccionInmediatas",handleOnChecked({val:values.acccionInmediatas,campo:"no"}))
                        }]}             
                  />
                  
                  <CheckField title="Cronograma de Seguimiento"
                      value={values.cronogramaSeg}
                      cantElments={["si","no"]}
                      onChange={[()=>{setFieldValue("cronogramaSeg",handleOnChecked({val:values.cronogramaSeg,campo:"si"}))
                        },()=>{
                          setFieldValue("cronogramaSeg",handleOnChecked({val:values.cronogramaSeg,campo:"no"}))
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
                      cantElments={["si","no"]}
                      onChange={[()=>{setFieldValue("infoMaternidad",handleOnChecked({val:values.infoMaternidad,campo:"si"}))
                        },()=>{
                          setFieldValue("infoMaternidad",handleOnChecked({val:values.infoMaternidad,campo:"no"}))
                        }]}             
                  />

                  <CheckField title="Coordinación entre los equipos de ginecología"
                      value={values.coordinacionEquipo}
                      cantElments={["si","no"]}
                      onChange={[()=>{setFieldValue("coordinacionEquipo",handleOnChecked({val:values.coordinacionEquipo,campo:"si"}))
                        },()=>{
                          setFieldValue("coordinacionEquipo",handleOnChecked({val:values.coordinacionEquipo,campo:"no"}))
                        }]}              
                  />
                  
                  <CheckField title="Criterio del cirujano"
                      value={values.criterioCirujano}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{setFieldValue("criterioCirujano",handleOnChecked({val:values.criterioCirujano,campo:"si"}))
                        },()=>{
                          setFieldValue("criterioCirujano",handleOnChecked({val:values.criterioCirujano,campo:"no"}))
                        },()=>{
                          setFieldValue("criterioCirujano",handleOnChecked({val:values.criterioCirujano,campo:"np"}))
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
                      cantElments={["si","no","np"]}
                      onChange={[()=>{setFieldValue("presenciaEnSalon",handleOnChecked({val:values.presenciaEnSalon,campo:"si"}))
                        },()=>{
                          setFieldValue("presenciaEnSalon",handleOnChecked({val:values.presenciaEnSalon,campo:"no"}))
                        },()=>{
                          setFieldValue("presenciaEnSalon",handleOnChecked({val:values.presenciaEnSalon,campo:"np"}))
                        }]}               
                  /> 
                
                  <CheckField title="Actuación de acuerdo a la afección"
                      value={values.actuacionAfeccion}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{setFieldValue("actuacionAfeccion",handleOnChecked({val:values.actuacionAfeccion,campo:"si"}))
                        },()=>{
                          setFieldValue("actuacionAfeccion",handleOnChecked({val:values.actuacionAfeccion,campo:"no"}))
                        },()=>{
                          setFieldValue("actuacionAfeccion",handleOnChecked({val:values.actuacionAfeccion,campo:"np"}))
                        }]}              
                  /> 
                  
                  <CheckField title="Ginecólogo asignado"
                      value={values.ginecologoAsig}
                      cantElments={["si","no"]}
                      onChange={[()=>{setFieldValue("ginecologoAsig",handleOnChecked({val:values.ginecologoAsig,campo:"si"}))
                        },()=>{
                          setFieldValue("ginecologoAsig",handleOnChecked({val:values.ginecologoAsig,campo:"no"}))
                        }]}                
                  /> 
                  
                  <CheckField title="Coordinacción del traslado"
                      value={values.coordinacionTraslado1}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{setFieldValue("coordinacionTraslado1",handleOnChecked({val:values.coordinacionTraslado1,campo:"si"}))
                        },()=>{
                          setFieldValue("coordinacionTraslado1",handleOnChecked({val:values.coordinacionTraslado1,campo:"no"}))
                        },()=>{
                          setFieldValue("coordinacionTraslado1",handleOnChecked({val:values.coordinacionTraslado1,campo:"np"}))
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
                      cantElments={["si","no"]}
                      onChange={[()=>{setFieldValue("coincidenciaDiag",handleOnChecked({val:values.coincidenciaDiag,campo:"si"}))
                        },()=>{
                          setFieldValue("coincidenciaDiag",handleOnChecked({val:values.coincidenciaDiag,campo:"no"}))
                        }]}               
                  /> 

                  <CheckField title="Coordinacción del traslado"
                      value={values.coordinacionTraslado2}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{setFieldValue("coordinacionTraslado2",handleOnChecked({val:values.coordinacionTraslado2,campo:"si"}))
                        },()=>{
                          setFieldValue("coordinacionTraslado2",handleOnChecked({val:values.coordinacionTraslado2,campo:"no"}))
                        },()=>{
                          setFieldValue("coordinacionTraslado2",handleOnChecked({val:values.coordinacionTraslado2,campo:"np"}))
                        }]}              
                  /> 
                 
                  <CheckField title="Justificacion del Traslado"
                      value={values.justificTrasaldo}
                      cantElments={["si","no"]}
                      onChange={[()=>{setFieldValue("justificTrasaldo",handleOnChecked({val:values.justificTrasaldo,campo:"si"}))
                    },()=>{
                      setFieldValue("justificTrasaldo",handleOnChecked({val:values.justificTrasaldo,campo:"no"}))
                    }]}             
                  /> 

                  <CheckField title="Evalauacion del Traslado"
                      value={values.evaluacionTrasl}
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
                      cantElments={["si","no","np"]}
                      onChange={[()=>{setFieldValue("interconsultCirujano",handleOnChecked({val:values.interconsultCirujano,campo:"si"}))
                        },()=>{
                          setFieldValue("interconsultCirujano",handleOnChecked({val:values.interconsultCirujano,campo:"no"}))
                        },()=>{
                          setFieldValue("interconsultCirujano",handleOnChecked({val:values.interconsultCirujano,campo:"np"}))
                        }]}                  
                  /> 
                 
                  <CheckField title="Interconsulta médica"
                      value={values.interconsultMedica}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{setFieldValue("interconsultMedica",handleOnChecked({val:values.interconsultMedica,campo:"si"}))
                        },()=>{
                          setFieldValue("interconsultMedica",handleOnChecked({val:values.interconsultMedica,campo:"no"}))
                        },()=>{
                          setFieldValue("interconsultMedica",handleOnChecked({val:values.interconsultMedica,campo:"np"}))
                        }]}                
                  /> 
                  
                  <CheckField title="Estudios para intervención Quirúrjica"
                      value={values.estudiosInterQuirujica}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{setFieldValue("estudiosInterQuirujica",handleOnChecked({val:values.estudiosInterQuirujica,campo:"si"}))
                        },()=>{
                          setFieldValue("estudiosInterQuirujica",handleOnChecked({val:values.estudiosInterQuirujica,campo:"no"}))
                        },()=>{
                          setFieldValue("estudiosInterQuirujica",handleOnChecked({val:values.estudiosInterQuirujica,campo:"np"}))
                        }]}             
                  /> 

                  <CheckField title="Documento de Contrarreferencia"
                      value={values.docContrarref}
                      cantElments={["si","no"]}
                      onChange={[()=>{setFieldValue("docContrarref",handleOnChecked({val:values.docContrarref,campo:"si"}))
                        },()=>{
                          setFieldValue("docContrarref",handleOnChecked({val:values.docContrarref,campo:"no"}))
                        }]}             
                  /> 

                  <CheckField title="Programa de acciones de cada caso individual"
                      value={values.programaAcciones}
                      cantElments={["si","no"]}
                      onChange={[()=>{setFieldValue("programaAcciones",handleOnChecked({val:values.programaAcciones,campo:"si"}))
                        },()=>{
                          setFieldValue("programaAcciones",handleOnChecked({val:values.programaAcciones,campo:"no"}))
                        }]}              
                  />   
                 
                  <CheckField title="Cronograma de atención"
                      value={values.cronogramaAtencion}
                      cantElments={["si","no"]}
                      onChange={[()=>{setFieldValue("cronogramaAtencion",handleOnChecked({val:values.cronogramaAtencion,campo:"si"}))
                        },()=>{
                          setFieldValue("cronogramaAtencion",handleOnChecked({val:values.cronogramaAtencion,campo:"no"}))
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
                      cantElments={["si","no"]}
                      onChange={[()=>{setFieldValue("confirSegundaOpinion",handleOnChecked({val:values.confirSegundaOpinion,campo:"si"}))
                        },()=>{
                          setFieldValue("confirSegundaOpinion",handleOnChecked({val:values.confirSegundaOpinion,campo:"no"}))
                        }]}              
                  />
                
                  <CheckField title="Verificar la integración del equipo quirúrgico"
                      value={values.verificarEquipoQururgico}
                      cantElments={["si","no"]}
                      onChange={[()=>{setFieldValue("verificarEquipoQururgico",handleOnChecked({val:values.verificarEquipoQururgico,campo:"si"}))
                        },()=>{
                          setFieldValue("verificarEquipoQururgico",handleOnChecked({val:values.verificarEquipoQururgico,campo:"no"}))
                        }]}              
                  />
                 
                  <CheckField title="Verificar que el equipo anéstesico sea el asignado"
                      value={values.verificarEquipoAnestesico}
                      cantElments={["si","no"]}
                      onChange={[()=>{setFieldValue("verificarEquipoAnestesico",handleOnChecked({val:values.verificarEquipoAnestesico,campo:"si"}))
                        },()=>{
                          setFieldValue("verificarEquipoAnestesico",handleOnChecked({val:values.verificarEquipoAnestesico,campo:"no"}))
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
                    onChange={[()=>{setFieldValue("clasificacion",handleOnChecked({val:values.clasificacion,campo:"si"}))
                  },()=>{
                    setFieldValue("clasificacion",handleOnChecked({val:values.clasificacion,campo:"no"}))
                  }]}    
                    cantElments={["D","NoD"]} />

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