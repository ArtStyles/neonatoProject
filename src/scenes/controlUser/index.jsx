import { Box, Typography, useTheme,IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from "react";
import CreateUser from "../../components/CreateUser";
import Loader from "../../components/Loader";
import { getUser } from "../../services/getUser";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [createUsers,activeCreateUser] = useState(false);
  const [userData,setUserData] = useState([]);
  const [loading,setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true)
    getUser()
    .then(data => {
      setUserData(data.data.users.edges)
      console.log(data.data.users.edges)
      setLoading(false)
    })
  },[])

  const handleOnClick = () => {
    activeCreateUser(!createUsers);
  };


  const columns = [
    {
      field: "username",
      headerName: "Nombre",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Correo",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "isStaff",
      headerName: "Nivel de Acceso",
      flex: 1,
      renderCell: ({ row: { isStaff } }) => {
        return (
          <Box
            width="40%"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              isStaff
                ? colors.greenSpace[800]
                : colors.greenSpace[400]
            }
            borderRadius="4px"
          >
            {isStaff && <AdminPanelSettingsOutlinedIcon />}
            {!isStaff  && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {isStaff?"Admin":"User"}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="10px" position="relative">
      <Header title="Control de Usuarios" subtitle="Control de los usuarios del sistema" />
      <Box
        m="10px 0 0 0"
        height="72vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            boxShadow:`0px  0px 1px 0px ${colors.greenSpace[100]}`
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.greenSpace[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.greenSpace[500],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.greenSpace[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >  
        <Box display="flex" position={"absolute"} top="0px" right="0"alignItems={"center"} justifyContent={"center"}>   
          <IconButton  style={{display:"flex", gap:"10px"}}  onClick={handleOnClick}>
                <Typography color={colors.greenAccent[400]}>Create User</Typography>          
                  <SettingsOutlinedIcon />
          </IconButton>
        </Box>
        <DataGrid  rows={userData.map(user => user.node)} columns={columns} />
      </Box>
      {
        createUsers && <CreateUser onClick={handleOnClick}/>
      }

    </Box>
  );
};

export default Team;