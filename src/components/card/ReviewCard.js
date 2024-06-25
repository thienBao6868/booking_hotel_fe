import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";

const ReviewCard = ({item}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {item?.comment}
        </Typography>
        <Stack padding={3}/>
        <Typography>{item?.nameUser}</Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
