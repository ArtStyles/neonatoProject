import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from "../../img/OCCN2.svg";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Link to={to} style={{ textDecorationLine: "none" }}>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Home");

  return (
    <Box
  
      sx={{
        "& .ps-sidebar-root":{
            width:"200px;"
        },
        "& .sidebar-inner": {
          background: `${colors.grey[100]} !important`,
        },
        "& .ps-menu-root": {
          backgroundColor: `${colors.greenSpace[700]} !important`,
        },
        "& .icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .inner-item": {
          padding: "5px px 5px 20px !important",
        },
        "a:hover": {
          color: `${colors.greenAccent[700]} !important`,
          backgroundColor:"transparent !important",
          boxShadow:`0px 0px 1px 0px ${colors.greenSpace[100]}`
        },
        "& .ps-active": {
          color: `${colors.greenAccent[400]} !important`,
        },
        "& .ps-sidebar-container": {
          overflowY: "hidden !important",
          
        },
        "& .css-pxpt32": {
          paddingTop: "25px",
          
        },
        "& .css-1wvake5": {
          borderRight: "none !important",
          boxShadow:`0px 0px 1px 0px ${colors.greenSpace[100]}`
          
        },
      }}
    >
      <Sidebar collapsed={isCollapsed} >
        <Menu
          iconShape="square"
          style={{ height: "100vh", }}
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" color={colors.grey[200]}>
                  MENÚ
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <>       
            <Box
              mb="25"
              display="flex"
              justifyContent="center"
              alignItems="center"
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
  
            </Box>
            
            </>
     
          )}

          <Box paddingTop={"40px"}>
            <Item
              title="Home"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Control de Usuarios"
              to="/controlUser"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={{ paddingLeft: "20px" }}
            />
            <Item
              title="Datos de los Pacientes"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Ingresar Paciente"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
