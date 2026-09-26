import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const WantToBuildSection: React.FC = () => {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.8,
            staggerChildren: 0.15,
          },
        },
      }}
      sx={{
        backgroundColor: "#141414",
        color: "#FFFFFF",
        px: { xs: 3, sm: 4, md: 6, lg: 8 },
        py: { xs: 8, sm: 10, md: 12 },
        width: "100%",
        boxSizing: "border-box",
        borderBottom: "1px solid #FFFFFF1A",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Main Heading */}
      <MotionTypography
        component="h2"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        sx={{
          fontFamily: "Sora, sans-serif",
          fontWeight: 700,
          fontSize: { xs: "28px", sm: "36px", md: "46px", lg: "52px" },
          lineHeight: { xs: 1.2, md: 1.25 },
          color: "#F4DC80",
          mb: 2,
          maxWidth: "900px",
        }}
      >
        Want to Build Something Like This?
      </MotionTypography>

      {/* Description Text */}
      <MotionTypography
        component="p"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        sx={{
          fontFamily: "Sora, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "14px", sm: "15px", md: "17px" },
          lineHeight: { xs: "24px", md: "28px" },
          color: "#8C8C8C",
          maxWidth: "650px",
          mb: 5,
          m: 0,
        }}
      >
        Whether you want to license one of our proprietary tools or construct a custom product for your business — our team is ready to scale.
      </MotionTypography>

      {/* Buttons Action Group */}
      <MotionBox
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        sx={{mt: 2}}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          {/* Primary Yellow Button */}
          <Button
            variant="contained"
            sx={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              textTransform: "none",
              backgroundColor: "#F4DC80",
              color: "#1A1A1A",
              borderRadius: "28px",
              px: 4,
              py: 1.5,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#e5c94f",
                boxShadow: "none",
              },
            }}
          >
            Start a Project
          </Button>

          {/* Secondary Outline / Dark Button */}
          <Button
            variant="outlined"
            sx={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              textTransform: "none",
              backgroundColor: "#141416",
              color: "#FFFFFF",
              borderColor: "#222226",
              borderRadius: "28px",
              px: 4,
              py: 1.5,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#1C1C21",
                borderColor: "#6655EB",
              },
            }}
          >
            Book a Strategy Call
          </Button>
        </Stack>
      </MotionBox>
    </MotionBox>
  );
};

export default WantToBuildSection;