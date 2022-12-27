import { Box, Grid, TextField } from "@mui/material";
import { Theme } from "../../others/Theme";

export const InputData = ({ value, onChange, label }) => {
  return (
    <Grid>
      <Box
        sx={{
          bgcolor: Theme.palette.secondary.light,
          boxShadow: 1,
          borderRadius: 5,
          p: 2,
          m: 3,
          "&:hover": {
            backgroundColor: Theme.palette.secondary.main,
          },
        }}
      >
        <TextField
          type={label === "Quantity" ? "number" :
          label === "Price $" && "number"}
          label={label}
          value={value}
          onChange={onChange}
        />
      </Box>
    </Grid>
  );
};
