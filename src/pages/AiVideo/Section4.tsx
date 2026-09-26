import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ReadyToBuildSection = () => {
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
                        staggerChildren: 0.18,
                    },
                },
            }}
            sx={{
                position: "relative",
                backgroundColor: "#0A0A0A",
                color: "#FFFFFF",
                px: {
                    xs: 2.5,
                    sm: 4,
                    md: 6,
                    lg: 8,
                },
                py: {
                    xs: 8,
                    sm: 10,
                    md: 12,
                    lg: 14,
                },
                width: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                overflow: "hidden",

                "&::before": {
                    content: '""',
                    position: "absolute",
                    width: {
                        xs: "250px",
                        md: "450px",
                    },
                    height: {
                        xs: "250px",
                        md: "450px",
                    },
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(102,85,235,0.12) 0%, rgba(102,85,235,0) 70%)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                },
            }}
        >
            {/* Content */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {/* Heading */}
                <MotionBox
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 45,
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
                >
                    <Typography
                        component="h2"
                        sx={{
                            fontFamily: "Sora, sans-serif",
                            fontWeight: 700,
                            fontSize: {
                                xs: "30px",
                                sm: "38px",
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
                            color: "#F4DC80",
                            mb: {
                                xs: 1.5,
                                md: 2,
                            },
                            maxWidth: {
                                xs: "100%",
                                sm: "650px",
                                md: "800px",
                            },
                        }}
                    >
                        Ready to Scale Your Content?
                    </Typography>
                </MotionBox>

                {/* Description */}
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
                >
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
                                md: "650px",
                            },
                            mb: {
                                xs: 4,
                                sm: 4.5,
                                md: 5,
                            },
                        }}
                    >
                        Get custom high-fidelity commercial creatives or weeks of
                        native vertical content queued up effortlessly. Let's draft
                        your script.
                    </Typography>
                </MotionBox>

                {/* Buttons */}
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
                >
                    <Stack
                        direction={{
                            xs: "column",
                            sm: "row",
                        }}
                        spacing={{
                            xs: 1.5,
                            sm: 2,
                        }}
                        sx={{
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {/* Primary Button */}
                        <MotionBox
                            whileHover={{
                                scale: 1.05,
                                y: -3,
                            }}
                            whileTap={{
                                scale: 0.96,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 20,
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    width: {
                                        xs: "100%",
                                        sm: "auto",
                                    },
                                    minWidth: {
                                        xs: "220px",
                                        sm: "170px",
                                    },
                                    fontFamily: "Sora, sans-serif",
                                    fontWeight: 600,
                                    fontSize: {
                                        xs: "14px",
                                        md: "15px",
                                    },
                                    textTransform: "none",
                                    backgroundColor: "#F4DC80",
                                    color: "#1A1A1A",
                                    borderRadius: "28px",
                                    px: {
                                        xs: 3,
                                        md: 4,
                                    },
                                    py: {
                                        xs: 1.3,
                                        md: 1.5,
                                    },
                                    boxShadow: "none",
                                    "&:hover": {
                                        backgroundColor: "#E5C94F",
                                        boxShadow:
                                            "0 10px 30px rgba(244, 220, 128, 0.15)",
                                    },
                                }}
                            >
                                Start a Project
                            </Button>
                        </MotionBox>

                        {/* Secondary Button */}
                        <MotionBox
                            whileHover={{
                                scale: 1.05,
                                y: -3,
                                borderColor: "#6655EB",
                            }}
                            whileTap={{
                                scale: 0.96,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 20,
                            }}
                        >
                            <Button
                                variant="outlined"
                                sx={{
                                    width: {
                                        xs: "100%",
                                        sm: "auto",
                                    },
                                    minWidth: {
                                        xs: "220px",
                                        sm: "200px",
                                    },
                                    fontFamily: "Sora, sans-serif",
                                    fontWeight: 600,
                                    fontSize: {
                                        xs: "14px",
                                        md: "15px",
                                    },
                                    textTransform: "none",
                                    backgroundColor: "#141416",
                                    color: "#FFFFFF",
                                    borderColor: "#222226",
                                    borderRadius: "28px",
                                    px: {
                                        xs: 3,
                                        md: 4,
                                    },
                                    py: {
                                        xs: 1.3,
                                        md: 1.5,
                                    },
                                    boxShadow: "none",
                                    "&:hover": {
                                        backgroundColor: "#1C1C21",
                                        borderColor: "#6655EB",
                                        boxShadow:
                                            "0 10px 30px rgba(102, 85, 235, 0.1)",
                                    },
                                }}
                            >
                                Book a Strategy Call
                            </Button>
                        </MotionBox>
                    </Stack>
                </MotionBox>
            </Box>
        </MotionBox>
    );
};

export default ReadyToBuildSection;