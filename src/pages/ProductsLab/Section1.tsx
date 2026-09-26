import React from "react";
import { Box, Typography, Button, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const DigitalProductLabSection: React.FC = () => {
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
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
        py: { xs: 7, sm: 8, md: 10, lg: 12 },
        width: "100%",
        boxSizing: "border-box",
        borderBottom: "1px solid #FFFFFF1A",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {/* Proprietary Product Portfolio Tag */}
      <MotionBox
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
          },
        }}
        sx={{ mb: 2.5 }}
      >
        <Chip
          label="PROPRIETARY PRODUCT PORTFOLIO"
          variant="outlined"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "10px", sm: "11px" },
            color: "#F4DC80",
            borderColor: "#F4DC8055",
            borderRadius: "16px",
            backgroundColor: "#141416",
            "& .MuiChip-label": {
              px: 2,
            },
          }}
        />
      </MotionBox>

      {/* Main Heading */}
      <MotionBox
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
          },
        }}
        sx={{
          maxWidth: "900px",
          mb: 2.5,
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
            fontSize: {
              xs: "32px",
              sm: "44px",
              md: "56px",
              lg: "64px",
            },
            lineHeight: {
              xs: 1.15,
              md: 1.1,
            },
            letterSpacing: "-1px",
            background:
              "linear-gradient(92.13deg, #FEDC5A 11.79%, #FFFFFF 109.28%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            m: 0,
          }}
        >
          Digital Product Lab
        </Typography>
      </MotionBox>

      {/* Description Text */}
      <MotionBox
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
          },
        }}
        sx={{
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <Typography
          component="p"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: {
              xs: "16px",
              sm: "18px",
              md: "22px",
            },
            lineHeight: {
              xs: "26px",
              sm: "30px",
              md: "34px",
            },
            letterSpacing: "0%",
            color: "#8C8C8C",
            m: 0,
          }}
        >
          Our proprietary suite of websites, applications, SaaS tools, and
          consumer digital products. Built, launched, and operated by Alpha
          Zeta World.
        </Typography>
      </MotionBox>

      {/* Buttons Action Group */}
      <MotionBox
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
          },
        }}
        sx={{
          mt: 4,
          display: "flex",
        }}
      >
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={2}
          sx={{
            alignItems: {
            xs: "stretch",
            sm: "center",
            },
          }}
        >
          {/* Primary Light Button */}
          <Button
            variant="contained"
            sx={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              textTransform: "none",
              backgroundColor: "#FFFFFF",
              color: "#1A1A1A",
              borderRadius: "28px",
              px: 4,
              py: 1.5,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#E2E2E2",
                boxShadow: "none",
              },
            }}
          >
            Explore Products
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
            Read Our Thesis ↗
          </Button>
        </Stack>
      </MotionBox>
    </MotionBox>
  );
};

export default DigitalProductLabSection;