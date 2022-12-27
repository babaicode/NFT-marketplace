import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AddToCartItem } from "../components/home/AddToCartItem";
import file2 from "../others/file2.png";
import { LikeOrDis } from "../components/LikeOrDis";

export const ItemPage = () => {
  const params = useParams();
  const [item, setItem] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/nft/${params.id}`)
      .then((res) => {
        console.log(res);
        setItem(res.data[0]);
        console.log(res.data[0].like);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  if (item?.name)
    return (
      <>
        <Container maxWidth="sm">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ mt: 3 }}>
                <img src={file2} alt="" />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ mt: 3 }}>
                <Typography align="center" variant="h3">
                  {item.name}
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <Typography align="center" variant="h5">
                    quantity: {item.quantity}
                  </Typography>
                  {item.description ? (
                    <Typography align="center" variant="h5">
                      description: {item.description}
                    </Typography>
                  ) : (
                    <p></p>
                  )}
                  {item.tag ? (
                    <Typography align="center" variant="h5">
                      tag: {item.tag}
                    </Typography>
                  ) : (
                    <p></p>
                  )}
                  {item.blockchain ? (
                    <Typography align="center" variant="h5">
                      blockchain: {item.blockchain}
                    </Typography>
                  ) : (
                    <p></p>
                  )}
                  <Typography align="center" variant="h4">
                    Price: {item.price} $
                  </Typography>
                </Box>
                <LikeOrDis
                  params={params.id}
                  likeStyle={{ backgroundColor: "#58D68D" }}
                  unLikeStyle={{ backgroundColor: "#E8FFF2" }}
                  disStyle={{ backgroundColor: "#F14B1E" }}
                  unDisStyle={{ backgroundColor: "#FFDBD2" }}
                  isLike={item.like}
                  isDis={item.dislike}
                />
              </Box>
              <Box align="center" sx={{ mt: 3 }}>
                <AddToCartItem item={item} params={params} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </>
    );
};
