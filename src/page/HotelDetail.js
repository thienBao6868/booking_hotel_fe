import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Rating } from "../components/components/Rating";
import ListReviewCard from "../components/card/ListReviewCard";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useParams } from "react-router-dom";
import { apiService } from "../app/apiService";

const itemData = [
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/154543778.jpg?k=6c0ed582c0a3bfbd15af70788b4400c553698d69c84b1f403cae85be1cb50650&o=&hp=1",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

const amenities = [
  {
    icon: <SmokeFreeIcon />,
    title: "không Hút Thuốc",
  },
  {
    icon: <FreeBreakfastIcon />,
    title: "Bửa sáng",
  },
  {
    icon: <WifiIcon />,
    title: "Wifi miễn phí",
  },
  {
    icon: <LocalParkingIcon />,
    title: "Chỗ đậu xe",
  },
];

const items = [
  { key: 1 },
  { key: 2 },
  { key: 3 },
  { key: 4 },
  { key: 5 },
  { key: 6 },
  { key: 7 },
  { key: 8 },
  { key: 9 },
];

const HotelDetail = () => {
  const { hotelId } = useParams();
  console.log(hotelId);
  const [favorite, setFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hotelDetail, setHotelDetail] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get(`/hotel/${hotelId}`);
        setHotelDetail(response.data.data);
        setIsLoading(true);
      } catch (error) {
        console.log("Error fetch get detail hotel", error.message);
      }
    };
    fetchData();
  }, []);

  const click = () => {
    setFavorite(!favorite);
  };
  return (
    <>
      {isLoading ? (
        <div className="mx-2 my-8 px-36">
          <div className="flex mb-6">
            <Box marginRight={10}>
              <Typography variant="h3">{hotelDetail.name}</Typography>
              <Typography variant="h5">
                <span>{hotelDetail?.hotelAddressDto?.streetNumber}</span>{" "}
                <span>{hotelDetail?.hotelAddressDto?.streetName}</span>,{" "}
                <span>{hotelDetail?.hotelAddressDto?.district}</span>,{" "}
                <span>{hotelDetail?.hotelAddressDto?.province}</span>,{" "}
                <span>{hotelDetail?.hotelAddressDto?.country}</span>
              </Typography>
            </Box>
            <div>
              <Button onClick={click}>
                {favorite ? (
                  <FavoriteIcon sx={{ fontSize: 80 }} color="primary" />
                ) : (
                  <FavoriteBorderIcon sx={{ fontSize: 80 }} color="primary" />
                )}
              </Button>
            </div>
          </div>

          <div className="flex">
            <div className="mr-2">
              <ImageList
                sx={{ width: 800, height: 650 }}
                cols={3}
                rowHeight={164}
              >
                {hotelDetail?.hotelImageDtoList.map((item) => (
                  <ImageListItem key={item.id}>
                    <img
                      srcSet={`${item.imagePath}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.imagePath}?w=164&h=164&fit=crop&auto=format`}
                      alt={item.imageTitle}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
            <div>
              <div className="flex items-center  justify-end">
                <Typography sx={{ marginRight: 1 }}>31 đánh giá - </Typography>
                <Rating rating={hotelDetail.rating} />
              </div>
              <Box>
                <ListReviewCard
                  items={hotelDetail.hotelReviewDtoList}
                  itemsPerPage={1}
                />
              </Box>
              <div className="flex-col space-y-4 ml-6 ">
                <div><Typography variant="h4">Danh sách tiện nghi</Typography></div>
                {hotelDetail?.amenitiesOfHotel.map((item) => (
                  <div className="flex space-x-2  ">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                       <path d={item?.icon}></path>
                      </svg>
                    </div>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 mb-8">
            <Box sx={{ padding: 2, width: 800, height: 250 }}>
              <Typography variant="body">{hotelDetail?.description}</Typography>
            </Box>
          </div>
          <div className="flex-col space-y-6">
            <Typography variant="h3">
              Đọc xem khách yêu thích điều gì nhất:
            </Typography>
            <Box>
              <ListReviewCard
                items={hotelDetail.hotelReviewDtoList}
                itemsPerPage={3}
              />
            </Box>
          </div>
        </div>
      ) : (
        <>Loading</>
      )}
    </>
  );
};

export default HotelDetail;
