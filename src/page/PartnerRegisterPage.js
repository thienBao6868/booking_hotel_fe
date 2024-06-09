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
import { Link as LinkRouter } from "react-router-dom";

const loginSchema = yup
  .object({
   name: yup.string().required("name is required"),
    email: yup.string().email("Invalid email").required("Email is Required"),
    password: yup.string().required("password is required"),
    passwordConfirm: yup
      .string()
      .required("Please comfirm your password")
      .oneOf([yup.ref("password")], "Password not match"),
  })
  .required();

const defaultValue = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const PartnerRegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const methods = useForm({ defaultValue, resolver: yupResolver(loginSchema) });
  const {
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="bg-slate-200">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-slate-200 w-full max-w-sm  h-128 p-2 rounded">
          <FormProvider onSubmit={handleSubmit(onSubmit)} methods={methods}>
            <div>
              <Typography variant="h4" style={{ color: "#4286f4" }}>
              Create a partner account
              </Typography>
              <Typography style={{ marginTop: "16px", color: "#4299f1" }}>
                If You Don't Have An Account, Create Account
              </Typography>
            </div>
            {errors.responseError && (
              <Alert severity="error" variant="filled">
                {errors.responseError.message}
              </Alert>
            )}
            <div className="min-h-72 space-y-8 mt-8 ">
              <FTextField name="name" label="name" />

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
              <FTextField
                name="passwordConfirm"
                label="password Confirm"
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
                Create Partner Account
              </LoadingButton>
            </div>
          </FormProvider>
          <div className="mt-8 space-y-2">
            <Divider />
            <div className="flex items-center justify-between">
              <Typography className="mr-2" style={{ color: "#4299f1" }}>
                Back to homePage
              </Typography>
              <Button variant="outlined" component={LinkRouter} to="/">homePage</Button>
            </div>
          </div>
        </div>
        <div className="hidden sm:block w-full max-w-sm h-128">
          <img
            src={loginImage}
            alt="login_image"
            className="h-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerRegisterPage;
