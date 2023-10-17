import { Box,TextField, debounce } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../theme";
import {useTheme} from "@mui/material";
import { useEffect, useState } from "react";
import {Chip} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { filterin } from "../services/pacientesFilters";
import { getPacientes } from "../services/getPacientes";


const DataGridFilter = ({onFilter}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [values,setValues] = useState({
        nombre:"",
        nombreDeLaMadre:"",
        provincia:"",
        municipio:"",
        fecha:"",   
        diagnosticoEgreso:"",
        alta:""
    })

    
    const valuesaArray = Object.entries(values);
    const currencies = [
        {
            value:"vivo",
            label:"Vivo"
        },
        {
            value:"muerto",
            label:"Fallecido"
        }
    ];

    const currencies2 = [
        {
            value:"Defectos de la Pared",
            label:"Defectos de la Pared"
        },
        {
            value:"Atresia Esofágica",
            label:"Atresia Esofágica"
        },
        {
            value:"Defectos diafragmáticos",
            label:"Defectos diafragmáticos"
        },
        {
            value:"Atresias y estenosis intestinales",
            label:"Atresias y estenosis intestinales"
        },
        {
            value:"Otros",
            label:"Otros"
        }
    ];

    const filter  = {
        nombre_Contains:values["nombre"],
        municipio_Contains:values["municipio"],
        nombreDeLaMadre_Contains:values["nombreDeLaMadre"],
        provincia_Contains:values["provincia"],
        diagnosticoEgreso_Contains:values["diagnosticoEgreso"],
    }


    useEffect(() => {
        var queryValues = "";
        let timerId;
        for (var key in filter){
            if(filter[key] && filter[key].trim() !== ""){
                queryValues = queryValues + key + ":\""+filter[key]+"\","
            }
        }
        const debounceSearch = () => {
            if (queryValues && queryValues.trim() !== "") {
              filterin({ filters: queryValues }).then((data) => {
                onFilter(data.data.pacientes.edges);
              });
            } else {
              getPacientes().then((data) => {
                onFilter(data.data.pacientes.edges);
              });
            }
          };
        
          if (timerId) {
            clearTimeout(timerId); 
          }
        
          timerId = setTimeout(debounceSearch,700); 
        
          return () => {
            clearTimeout(timerId);
          };
    },[values])

    const onChangeValue = (campo,valor) => {
        const copiaValues = {...values};
        copiaValues[campo] = valor;
        setValues(copiaValues);
    }

    return (
        <Box
        sx={{        
            "& .css-qoi9-MuiPaper-root-MuiAccordion-root":{
            backgroundColor: colors.blackGreenSpace[700],
            backgroundImage:"none "
            
            },

            "& .css-1q6gkgc-MuiInputBase-root-MuiFilledInput-root ":{
            backgroundColor:`${colors.greenSpace[700]} important`,
            
            
            },
            "& .css-1q6gkgc-MuiInputBase-root-MuiFilledInput-root:after":{
            borderBottom:`2px solid${colors.greenSpace[800]} !important`,
            
            },
            
            "& .css-1xn768b-MuiInputBase-root-MuiInput-root:after":{
            border:`2px solid ${colors.greenSpace[800]} !important`,
            
            },
            "& .css-iiujvs-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
            borderColor:`${colors.greenAccent[700]} !important`,
            
            },
            "& .css-75gcxd-MuiFormLabel-root-MuiInputLabel-root.Mui-focused ":{
            color:`${colors.greenAccent[700]} !important`,
            
            },

        }}
        >
            
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} style={{display:"flex",gap:"20px"}}>  
                    <Typography variant="h5">Filtros</Typography> 
                </AccordionSummary>
                <Box 
                    display={"flex"}
                    gap = {"20px"}
                    marginBottom={"20px"}
                    flexWrap={"wrap"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                {
                    
                    valuesaArray.map(([clave,valor])=>{
                        if(valor && valor.trim() !== "" ){
                            return(
                            <Chip
                            key={clave}
                            label={clave+": "+valor}
                            variant={"outlined"}
                            onDelete={()=>{
                            onChangeValue(clave,"")
                            }}
                            color="default"
                            style={{fontSize:"0.8em"}}
                            
                            />
                        )
                
                        }

                    })
                        
                }

                </Box>
                <AccordionDetails>
                 <Box display={"flex"} flexWrap={"wrap"} gap="30px"
                        alignItems={"center"}
                        justifyContent={"center"}
                     
                 >
                    <TextField                    
                        name="nombre"
                        label="Nombre"
                        variant="outlined"
                        sx={{flexGrow:1,maxWidth:"200px"}}
                        value={values.nombre}
                        onChange={(e)=>{
                            onChangeValue("nombre",e.target.value)
                            
                        }}
                    />
                    <TextField
                        name="nombreDeLaMadre"
                        label="Nombre de La Madre"
                        variant="outlined"
                        sx={{flexGrow:1,maxWidth:"200px"}}
                        value={values.nombreDeLaMadre}
                        onChange={(e)=>{
                            onChangeValue("nombreDeLaMadre",e.target.value)
                           
                        }}
                    />
                    <TextField
                        name="provincia"
                        label="Provicncia"
                        variant="outlined"
                        sx={{flexGrow:1,maxWidth:"200px"}}
                        value={values.provincia}
                        onChange={(e)=>{
                            onChangeValue("provincia",e.target.value)                 
                        }}
                    />
                    <TextField
                    
                        name="municipio"
                        label="Municipio"
                        variant="outlined"
                        sx={{flexGrow:1,maxWidth:"200px"}}
                        value={values.municipio}
                        onChange={(e)=>{
                            onChangeValue("municipio",e.target.value)
                        }}

                    />
                    <TextField
              
                        name="fecha"
                        variant="outlined"
                        sx={{flexGrow:1,maxWidth:"200px",minWidth:"155px"}}
                        type="date"
                        value={values.fecha}
                        onChange={(e)=>{
                            onChangeValue("fecha",e.target.value)
                        }}
                    
                    />

                    <TextField
                  
                        name="diagnosticoEgreso"
                        label="Diagnostico de Egreso"
                        variant="outlined"
                        sx={{flexGrow:8,maxWidth:"200px",minWidth:"155px"}}
                        value={values.diagnosticoEgreso}
                        onChange={(e)=>{
                            onChangeValue("diagnosticoEgreso",e.target.value)
                        }}
                        select
                        
                    >
                    {
                        currencies2.map((option) => (
                                <MenuItem key={option.label} value={option.value}>
                                    {option.label}
                                </MenuItem>
                                ))
                            
                    }
                    </TextField>

                 
                    <TextField
                
                        name="alta"
                        label="Resultado del alta"
                        variant="outlined"
                        sx={{flexGrow:6,maxWidth:"200px",minWidth:"155px"}}
                        select
                        value={values.alta}
                        onChange={(e)=>onChangeValue("alta",e.target.value)}
                        
                    >
                    {
                        currencies.map((option) => (
                                <MenuItem key={option.label} value={option.value}>
                                    {option.label}
                                </MenuItem>
                                ))
                            
                    }
                    </TextField>

                 </Box>   
                </AccordionDetails>
            </Accordion>


        </Box>


    )


}


export default DataGridFilter; 