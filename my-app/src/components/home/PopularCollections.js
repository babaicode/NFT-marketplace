import * as React from "react";
import { Items } from "./Items";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { TagFilter } from "./TagFilter";

export const PopularCollections = () => {
  const [items, setItems] = useState();
  const [filtered, setFiltered] = useState();
  const [activeTag, setActiveTag] = useState(0);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/nft")
      .then((res) => {
        console.log(res);
        setItems(res.data);
        setFiltered(res.data);
      })
      .catch((err) => {
        setErrors(err.response.data);
      });
  }, [setItems]);
  return (
    <>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h5">
          This is the most popular NFTs this week
        </Typography>
      </Grid>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <TagFilter
          items={items}
          setFiltered={setFiltered}
          activeTag={activeTag}
          setActiveTag={setActiveTag}
        />
      </Grid>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        container
        sx={{ ml: "3rem" }}
      >
        {filtered?.map((item) => (
          <Items key={item.id} {...item} />
        ))}
      </Grid>
      {errors &&
        errors.map((x) => (
          <Typography sx={{ fontWeight: "bold" }} align="center" variant="h5">
            {x}
          </Typography>
        ))}
    </>
  );
};
