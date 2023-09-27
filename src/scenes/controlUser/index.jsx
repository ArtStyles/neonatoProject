import React, { useState,useRef } from 'react';
import { Box } from '@mui/material';
import { tokens } from '../../theme';
import {useTheme,TextField,Typography,Modal} from '@mui/material';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { createUser } from '../../services/createUser';



const checkoutSchema = yup.object().shape({
  password: yup.string().required("required"),
  username: yup.string().required("required"),
  email: yup.string().required("required"), 
});

export default function ControlUser(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [formData, setFormData] = useState({
      username:"",
      email:"",
      isStaff:true,
      password:""
    });
    const navigate = useNavigate();

      const HandleSubmit = (values) => {  
        console.log(values)
        createUser({username:values.username,isStaff:values.isStaff,email:values.email, password:values.password})
        navigate("/")
      };
    return (
        <Modal
            open={true}
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
            errors,
            values,
            handleSubmit,         
            handleChange,
            setFieldValue
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
                    <Typography variant = "h2" color={colors.greenAccent[300]} >Create User</Typography>
                    <Typography variant = "h5" color={colors.greenAccent[600]}>Into the data for the new user</Typography>
                    <TextField
                      fullWidth
                      label="Username"
                      type="text"
                      value={values.username}
                      name="username"
                      onChange={handleChange}
                      error={errors.username}
                      helperText={errors.username}
                    />
                    <TextField
                      fullWidth
                      label="Mail"
                      type="text"
                      value={values.email}
                      name="email"
                      onChange={handleChange}
                      error={errors.email}
                      helperText={errors.email}
                    />
                    <Box display={"flex"} gap="20px" justifyContent={"center"} alignItems={"center"}>
                      <p>Admin permisson</p>
                      <TextField
                      style={{width:"20px",backgroundColor:"transparent"}}
                      type="checkbox"
                      value={values.isStaff}
                      name="isStaff"
                      onClick={handleChange}
                    />
                    </Box>
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



