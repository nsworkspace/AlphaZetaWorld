import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const stepsData: StepItem[] = [
  {
    number: "01",
    title: "Ideate & Vet",
    description: "We analyze market pain-points, validate keyword search demand, and run cost-benefit simulations before writing a single line of code.",
  },
  {
    number: "02",
    title: "Design & Prototype",
    description: "We craft lightweight high-fidelity user experiences focused strictly on core features and conversion loops.",
  },
  {
    number: "03",
    title: "Build & Deploy",
    description: "We utilize our optimized tech stacks (Next.js, FastAPI, Flutter) for rapid product deployment to edge cloud servers.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description: "We trigger organic growth plans, SEO strategies, and automated ad campaigns to gain initial traffic instantly.",
  },
  {
    number: "05",
    title: "Monetize",
    description: "We integrate transactional Stripe architecture, subscription analytics, and paywalls from Day 1.",
  },
];

const FromConceptToRevenueSection: React.FC = () => {
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
            staggerChildren: 0.12,
          },
        },
      }}
      sx={{
        backgroundColor: "#141414",
        color: "#FFFFFF",
        px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
        py: { xs: 7, sm: 8, md: 10, lg: 12 },
        width: "100%",
        boxSizing: "border-box",
        borderBottom: "1px solid #FFFFFF1A",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Section Header */}
      <MotionBox
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        sx={{ mb: { xs: 6, md: 10 } }}
      >
        <Typography
          component="h2"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "28px", sm: "36px", md: "44px" },
            lineHeight: 1.2,
            color: "#FFFFFF",
            mb: 1.5,
          }}
        >
          From Concept to Revenue
        </Typography>
        <Typography
          component="p"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "14px", sm: "16px", md: "17px" },
            lineHeight: "26px",
            color: "#8C8C8C",
            maxWidth: "600px",
            m: 0,
          }}
        >
          Our strict end-to-end operational playbook utilized on every proprietary build inside the Lab.
        </Typography>
      </MotionBox>

      {/* Steps Grid */}
      <Grid container spacing={4} sx={{ position: "relative" }}>
        {stepsData.map((step, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
            <MotionBox
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              {/* Step Circle Number */}
              <Box
                sx={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "#6655EB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                  boxShadow: "0 0 20px rgba(102, 85, 235, 0.4)",
                  zIndex: 2,
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#FFFFFF",
                  }}
                >
                  {step.number}
                </Typography>
              </Box>

              {/* Title */}
              <MotionTypography
                variant="h3"
                sx={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: "18px", md: "20px" },
                  lineHeight: "28px",
                  color: "#FFFFFF",
                  mb: 1.5,
                }}
              >
                {step.title}
              </MotionTypography>

              {/* Description */}
              <Typography
                component="p"
                sx={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "13px", sm: "14px" },
                  lineHeight: "22px",
                  color: "#8C8C8C",
                  m: 0,
                }}
              >
                {step.description}
              </Typography>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </MotionBox>
  );
};

export default FromConceptToRevenueSection;