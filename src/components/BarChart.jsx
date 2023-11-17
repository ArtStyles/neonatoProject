import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import {useMediaQuery} from "@mui/material";

const data = [
  {
    municipio: "Antilla",
    vivo: 72,
    vivoColor: "hsl(97, 70%, 50%)",
    fallecido: 140,
    fallecidoColor: "hsl(340, 70%, 50%)",
  },
  {
    municipio: "Banes",
    vivo: 58,
    vivoColor: "hsl(273, 70%, 50%)",
    fallecido: 29,
    fallecidoColor: "hsl(275, 70%, 50%)",
  },
  {
    municipio: "Calixto Garcia",
    vivo: 34,
    vivoColor: "hsl(106, 70%, 50%)",
    fallecido: 152,
    fallecidoColor: "hsl(256, 70%, 50%)",
  },
  {
    municipio: "Cueto",
    vivo: 43,
    vivoColor: "hsl(110, 70%, 50%)",
    fallecido: 83,
    fallecidoColor: "hsl(9, 70%, 50%)",
  },
  {
    municipio: "Moa",
    vivo: 112,
    fallecidoColor: "hsl(54, 70%, 50%)",
    fallecido: 35,
    fallecidoColor: "hsl(285, 70%, 50%)",
  },
  {
    municipio: "Sagua",
    vivo: 167,
    vivoColor: "hsl(182, 70%, 50%)",
    fallecido: 18,
    fallecidoColor: "hsl(76, 70%, 50%)",
  },
  {
    municipio: "Holguín",
    vivo: 158,
    vivoColor: "hsl(224, 70%, 50%)",
    fallecido: 49,
    fallecidoColor: "hsl(274, 70%, 50%)",
  },
  {
    municipio: "Freire",
    vivo: 158,
    vivoColor: "hsl(224, 70%, 50%)",
    fallecido: 49,
    fallecidoColor: "hsl(274, 70%, 50%)",
  },
  {
    municipio: "Gibara",
    vivo: 58,
    vivoColor: "hsl(224, 70%, 50%)",
    fallecido: 10,
    fallecidoColor: "hsl(274, 70%, 50%)",
  },
  {
    municipio: "Báguanos",
    vivo: 30,
    vivoColor: "hsl(224, 70%, 50%)",
    fallecido: 2,
    fallecidoColor: "hsl(274, 70%, 50%)",
  },
];

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)")

  return (
    <ResponsiveBar
      data={data}
      theme={{
        // added
       
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
      // isInteractive={false}
      keys={["vivo", "fallecido"]}
      indexBy="municipio"
      margin={{ top: 30, right: 95,  bottom: !isNonMobile && isDashboard ? 20 : 60, left: !isNonMobile && isDashboard ? 40: 60 }}
      padding={0.5}
      animate={true}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={(!isNonMobile && isDashboard) ? null:{ 
        tickSize: 4,
        tickPadding: 5,
        tickRotation: isDashboard ? 38 : 0 && isNonMobile ? 0 : 38,
        legend: isDashboard ? undefined : "Municipios",
        legendPosition: isNonMobile? "middle":"left",
        legendOffset: isNonMobile?35:43,
        
      }}
      axisLeft={(!isNonMobile && isDashboard) ?null: {
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Nonatos",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in municipio: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;