import * as React from "react";
import { Box, Stack, Grid, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import { InputData } from "../components/create/InputData";
import { DragZone } from "../components/create/DragZone";
import { CreateButton } from "../components/create/CreateButton";
import { SelectBlock } from "../components/create/SelectBlock";
import axios from "axios";
import md5 from "md5";

const nftDefaultState = {
  name: "",
  file: "",
  description: "",
  tag: "",
  price: "",
  quantity: "",
  blockchain: "",
  id: "",
};

export const CreateProduct = () => {
  const [nft, setNft] = useState(nftDefaultState);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showInputNameAlert, setShowInputNameAlert] = useState(false);
  const [showInputPriceAlert, setSsetShowInputPriceAlert] = useState(false);
  const [showInputQuantityAlert, setSsetShowInputQuantityAlert] = useState(false);

  const addNft = (event) => {
    event.preventDefault();
    if (!nft.name) {
      setShowInputNameAlert(true);
      return null;
    } else if (!nft.price) {
      setSsetShowInputPriceAlert(true);
      return null;
    } else if (!nft.quantity) {
      setSsetShowInputQuantityAlert(true);
      return null;
    } else {
      axios
        .post("http://localhost:3001/api/nft", nft)
        .then(function (response) {
          console.log(response);
          setShowSuccessAlert(true);
        })
        .catch(function (error) {
          console.log(error);
          setShowErrorAlert(true);
        });

      setNft(nftDefaultState);
      setTimeout(() => {
        setShowSuccessAlert(false);
        setShowErrorAlert(false);
      }, 2000);
    }
  };
  useEffect(() => {
    setNft({ ...nft, id: md5(nft.name), like: false, dislike: false});
  }, [nft]);
  return (
    <>
      <DragZone onDrop={(file) => setNft({ ...nft, file })} />
      <Box sx={{ width: "100%", ml: 2 }}>
        <Stack direction="row" spacing={2}>
          <Grid container spacing={3} sx={{ maxWidth: "50%" }}>
            <InputData
              value={nft.name}
              onChange={(e) => setNft({ ...nft, name: e.target.value })}
              label={"Name"}
            />
            <InputData
              value={nft.price}
              onChange={(e) => setNft({ ...nft, price: e.target.value })}
              label={"Price $"}
            />
            <InputData
              value={nft.quantity}
              onChange={(e) => setNft({ ...nft, quantity: e.target.value })}
              label={"Quantity"}
            />
          </Grid>

          <Grid container spacing={3} sx={{ maxWidth: "50%" }}>
            <SelectBlock
              value={nft.tag}
              onChange={(e) => setNft({ ...nft, tag: e.target.value })}
              label={"Tag"}
            />
            <SelectBlock
              value={nft.blockchain}
              onChange={(e) => setNft({ ...nft, blockchain: e.target.value })}
              label={"Blockchain"}
            />
          </Grid>
        </Stack>
      </Box>
      <InputData
        value={nft.description}
        onChange={(e) => setNft({ ...nft, description: e.target.value })}
        label={"Description"}
      />
      <CreateButton addNft={addNft} text={"create"} />

      {showSuccessAlert && (
        <Alert severity="success">NFT successfully created!</Alert>
      )}
      {showErrorAlert && <Alert severity="error">Something went wrong!</Alert>}
      {showInputNameAlert && (
        <Alert severity="error">Please provide a name!</Alert>
      )}
      {showInputPriceAlert && (
        <Alert severity="error">Please provide price!</Alert>
      )}
      {showInputQuantityAlert && (
        <Alert severity="error">Please provide quantity!</Alert>
      )}
    </>
  );
};
