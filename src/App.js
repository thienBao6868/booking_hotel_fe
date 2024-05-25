import React from "react";
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import PartnerRegisterPage from "./page/PartnerRegisterPage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";



// <AuthProvider>  cung cấp trạng thái Auth cho toàn bộ ứng dụng.

function App() {

  return (
    <AuthProvider>
      {/* <RegisterPage/> */}
      {/* <LoginPage/> */}
      {/* <PartnerRegisterPage/> */}
      {/* <Navbar/> */}
      {/* <Footer/> */}
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
