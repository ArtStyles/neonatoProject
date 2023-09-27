import { Box, Button, Popover, Stack,Modal } from "@mui/material";


export default function ConfirmationAdv(props) {
  return (
    <div>
      
      <Modal
      open={props.popoverIsVisivle}
      >    
        <Popover
        anchorEl={props.anchorElement}
          title="Confirmar"
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={props.popoverIsVisivle}
        > 
          <Stack direction={"row"} spacing={1} padding={2}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>Esta seguro que desea Eliminar</p>
              <div style={{display:"flex",gap:"20px", justifyContent:"center", alignItems:"center"}}>
                <Button
                  variant="contained"
                  size="small"
                  onClick={(evt) => {
                    evt.stopPropagation();
                    evt.preventDefault();
                    props.delete();
                    props.togglePopover();
                    props.navigate();
                  }}
                >
                  si
                </Button>

                <Button
                  variant="contained"
                  size="small"
                  onClick={(evt) => {
                    evt.stopPropagation();
                    evt.preventDefault();
                    props.togglePopover();
                  }}
                >
                  no
                </Button>
              </div>
            </div>
            </Stack>
          
          

          </Popover>
      </Modal>
    </div>
  );
}
