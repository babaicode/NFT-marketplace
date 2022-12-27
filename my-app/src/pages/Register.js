import { Box } from "@mui/system";
import { useState } from "react";
import { InputData } from "../components/create/InputData";
import { Theme } from "../others/Theme";
import axios from "axios";
import { CreateButton } from "../components/create/CreateButton";
import { SwitchButton } from "../components/login/SwitchButton";
import { Typography } from "@mui/material";
const userDefaultState = {
  userName: "",
  email: "",
  password: "",
};

export const Register = () => {
  const [user, setUser] = useState(userDefaultState);
  const [errors, setErrors] = useState(null);

  const addUser = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/user", user)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data);
      })
      .catch((error) => {
        console.log(error);
        setErrors(error.response.data);
      });
    setUser(userDefaultState);
  };

  console.log({ errors });
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
        !user.userName &&
        errors.map((x) => (
          <Typography sx={{ fontWeight: "bold" }} align="center" variant="h5">
            {x}
          </Typography>
        ))}
      <InputData
        value={user.userName}
        onChange={(e) => setUser({ ...user, userName: e.target.value })}
        label={"userName"}
      />
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
      <CreateButton addUser={addUser} text={"register"} />
      <SwitchButton text={"Login"} href={"/login"} />
    </Box>
  );
};
