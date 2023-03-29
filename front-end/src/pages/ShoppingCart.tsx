import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useStore } from "../Store";
export const ShoppingCart = () => {
  const cartItems = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  // const cartItems = [
  //   {
  //     id: 1,
  //     name: "Product 1",
  //     image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  //     price: 10,
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     image: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  //     price: 20,
  //   },
  //   {
  //     id: 3,
  //     name: "Product 3",
  //     image: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
  //     price: 30,
  //   },
  // ];
  console.log(cartItems);

  return (
    <div style={{ padding: "16px" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemAvatar>
                <Avatar alt={item.title} src={item.image} />
              </ListItemAvatar>
              <ListItemText primary={item.title} secondary={`$${item.price}`} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => removeFromCart(item)}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};
