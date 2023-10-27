import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Analisis de los datos de los pacientes según diagnóstico de Egreso"/>
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;