import {
  Typography,
  IconButton,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Table,
  Paper,
  TableContainer,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useStore } from "../Store";
export const ShoppingCart = () => {
  const cartItems = useStore((state) => state.cart);
console.log(cartItems);
  
  const removeFromCart = useStore((state) => state.removeFromCart);

  return (
    <div style={{ padding: "16px" }}>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography textAlign="center">Your cart is empty.</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="right">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="right">${item.price}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">
                    ${item.price * item.quantity}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => removeFromCart(item)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        // <List>
        //   {cartItems.map((item) => (
        //     <ListItem key={item.id}>
        //       <ListItemAvatar>
        //         <Avatar alt={item.title} src={item.image} />
        //       </ListItemAvatar>
        //       <ListItemText primary={item.title} secondary={`$${item.price}`} />
        //       <ListItemSecondaryAction>
        //         <IconButton
        //           edge="end"
        //           aria-label="delete"
        //           onClick={() => removeFromCart(item)}
        //         >
        //           <Delete />
        //         </IconButton>
        //       </ListItemSecondaryAction>
        //     </ListItem>
        //   ))}
        // </List>
      )}
    </div>
  );
};
