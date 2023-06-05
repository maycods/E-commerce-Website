import { Copyright } from "@mui/icons-material";
import {
  Typography,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Box,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressForm from "../components/AddressForm";
import PaymentForm from "../components/PayementForm";
import Review from "../components/Review";
import { useStore } from "../Store";
import axios from "axios";
import { useUser } from "../hooks/useUser";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}
export const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useStore((state) => state.cart);
  const navigate = useNavigate();
  const { user } = useUser();
  //user without image

  console.log(user);
  async function addOrder() {
    //allow cross origin

    var date = new Date();

    // Extract the year, month, and day from the date object
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2); // Adding leading zero if necessary
    var day = ("0" + date.getDate()).slice(-2); // Adding leading zero if necessary

    // Format the date to yyyy-mm-dd
    var formattedDate = year + "-" + month + "-" + day;
    const url = "http://localhost:8000/postorder/";
    cart.map(async (elt) => {
      const response = await axios.post(
        url,
        {
          produitref: elt,
          customerref: user,
          qte: elt.quantity,
          rating: elt.rating,
          prixtotal: elt.price * elt.quantity,
          //set the date format to yyyy-mm-dd
          dateorder: formattedDate,
        }
        // {
        //   headers: { "X-CSRFToken": csrfToken },
        // }
      );
      console.log(response);
    });

    // const response = await axios.post("/api/postorder/",{})
  }
  const handleNext = () => {
    if (activeStep == 2) {
      console.log("hello");
      addOrder();
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);
  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4, mt: 20 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </>
  );
};
