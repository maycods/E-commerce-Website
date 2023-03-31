import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Image from "mui-image";
import { useStore } from "../Store";
import { useProduct } from "../hooks/useProduct";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function ProductDetails() {
  const addToCart = useStore((state) => state.addToCart);
  const product = useProduct();
  // a product details page, the image on the left and the name, price rating description add to cart button and the quantity on the right\

  return (
    <Grid2 container spacing={8}>
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
            height="80%"
            fit="contain"
          />
        </Box>
      </Grid2>
      <Grid2 md={4}>
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
      </Grid2>
    </Grid2>
  );
  // return (
  //   <Card>
  //     <CardMedia
  //       component="img"
  //       height="300"
  //       image={product.image}
  //       alt={product.title}
  //     />
  //     <CardContent>
  //       <Typography variant="h5" component="h2">
  //         {product.title}
  //       </Typography>
  //       <Typography variant="body1" color="textSecondary" component="p">
  //         {product.description}
  //       </Typography>
  //       <Typography variant="h6" component="p">
  //         Price: ${product.price}
  //       </Typography>
  //       <Button
  //         variant="contained"
  //         color="primary"
  //         onClick={() => addToCart(product)}
  //       >
  //         Add to Cart
  //       </Button>
  //     </CardContent>
  //   </Card>
  // );
}

// export default ProductDetails;
