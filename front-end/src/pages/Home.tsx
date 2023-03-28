import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export const Home = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            My Ecommerce Website
          </Typography>
          <Button component={Link} to="/cart" color="inherit">
            Cart
          </Button>
          {/* <Button component={Link} to="/login" color="inherit">
            Login
          </Button> */}
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: "64px", textAlign: "center" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to My Ecommerce Website!
        </Typography>
        <Button
          component={Link}
          to="/products"
          variant="contained"
          color="primary"
        >
          View Products
        </Button>
      </div>
    </div>
  );
};
