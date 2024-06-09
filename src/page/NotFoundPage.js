import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <Container sx={{ textAlign: 'center'}}>
            <Typography variant="h2" component="div" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
                Oops! The page you are looking for does not exist.
            </Typography>
            <Button 
                variant="contained" 
                color="primary" 
                component={Link} 
                to="/" 
                sx={{ mt: 3 }}
            >
                Go back to Home
            </Button>
        </Container>
  )
}

export default NotFoundPage