import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const style = {
  box:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "400px",
    maxWidth:"100%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    px: 4,
    py: 2,
    borderRadius: "30px",
    mx: 2,
  },
  span: {
    cursor:"pointer",
    borderBottom: "1px dashed #f9a430",
    color: "#f9a430",
  },
  "&:hover": {
    color: "#f9a430",
  },
  title: {
    display: "flex",
    flexDirection:"column",
    alignItems:"center",
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: "700",
    "&::after": {
      content: '""',
      display: "block",
      width:"90px",
      height:"3px",
      background: "#ff515e",
      my: "10px",
      
  }
}
}

interface IModalProps {
  open: boolean;
  setOpen: (open: boolean ) => void;
}

 function ModalCommon({setOpen, open}:IModalProps) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Typography sx={style.span} component="span" onClick={handleOpen} >ул. Красных Партизан 443/1</Typography>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style.box}>
          <Typography sx={style.title} id="keep-mounted-modal-title" variant="h6" component="h2">
          Выбрать кафе
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
export default ModalCommon