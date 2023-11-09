
import {Box, IconButton,useTheme,} from '@mui/material';
import { useContext, } from 'react';
import { ColorModeContext,tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import  LightModeOutlinedIcon  from '@mui/icons-material/LightModeOutlined';
import  DarkModeOutlinedIcon  from '@mui/icons-material/DarkModeOutlined';
import  SearchIcon from '@mui/icons-material/SearchOutlined';
import AcountMenuItem from '../../components/AcountMenuItem';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {useMediaQuery} from '@mui/material';


const Topbar=({onLogout,onCollapsed})=>{
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display= "flex" alignItems={"flex-end"} justifyContent={"flex-end"} p={1} 
            boxShadow={`0px  0px 1px 0px ${colors.greenSpace[100]}`}
            sx = {{
                "& .MuiBox-root":{
                gap:`10px`
            },
            }}
        >
            {/* Menu Button */}
            { !isNonMobile &&
                <Box   display="flex" 
                    backgroundColor={colors.greenSpace[600]}
                    borderRadius="3px"
                    height={"100%"}
                > 
                
                    <IconButton style={{borderRadius:"0px"}} type="button" onClick={()=>{onCollapsed()}}sx={{p:1}} >
                    <MenuOutlinedIcon style={{borderRadius:"none"}}/>
                    </IconButton>
                </Box>
            }

        
     
            
            {/* Icons */}
           <Box display='flex' >
                
             <AcountMenuItem title={localStorage.getItem("token")?(localStorage.getItem("admin")==="true"?"AD":"U"):null} onLogout={onLogout}/>

                
           </Box>

        </Box>
    )
}



export default  Topbar;