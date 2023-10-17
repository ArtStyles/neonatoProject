import { Box, Typography, useTheme,IconButton,Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import Header from "../../components/Header";
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from "react";
import CreateUser from "../../components/CreateUser";
import CircularProgress from '@mui/material/CircularProgress';
import { getUser } from "../../services/getUser";
import { deleteUser } from "../../services/deleteUser";
import {useMediaQuery} from "@mui/material";


const ControlUser = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
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


  const handleOnDataChange=()=>{
    getUser()
    .then(data => {
      setLoading(true)
      setUserData(data.data.users.edges)
      setLoading(false)
    })
  }


  const handleOnClick = () => {
    activeCreateUser(!createUsers);
  };


  const columns = [

    {
      field: "username",
      headerName: "Nombre",
      flex: 0.5,
      minWidth:100,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Correo",
      flex: 1,
      minWidth:100,
      cellClassName: "name-column--cell",
    },

    {
      field: "isStaff",
      headerName: "Nivel de Acceso",
      minWidth:120,
      flex: 1,
      renderCell: ({ row: { isStaff } }) => {
        return (
          <Box
            width="100px"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              isStaff
                ? colors.greenSpace[900]
                : colors.greenSpace[600]
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
    {
      field: "delete",
      headerName: "Eliminar",
      flex: 1,
      minWidth:120,
      renderCell: (params) => {
        return (
          <Box
            width="100px"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={colors.blackGreenSpace[400]}
            borderRadius="4px"
          >
            <Button fullWidth={true} onClick={()=>{
              deleteUser({id:params.row.id}).then(()=>{
                  handleOnDataChange();
              })
             
              }}>
              <DeleteOutlineOutlined />
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                Delete
              </Typography>
            </Button>
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
       {loading && <div className = "loader-container"><CircularProgress color="success"/></div>}
        <Box display="flex" 
        position={isNonMobile?"absolute":"flex"} 
        top="0px" right="0"
        alignItems={"center"} 
        alignSelf={"flex-start"}
        justifyContent={"center"}
        borderRadius={"5px"}
        padding={"5px"}
        >   
          <Button color="secondary" variant="outlined" style={{display:"flex", gap:"10px"}} 
           onClick={()=>{
            handleOnClick()
           }}>
          <Typography color={colors.greenAccent[400]}>Create User</Typography>          
          </Button>
        </Box>
          <DataGrid  
          disableRowSelectionOnClick
          rows={userData.map(user => user.node)} columns={columns} />
      </Box>
      {
        createUsers && <CreateUser onCreate={handleOnDataChange} onClick={handleOnClick}/>
      }
         
    </Box>
  );
};

export default ControlUser;