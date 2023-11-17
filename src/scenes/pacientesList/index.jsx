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
import Advice from "../../components/Advice";
import AllData from "../../components/AllData";
import {Modal} from "@mui/material";
import {IconButton} from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const PacientesList = ({mainRef}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [pacientes, setPacientes] = useState([])
  const [loading, setLoading] = useState(true)
  const [adviceStatus,setAdviceStatus] = useState(false)
  const [allDataStatus,setAllDtaStatus] = useState(false);
  const [id,setID] = useState(null);

  const handleOnAllDataStatus =()=> { 
    setAllDtaStatus(!allDataStatus);
  }
    const handleAdviceStatus = () => {
    setAdviceStatus(true);
    setTimeout(() => setAdviceStatus(false),2000);
    
  }

    const handleSetId = (newId) => {
      setID(newId)
  }
  const {columns} = useDataGridColumns({activateAllData:handleOnAllDataStatus,setID:handleSetId}) 
  
  useEffect(() => {
    setLoading(true)
    getPacientes()
    .then(data => {
      setPacientes(data.data.pacientes.edges)
      console.log(data.data.pacientes.edges)
      setLoading(false)
    })
  },[allDataStatus])




  const handleOnFilter = (dataFilter) =>{
    setLoading(true)
      setPacientes(dataFilter)
      setLoading(false)
  }

  return (
    <Box m="10px" position={"relative"} display={"flex"} flexDirection={"column"}>
      <Header
        title="DATOS DE LOS PACIENTES"
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
      {
        adviceStatus && <Advice title={"El paciente ha sido eliminado con éxito"} type={"success"}/>
      }
      {
        allDataStatus && 
        <Modal
          open={allDataStatus}
          sx={{overflowY:"scroll",bgcolor:colors.blackGreenSpace[500]}}
          position={"relative"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            paddingTop={"30px"}
          >
            <IconButton style={{display:"flex",gap:"10px",position:"absolute",top:"0",right:"0"}}  onClick={()=>{
                              handleOnAllDataStatus()
                          }}
                          >
                <CloseRoundedIcon/>         
            </IconButton>

            <AllData id={id} mainRef={mainRef} desactivateAllData={handleOnAllDataStatus} activateAdvice={handleAdviceStatus}/>
          
          </Box>

        </Modal>
        
      }
    </Box>
  );
};

export default PacientesList;