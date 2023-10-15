import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import image1 from "../../img/img1.jpeg";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import logo from "../../img/OCCN2.svg";


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Link to={to} style={{ textDecorationLine: "none" }}>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.primary[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};

const Home = () => {
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      m="20px"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      position={"relative"}
      
    >
      <Box alignSelf={"flex-start"}>
          <Header title="HOME" />
      </Box>

      <Box

        width={"70vw"}
        height={"80vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        position={"absolute"}
        top={"0"} 
      >
        <div
          style={{
            backgroundImage: `url(${logo})`,
            width: "100%",
            height: "100%",
            backgroundRepeat: "no-repeat",
            alignSelf: "center",
            backgroundPosition:"center",
            opacity:"0.7",
            display:"flex",
            alignItems:"center",
            textAlign:"center",
            justifyContent:"center",
            backgroundBlendMode:"difference"

          }}
        >
          <Typography variant="h2" fontWeight={"800"} color={colors.greenAccent[600]}>Observatorio Central de Cirugía Neonatal</Typography>
        </div>
      </Box>
    </Box>
  );
};

export default Home;
