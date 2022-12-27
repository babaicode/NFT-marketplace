import { Grid } from "@mui/material";
import * as React from "react";
import { HelloBlock } from "../components/HelloBlock";
import { PopularCollections } from "../components/home/PopularCollections";

export const Home = () => {
  return (
    <Grid container >
      <Grid sx={{ mt: "1.5rem" }} item xs={12}>
        <HelloBlock />
      </Grid>
      <Grid sx={{ mt: "2.5rem" }} item xs={12}>
        <PopularCollections />
      </Grid>
      <Grid sx={{ mt: "2.5rem" }} item xs={12}>
      </Grid>
    </Grid>
  );
};
