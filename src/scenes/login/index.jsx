import React, { useState,useRef } from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { tokens } from '../../theme';
import {useTheme,TextField,Typography,Modal} from '@mui/material';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { authenticate } from '../../services/authentication';

const checkoutSchema = yup.object().shape({
  password: yup.string().required("required"),
  username: yup.string().required("required"),
 
});

export default function Login({autenticate,onLogin}){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [formData, setFormData] = useState({
      username:"",
      password:""
    });
      const [aut,setAut] = useState(autenticate);
 
      // Manejador de envío del formulario
      const HandleSubmit = (values) => {  
        console.log(values)
        authenticate({user:values.username, pass:values.password})
        .then(response => {
          console.log(response.data)
          if(response.data.tokenAuth.token){
          localStorage.setItem('token', response.data.tokenAuth.token);
          onLogin(response.data.tokenAuth.token); 
          setAut(!aut); 
          }
          else{
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
          }
           
        })
        .catch(error => {
        }) 

      };
    return (
        <Modal
            open={!aut}
        >
            <Box backgraundColor={colors.blackGreenSpace[400]}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
            width={"100%"}
            height={"100%"}
            position = {"relative"}
            >
            <Formik  
                initialValues = {formData}
                onSubmit={HandleSubmit}         
                validateOnChange={true}
                validateOnBlur={false}
                validationSchema={checkoutSchema}
            >
               {({
            touched,
            errors,
            values,
            handleSubmit,         
            handleChange,
             })  => (
                <form  onSubmit={handleSubmit}>
                    <Box
                     display ="flex"
                     gap = "15px"
                     flexDirection = "column"
                    padding = "40px"
                    bgcolor={`${colors.greenSpace[800]}`}
                    borderRadius = "15px"
                    sx={{
                        "& .MuiFormLabel-root":{
                           opacity:"0.5"
                        },
                        "& .Mui-focused":{
                           opacity:"1",
                           color:`${colors.greenAccent[400]} !important`,
                        },

                        "& .MuiInputBase-input":{
                           opacity:"1",
                           color:`${colors.greenAccent[100]} !important`,
                        },

                        "& .css-9425fu-MuiOutlinedInput-notchedOutline":{
                           border: `2px solid ${colors.greenAccent[900]}`
                        } 
                    }}

                    >
                    <Typography variant = "h2" color={colors.greenAccent[300]} >Sign in</Typography>
                    <Typography variant = "h5" color={colors.greenAccent[600]}>Into user and password</Typography>
                    <TextField
                      fullWidth
                      label="user"
                      type="text"
                      value={values.username}
                      name="username"
                      onChange={handleChange}
                      error={errors.username}
                      helperText={errors.username}
                    />
                    <TextField
                      fullWidth
                      label="password"
                      type="password"
                      value={values.password}
                      name="password"
                      onChange={handleChange}
                      error={errors.password}
                      helperText={errors.password}
                    />
                    <TextField
                      fullWidth
                      type="submit"
                      name="button"
                      style={{backgroundColor:colors.greenSpace[500],}}
                      onSubmit={handleSubmit}
                    />
                    </Box>
      
                </form>
             )}
            </Formik>
        </Box>
        </Modal>
        


    );
}



