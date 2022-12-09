import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Forgot your  Password?</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Password Recovary
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           enter either email or username  on the account  and click submit

           we will email instruction how you will recover your password.
          </Typography>
          {/* <input value="email" type="email" placeholder="Enter your email or username" id="email" name="email" /> */}
          <TextField id="standard-basic" label="enter your email" placeholder='enter your email' variant="standard" />
          <br />
          <br />
          <Button variant="contained">Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}