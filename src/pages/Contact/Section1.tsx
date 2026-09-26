import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const VisionSection: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: {
          xs: "auto",
          sm: "253px",
          md: "253px",
        },
        backgroundColor: "#141414",
        color: "#ffffff",
        boxSizing: "border-box",
        px: {
          xs: "20px",
          sm: "35px",
          md: "61px",
        },
        pt: {
          xs: "45px",
          sm: "58px",
          md: "76px",
        },
        pb: {
          xs: "45px",
          sm: "55px",
          md: "60px",
        },
        overflow: "hidden",
      }}
    >
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        sx={{
          width: "100%",
          maxWidth: "843px",
          borderBottom: "1px solid #242424",
          pb: "16px",
        }}
      >
        {/* ================= SMALL HEADING ================= */}
        <MotionBox
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          sx={{
            mb: {
              xs: "16px",
              md: "20px",
            },
          }}
        >
          <Typography
            component="div"
            sx={{
              fontFamily: "Sora, sans-serif",
              fontSize: {
                xs: "11px",
                sm: "12px",
                md: "14px",
              },
              lineHeight: "100%",
              fontWeight: 600,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              color: "#F4DC80",
              m: 0,
            }}
          >
            START YOUR PROJECT
          </Typography>
        </MotionBox>

        {/* ================= MAIN HEADING ================= */}
        <MotionBox
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
              filter: "blur(8px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          sx={{
            mb: {
              xs: "16px",
              md: "20px",
            },
          }}
        >
          <Typography
            component="h1"
            sx={{
              margin: 0,
              fontFamily: "Sora, sans-serif",
              fontSize: {
                xs: "32px",
                sm: "44px",
                md: "54px",
                lg: "64px",
              },
              lineHeight: {
                xs: "42px",
                sm: "52px",
                md: "64px",
                lg: "76px",
              },
              fontWeight: 700,
              letterSpacing: "0%",
              background:
                "linear-gradient(91.16deg, #6655EB 1.74%, #FFFFFF 43.78%, #FFFFFF 61.72%, #6655EB 102.64%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              width: "fit-content",
              maxWidth: "100%",
              animation: "gradientMove 6s ease-in-out infinite",

              "@keyframes gradientMove": {
                "0%": {
                  backgroundPosition: "0% center",
                },
                "50%": {
                  backgroundPosition: "100% center",
                },
                "100%": {
                  backgroundPosition: "0% center",
                },
              },
            }}
          >
            Tell Us About Your Vision
          </Typography>
        </MotionBox>

        {/* ================= DESCRIPTION ================= */}
        <MotionBox
          variants={{
            hidden: {
              opacity: 0,
              y: 25,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          <Typography
            component="p"
            sx={{
              margin: 0,
              maxWidth: "600px",
              fontFamily: "Sora, sans-serif",
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "18px",
              },
              lineHeight: {
                xs: "22px",
                sm: "25px",
                md: "28px",
              },
              fontWeight: 400,
              letterSpacing: "0%",
              color: "#8C8C8C",
            }}
          >
            Complete the design brief below, and our engineering partners will
            analyze
            <br className="desktop-break" /> your scope and get back to you
            within 24 hours.
          </Typography>
        </MotionBox>
      </MotionBox>

      {/* ================= MOBILE RESPONSIVE STYLES ================= */}
      <style>
        {`
          @media (max-width: 600px) {
            .desktop-break {
              display: none;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default VisionSection;