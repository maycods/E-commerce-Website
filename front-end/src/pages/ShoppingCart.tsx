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
  Box,
  Button,
} from "@mui/material";
import { CheckOutlined, Delete } from "@mui/icons-material";
import { useCheckout, useStore } from "../Store";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Navigate, useNavigate } from "react-router-dom";
export const ShoppingCart = () => {
  const cartItems = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const setCheckout = useCheckout((state) => state.setCheckout);
  const checkout = useCheckout((state) => state.checkout);
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: "16px" }}>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography textAlign="center">Your cart is empty.</Typography>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
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
                        <Delete color="error" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            sx={{ marginTop: 4 }}
            variant="contained"
            startIcon={<ShoppingCartCheckoutIcon />}
            onClick={() => {
              setCheckout({ ...checkout, items: cartItems });
              navigate("/checkout");
            }}
          >
            chekcout
          </Button>
        </Box>
      )}
    </Box>
  );
};
