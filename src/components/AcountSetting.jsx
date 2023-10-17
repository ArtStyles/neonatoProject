import {Box,TextField,IconButton} from "@mui/material"
import { tokens } from "../theme"
import { useTheme} from "@mui/material"
import Header from "./Header"
import { Formik } from "formik"
import * as yup from "yup";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {Modal} from "@mui/material";
import PasswordIcon from '@mui/icons-material/Password';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { changeUserPassword } from "../services/changeUserPassword"
import {Typography} from "@mui/material"
import {useMediaQuery} from "@mui/material"



const AcountSetting = ()=>{
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        oldPassword:"",
        newPassword:"",
        confirmPassword:"",
      });
    const [open,close] = useState(true)

    const checkoutSchema = yup.object().shape({
        newPassword: yup.string().required("campo obligatorio"),
        oldPassword: yup.string().required("campo obligatorio"),
        confirmPassword: yup.string().required("campo obligatorio"),
    });

    const handleOnSubmit = (values,{setFieldValue}) => {

        changeUserPassword({oldPassword: values.oldPassword,
                            newPassword1: values.newPassword,
                            newPassword2: values.confirmPassword}).then((resp) => {
             console.log(resp.data)
            setFieldValue("oldPassword", "")
            setFieldValue("newPassword", "")
            setFieldValue("confirmPassword", "")

        });

    }

    return(
       <>
       {
            localStorage.getItem('token')!==null?
            <Modal
                open={open}
                
            >
                <Box bgcolor={colors.blackGreenSpace[700]}
                   display={"flex"}
                   alignItems={"center"}
                   flexDirection={isNonMobile?"row":"column"}
                   justifyContent={"center"}
                   width={"100%"}
                   height={"100%"}
                   position = {"relative"}
                   alignSelf="center"
                   whiteSpace={"pre-line"}
                        
                >
                    <IconButton style={{display:"flex",gap:"10px",position:"absolute",top:"0",left:"0"}}  onClick={()=>{
                            navigate(-1)
                        }}
                        >
                            <CloseRoundedIcon/>         
                    </IconButton>
                    <Box  
                        width={isNonMobile?"40%":"100%"}
                        display="flex" flexDirection={"column"} 
                        alignItems={"center"} 
                        justifyContent={"center"}
                        height={isNonMobile?"100%":"40%"}
                        >   
                        
                        <Header title={"Acount Setting"}  subtitle={"Here you can change your password"}/>
                    </Box>
                    <Box
                    display={"flex"}
                    width={isNonMobile?"60%":"100%"}
    
                    height={isNonMobile?"100%":"60%"}
                    bgcolor={`${colors.greenSpace[500]}`}
                    alignItems={"center"}
                    justifyContent={"center"}
                    flexDirection={"column"}
                    >
                        <Box>
                            <Typography  variant="p" color={colors.greenSpace[200]}>
                                Acount type:                         
                            </Typography>
                            <Typography  variant="p" color={colors.greenAccent[200]}>
                                {
                                    localStorage.getItem("admin") === "true"?" Admin":" User"
                                }                    
                            </Typography>
                        </Box>
 
                        <Formik  
                            initialValues = {formData}
                            onSubmit={handleOnSubmit}         
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
                                width={"400px"}
                                display ="flex"
                                gap = "15px"
                                flexDirection = "column"
                                padding = "40px"
                                bgcolor={`${colors.greenSpace[500]}`}
                                borderRadius = "15px"
                                alignSelf={"flex-end"}
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

                                <Box display={"flex"}  justifyContent={"center"} >
                                <PasswordIcon sx={{ color: 'action.active', mr:1,my: 2.5 }}/>
                                <TextField
                                    fullWidth
                                    label="Old password"
                                    type="password"
                                    value={values.oldPassword}
                                    name="oldPassword"
                                    onChange={handleChange}
                                    error={!!errors.oldPassword}
                                    helperText={errors.oldPassword}
                                    variant="standard"
                                />

                                </Box>
                                <Box display={"flex"}  justifyContent={"center"} >
                                <PasswordIcon sx={{ color: 'action.active', mr:1,my: 2.5 }}/>
                                <TextField
                                    fullWidth
                                    label="New password"
                                    type="password"
                                    value={values.newPassword}
                                    name="newPassword"
                                    onChange={handleChange}
                                    error={!!errors.newPassword}
                                    helperText={errors.newPassword}
                                    variant="standard"
                                />

                                </Box>
                                <Box display={"flex"}  justifyContent={"center"} >
                                <PasswordIcon sx={{ color: 'action.active', mr:1,my: 2.5 }}/>
                                <TextField
                                    fullWidth
                                    label="Confirm password"
                                    type="password"
                                    value={values.confirmPassword}
                                    name="confirmPassword"
                                    onChange={handleChange}
                                    error={!!errors.confirmPassword}
                                    helperText={errors.confirmPassword}
                                    variant="standard"
                                />

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
                </Box>
            </Modal>
            : <Box></Box>
       }
       </>

    )

}

export default AcountSetting;