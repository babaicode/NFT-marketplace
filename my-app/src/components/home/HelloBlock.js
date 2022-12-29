import { Typography, Button, Grid } from "@mui/material";
import { Box } from "@mui/system";

export const HelloBlock = () => {
  const pages = [
    { text: "EXPLORE", href: "/" },
    { text: "UPLOAD", href: "/create" },
  ];

  return (
    <Grid  container spacing={3} justifyContent="center">
      <Grid item xs={11}>
        <Box>
          <Typography align="center" variant="h5">
            Hello, It's babai NFT marketplace
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={11}>
        <Typography align="center" variant="h6">
          Here you can explore some NFTS or create your oun
        </Typography>
      </Grid>
        <Box
          sx={{
            mt: "1rem",
            display: "flex",
        }}
        >
          {pages.map((page) => (
            <Button sx={{ mr: "1.5rem" }} variant="contained" href={page.href} key={page.text}>
              {page.text}
            </Button>
          ))}
        </Box>
    </Grid>
  );
};
