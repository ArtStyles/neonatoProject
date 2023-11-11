import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import logo from "../../img/OCCN2.svg";
import useMediaQuery from "@mui/material/useMediaQuery";


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
      m="20px"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={isNonMobile?"row":"column"}
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
        flexDirection={"column"}
      >
        <div
          style={{
            backgroundImage: `url(${logo})`,
            width: `${isNonMobile?"100%":"60%"}`,
            height: `${isNonMobile?"100%":"60%"}`,
            backgroundRepeat: "no-repeat",
            alignSelf: "center",
            backgroundPosition:"center",
            opacity:"0.7",
            display:"flex",
            alignItems:"center",
            textAlign:"center",
            justifyContent:"center",
          }}
        >
        </div>
      </Box>
      <Box>
        <Typography sx={{display:"inline"}} fontFamily={"cursive"} variant = "h1" fontSize={isNonMobile?"12vh":"6vh"} color={colors.greenAccent[600]} >O</Typography>
        <Typography sx={{display:"inline"}} fontFamily={"cursive"} variant = "h1" fontSize={isNonMobile?"9vh":"4vh"}color={colors.greenAccent[100]} >bservatorio</Typography><br></br>
        <Typography sx={{display:"inline"}} fontFamily={"cursive"} variant = "h1" fontSize={isNonMobile?"12vh":"6vh"} color={colors.greenAccent[600]} >C</Typography>
        <Typography sx={{display:"inline"}} fontFamily={"cursive"} variant = "h1" fontSize={isNonMobile?"9vh":"4vh"}color={colors.greenAccent[100]} >entral de</Typography><br></br>
        <Typography sx={{display:"inline"}} fontFamily={"cursive"} variant = "h1" fontSize={isNonMobile?"12vh":"6vh"} color={colors.greenAccent[600]} >C</Typography>
        <Typography sx={{display:"inline"}} fontFamily={"cursive"} variant = "h1" fontSize={isNonMobile?"9vh":"4vh"}color={colors.greenAccent[100]} >irugía</Typography><br></br>
        <Typography sx={{display:"inline"}} fontFamily={"cursive"} variant = "h1" fontSize={isNonMobile?"12vh":"6vh"} color={colors.greenAccent[600]} >N</Typography>
        <Typography sx={{display:"inline"}} fontFamily={"cursive"} variant = "h1" fontSize={isNonMobile?"9vh":"4vh"}color={colors.greenAccent[100]} >eonatal</Typography>
     </Box>
      </Box>

  );
};

export default Home;
