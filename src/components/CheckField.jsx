import { Box, Typography } from "@mui/material";
import {Chip} from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const CheckField = ({
  title,
  value,
  cantElments = [],
  checkedAll,
  onChange = [],
  validation,
  checkBoxNames = [],
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      display={"flex"}
      alignItems="center"
      gap={"30px"}
      gridColumn={"span 4"}
      flexWrap={"wrap"}
      flexDirection={"column"}
      paddingBottom={"15px"}
      boxShadow={` 0px 0px 1px 0px ${colors.greenSpace[300]}`}
    >
      <Typography
        display={"flex"}
        style={{ flexBasis: "", alignItems: "center", gap: "10px" }}
      >
        <p style={{
              fontSize: "1.2em",
            }}>{title}</p>

        {validation === true ? (
          <p
            style={{
              color: "red",
              display: value === "" ? "inline-block" : "none",
              fontSize: "2em",
              fontWeight: "bold",
            }}
          >
            *
          </p>
        ) : undefined}
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap="1em"
      >
        {cantElments.map((dato, index) => (
          <Box alignItems={"center"} key={index} textAlign={"center"}      
              >
          
            <Chip
              label={`${checkBoxNames.length > 0 ? checkBoxNames[index] : dato}`}
              variant={`${(checkedAll ===true? String(value).includes(dato): value === dato)?"filled":"outlined"}`}
              onClick={onChange[index]}
              color={"success"}
              style={{fontSize:"1.2em"}}
            />
          </Box>
        ))}

      </Box>
      
     

    </Box>
  );
};

export default CheckField;
