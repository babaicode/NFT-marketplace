import { Button } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

export const AddToCartItem = ({ params, item }) => {
  const [cartItem, setCartItem] = useState();
  useEffect(() => {
    setCartItem(item);
  }, [params.id]);
  const addToCart = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/cart", cartItem)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Button variant="contained" target="_blank" onClick={addToCart}>
      Add to card
    </Button>
  );
};
