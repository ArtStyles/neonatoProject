import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import { graphicResultadoAlta } from "../../services/graphicResultadoAlta";
import { useEffect } from "react";
import { useState } from "react";

const initialData=[
  {
    id: "vivos",
    label: "Vivos",
    value: 0,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "fallecidos",
    label: "Fallecidos",
    value: 0,
    color: "hsl(229, 70%, 50%)",
  },

]


const GraphResuladoAlta = ({isDashboard}) => {
  const [data,setData]= useState(initialData)

  useEffect(() =>{
    graphicResultadoAlta().then((info) =>{
      let aux = [...data]
      aux[0].value = info.data.graphicResultadoAlta.vivos
      aux[1].value = info.data.graphicResultadoAlta.fallecidos
      setData(aux)
    })
  },[])

  return (
<>
       { !isDashboard ?
        <Box m="20px">
          <Header title="ANÁLISIS SEGÚN DIAGNÓSTICO DE EGRESO"/>
          <Box height={"82vh"}>
            <PieChart datos={data} />
          </Box>
        </Box>:
         <PieChart datos={data} isDashboard={isDashboard} />
      }
    </>
  );
};

export default GraphResuladoAlta;