import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const GraphResuladoAlta = () => {
  return (
    <Box m="20px">
      <Header title="ANALISIS SEGUN RESULTADO DEL ALTA" />
      <Box height="82vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default GraphResuladoAlta;