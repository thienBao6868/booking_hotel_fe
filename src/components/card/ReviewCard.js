import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";

const ReviewCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          “View rất đẹp chổ rất sạch sẽ nhân viên tận tình dễ chịu Mình đi som
          hon gio nhận phòng mà nhân viên thu xếp cho nhận som nua rât ok luon
          rat hai...”
        </Typography>
        <Stack padding={3}/>
        <Typography>Thien Bao</Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
