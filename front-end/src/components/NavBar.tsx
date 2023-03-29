import { AppBar, Toolbar, IconButton, Typography, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useStore } from "../Store";
import { ShoppingCart } from "@mui/icons-material";
import CategoryIcon from "@mui/icons-material/Category";
import StoreIcon from "@mui/icons-material/Store";
export function NavBar() {
  const nbItems = useStore((state) => state.nbItems);
  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            The E-Shop
          </Link>
        </Typography>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link
            to="/categories"
            style={{ color: "white", textDecoration: "none" }}
          >
            <CategoryIcon />
            Categories
          </Link>
        </Typography>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link
            to="/products"
            style={{ color: "white", textDecoration: "none" }}
          >
            <StoreIcon />
            Products
          </Link>
        </Typography>
        <IconButton
          aria-label="car"
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
    </AppBar>
  );
}
