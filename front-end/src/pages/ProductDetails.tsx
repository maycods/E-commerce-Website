import { Typography, Button, Box, Rating, TextField } from "@mui/material";
import Image from "mui-image";
import { useStore } from "../Store";
import { useProduct } from "../hooks/useProduct";
// import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ShoppingCart } from "@mui/icons-material";
import { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function ProductDetails() {
  const addToCart = useStore((state) => state.addToCart);
  const product = useProduct();

  const [qtt, setQtt] = useState(0);
  // a product details page, the image on the left and the name, price rating description add to cart button and the quantity on the right\

  return (
    <Grid2
      container
      spacing={4}
      alignItems="center"
      justifyContent="space-around"
    >
      <Grid2 md={8}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="85vh"
          overflow="hidden"
        >
          <Image
            src={product.image}
            alt={product.title}
            height="90%"
            width="81%"
            fit="contain"
          />
        </Box>
      </Grid2>
      <Grid2
        md={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "80vh",
          padding: "20px",
          border: "1px solid #fff",
        }}
      >
        <Typography variant="h4" component="h2" textAlign="center">
          {product.title}
        </Typography>
        <Box>
          <Typography variant="h6">Description :</Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Rating :</Typography>
          <Box display="flex">
            <Rating name="rating" value={product.rating} readOnly />
            <Typography>({product.rating})</Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Add Quantity :</Typography>
          <TextField
            label="Quantity "
            variant="outlined"
            type="number"
            size="medium"
            value={qtt}
            onChange={(e) => {
              parseInt(e.target.value) >= 0 &&
              product.quantity >= parseInt(e.target.value)
                ? setQtt(parseInt(e.target.value))
                : false;
            }}
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6" component="p">
            Price:
          </Typography>
          <Typography variant="h6">${product.price}</Typography>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            if (qtt > 0) {
              addToCart(product, qtt);
            }
          }}
        >
          <ShoppingCart />
          Add to Cart
        </Button>
      </Grid2>
    </Grid2>
  );
}
