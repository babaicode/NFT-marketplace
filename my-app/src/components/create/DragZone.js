import { Box, Typography } from "@mui/material";
import Dropzone from "react-dropzone";
import { Theme } from "../../others/Theme";
import folder from "../../others/folder.png";

export const DragZone = ({onDrop}) => {
  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <Box
          sx={{
            bgcolor: Theme.palette.otherColor.main,
            boxShadow: 1,
            borderRadius: 5, p: 2, m: 1, mt: 3, ml: 2, mr: 2, mb: 2, pb: 8
          }}
          {...getRootProps()}
        >
          <section style={{ height: "10rem" }}>
            <div>
              <input {...getInputProps()} />
              <Typography align="center">
                <img src={folder} height={50} width={50} alt=""/>
              </Typography>
              <Typography align="center">
                Drag 'n' drop some files here, or click to select files
              </Typography>
            </div>
          </section>
        </Box>
      )}
    </Dropzone>
  );
};
