import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Items } from "../components/home/Items";

export const ShoppingCart = () => {
  const [cart, setCart] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/cart")
      .then((res) => {
        console.log(res);
        setCart(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [setCart]); 
  return (
    <>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h5">It is your shopping cart</Typography>
      </Grid>
      <Grid display="flex">
        {cart?.map((cartItems) => (
          <Items key={cartItems.id} {...cartItems} />
        ))}
      </Grid>
    </>
  );
};
