import { Box, Button, TextField, darkScrollbar } from "@mui/material";
import { Formik } from "formik";
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
import { initialValues } from "../../data/initialValues";


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
      handleOnChangeActualizarDOM();
    } 
    
    setAdvice(false);
    setTimeout(() => setAdvice(true), 3000);
    window.scrollTo(0, 0);
    
  };

  return (
    <Box m="20px" style={{height:"100%"}} ref={boxRef}>
      <Header title="Ingresar paciente" subtitle="Formulario con los datos del paciente a ingresar" />
      <Box 
      darkScrollbar={true}
      style={{overflow:"auto",height:"110%", width:"100%",padding:"0px 0px 40px 0px"}}> 
        <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
        
       
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          
          
        }) => (
          <form onSubmit={handleSubmit} >
            <ScrollToFirstError myRefref={boxRef}/>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <Accordion sx={{ gridColumn: "span 4", backgroundColor:colors.grey[700]}}
              
              defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color={colors.greenAccent[100]} variant="h5">
                   Identificación
                  </Typography>
                </AccordionSummary>
                <AccordionDetails style={{display:"grid",gap:"30px"}}>
                  
                <TextField
                    fullWidth
                   
                    type="date"
                    
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
                    onChange={handleChange}
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.nombreDeLaMadre}
                    name="nombreDeLaMadre"
                    error={!!touched.nombreDeLaMadre && !!errors.nombreDeLaMadre}
                    helperText={touched.nombreDeLaMadre && errors.nombreDeLaMadre}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Dirección"
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                          values.diagnosticoEgreso += "Atresia Esofágica, ";
                        else
                          values.diagnosticoEgreso = values.diagnosticoEgreso.replace("Atresia Esofágica, ","");
                        handleOnChangeActualizarDOM()},()=>{
                          if(!values.diagnosticoEgreso.includes("Defectos de la Pared"))
                            values.diagnosticoEgreso += "Defectos de la Pared, ";
                          else
                          values.diagnosticoEgreso = values.diagnosticoEgreso.replace("Defectos de la Pared, ","");

                        handleOnChangeActualizarDOM()},()=>{
                          if(!values.diagnosticoEgreso.includes("Atresias y estenosis intestinales"))
                            values.diagnosticoEgreso+= "Atresias y estenosis intestinales, ";
                          else
                            values.diagnosticoEgreso = values.diagnosticoEgreso.replace("Atresias y estenosis intestinales, ","");                            
                        handleOnChangeActualizarDOM()},()=>{
                          if(!values.diagnosticoEgreso.includes("Defectos diafragmáticos"))
                            values.diagnosticoEgreso+= "Defectos diafragmáticos, ";
                          else
                            values.diagnosticoEgreso = values.diagnosticoEgreso.replace("Defectos diafragmáticos, ","");
                        handleOnChangeActualizarDOM()},()=>{
                          if(!values.diagnosticoEgreso.includes("Otros"))
                            values.diagnosticoEgreso+= "Otros, ";
                          else
                            values.diagnosticoEgreso = values.diagnosticoEgreso.replace("Otros, ","");
                        handleOnChangeActualizarDOM()}]}              
                  /> 


                  <CheckField title="Resultado del alta"
                      value={values.alta}
                      cantElments={["Fallecido","Vivo"]}
                      onChange={[()=>{
                        if(!values.alta.includes("Fallecido"))
                          values.alta = "Fallecido";
                        else
                          values.alta = values.alta.replace("Fallecido","");
                        handleOnChangeActualizarDOM()},()=>{
                          if(!values.alta.includes("Vivo"))
                          values.alta = "Vivo";
                        else
                          values.alta = values.alta.replace("Vivo","");
                        handleOnChangeActualizarDOM()}]}              
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
                      onChange={[()=>{
                        if(!values.riesgo.includes("si"))
                          values.riesgo = "si";
                        else
                          values.riesgo = values.riesgo.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.riesgo.includes("no"))
                          values.riesgo = "no";
                        else
                          values.riesgo = values.riesgo.replace("no","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.riesgo.includes("np"))
                          values.riesgo = "np";
                        else
                          values.riesgo = values.riesgo.replace("np","");
                        handleOnChangeActualizarDOM()}]}              
                    /> 
                    
                    <CheckField title="Comprobación del consejo genético"
                      value={values.genetico}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{
                        if(!values.genetico.includes("si"))
                          values.genetico = "si";
                        else
                          values.genetico = values.genetico.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.genetico.includes("no"))
                          values.genetico = "no";
                        else
                          values.genetico = values.genetico.replace("no","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.genetico.includes("np"))
                          values.genetico = "np";
                        else
                          values.genetico = values.genetico.replace("np","");
                        handleOnChangeActualizarDOM()}]}              
                    /> 

                    <CheckField title="Captación precoz"
                      value={values.precoz}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        if(!values.precoz.includes("si"))
                          values.precoz = "si";
                        else
                          values.precoz = values.genetico.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.precoz.includes("no"))
                          values.precoz = "no";
                        else
                          values.precoz = values.precoz.replace("no","");
                        handleOnChangeActualizarDOM()}]}              
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
                      onChange={[()=>{
                        if(!values.diagPrenatal.includes("si"))
                          values.diagPrenatal = "si";
                        else
                          values.diagPrenatal = values.diagPrenatal.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.diagPrenatal.includes("no"))
                          values.diagPrenatal = "no";
                        else
                          values.diagPrenatal = values.diagPrenatal.replace("no","");
                        handleOnChangeActualizarDOM()}]}             
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
                      onChange={[()=>{
                        if(!values.hojaConf.includes("si"))
                          values.hojaConf = "si";
                        else
                          values.hojaConf = values.hojaConf.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.hojaConf.includes("no"))
                          values.hojaConf = "no";
                        else
                          values.hojaConf = values.hojaConf.replace("no","");
                        handleOnChangeActualizarDOM()}]}              
                  />
                
                  <CheckField title="Programa de Acciones Inmediatas"
                      value={values.acccionInmediatas}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        if(!values.acccionInmediatas.includes("si"))
                          values.acccionInmediatas = "si";
                        else
                          values.acccionInmediatas = values.acccionInmediatas.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.acccionInmediatas.includes("no"))
                          values.acccionInmediatas = "no";
                        else
                          values.acccionInmediatas = values.acccionInmediatas.replace("no","");
                        handleOnChangeActualizarDOM()}]}              
                  />
                  
                  <CheckField title="Cronograma de Seguimiento"
                      value={values.cronogramaSeg}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        if(!values.cronogramaSeg.includes("si"))
                          values.cronogramaSeg = "si";
                        else
                          values.cronogramaSeg = values.cronogramaSeg.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.cronogramaSeg.includes("no"))
                          values.cronogramaSeg = "no";
                        else
                          values.cronogramaSeg = values.cronogramaSeg.replace("no","");
                        handleOnChangeActualizarDOM()}]}                  
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
                      onChange={[()=>{
                        if(!values.infoMaternidad.includes("si"))
                          values.infoMaternidad = "si";
                        else
                          values.infoMaternidad = values.infoMaternidad.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.infoMaternidad.includes("no"))
                          values.infoMaternidad = "no";
                        else
                          values.infoMaternidad = values.infoMaternidad.replace("no","");
                        handleOnChangeActualizarDOM()}]}              
                  />

                  <CheckField title="Coordinación entre los equipos de ginecología"
                      value={values.coordinacionEquipo}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        if(!values.coordinacionEquipo.includes("si"))
                          values.coordinacionEquipo = "si";
                        else
                          values.coordinacionEquipo = values.coordinacionEquipo.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.coordinacionEquipo.includes("no"))
                          values.coordinacionEquipo = "no";
                        else
                          values.coordinacionEquipo = values.coordinacionEquipo.replace("no","");
                        handleOnChangeActualizarDOM()}]}             
                  />
                  
                  <CheckField title="Criterio del cirujano"
                      value={values.criterioCirujano}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{
                        if(!values.criterioCirujano.includes("si"))
                          values.criterioCirujano = "si";
                        else
                          values.criterioCirujano = values.criterioCirujano.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.criterioCirujano.includes("no"))
                          values.criterioCirujano = "no";
                        else
                          values.criterioCirujano = values.criterioCirujano.replace("no","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.criterioCirujano.includes("np"))
                          values.criterioCirujano = "np";
                        else
                          values.criterioCirujano = values.criterioCirujano.replace("np","");
                        handleOnChangeActualizarDOM()}]}              
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
                      onChange={[()=>{
                        if(!values.presenciaEnSalon.includes("si"))
                          values.presenciaEnSalon = "si";
                        else
                          values.presenciaEnSalon = values.presenciaEnSalon.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.presenciaEnSalon.includes("no"))
                          values.presenciaEnSalon = "no";
                        else
                          values.presenciaEnSalon = values.presenciaEnSalon.replace("no","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.presenciaEnSalon.includes("np"))
                          values.presenciaEnSalon = "np";
                        else
                          values.presenciaEnSalon = values.presenciaEnSalon.replace("np","");
                        handleOnChangeActualizarDOM()}]}              
                  /> 
                
                  <CheckField title="Actuación de acuerdo a la afección"
                      value={values.actuacionAfeccion}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{
                        if(!values.actuacionAfeccion.includes("si"))
                          values.actuacionAfeccion = "si";
                        else
                          values.actuacionAfeccion = values.actuacionAfeccion.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.actuacionAfeccion.includes("no"))
                          values.actuacionAfeccion = "no";
                        else
                          values.actuacionAfeccion = values.actuacionAfeccion.replace("no","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.actuacionAfeccion.includes("np"))
                          values.actuacionAfeccion = "np";
                        else
                          values.actuacionAfeccion = values.actuacionAfeccion.replace("np","");
                        handleOnChangeActualizarDOM()}]}              
                  /> 
                  
                  <CheckField title="Ginecólogo asignado"
                      value={values.ginecologoAsig}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        if(!values.ginecologoAsig.includes("si"))
                          values.ginecologoAsig = "si";
                        else
                          values.ginecologoAsig = values.ginecologoAsig.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.ginecologoAsig.includes("no"))
                          values.ginecologoAsig = "no";
                        else
                          values.ginecologoAsig = values.ginecologoAsig.replace("no","");
                        handleOnChangeActualizarDOM()}]}              
                  /> 
                  
                  <CheckField title="Coordinacción del traslado"
                      value={values.coordinacionTraslado1}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{
                        if(!values.coordinacionTraslado1.includes("si"))
                          values.coordinacionTraslado1 = "si";
                        else
                          values.coordinacionTraslado1 = values.coordinacionTraslado1.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.coordinacionTraslado1.includes("no"))
                          values.coordinacionTraslado1 = "no";
                        else
                          values.coordinacionTraslado1 = values.coordinacionTraslado1.replace("no","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.coordinacionTraslado1.includes("np"))
                          values.coordinacionTraslado1 = "np";
                        else
                          values.coordinacionTraslado1 = values.coordinacionTraslado1.replace("np","");
                        handleOnChangeActualizarDOM()}]}              
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
                      onChange={[()=>{
                        if(!values.coincidenciaDiag.includes("si"))
                          values.coincidenciaDiag = "si";
                        else
                          values.coincidenciaDiag = values.coincidenciaDiag.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.coincidenciaDiag.includes("no"))
                          values.coincidenciaDiag = "no";
                        else
                          values.coincidenciaDiag = values.coincidenciaDiag.replace("no","");
                        handleOnChangeActualizarDOM()}]}              
                  /> 

                  <CheckField title="Coordinacción del traslado"
                      value={values.coordinacionTraslado2}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{
                        if(!values.coordinacionTraslado2.includes("si"))
                          values.coordinacionTraslado2 = "si";
                        else
                          values.coordinacionTraslado2 = values.coordinacionTraslado2.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.coordinacionTraslado2.includes("no"))
                          values.coordinacionTraslado2 = "no";
                        else
                          values.coordinacionTraslado2 = values.coordinacionTraslado2.replace("no","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.coordinacionTraslado2.includes("np"))
                          values.coordinacionTraslado2 = "np";
                        else
                          values.coordinacionTraslado2 = values.coordinacionTraslado2.replace("np","");
                        handleOnChangeActualizarDOM()}]}              
                  /> 
                 
                  <CheckField title="Justificacion del Traslado"
                      value={values.justificTrasaldo}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        if(!values.justificTrasaldo.includes("si"))
                          values.coincidenciaDiag = "si";
                        else
                          values.justificTrasaldo = values.justificTrasaldo.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.justificTrasaldo.includes("no"))
                          values.justificTrasaldo = "no";
                        else
                          values.justificTrasaldo = values.justificTrasaldo.replace("no","");
                        handleOnChangeActualizarDOM()}]}               
                  /> 

                  <CheckField title="Evalauacion del Traslado"
                      value={values.evaluacionTrasl}
                      cantElments={["E","MB","B","AT"]}
                      onChange={[()=>{
                        if(!values.evaluacionTrasl.includes("E"))
                          values.evaluacionTrasl = "E";
                        else
                          values.evaluacionTrasl = values.evaluacionTrasl.replace("E","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.evaluacionTrasl.includes("MB"))
                          values.evaluacionTrasl = "MB";
                        else
                          values.evaluacionTrasl = values.evaluacionTrasl.replace("MB","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.evaluacionTrasl.includes("B"))
                          values.evaluacionTrasl = "B";
                        else
                          values.evaluacionTrasl = values.evaluacionTrasl.replace("B","");
                        handleOnChangeActualizarDOM()},()=>{
                          if(!values.evaluacionTrasl.includes("AT"))
                            values.evaluacionTrasl = "AT";
                          else
                            values.evaluacionTrasl = values.evaluacionTrasl.replace("AT","");
                          handleOnChangeActualizarDOM()}]}              
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
                      onChange={[()=>{
                        if(!values.interconsultCirujano.includes("si"))
                          values.interconsultCirujano = "si";
                        else
                          values.interconsultCirujano = values.interconsultCirujano.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.interconsultCirujano.includes("no"))
                          values.interconsultCirujano = "no";
                        else
                          values.interconsultCirujano = values.interconsultCirujano.replace("no","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.interconsultCirujano.includes("np"))
                          values.interconsultCirujano = "np";
                        else
                          values.interconsultCirujano = values.interconsultCirujano.replace("np","");
                        handleOnChangeActualizarDOM()}]}              
                  /> 
                 
                  <CheckField title="Interconsulta médica"
                      value={values.interconsultMedica}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{
                        if(!values.interconsultMedica.includes("si"))
                          values.interconsultMedica = "si";
                        else
                          values.interconsultMedica = values.interconsultMedica.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.interconsultMedica.includes("no"))
                          values.interconsultMedica = "no";
                        else
                          values.interconsultMedica = values.interconsultMedica.replace("no","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.interconsultMedica.includes("np"))
                          values.interconsultMedica = "np";
                        else
                          values.interconsultMedica = values.interconsultMedica.replace("np","");
                        handleOnChangeActualizarDOM()}]}              
                  /> 
                  
                  <CheckField title="Estudios para intervención Quirúrjica"
                      value={values.estudiosInterQuirujica}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{
                        if(!values.estudiosInterQuirujica.includes("si"))
                          values.estudiosInterQuirujica = "si";
                        else
                          values.estudiosInterQuirujica = values.estudiosInterQuirujica.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.estudiosInterQuirujica.includes("no"))
                          values.estudiosInterQuirujica = "no";
                        else
                          values.estudiosInterQuirujica = values.estudiosInterQuirujica.replace("no","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.estudiosInterQuirujica.includes("np"))
                          values.estudiosInterQuirujica = "np";
                        else
                          values.estudiosInterQuirujica = values.estudiosInterQuirujica.replace("np","");
                        handleOnChangeActualizarDOM()}]}              
                  /> 

                  <CheckField title="Documento de Contrarreferencia"
                      value={values.docContrarref}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        if(!values.docContrarref.includes("si"))
                          values.docContrarref = "si";
                        else
                          values.docContrarref = values.docContrarref.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.docContrarref.includes("no"))
                          values.docContrarref = "no";
                        else
                          values.docContrarref = values.docContrarref.replace("no","");
                        handleOnChangeActualizarDOM()}]}              
                  /> 

                  <CheckField title="Programa de acciones de cada caso individual"
                      value={values.programaAcciones}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        if(!values.programaAcciones.includes("si"))
                          values.programaAcciones = "si";
                        else
                          values.programaAcciones = values.programaAcciones.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.programaAcciones.includes("no"))
                          values.programaAcciones = "no";
                        else
                          values.programaAcciones = values.programaAcciones.replace("no","");
                        handleOnChangeActualizarDOM()}]}              
                  />   
                 
                  <CheckField title="Cronograma de atención"
                      value={values.cronogramaAtencion}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        if(!values.cronogramaAtencion.includes("si"))
                          values.cronogramaAtencion = "si";
                        else
                          values.cronogramaAtencion = values.cronogramaAtencion.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.cronogramaAtencion.includes("no"))
                          values.cronogramaAtencion = "no";
                        else
                          values.cronogramaAtencion = values.cronogramaAtencion.replace("no","");
                        handleOnChangeActualizarDOM()}]}               
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
                      onChange={[()=>{
                        if(!values.confirSegundaOpinion.includes("si"))
                          values.confirSegundaOpinion = "si";
                        else
                          values.confirSegundaOpinion = values.confirSegundaOpinion.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.confirSegundaOpinion.includes("no"))
                          values.confirSegundaOpinion = "no";
                        else
                          values.confirSegundaOpinion = values.confirSegundaOpinion.replace("no","");
                        handleOnChangeActualizarDOM()}]}              
                  />
                
                  <CheckField title="Verificar la integración del equipo quirúrgico"
                      value={values.verificarEquipoQururgico}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        if(!values.verificarEquipoQururgico.includes("si"))
                          values.verificarEquipoQururgico = "si";
                        else
                          values.verificarEquipoQururgico = values.verificarEquipoQururgico.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.verificarEquipoQururgico.includes("no"))
                          values.verificarEquipoQururgico = "no";
                        else
                          values.verificarEquipoQururgico = values.verificarEquipoQururgico.replace("no","");
                        handleOnChangeActualizarDOM()}]}               
                  />
                 
                  <CheckField title="Verificar que el equipo anéstesico sea el asignado"
                      value={values.verificarEquipoAnestesico}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        if(!values.verificarEquipoAnestesico.includes("si"))
                          values.verificarEquipoAnestesico = "si";
                        else
                          values.verificarEquipoAnestesico = values.verificarEquipoAnestesico.replace("si","");
                        handleOnChangeActualizarDOM()},()=>{
                        if(!values.verificarEquipoAnestesico.includes("no"))
                          values.verificarEquipoAnestesico = "no";
                        else
                          values.verificarEquipoAnestesico = values.verificarEquipoAnestesico.replace("no","");
                        handleOnChangeActualizarDOM()}]}              
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

                     onChange={[()=>{
                      handleOnChangeActualizarDOM();
                      values.clasificacion="D"},()=>{
                      handleOnChangeActualizarDOM();
                      values.clasificacion="NoD"}]} 

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
              !advice && <Advice/>
            }
          </form>
        )}
      </Formik>
      </Box>
     
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  fecha: yup.string().required("campo obligatorio"),
  nombreDeLaMadre: yup.string().required("campo obligatorio"),
  direccion: yup.string().required("campo obligatorio"),
  municipio: yup.string().required("campo obligatorio"),
  provincia: yup.string().required("campo obligatorio"),
  diagnosticoEgreso:yup.string().required("campo obligatorio"),
 
});

export default Form;