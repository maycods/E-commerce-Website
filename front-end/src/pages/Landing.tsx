import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FancyText from "@carefully-coded/react-text-gradient";
import { useEffect, useState } from "react";

import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
export const Landing = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box display="flex" justifyContent="center" paddingTop="16vh">
        <Typography
          textAlign="center"
          variant="h1"
          component="h1"
          // fontWeight=""
          gutterBottom
          letterSpacing={3}
          sx={{
            fontWeight: "bold",
          }}
        >
          <FancyText
            gradient={{ from: "#FE6B8B", to: "#FF8E53", type: "linear" }}
            animateDuration={1000}
          >
            The Sii Store
          </FancyText>
        </Typography>
      </Box>
      <Typography
        textAlign="center"
        variant="h4"
        component="h2"
        fontWeight="semiBold"
        marginTop={7}
        maxWidth="60%"
        lineHeight={1.5}
        sx={{
          color: "#888",
        }}
      >
        Shop anytime, anywhere with our ecommerce website and enjoy a
        hassle-free shopping <span></span>
        <FancyText
          gradient={{ from: "#FF19CD", to: "#970DFF", type: "linear" }}
          style={{ fontWeight: "bold" }}
        >
          {"   "}
          experience!
        </FancyText>
      </Typography>
      <Button
        component={Link}
        to="/products"
        startIcon={<ChangeHistoryIcon />}
        sx={{
          color: "#fff",
          border: "solid 1px #007FFF",
          borderRadius: "0.7rem",
          marginTop: "2rem",
          padding: "0.8rem 1.8rem",
          fontWeight: "semiBold",
          fontSize: "1.2rem",
          "&:hover": {
            background: "linear-gradient(45deg, #0db2ff 30%, #007FFF 90%)",
            color: "#000",
            boxShadow: "0px 0px 30px 2px #0080ff99",
          },
          borderImageSlice: 1,
        }}
        size="large"
      >
        View Products
      </Button>
    </Box>
  );
};
