import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";
import { ItemCard } from "../components/ItemCard";
import Sidebar from "../components/SideBar";
import { useProducts } from "../hooks/useProducts";

export const ProductCatalog = () => {
  const products = useProducts();
  return (
    <Grid2 container spacing={3} marginTop="1rem">
      <Grid2 xs={12} sm={3}>
        <Sidebar />
      </Grid2>
      <Grid2 xs={12} sm={9}>
        <Typography variant="h3" component="h1" textAlign="center">
          All Products
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{
            marginTop: "1rem",
          }}
        >
          {products.map((product) => (
            <ItemCard product={product} key={product.id} />
          ))}
        </Grid>
      </Grid2>
    </Grid2>
  );
};
