import { Box, Typography, useTheme } from "@mui/material"
import { tokens } from "../../theme";



const Footer =()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box
            display={"flex"}
            width={"auto"}
            height={"200px"}
            backgroundColor={colors.grey[900]}
            position={"relative"}
            bottom={"0px"}
            zIndex={"10"}
           
        >

        </Box>
    )

}


export default Footer;