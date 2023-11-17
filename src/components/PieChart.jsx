import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { graphicDiagEgreso } from "../services/graphicDiagEgreso";
import { useState,useEffect} from "react";

const datos = [
  {
    id: "Defectos de la Pared",
    label: "Defectos de la Pared",
    value: 0,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "Artresia Esofágica",
    label: "Artresia Esofágica",
    value: 0,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "Artresias y estenosis instestinales",
    label: "Artresias y estenosis instestinales",
    value: 0,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "Defectos diafragmáticos",
    label: "Defectos diafragmáticos",
    value: 0,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "Otros",
    label: "Otros",
    value: 0,
    color: "hsl(344, 70%, 50%)",
  },
];

const PieChart = ({isDashboard = false}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  const [graphicData,setGraphicData] = useState(datos)

  useEffect(()=>{
    graphicDiagEgreso().then((data)=>{
      let datosCopy = [...graphicData]
      datosCopy[0].value=data.data.graphicDiagnosticoEgreso.pacientes_defectos_pared
      datosCopy[1].value=data.data.graphicDiagnosticoEgreso.pacientes_atresia_esofagica
      datosCopy[2].value=data.data.graphicDiagnosticoEgreso.pacientes_atresias_y_estenosis_intestinales
      datosCopy[3].value=data.data.graphicDiagnosticoEgreso.pacientes_defectos_diafragmaticos
      datosCopy[4].value=data.data.graphicDiagnosticoEgreso.pacientes_otros
      setGraphicData(datosCopy);
    })

  },[])
  
  return (
    <ResponsivePie
      data={graphicData}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
              fontFamily:" Merriweather Sans",
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
              fontFamily:" Merriweather Sans",
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
            fontFamily:" Merriweather Sans",
          },
        },
      }}
      margin={{ top: isDashboard ? 40 : 15, right: 80,  bottom: isDashboard ? !isNonMobile ? 10 :60 :80, left: 40}}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={0}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={true}
      arcLabelsRadiusOffset={0.2}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      arcLinkLabel={"none"}
     
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={ isDashboard && !isNonMobile ? undefined:[
        {
          
          padding: 20,
          anchor: "bottom",
          direction:"column",
          justify: false,
          translateX:isNonMobile ? 180:0,
          translateY: isDashboard? 80: 100,
          itemsSpacing: 3,
          itemWidth: 150,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 10,
          symbolShape: "circle",
          effects: [

            {
              
              on: "hover",
              style: {
                itemTextColor: colors.greenAccent[700],
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;