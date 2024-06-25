import React, { useState } from "react";
import HotelCard from "./HotelCard";
import { Box, Button } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const ListHotelCard = ({ items, itemsPerPage }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, items.length - itemsPerPage)
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  const selectedItems = items.slice(startIndex, startIndex + itemsPerPage);
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Button onClick={handlePrev} disabled={startIndex === 0}>
      <ArrowBackIosNewIcon/>
      </Button>
      <Box
        sx={{ display: "flex", flexWrap: "nowrap", overflowX: "auto" }}
        className="space-x-2"
      >
        {selectedItems.map((item) => (
          <HotelCard key={item.id} item={item}/>
        ))}
      </Box>
      <Button
        onClick={handleNext}
        disabled={startIndex >= items.length - itemsPerPage}
      >
   <ArrowForwardIosIcon/>
      </Button>
    </Box>
  );
};

export default ListHotelCard;
