import { Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { apiService } from "../../app/apiService";

const UserInfo = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get("/user/me");
        const result = response.data;
        console.log(result);
        setData(result);
      } catch (error) {
        console.log("err");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex-col flex-grow">
      <div>
        <Typography variant="h3">Thông tin cá nhân</Typography>
        <Typography variant="h6">
          Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng
          ra sao.
        </Typography>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between py-6">
          <div className="w-1/3 text-start text-xl">Tên :</div>
          <div className="w-1/2 text-start">{data?.data?.fullName}</div>
          <div className="w-1/3 text-end">Chinh Sua</div>
        </div>
        <Divider variant="fullWidth" sx={{ borderBottomWidth: 3, mt: 2 }} />
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between py-6">
          <div className="w-1/3 text-start text-xl">Tên Hiển Thị :</div>
          <div className="w-1/2 text-start">{data?.data?.fullName}</div>
          <div className="w-1/3 text-end">Chinh Sua</div>
        </div>
        <Divider variant="fullWidth" sx={{ borderBottomWidth: 3, mt: 2 }} />
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between py-6">
          <div className="w-1/3 text-start text-xl">Email :</div>
          <div className="w-1/2 text-start">{data?.data?.email}</div>
          <div className="w-1/3 text-end">Chinh Sua</div>
        </div>
        <Divider variant="fullWidth" sx={{ borderBottomWidth: 3, mt: 2 }} />
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between py-6 ">
          <div className="w-1/3 text-start text-xl">Địa chỉ :</div>
          <div className="w-1/2 text-start">{data?.data?.address}</div>
          <div className="w-1/3 text-end">Chinh Sua</div>
        </div>
        <Divider variant="fullWidth" sx={{ borderBottomWidth: 3, mt: 2 }} />
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between py-6">
          <div className="w-1/3 text-start text-xl">Số Điện Thoại :</div>
          <div className="w-1/2 text-start">{data?.data?.phone}</div>
          <div className="w-1/3 text-end">Chinh Sua</div>
        </div>
        <Divider variant="fullWidth" sx={{ borderBottomWidth: 3, mt: 2 }} />
      </div>
    </div>
  );
};

export default UserInfo;
