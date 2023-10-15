import {useNavigate} from 'react-router-dom'
import {useTheme} from "@mui/material";
import {Typography, Button} from "@mui/material";
import { tokens } from "../theme";
import { formatDate } from '../utils/formatDate';

export function useDataGridColumns(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate()

    const columns = [
        { field: "nombre", 
          headerName: "Nombre del neonato",
          minWidth:100,
          flex: 0.7
        },
        {
          field: "nombreDeLaMadre",
          headerName: "Nombre de la madre",
          flex: 1,
          minWidth:120,
          cellClassName: "name-column--cell",
        },
        {
          field: "municipio",
          headerName: "Municipio",
          minWidth:100,
          flex: 0.8,
        },
        {
          field: "provincia",
          headerName: "Provincia",
          minWidth:100,
          flex: 1,
        },
        {
          field:"fecha",
          headerName: "Fecha",
          minWidth:100,
          flex: 0.6,
          renderCell: (params) => (
            <Typography variant="subtitle2" color="secondary">
              {formatDate(params.row.fecha)}
            </Typography>
          ),
        },
        {
          field: "diagnosticoEgreso",
          headerName: "Diagnóstico al egreso",
          minWidth:100,
          flex: 1,
        },
        {
          field: "id",
          headerName: "Todo la info",
          type: "button",
          minWidth:100,
          flex: 0.5,
          filterable: false,
          renderCell: (params) => (
              <Button 
                style={{backgroundColor:`${colors.greenAccent[600]}`,margin:"auto"}}
                onClick={() => navigate(`/alldata/${"?"+params.id}`)}
                >
                <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                  Ver
                </Typography>
              </Button>
            ) 
        },
    ];
    
    return {columns}
}