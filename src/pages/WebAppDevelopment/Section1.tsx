import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const DevelopmentServicesSection: React.FC = () => {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.8,
            staggerChildren: 0.2,
          },
        },
      }}
      sx={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#0B0810",
        color: "#FFFFFF",
        px: {
          xs: 2.5,
          sm: 4,
          md: 6,
          lg: 8,
        },
        py: {
          xs: 7,
          sm: 8,
          md: 10,
          lg: 12,
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        overflow: "hidden",
      }}
    >
      {/* ================= SERVICE TAG ================= */}
      <MotionBox
        variants={{
          hidden: {
            opacity: 0,
            y: 25,
            scale: 0.9,
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        whileHover={{
          scale: 1.05,
        }}
        sx={{
          mb: {
            xs: 2.5,
            sm: 3,
          },
        }}
      >
        <Chip
          label="SERVICES / DEVELOPMENT"
          variant="outlined"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 600,
            fontSize: {
              xs: "10px",
              sm: "11px",
              md: "12px",
            },
            height: {
              xs: "30px",
              sm: "32px",
              md: "34px",
            },
            color: "#FFFFFF",
            borderColor: "#6655EB",
            borderRadius: "18px",
            transition: "all 0.3s ease",
            "& .MuiChip-label": {
              px: {
                xs: 1.5,
                sm: 2,
              },
            },
          }}
        />
      </MotionBox>

      {/* ================= MAIN HEADING ================= */}
      <MotionBox
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
            filter: "blur(8px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        sx={{
          width: "100%",
          maxWidth: {
            xs: "100%",
            sm: "850px",
            md: "1000px",
            lg: "1200px",
          },
          mb: {
            xs: 2.5,
            sm: 3,
            md: 3.5,
          },
        }}
      >
        <Typography
          component="h1"
          sx={{
            width: "100%",
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,

            fontSize: {
              xs: "34px",
              sm: "42px",
              md: "52px",
              lg: "64px",
              xl: "72px",
            },

            lineHeight: {
              xs: 1.15,
              sm: 1.15,
              md: 1.15,
              lg: "76px",
              xl: "84px",
            },

            letterSpacing: {
              xs: "-1px",
              sm: "-1.5px",
              md: "-2px",
              lg: "-2.5px",
            },

            background:
              "linear-gradient(91.16deg, #6655EB 1.74%, #FFFFFF 43.78%, #FFFFFF 61.72%, #6655EB 102.64%)",

            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Web & Mobile App Development
        </Typography>
      </MotionBox>

      {/* ================= DESCRIPTION ================= */}
      <MotionBox
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        sx={{
          width: "100%",
          maxWidth: {
            xs: "100%",
            sm: "600px",
            md: "640px",
          },
        }}
      >
        <Typography
          component="p"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 400,

            fontSize: {
              xs: "14px",
              sm: "15px",
              md: "16px",
              lg: "18px",
            },

            lineHeight: {
              xs: "23px",
              sm: "25px",
              md: "27px",
              lg: "28px",
            },

            color: "#8C8C8C",
            m: 0,
          }}
        >
          Custom responsive websites, SaaS platforms, and cross-platform
          mobile applications engineered for exceptional performance, modern
          design, and robust scalability.
        </Typography>
      </MotionBox>
    </MotionBox>
  );
};

export default DevelopmentServicesSection;