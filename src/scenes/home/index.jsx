import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import PieChart from "../../components/PieChart";
import BarChart from "../../components/BarChart";
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
  const isNonMobile = useMediaQuery("(min-width:1010px)");
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
        >
          <Box
            width={isNonMobile?"50%":"100%"}
            height={isNonMobile?"100%":"48%"}
            sx={{msUserSelect:"none"}}
            boxShadow={`0px 0px 1px 0px ${colors.greenSpace[100]}`}
            position={"relative"}
          >
            <PieChart />
          </Box>
          <Box
            width={isNonMobile?"50%":"100%"}
            height={isNonMobile?"100%":"50%"}
            boxShadow={`0px 0px 1px 0px ${colors.greenSpace[100]}`}
          >
              <BarChart />
          </Box>
        </Box>
          
        <Box
            width={"100%"}
            height={"50%"}
            display={"flex"}
            flexDirection={isNonMobile?"row":"column"}
            gap={"10px"}
          >
            <Box
              width={isNonMobile?"70%":"100%"}
              height={isNonMobile?"100%":"50%"}
              sx={{msUserSelect:"none"}}
              boxShadow={`0px 0px 1px 0px ${colors.greenSpace[100]}`}
              position={"relative"}
            >
            </Box>
            <Box
              width={isNonMobile?"30%":"100%"}
              height={isNonMobile?"100%":"50%"}
              boxShadow={`0px 0px 1px 0px ${colors.greenSpace[100]}`}
            >
            </Box>
        </Box>

      </Box>


    </Box>

  );
};

export default Home;
