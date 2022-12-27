import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import file1 from "../others/file1.png";
import md5 from "md5";
import { Theme } from "../others/Theme";
import { Logout } from "./Logout";

export const Header = () => {
  const pages = [
    { text: "Home", href: "/" },
    { text: "Create", href: "/create" },
    { text: "Cart", href: "/cart" },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  return (
    <AppBar sx={{ m: 0, p: 0 }} position="static">
      <Container sx={{ m: 0, p: 0 }} maxWidth="xl">
        <Toolbar sx={{ m: 0, p: 0 }}>
          <Box sx={{ m: 0, p: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={(e) => setAnchorElNav(e.currentTarget)}
            >
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorElNav} keepMounted open={Boolean(anchorElNav)} onClose={(e) => setAnchorElNav(null)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem onClick={(e) => setAnchorElNav(null)}>
                  <Button justifyContent="center" key={md5(page.text)} onClick={(e) => setAnchorElNav(null)} href={page.href}
                    sx={{
                      backgroundColor: Theme.palette.otherColor.light,
                      color: "#888",
                      "&:hover": {
                        backgroundColor: Theme.palette.otherColor.main,
                      }}}>
                    {page.text}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img src={file1} height={40} width={40} alt="" />
          <Typography variant="h5" noWrap component="a" href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Babai Market
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button key={md5(page.text)} onClick={(e) => setAnchorElNav(null)} href={page.href}
                sx={{
                  backgroundColor: Theme.palette.otherColor.light,
                  color: "#888", "&:hover": {
                    backgroundColor: Theme.palette.otherColor.main,
                  },
                }}>
                {page.text}
              </Button>
            ))}
          </Box>
          <Logout />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
