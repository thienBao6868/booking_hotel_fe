import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import ListHotelCard from "../components/card/ListHotelCard";
import { Stack } from "@mui/material";
import ListProvinceCard from "../components/card/ListProvinceCard";
import { apiService } from "../app/apiService";

const provinces = [
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

const HomePage = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [Listhotel, setListhotel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get(`/hotel/all`);
        setListhotel(response.data?.data);
        setIsLoad(true)
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <>
      {" "}
      {isLoad ? (
        <>
          <div className="p-5 flex items-center justify-center">
            <div className="hidden sm:block">
              <ListHotelCard items={Listhotel} itemsPerPage={4} />
            </div>
          </div>
          <Stack padding={5} />
          <div className="p-5 flex items-center justify-center">
            <ListProvinceCard items={provinces} itemsPerPage={4} />
          </div>
          <Stack padding={5} />{" "}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default HomePage;
