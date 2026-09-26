import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const DevelopmentServicesSection = () => {
    return (
        <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
                hidden: { opacity: 0 },
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
            {/* Service Tag */}
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
                    borderColor: "#8A7CFF",
                }}
                sx={{
                    mb: {
                        xs: 2.5,
                        sm: 3,
                    },
                }}
            >
                <Chip
                    label="SERVICES / CREATIVE"
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

            {/* Main Heading */}
            <MotionTypography
                component="h1"
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
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,

                    // Responsive font size
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

                    mb: {
                        xs: 2.5,
                        sm: 3,
                        md: 3.5,
                    },

                    maxWidth: {
                        xs: "100%",
                        sm: "850px",
                        md: "1000px",
                        lg: "1200px",
                    },
                }}
            >
                AI Video Ads & Content Creation
            </MotionTypography>

            {/* Description */}
            <MotionTypography
                component="p"
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

                    maxWidth: {
                        xs: "100%",
                        sm: "600px",
                        md: "640px",
                    },

                    mb: 0,
                }}
            >
                High-quality commercial video ads, vertical organic reels, automated captions, and digital spokesperson production at immense scale with hyper-efficient AI workflows.
            </MotionTypography>
        </MotionBox>
    );
};

export default DevelopmentServicesSection;