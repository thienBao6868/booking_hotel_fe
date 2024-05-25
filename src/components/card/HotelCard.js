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

const Rating = ({ rating }) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 12px",
        backgroundColor: "primary.main",
        color: "white",
        borderRadius: "8px",
        fontWeight: "bold",
        fontSize: "16px",
      }}
    >
      {rating}
    </Box>
  );
};

const HotelCard = () => {
  return (
    <div className="shadow-2xl shadow-slate-90 bg-gray-300">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={avatar}
          alt="hotel avatar"
        />
        <CardContent className="space-y-2">
          <Typography variant="h5" component="div">
            Carinya Park
          </Typography>
          <Typography variant="" component="div">
            Ucs, Gembrook
          </Typography>
          <Box className="flex items-center">
            <Rating rating={9.5} />
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
