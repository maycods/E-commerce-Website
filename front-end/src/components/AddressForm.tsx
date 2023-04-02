import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useCheckout } from "../Store";

export default function AddressForm() {
  const setCheckout = useCheckout((state) => state.setCheckout);
  const checkout = useCheckout((state) => state.checkout);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={checkout.firstName}
            onChange={(e) =>
              setCheckout({ ...checkout, firstName: e.target.value })
            }
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={checkout.lastName}
            onChange={(e) =>
              setCheckout({ ...checkout, lastName: e.target.value })
            }
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            value={checkout.address}
            onChange={(e) =>
              setCheckout({ ...checkout, address: e.target.value })
            }
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={checkout.city}
            onChange={(e) => setCheckout({ ...checkout, city: e.target.value })}
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={checkout.zip}
            onChange={(e) => setCheckout({ ...checkout, zip: e.target.value })}
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={checkout.country}
            onChange={(e) =>
              setCheckout({ ...checkout, country: e.target.value })
            }
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </>
  );
}
