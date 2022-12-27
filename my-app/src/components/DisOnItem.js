import { IconButton } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

export const DisOnItem = ({ params, disStyle, unDisStyle, isDis, }) => {
  const [dislike, setDislike] = useState(isDis);

  const handleDis = () => {
         setDislike(true);
    axios
      .put(`http://localhost:3001/api/nft/dislike/${params}`, { dislike: true })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUnDis = () => {
         setDislike(false);
    axios
      .put(`http://localhost:3001/api/nft/dislike/${params}`, { dislike: false })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (dislike === false) {
    return (
      <IconButton style={disStyle} onClick={handleDis}>
        <ThumbDownAltIcon />
      </IconButton>
    );
  } else if(dislike === true) {
    return (
      <IconButton style={unDisStyle} onClick={handleUnDis}>
        <ThumbDownAltIcon />
      </IconButton>
    );
  }

  return null
};
