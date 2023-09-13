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
          flex: 0.7
        },
        {
          field: "nombreMadre",
          headerName: "Nombre de la madre",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "municipio",
          headerName: "Municipio",
          flex: 0.8,
        },
        {
          field: "provincia",
          headerName: "Provincia",
          flex: 1,
        },
        {
          field: "createdAt",
          headerName: "Fecha",
          flex: 0.6,
          renderCell: (params) => (
            <Typography variant="subtitle2" color="secondary">
              {formatDate(params.row.createdAt)}
            </Typography>
          ),
        },
        {
          field: "diagnosticoEgreso",
          headerName: "Diagnóstico al egreso",
          flex: 1,
        },
        {
          field: "id",
          headerName: "Todo la info",
          type: "button",
          flex: 0.5,
          filterable: false,
          renderCell: (params) => {
            return (
              <Button 
                style={{backgroundColor:`${colors.greenAccent[600]}`,margin:"auto"}}
                onClick={() => navigate(`/alldata/${"?"+params.id}`)}
                >
                <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                  Ver
                </Typography>
              </Button>
            );
          },
    },
    ];
    
    return {columns}
}