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
import logo from "../../img/OCCN2.svg";
import "./index.css"


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
            navigate("/home")
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
            open={true}
        >
          <Box bgcolor={colors.blackGreenSpace[600]}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
            width={"100%"}
            height={"100%"}
            position = {"relative"} 
          >
            <Box
              display={"flex"}
              width={"80%"}
              height={"80%"}
              bgcolor={colors.greenSpace[400]}
              borderRadius={"15px 8px 8px 15px"}
            >
             <Box
              display={"flex"}
              width={"30%"}
              height={"100%"}
              bgcolor={`${colors.greenSpace[500]}`}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={ "8px 0px 80px 8px" }
              flexDirection={"column"}
              
             >
              <Box width="150px" height="150px">
                <div
                  style={{
                    backgroundImage: `url(${logo})`,
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    backgroundSize: "50%",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "50px",
                    backgroundPosition: "center",        
                  }}
                 
                ></div>
              </Box>
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
                        padding = "10px"
                        alignItems={"center"}
                        justifyContent={"center"}
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
                      <Typography fontFamily="monospace" variant = "h1" color={colors.greenAccent[300]} sx={{textShadow:"0px 0px 10px"}}>Sign in</Typography>
                      <Typography fontFamily="monospace" variant = "h5" color={colors.greenAccent[600]}>Into user and password</Typography>
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
             <Box
              display={"flex"}
              width={"70%"}
              height={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
              
              gap={"30px"}
             >
              <Box width="100%" height="100%" 
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              paddingLeft={"20px"}
              position={"relative"}
              sx={{textShadow:"0px 0px 6px"}}
              >
                <div className='div_con_fondo_desenfocado'></div>
                <Box
                  position={"absolute"}
                >
                  <Typography fontSize={"6em"} fontFamily="fantasy" variant = "h1" color={colors.greenAccent[900]} >Observatorio</Typography>
                  <Typography fontSize={"6em"} fontFamily="fantasy" variant = "h1" color={colors.greenAccent[900]} >Central</Typography>
                  <Typography fontSize={"6em"} fontFamily="fantasy" variant = "h1" color={colors.greenAccent[900]} >de Cirugía</Typography>
                  <Typography fontSize={"6em"} fontFamily="fantasy" variant = "h1" color={colors.greenAccent[900]} >Neonatal</Typography>


                </Box>

              </Box>           
              <Box
                display={"flex"}
                flexDirection={"column"}
                flexShrink={"2"}
             
              >
                
              </Box>
            

             </Box>
            
            </Box>
            
            
        </Box>
        </Modal>
        


    );
}



