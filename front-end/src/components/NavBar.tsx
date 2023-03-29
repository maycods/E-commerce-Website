import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export function NavBar() {
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
        <Button component={Link} to="/cart" color="inherit">
          Cart
        </Button>
        {/* <Button component={Link} to="/login" color="inherit">
          Login
        </Button> */}
      </Toolbar>
    </AppBar>
  );
}
