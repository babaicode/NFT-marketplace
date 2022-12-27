import { Button } from "@mui/material";
import { Theme } from "../../others/Theme";

export const CreateButton = ({addUserLogin, addNft, addUser, text }) => {
  return (
    <Button
      sx={{
        backgroundColor: Theme.palette.primary.light,
        color: "#888",
        "&:hover": {
          backgroundColor: Theme.palette.primary.main,
        },
      }}
      variant="contained"
      onClick={(event) =>
        (text === "register") ? addUser(event) : 
        (text === "login") ? addUserLogin(event) : 
        addNft(event)
      }>
      {text}
    </Button>
  );
};