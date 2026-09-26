import React from "react";
import { Box, Typography, Grid, Chip, Link } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

interface PortfolioItem {
  title: string;
  description: string;
  problem: string;
  tags: string[];
  image: string;
}

const portfolioData: PortfolioItem[] = [
  {
    title: "TaskFlow",
    description: "AI-powered collaborative system designed to automate project organization, dependency tracking, and tasks for distributed teams.",
    problem: "Small teams lose hours syncing context across different boards and manual ticketing.",
    tags: ["React", "Next.js", "OpenAI API", "PostgreSQL"],
    image: "/Images/1.svg", // Replace with your image path
  },
  {
    title: "QuickInvoice",
    description: "Automated billing and real-time bank tracking engineered to streamline financial operations and collection cycles.",
    problem: "Freelancers and agencies suffer from delayed payments and tedious tracking overhead.",
    tags: ["Svelte", "Node.js", "Stripe Connect", "Redis"],
    image: "/Images/2.svg", // Replace with your image path
  },
  {
    title: "ContentPilot",
    description: "Intellectual content distributor utilizing generative logic to auto-schedule, test, and optimize social media outreach.",
    problem: "SaaS startups struggle to maintain structured social media visibility consistently.",
    tags: ["TypeScript", "Python", "FastAPI", "MongoDB"],
    image: "/Images/3.svg", // Replace with your image path
  },
  {
    title: "FormStack Pro",
    description: "Smart drag-and-drop form architecture built with intrinsic drop-off analytics and intelligent automated lead routing.",
    problem: "Generic form tools do not integrate deep behavioral metrics or logic easily.",
    tags: ["Vue.js", "Firebase", "Express", "Tailwind CSS"],
    image: "/Images/4.svg", // Replace with your image path
  },
  {
    title: "SEO Pulse",
    description: "Continuous organic presence monitoring dashboard delivering immediate alert protocols for indexing adjustments.",
    problem: "Search index drops remain unnoticed for days, resulting in dramatic traffic loss.",
    tags: ["React", "Next.js", "Google Search Console API", "InfluxDB"],
    image: "/Images/5.svg", // Replace with your image path
  },
  {
    title: "AdCreator AI",
    description: "Dynamic, script-to-video creative generator producing high-conversion vertical ad creative within minutes.",
    problem: "Traditional production houses are slow, expensive, and unsustainable for micro-experimentation.",
    tags: ["Flutter", "Stable Diffusion", "AWS Lambda", "Supabase"],
    image: "/Images/6.svg", // Replace with your image path
  },
];

const ActivePortfolioSection: React.FC = () => {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.8,
            staggerChildren: 0.1,
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
      {/* Section Header */}
      <MotionBox
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "flex-end" },
          flexDirection: { xs: "column", sm: "row" },
          mb: { xs: 5, md: 7 },
          gap: 2,
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "28px", sm: "34px", md: "40px" },
            lineHeight: 1.2,
            color: "#FFFFFF",
          }}
        >
          Active Portfolio
        </Typography>

        <Typography
          component="span"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "12px", sm: "13px" },
            letterSpacing: "0.08em",
            color: "#F4DC80",
          }}
        >
          6 SHIPPED APPLICATIONS
        </Typography>
      </MotionBox>

      {/* Grid Layout */}
      <Grid container spacing={3}>
        {portfolioData.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
            <MotionBox
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{
                y: -6,
                borderColor: "#6655EB",
                boxShadow: "0 15px 40px rgba(102, 85, 235, 0.1)",
              }}
              sx={{
                backgroundColor: "#141416",
                border: "1px solid #1F1F24",
                borderRadius: "16px",
                p: { xs: 3, md: 3.5 },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxSizing: "border-box",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {/* Card Image Preview Placeholder */}
              <Box
                component="div"
                sx={{
                  width: "100%",
                  height: "180px",
                  borderRadius: "10px",
                  backgroundColor: "#1C1C21",
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  mb: 3,
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-start",
                  p: 2,
                }}
              >
                <Chip
                  label="ACTIVE"
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    backgroundColor: "#F4DC80",
                    color: "#1A1A1A",
                    height: "22px",
                  }}
                />
              </Box>

              {/* Title */}
              <MotionTypography
                variant="h3"
                sx={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "20px", md: "22px" },
                  lineHeight: "28px",
                  color: "#FFFFFF",
                  mb: 1.5,
                }}
              >
                {item.title}
              </MotionTypography>

              {/* Description */}
              <Typography
                component="p"
                sx={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "22px",
                  color: "#8C8C8C",
                  mb: 2.5,
                }}
              >
                {item.description}
              </Typography>

              {/* Problem Section */}
              <Box sx={{ mb: 3, backgroundColor: "#19191D", p: 2, borderRadius: "8px" }}>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: "11px",
                    letterSpacing: "0.05em",
                    color: "#F4DC80",
                    display: "block",
                    mb: 0.5,
                  }}
                >
                  PROBLEM
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 400,
                    fontSize: "13px",
                    lineHeight: "20px",
                    color: "#A0A0A5",
                    m: 0,
                  }}
                >
                  {item.problem}
                </Typography>
              </Box>

              {/* Tech Stack Tags */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3, mt: "auto" }}>
                {item.tags.map((tag, tagIndex) => (
                  <Chip
                    key={tagIndex}
                    label={tag}
                    variant="outlined"
                    sx={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 500,
                      fontSize: "11px",
                      color: "#A0A0A5",
                      borderColor: "#2B2B33",
                      backgroundColor: "#141416",
                      height: "26px",
                    }}
                  />
                ))}
              </Box>

              {/* View Live Link */}
              <Link
                href="#"
                underline="none"
                sx={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#FFFFFF",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  transition: "color 0.2s ease",
                  "&:hover": {
                    color: "#F4DC80",
                  },
                }}
              >
                View Live ↗
              </Link>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </MotionBox>
  );
};

export default ActivePortfolioSection;