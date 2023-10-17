import { Box} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import {useEffect, useState} from 'react'
import {getPacientes} from '../../services/getPacientes'
import { useDataGridColumns } from "../../customHooks/useDataGridColumns";
import './index.css'
import DataGridFilter from "../../components/DataGridFilter";
import CircularProgress from '@mui/material/CircularProgress';
import debounce from "@mui/material";

const PacientesList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {columns} = useDataGridColumns()
  const [pacientes, setPacientes] = useState([])
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    setLoading(true)
    getPacientes()
    .then(data => {
      setPacientes(data.data.pacientes.edges)
      console.log(data.data.pacientes.edges)
      setLoading(false)
    })
  },[])

  const handleOnFilter = (dataFilter) =>{
    setLoading(true)
      setPacientes(dataFilter)
      setLoading(false)
  }

  return (
    <Box m="10px" position={"relative"} display={"flex"} flexDirection={"column"}>
      <Header
        title="Datos de los Pacientes"
        subtitle="Informacion relacionada con los pacientes para determinar diagnóstico"
      />
      <DataGridFilter onFilter={handleOnFilter}/>
      <Box
        m="5px 0 0 0"
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
        <DataGrid 
        
        disableColumnSelector
            
        rows={pacientes.map(paciente => paciente.node)} 
        columns={columns}/>
      </Box>
    </Box>
  );
};

export default PacientesList;