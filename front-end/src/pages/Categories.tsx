import {
  Button,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { useCategories } from "../hooks/useCategories";
import { useProducts } from "../hooks/useProducts";
import Image from "mui-image";
import { IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Categories = () => {
  const categories = useCategories("");
  const products = useProducts("");
  console.log(products);
  console.log(categories);

  const navigate = useNavigate();
  return (
    <Grid container spacing={8} marginTop="1.5rem">
      {categories.map((category) => (
        <Grid
          item
          xs={12}
          md={12}
          key={category.id}
          sx={{
            backgroundColor: "#000",
            borderBottom: "solid  2px #0579ec",
          }}
        >
          <Typography variant="h3" textAlign="center" sx={{ marginBottom: 2 }}>
            {category.name}
          </Typography>

          <ImageList
            variant="masonry"
            gap={8}
            sx={{
              width: "100%",
              height: "50vh",
              overflowY: "hidden",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {products
              .filter((prod) => prod.category - 1 === category.id)
              .map((product) => (
                <ImageListItem key={product.id}>
                  <Link to={`/products/${product.id}`}>
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      height="50vh"
                      fit="contain"
                    />
                  </Link>
                  <ImageListItemBar
                    title={product.title}
                    // subtitle={`price: ${product.price}`}
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      color: "#fff",
                      fontSize: "2rem",
                    }}
                    actionIcon={
                      <IconButton
                        onClick={() => navigate(`/products/${product.id}`)}
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${product.title}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
          </ImageList>
        </Grid>
      ))}
    </Grid>
  );
};
