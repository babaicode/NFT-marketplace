import { IconButton } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

export const LikeOrDis = ({
  params,
  likeStyle,
  unLikeStyle,
  isLike,
  disStyle,
  unDisStyle,
  isDis,
}) => {
  const [like, setLike] = useState(isLike);
  const [dislike, setDislike] = useState(isDis);
  const handleLike = () => {
    setLike(true);
    setDislike(false);
    axios
      .put(`http://localhost:3001/api/nft/like/${params}`, {
        like: true,
        dislike: false,
      });
  };
  const handleUnlike = () => {
    setLike(false);
    axios
      .put(`http://localhost:3001/api/nft/like/${params}`, {
        like: false,
        dislike: isDis,
      });
  };
  const handleDis = () => {
    setDislike(true);
    setLike(false);
    axios
      .put(`http://localhost:3001/api/nft/dislike/${params}`, {
        dislike: true,
        like: false,
      });
  };
  const handleUnDis = () => {
    setDislike(false);
    axios
      .put(`http://localhost:3001/api/nft/dislike/${params}`, {
        dislike: false,
        like: isLike,
      });
  };

  if (like === false && dislike === false) {
    return (
      <>
        <IconButton style={unLikeStyle} onClick={handleLike}>
          <ThumbUpIcon />
        </IconButton>
        <IconButton style={unDisStyle} onClick={handleDis}>
          <ThumbDownAltIcon />
        </IconButton>
      </>
    );
  } else if (like === true && dislike === true) {
    return (
      <>
        <IconButton style={likeStyle} onClick={handleLike}>
          <ThumbUpIcon />
        </IconButton>
        <IconButton style={disStyle} onClick={handleDis}>
          <ThumbDownAltIcon />
        </IconButton>
      </>
    );
  } else if (like === true && dislike === false) {
    return (
      <>
        <IconButton style={likeStyle} onClick={handleUnlike}>
          <ThumbUpIcon />
        </IconButton>
        <IconButton style={unDisStyle} onClick={handleDis}>
          <ThumbDownAltIcon />
        </IconButton>
      </>
    );
  } else if (like === false && dislike === true) {
    return (
      <>
        <IconButton style={unLikeStyle} onClick={handleLike}>
          <ThumbUpIcon />
        </IconButton>
        <IconButton style={disStyle} onClick={handleUnDis}>
          <ThumbDownAltIcon />
        </IconButton>
      </>
    );
  }

};