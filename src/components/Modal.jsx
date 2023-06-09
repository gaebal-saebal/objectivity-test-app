import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #fa7317',
  borderRadius: '10px',
  boxShadow: 10,
  p: 4,
};

export default function BasicModal({ modalOpen, handleClose, modalTitle, modalContent }) {
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {modalTitle}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {modalContent}
          </Typography>
          <div className='flex justify-center mt-5'>
            <Button onClick={handleClose}>닫기</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
