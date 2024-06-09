import { Box, Button, ImageList, ImageListItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { Rating } from "../components/components/Rating";
import ListReviewCard from "../components/card/ListReviewCard";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

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

  const [favorite, setFavorite] = useState(false);

  const click = () => {
    setFavorite(!favorite);
  }
  return (
    <div className="mx-2 px-36">
      <div className="flex mb-6">
        <Box marginRight={10}>
          <Typography variant="h3">Annata Beach Hotel</Typography>
          <Typography variant="h5">
            165A Thuy Van Street, Thang Tam Ward, Vũng Tàu, Việt Nam
          </Typography>
        </Box>
        <div>
          <Button onClick={click}>
            {favorite? (<FavoriteIcon sx={{ fontSize: 80 }}  color="primary"/>): (<FavoriteBorderIcon sx={{ fontSize: 80 }}  color="primary"/>)}
          </Button>
        </div>
      </div>

      <div className="flex">
        <div className="mr-2">
          <ImageList sx={{ width: 800, height: 650 }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div>
          <div className="flex items-center  justify-end">
            <Typography sx={{ marginRight: 1 }}>31 đánh giá - </Typography>
            <Rating rating={9.5} />
          </div>
          <Box>
            <ListReviewCard items={items} itemsPerPage={1} />
          </Box>
          <div className="flex-col space-y-4 ml-6 ">
            <div className="flex space-x-2  ">
              {amenities[0].icon}
              <span>{amenities[0].title}</span>
            </div>
            <div className="flex space-x-2  ">
              {amenities[1].icon}
              <span>{amenities[1].title}</span>
            </div>
            <div className="flex space-x-2  ">
              {amenities[2].icon}
              <span>{amenities[2].title}</span>
            </div>
            <div className="flex space-x-2   ">
              {amenities[3].icon}
              <span>{amenities[3].title}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Box sx={{ padding: 2, width: 800, height: 250 }}>
          <Typography variant="body">
            Carinya Park is situated in quiet surroundings, 8 km from Gembrook,
            in the hills of the Dandenong Ranges and features barbecue
            facilities and garden. It features a full kitchen and a private
            bathroom. The cottage is equipped with a balcony with views of the
            mountain. The property features views over the orchards, forest and
            paddocks. The cottage comes with a wardrobe and a flat-screen TV, as
            well as a seating area and DVD player. Guests at the accommodation
            will be able to enjoy activities in and around Gembrook, like hiking
            in Kurth Kiln, located across the road. Olinda is 35 km from Carinya
            Park, while Emerald is 20 km away. The nearest airport is Melbourne
            Airport, 95 km from the property.
          </Typography>
        </Box>
      </div>
      <div className="flex-col space-y-6">
        <Typography variant="h3">
          Đọc xem khách yêu thích điều gì nhất:
        </Typography>
        <Box>
          <ListReviewCard items={items} itemsPerPage={3} />
        </Box>
      </div>
    </div>
  );
};

export default HotelDetail;
