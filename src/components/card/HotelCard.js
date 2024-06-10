import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import avatar from "../../media/avatar.webp";
import { Rating } from "../components/Rating";
import { Link } from "react-router-dom";



const HotelCard = ({item}) => {
  return (
    <div className="shadow-2xl shadow-slate-90 bg-gray-300">
    <Card sx={{ maxWidth:345 }} component={Link} to={`/hotel-detail/${item.id}`}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{ height: '300px', width: '100%', objectFit: 'cover' }}
          image={item.avatar}
          alt="hotel avatar"
        />
        <CardContent className="space-y-2" style={{minWidth:'200px'}}>
          <Typography variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="" component="div">
            <span>{item.hotelAddressDto.district}</span>, <span>{item.hotelAddressDto.province}</span>
          </Typography>
          <Box className="flex items-center">
            <Rating rating={item.rating} />
            <Typography sx={{ marginLeft: 3 }}>- 31 đánh giá</Typography>
          </Box>
          <Box sx={{ padding: 2 }} />
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
};

export default HotelCard;
