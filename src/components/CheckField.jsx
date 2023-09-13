import { Box,Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';


const CheckField = ({title,value,cantElments=[],checkedAll,onChange=[],validation,checkBoxNames=[]}) => {
      return(
        <Box
        display={"flex"}
        alignItems="center"
        gap={"30px"}
        gridColumn={"span 4"}
      
      >
        <Typography display={"flex"} style={{flexBasis:"600px",alignItems:"center",gap:"10px"}}>
          <h4  >{title}</h4>
          {validation ===true ? <p style={{color:"red",display: value===""?"inline-block":"none",fontSize:"20px",fontWeight:"bold"}}>*</p>:undefined}
        </Typography>
        {        
            cantElments.map((dato, index) => (
            <Box
            alignItems={"center"} 
            key={index}
  
            textAlign={"center"}
          >
            <Typography >
              {checkBoxNames.length>0?checkBoxNames[index]:dato}
            </Typography>
            <Checkbox
                checked={checkedAll?String(value).includes(dato):value ===dato}
                onChange={onChange[index]}
              />
          </Box>
            ))
    
        }
      </Box>
      )
   
  };

  export default CheckField;