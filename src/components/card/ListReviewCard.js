import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ReviewCard from "./ReviewCard";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const ListReviewCard = ({items,itemsPerPage}) => {
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
        className="space-x-5"
      >
        {selectedItems.map((item) => (
          <ReviewCard key={item.key} />
        ))}
      </Box>
      <Button
        onClick={handleNext}
        disabled={startIndex >= items.length - itemsPerPage}
      >
       
        <ArrowForwardIosIcon/>
      </Button>
    </Box>
  )
}

export default ListReviewCard