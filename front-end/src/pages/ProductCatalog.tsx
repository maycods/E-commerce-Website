import { Typography, Grid } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ItemCard } from "../components/ItemCard";
import Sidebar from "../components/SideBar";
import { useProducts } from "../hooks/useProducts";
import { useStore } from "../Store";

export const ProductCatalog = () => {
  const category = useStore((state) => state.category);
  const products = useProducts(category);
  return (
    <Grid2 container justifyContent="space-between" spacing={0}>
      <Grid2 md>
        <Sidebar />
      </Grid2>
      <Grid2 md={10}>
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
          {category ? category : "All Products"}
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <ItemCard product={product} key={product.id} />
          ))}
        </Grid>
      </Grid2>
    </Grid2>
  );
};
