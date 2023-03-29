import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../Store";
import axios from "axios";

export const ProductCatalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const getProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    const data = await response.data;
    let prods: Product[] = data.products.map(
      (elt: {
        id: any;
        name: any;
        price: any;
        description: any;
        images: any[];
        rating: any;
        stock: any;
        category: any;
        thumbnail: any;
      }) => {
        return {
          id: elt.id,
          name: elt.name,
          price: elt.price,
          description: elt.description,
          image: elt.images[0],
          rating: elt.rating,
          stock: elt.stock,
          category: elt.category,
          thumbnail: elt.thumbnail,
        };
      }
    );
    setProducts(prods);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ padding: "16px" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                alt={product.name}
                height="200"
                image={product.image}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography color="textSecondary">
                  {product.description}
                </Typography>
                <Typography variant="h6">${product.price}</Typography>
              </CardContent>
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
