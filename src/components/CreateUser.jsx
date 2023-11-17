import React, { useState,useRef } from 'react';
import { Box, FormControlLabel } from '@mui/material';
import { tokens } from '../theme';
import {useTheme,TextField,Typography,Modal,IconButton} from '@mui/material';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import {createUser} from "../services/createUser";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import {Checkbox} from '@mui/material';





const checkoutSchema = yup.object().shape({
  password: yup.string().required("required").matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
    "La contraseña debe  contener al menos \n una mayúscula,  una  minúscula y un  \n número."),
  username: yup.string().required("required"),
  email: yup.string().required("required")
});

const CreateUser=({onClick,onCreate})=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [open, close] = useState(true);

    const [formData, setFormData] = useState({
      username:"",
      email:"",
      isStaff:false,
      password:""
    });
    const navigate = useNavigate();

      const HandleSubmit = (values,{setFieldError}) => {  
        console.log(values)
        createUser({username:values.username,isStaff:values.isStaff,email:values.email, password:values.password})  
        .then(result => {
          if (result.errors) {  
            if(result.errors[0].message==="UNIQUE constraint failed: authentication_customuser.username")
             setFieldError("username","Ese nombre de usuario ya existe")
            if(result.errors[0].message==="['Enter a valid email address.']")
             setFieldError("email","Direccion invalida")
              console.log(result.errors[0].message)
          }
          else{
            onCreate();
            close(!open);
          }
        });
        
      
       
      };
      

    return (
        <Modal
            open={open}
        >
            <Box bgcolor={colors.blackGreenSpace[700]}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
            width={"100%"}
            height={"100%"}
            position = {"relative"}
            alignSelf="center"
            gap={"5px"}
            whiteSpace={"pre-line"}
            >
            <Box display="flex" alignItems={"center"} justifyContent={"center"}>   
            <IconButton  style={{display:"flex", gap:"10px"}}  onClick={onClick}>
                 <CloseRoundedIcon/>         
            </IconButton>
            </Box> 
            <Typography fontFamily="Merriweather Sans" variant = "h2" color={colors.greenAccent[300]} >Create User</Typography>
            <Typography fontFamily="Merriweather Sans" variant = "h5" color={colors.greenAccent[600]}>Into the data for the new user</Typography> 
            <Formik  
                initialValues = {formData}
                onSubmit={HandleSubmit}         
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={checkoutSchema}
            >
              {({
                touched,
                errors,
                values,
                handleSubmit,         
                handleChange,
                setFieldValue,
             
             })  => (
                <form  onSubmit={handleSubmit}>
                    <Box
                    width = "400px"
                    display ="flex"
                     gap = "15px"
                    flexDirection = "column"
                    padding = "40px"
                    bgcolor={`${colors.greenSpace[500]}`}
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
                   
                    <Box display="flex" justifyContent={"center"} >
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 2.5 }} />
                      <TextField
                        fullWidth
                        label="Username"
                        type="text"
                        value={values.username}
                        name="username"
                        onChange={handleChange}
                        error={touched.username && Boolean(errors.username)}
                        helperText={touched.username && errors.username}
                        variant={"standard"}
                        style={{fontFamily:"Merriweather Sans"}}
                      />
                    </Box>

                    <Box display="flex" justifyContent={"center"} >
                      <EmailIcon sx={{ color: 'action.active', mr: 1, my: 2.5 }} />
                      <TextField
                      fullWidth
                      label="Mail"
                      type="text"
                      value={values.email}
                      name="email"
                      onChange={handleChange}
                      error={errors.email}
                      helperText={errors.email}
                      variant = "standard"
                      style={{fontFamily:"Merriweather Sans"}}
                    />
                    </Box>

                    <Box display={"flex"}  justifyContent={"center"} >
                      <PasswordIcon sx={{ color: 'action.active', mr:1,my: 2.5 }}/>
                      <TextField
                        fullWidth
                        label="password"
                        type="password"
                        value={values.password}
                        name="password"
                        onChange={handleChange}
                        error={errors.password}
                        helperText={errors.password}
                        variant="standard"
                        style={{fontFamily:"Merriweather Sans"}}
                      />

                    </Box>

                    <Box display={"flex"} gap="20px" justifyContent={"center"} alignItems={"center"}>
                      <FormControlLabel
                        label="Admin permissions"
                        control={    
                            <Checkbox 
                            style={{fontFamily:"Merriweather Sans"}}
                              title='Admin permissions'
                              color='secondary'
                              value={values.isStaff}
                              onClick={()=>{
                                setFieldValue("isStaff",!values.isStaff)
                              }}
                          
                          ></Checkbox>}
                      ></FormControlLabel>
                  

          
                    </Box>

     

                    <></>
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

export default CreateUser;

