import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useStore } from "../Store";
import { useProduct } from "../hooks/useProduct";

export default function ProductDetails() {
  const addToCart = useStore((state) => state.addToCart);
  const product = useProduct();
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {product.title}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography variant="h6" component="p">
          Price: ${product.price}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

// export default ProductDetails;
