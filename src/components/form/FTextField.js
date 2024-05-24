import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const FTextField = ({ name, ...other }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...other}
          fullWidth
          error={!!error}
          helperText={error?.message}
          {...field}
        />
      )}
    />
  );
};

export default FTextField;
