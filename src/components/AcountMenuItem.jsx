import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useNavigate } from 'react-router-dom';
import { tokens } from '../theme';
import { useTheme } from '@emotion/react';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { useEffect } from 'react';

const AcountMenuItem= ({title,onLogout})=> {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [login,setLogin] =useState(false)
  
  useEffect(() => {
  }, [localStorage.getItem("admin"),localStorage.getItem("token")]);
  
  const handleClick = (event) => {
    if(localStorage.getItem("token"))
      setAnchorEl(event.currentTarget);
    else
      navigate("/login") 
    };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip arrow title={title?"acount setting":"login"}>
         <Avatar  style={{
                   
                    backgroundColor:colors.greenSpace[400],   
                    cursor:"pointer"      
                    }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      {title}
      </Avatar>
      </Tooltip>
     
      <Menu
        style={{marginTop:"4px"}}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem  onClick={()=>{navigate("/acountSetting");handleClose()}}>My account</MenuItem>
        <MenuItem onClick={()=>{
            handleClose();
            onLogout(localStorage.removeItem("token"),localStorage.removeItem("admin"))
            navigate("/")
        }}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default AcountMenuItem;