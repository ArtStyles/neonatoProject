import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';


export default function LoadingButton({loading,success}) {
  
 
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: green[800],
      '&:hover': {
        bgcolor: green[600],
      },
       
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);




  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width:"100%"}}>
     
      <Box sx={{  position: 'relative',  width: "180px"}}>
        <Button
          fullWidth
          variant={!success?"outlined":"contained"}
          sx={buttonSx}
          disabled={loading}
          color='secondary'
          type='submit'
        >
          Accept
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </Box>
  );
}
