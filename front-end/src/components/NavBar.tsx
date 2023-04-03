import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  keyframes,
  Container,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useStore } from "../Store";
import { ShoppingCart } from "@mui/icons-material";
import CategoryIcon from "@mui/icons-material/Category";
import StoreIcon from "@mui/icons-material/Store";

export function NavBar() {
  const nbItems = useStore((state) => state.nbItems);
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
          <Typography
            variant="h4"
            style={{ flexGrow: 1 }}
            sx={{
              // text color gradient :
              backgroundImage:
                "linear-gradient(to right, #7F00FF, #E100FF, #FF007F, #FF7F00, #FFFF00, #00FF00, #00FFFF, #007FFF, #0000FF, #7F00FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              The E-Shop
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "space-around",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Typography variant="h6">
              <Link
                to="/categories"
                style={{ color: "white", textDecoration: "none" }}
              >
                {/* <CategoryIcon /> */}
                Categories
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link
                to="/products"
                style={{ color: "white", textDecoration: "none" }}
              >
                Products
              </Link>
            </Typography>
            {/* <Typography variant="h6">
              <Link
                to="/discounts"
                style={{ color: "white", textDecoration: "none" }}
              >
                Discounts
              </Link>
            </Typography> */}
          </Box>
          {/* <StoreIcon /> */}
          <IconButton
            aria-label="cart"
            component={Link}
            to="/cart"
            color="inherit"
          >
            <Badge badgeContent={nbItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          {/* <Button component={Link} to="/login" color="inherit">
          Login
        </Button> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
