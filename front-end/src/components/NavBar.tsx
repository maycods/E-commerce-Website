import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  keyframes,
  Container,
  Box,
  Avatar,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useStore, useRole, Role } from "../Store";
import { ShoppingCart } from "@mui/icons-material";
import { useUser } from "../hooks/useUser";

export function NavBar() {
  // const { role, setRole } = useRole((state) => state);
  const { user } = useUser();
  const nbItems = useStore((state) => state.nbItems);
  // const navigate = useNavigate();

  // function handleChangeUser(e: SelectChangeEvent<Role>) {
  //   setRole(e.target.value as unknown as Role);
  //   navigate

  // }
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
            {/* <StoreIcon /> */}
          </Box>
          {/* <Select value={role} onChange={(e) => handleChangeUser(e)}>
            <MenuItem value={Role.buyer}>Buyer</MenuItem>
            <MenuItem value={Role.seller}>Seller</MenuItem>
          </Select> */}
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
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h6">
              {user?.firstName} {user?.lastName}
            </Typography>

            <Avatar alt="Remy Sharp" src={user?.image} />
          </Box>
          {/* <Button component={Link} to="/login" color="inherit">
          Login
        </Button> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
