import { Box } from "@mui/system";
import { useState } from "react";
import { InputData } from "../components/create/InputData";
import { Theme } from "../others/Theme";
import axios from "axios";
import { CreateButton } from "../components/create/CreateButton";
import { SwitchButton } from "../components/login/SwitchButton";
import { Alert } from "@mui/material";
const userDefaultState = {
  userName: "",
  email: "",
  password: "",
};

export const Register = () => {
  const [user, setUser] = useState(userDefaultState);
  const [showInputUserNameAlert, setShowInputUserNameAlert] = useState(false);
  const [showInputEmailAlert, setShowInputEmailAlert] = useState(false);
  const [showInputPasswordAlert, setShowInputPasswordAlert] = useState(false);

  const addUser = (event) => {
    event.preventDefault();
    if (!user.userName) {
      setShowInputUserNameAlert(true);
      setTimeout(() => {setShowInputUserNameAlert(false)}, 2000);
      return null;
    } else if (!user.email) {
      setShowInputEmailAlert(true);
      setTimeout(() => {setShowInputEmailAlert(false)}, 2000);
      return null;
    } else if (!user.password) {
      setShowInputPasswordAlert(true);
      setTimeout(() => {setShowInputPasswordAlert(false)}, 2000);
      return null;
    } else {
      axios
        .post("http://localhost:3001/api/user", user)
        .then((response) => {
          console.log(response);
          localStorage.setItem("token", response.data);
          window.location = "/login";
        })
        .catch((error) => {
          console.log(error);
        });
      setUser(userDefaultState);
    }
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
      {showInputUserNameAlert && (
        <Alert severity="error">Enter username!</Alert>
      )}
      {showInputEmailAlert && <Alert severity="error">Enter email!</Alert>}
      {showInputPasswordAlert && (
        <Alert severity="error">Enter password!</Alert>
      )}
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
