import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import GraphDiagnosticoEgreso from "../pieChartDiagnoticoEgres"
import GraphResuladoAlta from "../pieChartResultadoAlta";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./index.css"


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
  const isNonMobile = useMediaQuery("(min-width:750px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      m="10px"  
      display={"flex"}
      gap={"10px"}
      position={"relative"}
      flexWrap={"wrap"}
      height={"90vh"}
      alignItems={"center"}
      justifyContent={"center"}
      alignContent={"center"}
  
    >
      <Box
        display="flex"
        width={"100%"}
        height={"100%"}
        maxWidth={"1400px"}
        gap={"10px"}
        flexDirection={"column"}
      
      >

        <Box  width={"100%"} position={"relative"} top={"0px"} left={"0px"}>
          <Header title="HOME" />
        </Box>
        <Box className='fondo_desenfocado'></Box>
        <Box
          width={"100%"}
          height={"49%"}
          display={"flex"}
          flexDirection={isNonMobile?"row":"column"}
          gap={"10px"}
          sx={{msUserSelect:"none"}}
        >
          <Box
            width={isNonMobile?"50%":"100%"}
            height={isNonMobile?"100%":"48%"}
            sx={{msUserSelect:"none"}}
            boxShadow={`0px 0px 1px 0px ${colors.greenSpace[100]}`}
            position={"relative"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"8px"}
          
          >
            <h5 style={{position:"absolute", top:"-10px",fontFamily:"Merriweather Sans"}}>Analisis segun Diagnostico de Egreso</h5>
            <GraphDiagnosticoEgreso isDashboard={true} />
          </Box>
          <Box
            width={isNonMobile?"50%":"100%"}
            height={isNonMobile?"100%":"50%"}
            boxShadow={`0px 0px 1px 0px ${colors.greenSpace[100]}`}
            sx={{msUserSelect:"none"}}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            position={"relative"}
            borderRadius={"8px"}
            
          >
            <h5 style={{position:"absolute", top:"-10px",fontFamily:"Merriweather Sans"}}>Analisis segun relustado del alta</h5>
              <GraphResuladoAlta  isDashboard={true} />
          </Box>
        </Box>
          
        <Box
            width={"100%"}
            height={"50%"}
            display={"flex"}
            flexDirection={isNonMobile?"row":"column"}
            gap={"10px"}
            sx={{msUserSelect:"none"}}
          >
            <Box
              width={isNonMobile?"70%":"100%"}
              height={isNonMobile?"100%":"50%"}
              sx={{msUserSelect:"none"}}
              boxShadow={`0px 0px 1px 0px ${colors.greenSpace[100]}`}
              position={"relative"}
              borderRadius={"8px"}
            >
            </Box>
            <Box
              width={isNonMobile?"30%":"100%"}
              height={isNonMobile?"100%":"50%"}
              boxShadow={`0px 0px 1px 0px ${colors.greenSpace[100]}`}
              borderRadius={"8px"}
            >
            </Box>
        </Box>

      </Box>
      

    </Box>

  );
};

export default Home;
