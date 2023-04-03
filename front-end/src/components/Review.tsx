import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useCheckout } from "../Store";

export default function Review() {
  const { firstName, lastName, items, address, cardName, cardExpiry } =
    useCheckout((state) => state.checkout);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {items.map((product, idx) => (
          <ListItem key={idx} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={`${product.title} x ${product.quantity}`}
              secondary={product.category}
            />
            <Typography variant="body2">${product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {firstName}" "{lastName}
          </Typography>
          <Typography gutterBottom>{address}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>{cardName}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{cardExpiry}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
