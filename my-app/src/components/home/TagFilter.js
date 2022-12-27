import { Button, Typography } from "@mui/material";
import { useEffect } from "react";

export const TagFilter = ({ items, setFiltered, activeTag, setActiveTag }) => {
  useEffect(() => {
    if (activeTag === 0) {
      setFiltered(items);
      return;
    }
    const filtered = items?.filter((item) => item.tag.includes(activeTag));
    setFiltered(filtered)
  }, [activeTag]);
  return (
    <>
    <Typography variant="h5" sx={{mr: 6}}>You can sort it by tags</Typography>
      <Button sx={{ mr: "1.5rem" }} variant="contained"
      onClick={() => setActiveTag(0)}>All</Button>
      <Button sx={{ mr: "1.5rem" }} variant="contained"
      onClick={() => setActiveTag("Art")}>Art</Button>
      <Button sx={{ mr: "1.5rem" }} variant="contained"
      onClick={() => setActiveTag("Photo")}>Photo</Button>
    </>
  );
};
