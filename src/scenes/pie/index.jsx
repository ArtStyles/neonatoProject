import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="ANÁLISIS SEGÚN DIAGNÓSTICO DE EGRESO"/>
      <Box height="82vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;