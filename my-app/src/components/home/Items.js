import { Button, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import file2 from "../../others/file2.png";
import axios from "axios";
import { useState } from "react";

export const Items = (item) => {
  const [errors, setErrors] = useState(null);
  const deleteFromCart = () => {
    axios
      .delete(`http://localhost:3001/api/cart/${item.id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setErrors(error.response.data);
      });
  };
  return (
    <Grid display="flex" justifyContent="center" alignItems="center">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          maxWidth: 600,
          borderRadius: 1,
        }}
      >
        <List
          sx={{ width: "100rem", maxWidth: 500, bgcolor: "background.paper" }}
        >
          <ListItem>
            <img src={file2} alt="" width="250" />
            <List>
              <Grid
                sx={{ pl: "3rem" }}
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h6">price: {item.price} $</Typography>
                {window.location.pathname === "/cart" ? (
                  <Button
                    variant="contained"
                    target="_blank"
                    onClick={deleteFromCart}
                  >
                    delete
                  </Button>
                ) : (
                  <Button variant="contained" href={`/itempage/${item.id}`}>
                    see more
                  </Button>
                )}
                {errors  &&
                  errors.map((x) => (
                    <Typography
                      sx={{ fontWeight: "bold" }}
                      align="center"
                      variant="h5"
                    >
                      {x}
                    </Typography>
                  ))}
              </Grid>
            </List>
          </ListItem>
        </List>
      </Box>
    </Grid>
  );
};