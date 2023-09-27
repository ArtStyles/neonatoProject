
import {Box, IconButton,useTheme} from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext,tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import  LightModeOutlinedIcon  from '@mui/icons-material/LightModeOutlined';
import  DarkModeOutlinedIcon  from '@mui/icons-material/DarkModeOutlined';
import  NotificationsModeOutlinedIcon  from '@mui/icons-material/NotificationAddOutlined';
import  SettingsOutlinedIcon  from '@mui/icons-material/SettingsOutlined';
import  PersonOutlinedIcon  from '@mui/icons-material/PersonOutlined';
import  SearchIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';


const Topbar=()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const navigate = useNavigate();
    return (
        <Box display= "flex" justifyContent="space-between" p={2} 
            boxShadow={`0px  0px 1px 0px ${colors.greenSpace[100]}`}
            sx = {{
                "& .MuiBox-root":{
                boxShadow:`0px  0px 1px 0px ${colors.greenSpace[100]}`
            },
            }}
        >
           {/* Search bar */}
           <Box   display="flex" 
                backgroundColor={colors.primary[700]}
                borderRadius="3px"
                    > 
                <InputBase sx={{ml:2, flex:1}} placeholder= "Search "/>
                <IconButton type="button" sx={{p:1}} >
                    <SearchIcon/>
                </IconButton>
            </Box>
            
            {/* Icons */}
           <Box display='flex'>
                <IconButton onClick={colorMode.toggleColorMode }>
                    {theme.palette.mode ==='dark' ? ( <DarkModeOutlinedIcon/>)
                    :(<LightModeOutlinedIcon /> )}
                </IconButton>
     
                <IconButton>
                    <NotificationsModeOutlinedIcon/>
                </IconButton>

                <IconButton>
                    <SettingsOutlinedIcon onClick={()=>navigate("/controlUser")}/>
                </IconButton>

                <IconButton>
                    <PersonOutlinedIcon/>
                </IconButton>
                
           </Box>
        </Box>
    )
}



export default  Topbar;