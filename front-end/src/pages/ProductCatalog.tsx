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
import Sidebar from "../components/SideBar";
import { useProducts } from "../hooks/useProducts";

export const ProductCatalog = () => {
  const products = useProducts();
  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={12} sm={3}>
        <Sidebar />
      </Grid2>
      <Grid2 xs={12} sm={9}>
        {/* <Box sx={{ padding: "16px" }}> */}
        <Typography variant="h4" component="h1" gutterBottom>
          Products
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Link to={`${product.id}`} style={{ textDecoration: "none" }}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={product.title}
                    height="200"
                    image={product.image}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {product.title}
                    </Typography>
                    <Typography color="textSecondary">
                      {product.description}
                    </Typography>
                    <Typography variant="h6">${product.price}</Typography>
                  </CardContent>
                  {/* <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button> */}
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
        {/* </Box> */}
      </Grid2>
    </Grid2>
  );
};
