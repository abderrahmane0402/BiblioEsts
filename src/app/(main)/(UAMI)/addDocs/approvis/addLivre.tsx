"use client"
import { Box, Modal, Typography } from "@mui/material"
import { useState } from "react"

export default function AddLivre({ livre }: { livre?: Map<number, number> }) {
  const [open, setOpen] = useState(false)
  return (
    <Modal
      open={open}
      // onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Text in a modal
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box> 
    </Modal>
  )
}
