import { Button } from "@mui/material";
import { Theme } from "../../others/Theme";

export const SwitchButton = ({ text, href }) => {
  console.log(href);
  return (
    <Button href={href} variant="contained"
      sx={{
        backgroundColor: Theme.palette.primary.light,
        color: "#888",
        "&:hover": {
          backgroundColor: Theme.palette.primary.main,
        }}}
    >
      {text}
    </Button>
  );
};
