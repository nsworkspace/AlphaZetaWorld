import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const WhyWeBuildOurOwnProductsSection: React.FC = () => {
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
      <Grid container spacing={{ xs: 6, md: 8 }} alignItems="flex-start">
        {/* Left Column: Heading with decorative purple line */}
        <Grid size={{ xs: 12, md: 5 }}>
          <MotionTypography
            component="h2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            sx={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 700,
              fontSize: { xs: "32px", sm: "40px", md: "46px" },
              lineHeight: 1.15,
              color: "#FFFFFF",
              mb: 3,
            }}
          >
            Why We Build Our Own Products
          </MotionTypography>
          <MotionBox
            variants={{
              hidden: { opacity: 0, width: 0 },
              visible: { opacity: 1, width: "60px", transition: { duration: 0.6, delay: 0.2 } },
            }}
            sx={{
              height: "4px",
              backgroundColor: "#6655EB",
              borderRadius: "2px",
            }}
          />
        </Grid>

        {/* Right Column: Descriptions */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <MotionTypography
              component="p"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              sx={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "15px", sm: "16px", md: "17px" },
                lineHeight: "28px",
                color: "#8C8C8C",
                m: 0,
              }}
            >
              We don't just build for clients — we build for ourselves. Our proprietary products demonstrate our complete concept — development — launch — monetization capability.
            </MotionTypography>

            <MotionTypography
              component="p"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              sx={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                lineHeight: "26px",
                color: "#8C8C8C",
                m: 0,
              }}
            >
              By operating our own software businesses, we encounter and solve the exact same challenges our clients face: user acquisition, scaling infrastructure, platform analytics, and direct commercial monetization. It serves as live, tangible proof of our engineering and execution standards.
            </MotionTypography>
          </Box>
        </Grid>
      </Grid>
    </MotionBox>
  );
};

export default WhyWeBuildOurOwnProductsSection;