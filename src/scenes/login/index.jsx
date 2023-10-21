import React, { useState, } from 'react';
import { Box } from '@mui/material';
import { tokens } from '../../theme';
import {useTheme,TextField,Typography,Modal,IconButton} from '@mui/material';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { authenticate } from '../../services/authentication';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {currentUser} from '../../services/currentUser';
import LoadingButton from '../../components/LoadingButton';


const checkoutSchema = yup.object().shape({
  password: yup.string().required("required"),
  username: yup.string().required("required"),
 
});

export default function Login({onLogin}){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [formData, setFormData] = useState({
      username:"",
      password:""
    });
    const [aut,setAut] = useState(true);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
      
   
      // Manejador de envío del formulario
      const HandleSubmit = (values) => {
        setSuccess(false);
        setLoading(true);  
        authenticate({user:values.username, pass:values.password})
        .then((response) => {
          console.log(response.data)
          if(response.data.tokenAuth.token){
          localStorage.setItem('token', response.data.tokenAuth.token);
          currentUser().then((data)=>{
              localStorage.setItem('admin', data.data.me.isStaff);
              console.log(data.data.me.isStaff)
              onLogin(response.data.tokenAuth.token,data.data.me.isStaff);
              setSuccess(true);
              setLoading(false);      
          })
          navigate("/")
          }
          else{
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
            setLoading(false); 
          }
           
        })
          .catch(error => {

        }) 

      };
    return (
        <Modal
            open={aut}
        >
            <Box bgcolor={colors.blackGreenSpace[700]}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
            width={"100%"}
            height={"100%"}
            position = {"relative"}
            >
            <IconButton  style={{display:"flex", gap:"10px"}}  onClick={()=>{
              navigate(-1);
              }}>
                 <CloseRoundedIcon/>         
            </IconButton>
            <Typography variant = "h2" color={colors.greenAccent[300]} >Sign in</Typography>
            <Typography variant = "h5" color={colors.greenAccent[600]}>Into user and password</Typography>
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
             })  => (
                <form  onSubmit={handleSubmit}>
                    <Box
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
                   
                    <TextField
                      fullWidth
                      label="user"
                      type="text"
                      value={values.username}
                      name="username"
                      onChange={handleChange}
                      error={!!errors.username}
                      helperText={errors.username}
                    />
                    <TextField
                      fullWidth
                      label="password"
                      type="password"
                      value={values.password}
                      name="password"
                      onChange={handleChange}
                      error={!!errors.password}
                      helperText={errors.password}
                    />

                    <LoadingButton
                      loading={loading}
                      success={success}
                      handleOnClick={handleSubmit}
                    />
                    </Box>
      
                </form>
             )}
            </Formik>
        </Box>
        </Modal>
        


    );
}



