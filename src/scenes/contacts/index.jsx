import { Box,Typography,Button} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { GridLogicOperator } from "@mui/x-data-grid";


const data=1;
const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  
  const columns = [
    { field: "nombre", 
    headerName: "Nombre del neonato",
     flex: 0.7
    },
    

    {
      field: "name",
      headerName: "Nombre de la madre",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "nmunicipio",
      headerName: "Municipio",
      flex: 0.8,
    },
    {
      field: "provincia",
      headerName: "Provincia",
      flex: 1,
    },
    {
      field: "fecha",
      headerName: "Fecha",
      flex: 0.6,
    },
    {
      field: "diagnosticoEgreso",
      headerName: "Diagnóstico al egreso",
      flex: 1,
    },
    {
      field: "button",
      headerName: "Todo la info",
      type: "button",
      flex: 0.5,
      filterable: false,
      renderCell: () => {
        return (
          <Link to={{
            pathname: "/alldata",
            search: `/user/${mockDataContacts.id}`,
            state: { datos: data },
            }}
            >
          <Button style={{backgroundColor:`${colors.greenAccent[600]}`,margin:"auto"}}>
          <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
            Ver
          </Typography>
          </Button>
          </Link>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Datos de los Pacientes"
        subtitle="Informacion relacionada con los pacientes para determinar diagnóstico"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[800],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[800],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid hideFilterPanel setFilterLogicOperator={GridLogicOperator.And} checkboxSelection rows={mockDataContacts} columns={columns}/>
      </Box>
    </Box>
  );
};

export default Contacts;