import { Box } from "@mui/material";

export const Rating = ({ rating }) => {
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