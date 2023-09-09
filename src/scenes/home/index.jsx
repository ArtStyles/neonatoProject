import { Box,  Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import image1  from "../../img/img1.jpeg"
import { Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";





const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Link to= {to} style={{textDecorationLine:"none"}}>
    <MenuItem
      active={selected === title}
      style={{
        color: colors.primary[100],
      
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography >{title}</Typography>
    </MenuItem>
    </Link>
  );
};

const Home = () => {

  const [selected, setSelected] = useState("Home");

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="HOME"  />

      </Box>
      <Box
        display={"flex"}
        
      >
        <Menu iconShape="square" >

          <Box display={"inline-block"}
          >
              <Item
                title="Control de Usuarios"
                to="/team"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
          </Box>
          <Box display={"inline-block"}>
              <Item
                title="Datos de los Pacientes"
                to="/contacts"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
          </Box>
          <Box display={"inline-block"}>
              <Item
                title="Ingresar Pacientes"
                to="/form"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
          </Box>
        </Menu>
      </Box>


      <Box 
        width={"100%"}
        height={"500px"}
      >
       <img clasName="image" src={image1} alt="" width={"100%"} height={"500px"}
        style={{opacity:"0.4"}}  /> 
      
      <Typography color={"wihte"} variant="h2" fontFamily={"cursive"}>
        Graduarse de médico es abrir las puertas de un largo camino que conduce a la más noble actividad
        que un ser humano puede hacer por los demás                        
      </Typography>
      <Typography color={"wihte"} variant="h2" fontFamily={"cursive"} textAlign={"end"}>
        Fidel Castro Rúz                     
      </Typography>
      


      </Box>


    </Box>
  );
};

export default Home;