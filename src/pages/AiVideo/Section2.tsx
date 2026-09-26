import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const servicesData = [
  {
    title: "Meta Commercial Creatives",
    description:
      "High-conversions ads structured specifically for Facebook and Instagram algorithms.",
  },
  {
    title: "Instagram Reels",
    description:
      "Dynamic, fast-paced organic video clips engineered to hold visual attention instantly.",
  },
  {
    title: "YouTube Shorts",
    description:
      "Micro-content optimized for maximum retention and massive subscriber funnel growth.",
  },
  {
    title: "TikTok Content",
    description:
      "Native, high-energy storytelling matching the latest trends and organic styles.",
  },
  {
    title: "AI-Assisted Video",
    description:
      "Advanced generative video tools blended seamlessly with classic post-production.",
  },
  {
    title: "Multilingual Voiceovers",
    description:
      "Ultra-realistic natural speech in 50+ major languages using neural clone techniques.",
  },
  {
    title: "Digital Spokespersons",
    description:
      "Custom AI avatars designed to present your service securely, with zero camera setup needed.",
  },
  {
    title: "Automated Subtitles",
    description:
      "Perfect kinetic text overlays, emojis, and dynamic captions styled beautifully.",
  },
  {
    title: "Script & Storyboarding",
    description:
      "AI-boosted and human-refined concepts designed to drive customer action.",
  },
  {
    title: "Creative Direction",
    description:
      "Polished aesthetic guidelines, color palettes, and structured asset consistency.",
  },
  {
    title: "Dynamic Editing",
    description:
      "Fast pacing, modern pattern interrupts, and seamless cinematic transitions.",
  },
  {
    title: "A/B Creative Variations",
    description:
      "Dozens of programmatic variations of hooks and call-to-actions to test at volume.",
  },
  {
    title: "Batch Content Production",
    description:
      "Consistent pipelines supplying weeks of daily social media assets in one go.",
  },
];

const WhatWeCreateSection = () => {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.8,
            staggerChildren: 0.12,
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
          xs: 7,
          sm: 8,
          md: 10,
          lg: 12,
        },
        width: "100%",
        boxSizing: "border-box",
        borderBottom: "1px solid #FFFFFF1A",
        overflow: "hidden",
      }}
    >
      {/* Section Header */}
      <MotionBox
        variants={{
          hidden: {
            opacity: 0,
            y: 40,
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
          mb: {
            xs: 4,
            sm: 5,
            md: 6,
          },
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
            fontSize: {
              xs: "30px",
              sm: "36px",
              md: "44px",
              lg: "48px",
            },
            lineHeight: {
              xs: 1.2,
              md: 1.2,
            },
            letterSpacing: {
              xs: "-0.5px",
              md: "-1px",
            },
            color: "#FFFFFF",
            mb: {
              xs: 1,
              md: 1.5,
            },
          }}
        >
          What We Create
        </Typography>

        <Typography
          component="p"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 400,
            fontSize: {
              xs: "14px",
              sm: "15px",
              md: "18px",
            },
            lineHeight: {
              xs: "23px",
              sm: "25px",
              md: "28px",
            },
            color: "#8C8C8C",
            maxWidth: {
              xs: "100%",
              sm: "550px",
              md: "600px",
            },
            m: 0,
          }}
        >
          An elegant blend of creative direction and deep neural asset synthesis.
        </Typography>
      </MotionBox>

      {/* Services Grid */}
      <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
        {servicesData.map((service, index) => (
          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
            key={index}
          >
            <MotionBox
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                  scale: 0.96,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                y: -8,
                borderColor: "#6655EB",
                boxShadow: "0 15px 40px rgba(102, 85, 235, 0.12)",
              }}
              whileTap={{
                scale: 0.98,
              }}
              sx={{
                backgroundColor: "#141416",
                border: "1px solid #1F1F24",
                borderRadius: {
                  xs: "12px",
                  sm: "14px",
                  md: "16px",
                },
                p: {
                  xs: 2.5,
                  sm: 3,
                  md: 4,
                },
                minHeight: {
                  xs: "auto",
                  sm: "190px",
                  md: "210px",
                },
                height: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                transition:
                  "border-color 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
            >
              <MotionTypography
                component="h3"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
                sx={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 600,
                  fontSize: {
                    xs: "17px",
                    sm: "18px",
                    md: "20px",
                  },
                  lineHeight: {
                    xs: "25px",
                    md: "28px",
                  },
                  color: "#F4DC80",
                  mb: {
                    xs: 1,
                    md: 1.5,
                  },
                }}
              >
                {service.title}
              </MotionTypography>

              <Typography
                component="p"
                sx={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 400,
                  fontSize: {
                    xs: "13px",
                    sm: "14px",
                    md: "15px",
                  },
                  lineHeight: {
                    xs: "21px",
                    md: "24px",
                  },
                  color: "#8C8C8C",
                  m: 0,
                }}
              >
                {service.description}
              </Typography>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </MotionBox>
  );
};

export default WhatWeCreateSection;