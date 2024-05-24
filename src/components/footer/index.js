import { Typography } from '@mui/material'
import React from 'react'

const Footer= () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" p={1}>
      {"Copyright © "}
      Booking.com {"  "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

export default Footer