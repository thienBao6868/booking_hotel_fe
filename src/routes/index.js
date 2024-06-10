import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";
import PartnerRegisterPage from "../page/PartnerRegisterPage";
import NotFoundPage from "../page/NotFoundPage";
import SearchPage from "../page/SearchPage";
import HotelDetail from "../page/HotelDetail";
import UserDetail from "../page/UserDetail";
import HomePage from "../page/HomePage";
import MainLayout from "../layouts/MainLayout";
import BlankLayout from "../layouts/BlankLayout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/search-hotel" element={<SearchPage />} />
        <Route path="/hotel-detail/:hotelId" element={<HotelDetail />} />
        <Route path="/user-detail" element={<UserDetail />} />
      </Route>
      <Route element={<BlankLayout/>}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/partner-register" element={<PartnerRegisterPage />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
