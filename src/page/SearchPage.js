import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import hotel from "../media/panner.jpeg";
import { Rating } from "../components/components/Rating";


const SearchPage = () => {
  return (
    <>
      <div className="flex h-96 w-128 p-5 m-5 border-solid border-2 border-cyan-500 rounded-md">
        <div className="flex justify-center items-center mr-2">
          <CardMedia
            sx={{ height: "21rem", width: "18rem", borderRadius: 2 }}
            image={hotel}
            title="hotel"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex justify-between flex-grow">
            <div className="p-2 flex-grow">
              <div className="p-2">
                <Typography variant="h4">Annata Beach Hotel</Typography>
              </div>
              <div className="p-2">
                <Typography variant="h5">
                  113 Tran Hung Dao Vung Tau citys
                </Typography>
              </div>
            </div>
            <div className="p-2">
              <div className="">
                <Box className="flex items-center">
                  <Typography sx={{ marginRight: 1 }}>
                    31 đánh giá -{" "}
                  </Typography>
                  <Rating rating={9.5} /> 
                </Box>
              </div>
            </div>
          </div>
          <div className="p-2 flex justify-between">
            <span>
              Tọa lạc ở Vũng Tàu, cách Bãi Sau 2 phút đi bộ, Annata Beach Hotel
              cung cấp chỗ nghỉ có khu vườn, chỗ đậu xe riêng miễn phí, phòng
              chờ chung và sân hiên. Ngoài Wi-Fi miễn phí, khách sạn 3 sao này
              còn cung cấp bếp chung và dịch vụ phòng. Chỗ nghỉ này cung cấp
              quầy lễ tân 24 giờ, dịch vụ tiền sảnh và tổ chức các tour du lịch
              cho khách.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
