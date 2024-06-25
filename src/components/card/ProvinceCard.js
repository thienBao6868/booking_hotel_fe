import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import province from "../../media/province.jpeg"
import { Link } from 'react-router-dom'

const ProvinceCard = () => {
  return (
    <Container component={Link} to="/404">
    <Card sx={{ minWidth: 320 }}>
        <CardMedia
        sx={{ height: 200 }}
        image={province}
        title="province"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          Hồ Chí Minh
        </Typography>
      </CardContent>
    </Card>
    </Container>
  )
}

export default ProvinceCard