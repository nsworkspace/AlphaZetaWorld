import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const servicesData = [
  {
    title: "Full-Stack Web Apps",
    description:
      "Complex architectures built cleanly using React, Next.js, Node.js, and robust Python backends.",
  },
  {
    title: "SaaS Platform Dev",
    description:
      "Subscription-based multi-tenant software designed for modern customer acquisition and scaling.",
  },
  {
    title: "Responsive Corporate Sites",
    description:
      "Stunning corporate sites and high-converting marketing landers styled cleanly with Tailwind CSS.",
  },
  {
    title: "Cross-Platform Mobile Apps",
    description:
      "Native-performing iOS & Android mobile apps compiled elegantly with Flutter and React Native.",
  },
  {
    title: "App Store Deployment",
    description:
      "End-to-end release workflows for the Apple App Store and Google Play, handling all compliance rules.",
  },
  {
    title: "Interactive Portals & Dashboards",
    description:
      "Data-heavy client portals, administration panels, and stateful interactive visual charts.",
  },
  {
    title: "REST & GraphQL APIs",
    description:
      "Extremely fast, secure, and self-documenting server endpoints built for fluid front-end integration.",
  },
  {
    title: "Database Architecture",
    description:
      "Expert PostgreSQL design, clustering, and cloud management using Supabase, Firebase, and Prisma.",
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description:
      "Automated scaling, serverless microservices, CI/CD pipelines, and secure cloud environments on AWS.",
  },
  {
    title: "Performance Optimization",
    description:
      "Refactoring database queries, caching layers, and front-end bundles to hit a 100 on Lighthouse/Core Web Vitals.",
  },
];

const WhatWeBuildSection = () => {
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
          What We Build
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
          An overview of our core engineering capabilities and high-fidelity
          tech deployment.
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

export default WhatWeBuildSection;