import { Box} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { GridLogicOperator } from "@mui/x-data-grid";
import {useEffect, useState} from 'react'
import {getPacientes} from '../../services/getPacientes'
import { useDataGridColumns } from "../../customHooks/useDataGridColumns";
import Loader from '../../components/Loader'
import './index.css'

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [pacientes, setPacientes] = useState([])
  const [loading, setLoading] = useState(true)
  const {columns} = useDataGridColumns()
  
  //se obtienen los pacientes
  useEffect(() => {
    setLoading(true)
    getPacientes()
    .then(data => {
      setPacientes(data.data.pacientes.edges)
      setLoading(false)
    })
  },[])

  return (
    <Box m="20px">
      <Header
        title="Datos de los Pacientes"
        subtitle="Informacion relacionada con los pacientes para determinar diagnóstico"
      />
      {loading?<div className = "loader-container"><Loader/></div>:null}
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
        <DataGrid hideFilterPanel setFilterLogicOperator={GridLogicOperator.And} checkboxSelection rows={pacientes.map(paciente => paciente.node)} columns={columns}/>
      </Box>
    </Box>
  );
};

export default Contacts;