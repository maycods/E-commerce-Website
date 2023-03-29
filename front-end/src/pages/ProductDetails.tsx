import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { Product, useStore } from "../Store";
import axios from "axios";
export default function ProductDetails() {
  const addToCart = useStore((state) => state.addToCart);
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();

  // useEffect(() => {
  //   // Fetch the product data from your backend server using the productId parameter
  //   fetch(`/api/articles/${productId}`)
  //     .then((response) => response.json())
  //     .then((data) => setProduct(data))
  //     .catch((error) => console.error(error));
  // }, [productId]);
  async function getProduct() {
    const response = await axios.get(
      `https://dummyjson.com/products/${productId}`
    );

    const elt = await response.data;
    console.log(elt);

    let prods: Product = {
      id: elt.id,
      title: elt.title,
      price: elt.price,
      description: elt.description,
      image: elt.images[0],
      rating: elt.rating,
      stock: elt.stock,
      category: elt.category,
      thumbnail: elt.thumbnail,
    };
    setProduct(prods);
  }

  useEffect(() => {
    // Fetch the product data from your backend server using the productId parameter
    getProduct();
  }, [productId]);
  if (!product) {
    return <div>Loading...</div>;
  }

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
