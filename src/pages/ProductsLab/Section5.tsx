import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const ClientAdvantageSection: React.FC = () => {
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
        px: { xs: 3, sm: 6, md: 10, lg: 16 },
        py: { xs: 8, sm: 10, md: 14 },
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
      {/* The Client Advantage Tag */}
      <MotionBox
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        sx={{ mb: 4 }}
      >
        <Chip
          label="THE CLIENT ADVANTAGE"
          variant="outlined"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "10px", sm: "11px" },
            color: "#FFFFFF",
            borderColor: "#6655EB",
            borderRadius: "16px",
            backgroundColor: "#6655EB22",
            "& .MuiChip-label": {
              px: 2.5,
            },
          }}
        />
      </MotionBox>

      {/* Main Quote Heading */}
      <MotionTypography
        component="blockquote"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        sx={{
          fontFamily: "Sora, sans-serif",
          fontWeight: 600,
          fontSize: { xs: "20px", sm: "28px", md: "36px", lg: "42px" },
          lineHeight: { xs: 1.4, md: 1.2 },
          color: "#FFFFFF",
          maxWidth: "1050px",
          mb: 5,
          m: 0,
          p: 0,
        }}
      >
        "When you hire Alpha Zeta World, you are working with developers and strategists who have built and shipped real commercial products — not just client websites. We understand the full lifecycle because we live it every day."
      </MotionTypography>

      {/* Author / Directive Signature */}
      <MotionTypography
        component="cite"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        sx={{
          fontFamily: "Sora, sans-serif",
          fontWeight: 600,
          fontSize: { xs: "11px", sm: "12px" },
          letterSpacing: "0.1em",
          color: "#F4DC80",
          fontStyle: "normal",
          display: "block",
        }}
      >
        – ALPHA ZETA WORLD SYSTEM DIRECTIVE
      </MotionTypography>
    </MotionBox>
  );
};

export default ClientAdvantageSection;