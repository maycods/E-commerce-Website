import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <>
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
    </>
  );
};
