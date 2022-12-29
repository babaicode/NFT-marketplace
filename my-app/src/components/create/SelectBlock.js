import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import md5 from "md5";
import { Theme } from "../../others/Theme";

export const SelectBlock = ({ value, label, onChange }) => {
  const tagsArr = ["Art", "Photo"];
  const blockchainArr = ["Public", "Private"];
  return (
    <Grid  md={11}>
      <Box
        sx={{
          bgcolor: Theme.palette.secondary.light,
          boxShadow: 1,
          borderRadius: 5,
          p: 2,

          "&:hover": {
            backgroundColor: Theme.palette.secondary.main,
          },
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>{label}</InputLabel>
          <Select required value={value} label={label} onChange={onChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {label === "Tag"
              ? tagsArr.map((tag) => <MenuItem key={md5(tag)}value={tag}>{tag}</MenuItem>)
              : blockchainArr.map((blockchain) => (
                  <MenuItem value={blockchain}>{blockchain}</MenuItem>
                ))}
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
};
