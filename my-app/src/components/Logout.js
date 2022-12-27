import { Button } from "@mui/material";
import { useCallback } from "react";
import { Theme } from "../others/Theme";

export const Logout = () => {
  const x = useCallback(() => {
    localStorage.removeItem("login");
    window.location = "/login";
  }, []);
  return (
    <Button
      onClick={x}
      sx={{
        backgroundColor: Theme.palette.otherColor.light,
        color: "#888",
        "&:hover": {
          backgroundColor: Theme.palette.otherColor.main,
        },
      }}
    >
      Logout
    </Button>
  );
};