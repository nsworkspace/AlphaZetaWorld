import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Flutter",
  "React Native",
  "Tailwind CSS",
  "PostgreSQL",
  "Supabase",
  "Firebase",
  "Vercel",
  "AWS",
];

const TechStackSection = () => {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.8,
            staggerChildren: 0.08,
          },
        },
      }}
      sx={{
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        px: {
          xs: 2.5,
          sm: 4,
          md: 6,
          lg: 8,
        },
        py: {
          xs: 6,
          sm: 7,
          md: 8,
          lg: 10,
        },
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Section Title */}
      <MotionTypography
        component="h2"
        variants={{
          hidden: {
            opacity: 0,
            y: 35,
            filter: "blur(6px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        sx={{
          fontFamily: "Sora, sans-serif",
          fontWeight: 700,
          fontSize: {
            xs: "28px",
            sm: "32px",
            md: "36px",
            lg: "42px",
          },
          lineHeight: 1.2,
          letterSpacing: {
            xs: "-0.5px",
            md: "-1px",
          },
          color: "#FFFFFF",
          mb: {
            xs: 3,
            sm: 3.5,
            md: 4,
          },
        }}
      >
        Our Tech Stack
      </MotionTypography>

      {/* Tech Stack */}
      <Grid
        container
        spacing={{
          xs: 1,
          sm: 1.5,
          md: 1.5,
        }}
      >
        {techStack.map((tech, index) => (
          <Grid
            size={{ xs: "auto" }}
            key={index}
          >
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
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                y: -5,
                scale: 1.05,
                borderColor: "#6655EB",
                boxShadow: "0 8px 25px rgba(102, 85, 235, 0.15)",
              }}
              whileTap={{
                scale: 0.96,
              }}
              sx={{
                backgroundColor: "#141416",
                border: "1px solid #222226",
                borderRadius: {
                  xs: "20px",
                  sm: "22px",
                  md: "24px",
                },
                px: {
                  xs: 2,
                  sm: 2.5,
                  md: 3,
                },
                py: {
                  xs: 0.9,
                  sm: 1,
                  md: 1.2,
                },
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transition:
                  "border-color 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 500,
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "14px",
                  },
                  lineHeight: {
                    xs: "18px",
                    md: "20px",
                  },
                  color: "#FFFFFF",
                  whiteSpace: "nowrap",
                }}
              >
                {tech}
              </Typography>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </MotionBox>
  );
};

export default TechStackSection;