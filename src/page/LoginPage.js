import {
  Alert,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import loginImage from "../media/login.png";
import FTextField from "../components/form/FTextField";
import { LoadingButton } from "@mui/lab";
import FormProvider from "../components/form/FormProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const loginSchema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is Required"),
    password: yup.string().required("password is required"),
  })
  .required();

const defaultValue = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const methods = useForm({ defaultValue, resolver: yupResolver(loginSchema) });
  const {
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      throw new Error("Day la loi");
    } catch (error) {
      reset();
      setError("responseError", error);
    }
  };

  return (
    <div className=" bg-slate-200">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-slate-200 p-2 rounded  w-full max-w-sm h-128">
          <FormProvider onSubmit={handleSubmit(onSubmit)} methods={methods}>
            <div>
              <Typography variant="h3" style={{ color: "#4286f4" }}>
                Login
              </Typography>
              <Typography style={{ marginTop: "16px", color: "#4299f1" }}>
                If You Are Already A Member, Easily Log In
              </Typography>
            </div>
            {errors.responseError && (
              <Alert severity="error" variant="filled">{errors.responseError.message}</Alert>
            )}
            <div className="min-h-72 space-y-8 mt-8 ">
              <FTextField name="email" label="email" />
              <FTextField
                name="password"
                label="password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <LoadingButton
                size="large"
                type="submit"
                variant="contained"
                fullWidth
                loading={isSubmitting}
              >
                Login
              </LoadingButton>
            </div>
          </FormProvider>
          <div className="mt-8 space-y-2">
            <Link href="#" underline="none">
              Forgot my password
            </Link>
            <Divider />
            <div className="flex items-center">
              <Typography className="mr-2" style={{ color: "#4299f1" }}>
                If You Don't Have An Account, Create
              </Typography>
              <Button variant="outlined">Register</Button>
            </div>
          </div>
        </div>
        <div className="hidden sm:block w-full max-w-sm h-128">
          <img src={loginImage} alt="login" className="h-full rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// Phân tích login page có những gì ? => 1 form , 2 ô input, 1 button submit
// làm sao controll được form?  (bắt lỗi, hiển thị nội dung nhập, reset khi submit, submit)?
// làm sao validate dữ liệu nhập theo ý muốn ?
// làm sao hiển thị UI các ô input ?

// giải quyết dùng react-hook-form để controll
// dùng yup để validate
// dùng mui để hiển thị UI

// Làm sao combine 3 thư viện trên?
// cách code : code trên 1 trang rồi tách
// hoặc tách từng cái rồi code
// Chọn tách rồi code
// lên cấu trúc thư mục
// Xây LoinPage
//      Tạo login page
//      Tạo formProvider của react-hook-form
//      Tạo các textField (integrating with UI libraries)
//      combine chúng trong login page , controll, validate với yup
