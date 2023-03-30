import { Typography, Grid } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ItemCard } from "../components/ItemCard";
import Sidebar from "../components/SideBar";
import { useProducts } from "../hooks/useProducts";

export const ProductCatalog = () => {
  const products = useProducts();
  return (
    <Grid2
      container
      justifyContent="space-between"
      // columns={{ xs: 4, sm: 8, md: 12 }}
      spacing={0}
      marginTop="2rem"
    >
      <Grid2 md>
        <Sidebar />
      </Grid2>
      <Grid2 md={10}>
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
          All Products
        </Typography>
        <Grid
          container
          spacing={3}
          // sx={{
          //   marginTop: "1rem",
          // }}
        >
          {products.map((product) => (
            <ItemCard product={product} key={product.id} />
          ))}
        </Grid>
      </Grid2>
    </Grid2>
  );
};
