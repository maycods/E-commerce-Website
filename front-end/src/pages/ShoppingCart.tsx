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
