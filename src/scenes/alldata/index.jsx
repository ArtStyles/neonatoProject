import { Box, Button, TextField } from "@mui/material";
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
import Checkbox from '@mui/material/Checkbox';
import React, { Component } from 'react';


const Advice = () => {
      return(
        <Box 
          width={"230px"} 
          height = {"40px"}
          display={"fixed"}
          position={"absolute"}
          backgroundColor={"green"}
          color = {"white"}
          zIndex={"10"}
          top={"120px"}
          right={"20px"}
          borderRadius={"10px"}
          alignItems={"center"}
          justifyContent={"center"}
          className = "fade"
          >
          <Typography>
            <h4>Datos añadidos correctamente</h4>
          </Typography>
        </Box>
      )
};

const Form = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const initialValues = {
    nombre: "",
    apellidos: "",
    nombreDeLaMadre: "",
    direccion: "",
    municipio: "",
    provincia: "",
    diagnosticoIngreso: "",
    diagnosticoEgreso: "",
    alta:"",
    genetico:'',
    riesgo: "",
    precoz: "",
    numeroControl: "",
    diagPrenatal: "",
    hojaConf: "",
    acccionInmediatas: "",
    cronogramaSeg: "",
    infoMaternidad: "",
    coordinacionEquipo: "",
    criterioCirujano: "",
    presenciaEnSalon: "",
    actuacionAfeccion: "",
    ginecologoAsig: "",
    coordinacionTraslado1: "",
    coincidenciaDiag:"",
    coordinacionTraslado2: "",
    justificTrasaldo: "",
    evaluacionTrasl:"",
    deficienciasTrasl: "",
    interconsultCirujano: "",
    interconsultMedica:"",
    estudiosInterQuirujica:"",
    docContrarref:"",
    programaAcciones:"",
    cronogramaAtencion:"",
    confirSegundaOpinion:"",
    verificarEquipoQururgico:"",
    verificarEquipoAnestesico:"",
    clasificacion:"",
  }; 

  class CheckField extends React.Component {
      render() {
        return(
          <Box
          display={"flex"}
          alignItems="center"
          gap={"30px"}
          gridColumn={"span 4"}
        
        >
          <Typography display={"flex"} style={{flexBasis:"500px",alignItems:"center",gap:"10px"}}>
            <h4  >{this.props.title}</h4>
            <p style={{color:"red",display: this.props.value===""?"inline-block":"none",fontSize:"11px"}}>campo obligatorio</p>
          </Typography>
          {        
              this.props.cantElments.map((dato, index) => (
                <Box
              alignItems={"center"} 
              key={index}
            >
              <Typography >
                {dato}
              </Typography>
              <Checkbox
                  checked={this.props.value ===dato}
                  onChange={this.props.onChange[index]}
                />
            </Box>
              ))
      
          }
        </Box>
        )
     
      }
  };

  const [actualizarDOM, setActualizarDOM] =useState(true);

  const handleOnChangeActualizarDOM = () => {
    setActualizarDOM(!actualizarDOM);
  };

  const [empt,setEmpt] = useState(true);
  
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

    setEmpt(empty);
    setTimeout(() => setEmpt(true), 4000);
    window.scrollTo(0, 0);
  };

  return (
    <Box m="20px" style={{height:"100%"}} >
      <Header title="Toda la Información" subtitle="Informacion completa sobre el paciente:" />
      <Box style={{overflow:"auto",height:"110%", width:"100%",padding:"0px 0px 40px 0px"}}> 
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
                    label="Diagnóstico de Ingreso"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.diagnosticoIngreso}
                    name="diagnosticoIngreso"
                    error={!!touched.diagnosticoIngreso  && !!errors.diagnosticoIngreso}
                    helperText={touched.diagnosticoIngreso && errors.diagnosticoIngreso}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Diagnóstico de egreso"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.diagnosticoEgreso}
                    name="diagnosticoEgreso"
                    error={!!touched.diagnosticoEgreso && !!errors.diagnosticoEgreso}
                    helperText={touched.diagnosticoEgreso&& errors.diagnosticoEgreso}
                    sx={{ gridColumn: "span 4" }}
                  />

                  <CheckField title="Resultado del alta"
                      value={values.alta}
                      cantElments={["Fallecido","Vivo"]}
                      onChange={[()=>{
                        values.alta = "Fallecido";
                        handleOnChangeActualizarDOM()},()=>{
                        values.alta = "Vivo";
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
                        values.riesgo = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.riesgo = "no";
                        handleOnChangeActualizarDOM()},()=>{
                        values.riesgo = "np";
                        handleOnChangeActualizarDOM()}]}              
                    /> 
                    
                    <CheckField title="Comprobación del consejo genético"
                      value={values.genetico}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{
                        values.genetico = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.genetico = "no";
                        handleOnChangeActualizarDOM()},()=>{
                        values.genetico = "np";
                        handleOnChangeActualizarDOM()}]}              
                    /> 

                    <CheckField title="Captación precoz"
                      value={values.precoz}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        values.precoz = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.precoz = "no";
                        handleOnChangeActualizarDOM()}]}              
                    />
                    
                    <TextField
                      fullWidth
                      variant="filled"
                      type="number"
                      label="Numero de Controles de Embarazo"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.numeroControl}
                      name="numeroControl"
                      error={!!touched.numeroControl && !!errors.numeroControl}
                      helperText={touched.numeroControl && errors.numeroControl}
                      style={{padding:"10px"}}
                      
                    />
                 
                    <CheckField title="Diagnóstico prenatal"
                      value={values.diagPrenatal}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        values.diagPrenatal = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.diagPrenatal = "no";
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
                        values.hojaConf = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.hojaConf = "no";
                        handleOnChangeActualizarDOM()}]}              
                  />
                
                  <CheckField title="Programa de Acciones Inmediatas"
                      value={values.acccionInmediatas}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        values.acccionInmediatas = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.acccionInmediatas = "no";
                        handleOnChangeActualizarDOM()}]}              
                  />
                  
                  <CheckField title="Cronograma de Seguimiento"
                      value={values.cronogramaSeg}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        values.cronogramaSeg = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.cronogramaSeg = "no";
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
                        values.infoMaternidad = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.infoMaternidad = "no";
                        handleOnChangeActualizarDOM()}]}              
                  />

                  <CheckField title="Coordinación entre los equipos de ginecología"
                      value={values.coordinacionEquipo}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        values.coordinacionEquipo = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.coordinacionEquipo = "no";
                        handleOnChangeActualizarDOM()}]}              
                  />
                  
                  <CheckField title="Criterio del cirujano"
                      value={values.criterioCirujano}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{
                        values.criterioCirujano = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.criterioCirujano = "no";
                        handleOnChangeActualizarDOM()},()=>{
                        values.criterioCirujano= "np";
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
                        values.presenciaEnSalon = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.presenciaEnSalon = "no";
                        handleOnChangeActualizarDOM()},()=>{
                        values.presenciaEnSalon= "np";
                        handleOnChangeActualizarDOM()}]}              
                  /> 
                
                  <CheckField title="Actuación de acuerdo a la afección"
                      value={values.actuacionAfeccion}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{
                        values.actuacionAfeccion = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.actuacionAfeccion = "no";
                        handleOnChangeActualizarDOM()},()=>{
                        values.actuacionAfeccion= "np";
                        handleOnChangeActualizarDOM()}]}              
                  /> 
                  
                  <CheckField title="Ginecólogo asignado"
                      value={values.ginecologoAsig}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        values.ginecologoAsig = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.ginecologoAsig = "no";
                        handleOnChangeActualizarDOM()}]}              
                  /> 
                  
                  <CheckField title="Coordinacción del traslado"
                      value={values.coordinacionTraslado1}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{
                        values.coordinacionTraslado1 = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.coordinacionTraslado1 = "no";
                        handleOnChangeActualizarDOM()},()=>{
                        values.coordinacionTraslado1= "np";
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
                        values.coincidenciaDiag = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.coincidenciaDiag = "no";
                        handleOnChangeActualizarDOM()}]}              
                  /> 

                  <CheckField title="Coordinacción del traslado"
                      value={values.coordinacionTraslado2}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{
                        values.coordinacionTraslado2 = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.coordinacionTraslado2 = "no";
                        handleOnChangeActualizarDOM()},()=>{
                        values.coordinacionTraslado2= "np";
                        handleOnChangeActualizarDOM()}]}              
                  /> 
                 
                  <CheckField title="Justificacion del Traslado"
                      value={values.justificTrasaldo}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        values.justificTrasaldo = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.justificTrasaldo = "no";
                        handleOnChangeActualizarDOM()}]}              
                  /> 

                  <CheckField title="Evalauacion del Traslado"
                      value={values.evaluacionTrasl}
                      cantElments={["E","MB","B","AT"]}
                      onChange={[()=>{
                        values.evaluacionTrasl = "E";
                        handleOnChangeActualizarDOM()},()=>{
                        values.evaluacionTrasl = "MB";
                        handleOnChangeActualizarDOM()},()=>{
                        values.evaluacionTrasl= "B";
                        handleOnChangeActualizarDOM()},()=>{
                        values.evaluacionTrasl= "AT";
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
                        values.interconsultCirujano = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.interconsultCirujano = "no";
                        handleOnChangeActualizarDOM()},()=>{
                        values.interconsultCirujano= "np";
                        handleOnChangeActualizarDOM()}]}              
                  /> 
                 
                  <CheckField title="Interconsulta médica"
                      value={values.interconsultMedica}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{
                        values.interconsultMedica = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.interconsultMedica = "no";
                        handleOnChangeActualizarDOM()},()=>{
                        values.interconsultMedica= "np";
                        handleOnChangeActualizarDOM()}]}              
                  /> 
                  
                  <CheckField title="Estudios para intervención Quirúrjica"
                      value={values.estudiosInterQuirujica}
                      cantElments={["si","no","np"]}
                      onChange={[()=>{
                        values.estudiosInterQuirujica = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.estudiosInterQuirujica = "no";
                        handleOnChangeActualizarDOM()},()=>{
                          values.estudiosInterQuirujica = "np";
                          handleOnChangeActualizarDOM()}]}              
                  /> 

                  <CheckField title="Documento de Contrarreferencia"
                      value={values.docContrarref}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        values.docContrarref = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.docContrarref = "no";
                        handleOnChangeActualizarDOM()}]}              
                  /> 

                  <CheckField title="Programa de acciones de cada caso individual"
                      value={values.programaAcciones}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        values.programaAcciones = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.programaAcciones = "no";
                        handleOnChangeActualizarDOM()}]}              
                  />   
                 
                  <CheckField title="Cronograma de atención"
                      value={values.cronogramaAtencion}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        values.cronogramaAtencion = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.cronogramaAtencion = "no";
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
                        values.confirSegundaOpinion = "si";
                        handleOnChangeActualizarDOM()},()=>{
                          values.confirSegundaOpinion = "no";
                        handleOnChangeActualizarDOM()}]}              
                  />
                
                  <CheckField title="Verificar la integración del equipo quirúrgico"
                      value={values.verificarEquipoQururgico}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        values.verificarEquipoQururgico = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.verificarEquipoQururgico = "no";
                        handleOnChangeActualizarDOM()}]}              
                  />
                 
                  <CheckField title="Verificar que el equipo anéstesico sea el asignado"
                      value={values.verificarEquipoAnestesico}
                      cantElments={["si","no"]}
                      onChange={[()=>{
                        values.verificarEquipoAnestesico = "si";
                        handleOnChangeActualizarDOM()},()=>{
                        values.verificarEquipoAnestesico = "no";
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
              !empt && <Advice/>
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
  nombre: yup.string().required("campo obligatorio"),
  apellidos: yup.string().required("campo obligatorio"),
  nombreDeLaMadre: yup.string().required("campo obligatorio"),
  direccion: yup.string().required("campo obligatorio"),
  municipio: yup.string().required("campo obligatorio"),
  provincia: yup.string().required("campo obligatorio"),
  diagnosticoIngreso:yup.string().required("campo obligatorio"),
  diagnosticoEgreso:yup.string().required("campo obligatorio"),
  alta:yup.string().required("campo obligatorio"),
  genetico:yup.string().required("campo obligatorio"),
  riesgo: yup.string().required("campo obligatorio"),
  precoz: yup.string().required("campo obligatorio"),
  numeroControl:yup.number().required("campo obligatorio"),
  diagPrenatal: yup.string().required("required"),
  hojaConf: yup.string().required("campo obligatorio"),
  acccionInmediatas: yup.string().required("campo obligatorio"),
  cronogramaSeg: yup.string().required("campo obligatorio"),
  infoMaternidad: yup.string().required("campo obligatorio"),
  coordinacionEquipo: yup.string().required("campo obligatorio"),
  criterioCirujano: yup.string().required("campo obligatorio"),
  presenciaEnSalon: yup.string().required("campo obligatorio"),
  actuacionAfeccion: yup.string().required("campo obligatorio"),
  ginecologoAsig: yup.string().required("campo obligatorio"),
  coordinacionTraslado1: yup.string().required("campo obligatorio"),
  coincidenciaDiag:yup.string().required("campo obligatorio"),
  coordinacionTraslado2: yup.string().required("campo obligatorio"),
  justificTrasaldo: yup.string().required("campo obligatorio"),
  evaluacionTrasl:yup.string().required("campo obligatorio"),
  deficienciasTrasl: yup.string().required("campo obligatorio"),
  interconsultCirujano: yup.string().required("campo obligatorio"),
  interconsultMedica:yup.string().required("campo obligatorio"),
  estudiosInterQuirujica:yup.string().required("campo obligatorio"),
  docContrarref:yup.string().required("campo obligatorio"),
  programaAcciones:yup.string().required("campo obligatorio"),
  cronogramaAtencion:yup.string().required("campo obligatorio"),
  confirSegundaOpinion:yup.string().required("campo obligatorio"),
  verificarEquipoQururgico:yup.string().required("campo obligatorio"),
  verificarEquipoAnestesico:yup.string().required("campo obligatorio"),
  clasificacion:yup.string().required("campo obligatorio"),
});

export default Form;