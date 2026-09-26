import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const processSteps = [
  {
    step: "STEP 01",
    title: "Discovery",
    description:
      "Deconstruct product requirements and define the minimal architecture plan.",
  },
  {
    step: "STEP 02",
    title: "Design & UX",
    description:
      "Interactive Figma wireframes, style mapping, and complete system components.",
  },
  {
    step: "STEP 03",
    title: "Development",
    description:
      "Engineered cleanly with robust unit testing, active code reviews, and fluid CI/CD.",
  },
  {
    step: "STEP 04",
    title: "Deployment",
    description:
      "Secure cloud staging, performance tuning, and final production server release.",
  },
  {
    step: "STEP 05",
    title: "Support",
    description:
      "Active system health checks, package maintenance, and incremental feature updates.",
  },
];

const OurProcessSection: React.FC = () => {
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
        overflow: "hidden",
      }}
    >
      {/* ================= SECTION HEADER ================= */}
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
            lineHeight: 1.2,
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
          Our Process
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
          From early requirements mapping to scaled digital growth — we align
          at every milestone.
        </Typography>
      </MotionBox>

      {/* ================= PROCESS CARDS ================= */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(5, 1fr)",
          },
          gap: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },
          width: "100%",
        }}
      >
        {processSteps.map((item, index) => (
          <MotionBox
            key={index}
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
              boxShadow:
                "0 15px 40px rgba(102, 85, 235, 0.12)",
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
                md: 3.5,
              },
              width: "100%",
              minHeight: {
                xs: "auto",
                sm: "200px",
                md: "220px",
              },
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              transition:
                "border-color 0.3s ease, box-shadow 0.3s ease",
              cursor: "default",
            }}
          >
            {/* Step */}
            <MotionBox
              initial={{
                opacity: 0,
                x: -15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              sx={{
                mb: {
                  xs: 1,
                  md: 1.5,
                },
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 600,
                  fontSize: {
                    xs: "11px",
                    sm: "12px",
                  },
                  letterSpacing: "0.05em",
                  color: "#6655EB",
                }}
              >
                {item.step}
              </Typography>
            </MotionBox>

            {/* Title */}
            <Typography
              component="h3"
              sx={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 600,
                fontSize: {
                  xs: "18px",
                  sm: "19px",
                  md: "20px",
                },
                lineHeight: {
                  xs: "25px",
                  md: "28px",
                },
                color: "#FFFFFF",
                mb: {
                  xs: 1,
                  md: 1.5,
                },
              }}
            >
              {item.title}
            </Typography>

            {/* Description */}
            <Typography
              component="p"
              sx={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 400,
                fontSize: {
                  xs: "13px",
                  sm: "14px",
                },
                lineHeight: {
                  xs: "21px",
                  md: "22px",
                },
                color: "#8C8C8C",
                m: 0,
              }}
            >
              {item.description}
            </Typography>
          </MotionBox>
        ))}
      </Box>
    </MotionBox>
  );
};

export default OurProcessSection;