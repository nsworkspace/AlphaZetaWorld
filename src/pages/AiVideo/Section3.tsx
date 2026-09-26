import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const whyAIPoweredItems = [
  {
    title: "Faster Turnaround",
    description: "We deploy complete high-fidelity variations in days rather than waiting for weeks of scheduling.",
  },
  {
    title: "Lower Production Costs",
    description: "Omit studio fees, model casting, travel, and complex logistics of classical filming.",
  },
  {
    title: "A/B Hook Testing at Scale",
    description: "Test dozens of dynamic script hooks and visual clips to instantly optimize ad spend.",
  },
];

const whoIsThisForItems = [
  {
    title: "D2C Brands",
    description: "Brands running high-velocity paid acquisition looking to scale hook testing.",
  },
  {
    title: "E-Commerce Builders",
    description: "Curated shops looking to populate hundreds of product lines with sleek short video reels.",
  },
  {
    title: "Startups & Growth Teams",
    description: "Agile teams that need automated customer funnels on social platforms.",
  },
];

const WhyAIPoweredSection = () => {
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
      }}
    >
      <Grid container spacing={{ xs: 6, md: 8 }}>
        {/* Left Column: Why AI-Powered? */}
        <Grid size={{ xs: 12, md: 6 }}>
          <MotionTypography
            component="h2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            sx={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 700,
              fontSize: { xs: "28px", sm: "32px", md: "38px" },
              lineHeight: 1.2,
              color: "#FFFFFF",
              mb: { xs: 3, md: 4 },
            }}
          >
            Why AI-Powered?
          </MotionTypography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 3, md: 3.5 } }}>
            {whyAIPoweredItems.map((item, index) => (
              <MotionBox
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: "16px", sm: "17px", md: "18px" },
                    lineHeight: "26px",
                    color: "#F4DC80",
                    mb: 0.5,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 400,
                    fontSize: { xs: "13px", sm: "14px", md: "15px" },
                    lineHeight: "22px",
                    color: "#8C8C8C",
                    m: 0,
                  }}
                >
                  {item.description}
                </Typography>
              </MotionBox>
            ))}
          </Box>
        </Grid>

        {/* Right Column: Who Is This For? */}
        <Grid size={{ xs: 12, md: 6 }}>
          <MotionTypography
            component="h2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            sx={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 700,
              fontSize: { xs: "28px", sm: "32px", md: "38px" },
              lineHeight: 1.2,
              color: "#FFFFFF",
              mb: { xs: 3, md: 4 },
            }}
          >
            Who Is This For?
          </MotionTypography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 3, md: 3.5 } }}>
            {whoIsThisForItems.map((item, index) => (
              <MotionBox
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: "16px", sm: "17px", md: "18px" },
                    lineHeight: "26px",
                    color: "#6655EB",
                    mb: 0.5,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 400,
                    fontSize: { xs: "13px", sm: "14px", md: "15px" },
                    lineHeight: "22px",
                    color: "#8C8C8C",
                    m: 0,
                  }}
                >
                  {item.description}
                </Typography>
              </MotionBox>
            ))}
          </Box>
        </Grid>
      </Grid>
    </MotionBox>
  );
};

export default WhyAIPoweredSection;