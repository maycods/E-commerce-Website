import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Product, useStore } from "../Store";
import axios from "axios";
import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

export const ProductCatalog = () => {
  const addToCart = useStore((state) => state.addToCart);
  const products = useProducts();
  return (
    <Box sx={{ padding: "16px" }}>
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
