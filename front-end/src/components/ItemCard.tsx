import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../Store";

export const ItemCard = ({ product }: { product: Product }) => {
  return (
    <Grid flexGrow={1} item xs={12} sm={6} md={4} key={product.id}>
      <Card sx={{ height: "100%" }}>
        <Link to={`${product.id}`} style={{ textDecoration: "none" }}>
          <CardMedia
            component="img"
            alt={product.title}
            height="230"
            image={product.image}
          />
        </Link>
        <CardContent>
          <Typography variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography color="textSecondary">{product.description}</Typography>
          <Typography variant="h6">${product.price}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
