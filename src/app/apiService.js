import axios from "axios";
// import { BASE_URL } from "./config";

export const apiService = axios.create(
  // baseURL: BASE_URL,
);

apiService.interceptors.request.use(
  (request) => {
    console.log("Start Request", request);
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      request.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    console.log("Request Error");
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    console.log("Response", response);
    return response;
  },
  (error) => {
    console.log(error); // cần check error để lấy dữ liệu gán cho message => xử lý hiển thị lỗi.
    const message = "Unknown Error";
    return Promise.reject({ message });
  }
);
