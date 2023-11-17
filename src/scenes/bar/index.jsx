import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="ANALISIS SEGUN RESULTADO DEL ALTA" />
      <Box height="82vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;