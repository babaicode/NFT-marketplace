import { Box } from "@mui/system";
import { useState } from "react";
import { InputData } from "../components/create/InputData";
import { Theme } from "../others/Theme";
import axios from "axios";
import { CreateButton } from "../components/create/CreateButton";
import { SwitchButton } from "../components/login/SwitchButton";
import { Typography } from "@mui/material";

const userDefaultState = {
  email: "",
  password: "",
};

export const Login = () => {
  const [user, setUser] = useState(userDefaultState);
  const [errors, setErrors] = useState(null);

  const addUserLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/auth", user)
      .then(function (response) {
        localStorage.setItem("login", response.data);
        window.location = "/";
      })
      .catch(function (error) {
        setErrors(error.response.data);
      });

    setUser(userDefaultState);
  };
  return (
    <Box
      sx={{
        bgcolor: Theme.palette.secondary.light,
        boxShadow: 1,
        borderRadius: 5,
        p: 2,
        m: 3,
      }}
    >
      {errors &&
        !user.email &&
        errors.map((x) => (
          <Typography sx={{ fontWeight: "bold" }} align="center" variant="h5">
            {x}
          </Typography>
        ))}
      <InputData
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        label={"email"}
      />
      <InputData
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        label={"password"}
      />
      <CreateButton addUserLogin={addUserLogin} text={"login"} />
      <SwitchButton text={"Register"} href={"/register"} />
    </Box>
  );
};
