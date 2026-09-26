
import React from "react";

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const services = [
  "Web & Mobile App Development",
  "AI Video Ads & Content Creation",
  "Google SEO & AI Search Optimization",
  "Full Growth Stack Strategy",
  "Other Custom Solutions",
];

/* =========================================
   ANIMATION VARIANTS
========================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.98,
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
};

/* =========================================
   MAIN COMPONENT
========================================= */

const ProjectBrief = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#111111",
        color: "#fff",
        px: {
          xs: "16px",
          sm: "24px",
          md: "40px",
          lg: "50px",
        },
        py: {
          xs: "28px",
          sm: "35px",
          md: "40px",
        },
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.12,
        }}
      >
        <Grid
          container
          spacing={{
            xs: 3,
            sm: 4,
            md: 5.25,
          }}
          sx={{
            margin: "0 auto",
            alignItems: "flex-start",
            maxWidth: "1250px",
          }}
        >
          {/* =================================
              LEFT — PROJECT BRIEF
          ================================== */}

          <Grid size={{ xs: 12, md: 7 }}>
            <MotionBox
              variants={cardVariants}
              component="form"
              sx={{
                width: "100%",
                minHeight: {
                  md: "594px",
                },
                backgroundColor: "#1c1c1e",
                border: "1px solid #303033",
                borderRadius: {
                  xs: "12px",
                  sm: "14px",
                  md: "16px",
                },
                px: {
                  xs: "18px",
                  sm: "28px",
                  md: "31px",
                },
                py: {
                  xs: "24px",
                  sm: "27px",
                  md: "26px",
                },
                boxSizing: "border-box",

                transition: "border-color 0.3s ease, box-shadow 0.3s ease",

                "&:hover": {
                  borderColor: "#3d3d42",
                  boxShadow: "0 15px 50px rgba(0,0,0,0.18)",
                },
              }}
            >
              {/* Title */}

              <MotionTypography
                variants={fadeUp}
                sx={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: {
                    xs: "15px",
                    sm: "16px",
                  },
                  lineHeight: "20px",
                  fontWeight: 700,
                  color: "#f5f5f5",
                  mb: "21px",
                }}
              >
                Project Brief
              </MotionTypography>

              {/* NAME / EMAIL */}

              <Grid
                container
                columnSpacing={{
                  xs: 0,
                  sm: 1.25,
                }}
                rowSpacing={{
                  xs: 1.5,
                  sm: 1.45,
                }}
              >
                <Grid size={{ xs: 12, sm: 6 }}>
                  <MotionBox variants={fadeUp}>
                    <FieldLabel>Full Name *</FieldLabel>

                    <StyledTextField
                      placeholder="e.g. John Miller"
                      fullWidth
                    />
                  </MotionBox>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <MotionBox variants={fadeUp}>
                    <FieldLabel>Email Address *</FieldLabel>

                    <StyledTextField
                      placeholder="e.g. john@company.com"
                      fullWidth
                    />
                  </MotionBox>
                </Grid>

                {/* PHONE */}

                <Grid size={{ xs: 12, sm: 6 }}>
                  <MotionBox variants={fadeUp}>
                    <FieldLabel>WhatsApp / Phone *</FieldLabel>

                    <StyledTextField
                      placeholder="e.g. +91 98765 43210"
                      fullWidth
                    />
                  </MotionBox>
                </Grid>

                {/* COMPANY */}

                <Grid size={{ xs: 12, sm: 6 }}>
                  <MotionBox variants={fadeUp}>
                    <FieldLabel>Company Name</FieldLabel>

                    <StyledTextField
                      placeholder="e.g. Stark Industries"
                      fullWidth
                    />
                  </MotionBox>
                </Grid>
              </Grid>

              {/* SERVICE */}

              <MotionBox
                variants={fadeUp}
                sx={{
                  mt: {
                    xs: "18px",
                    sm: "11px",
                  },
                }}
              >
                <FieldLabel>Service Needed *</FieldLabel>

                <Box sx={{ mt: "2px" }}>
                  {services.map((service, index) => (
                    <FormControlLabel
                      key={service}
                      control={
                        <Checkbox
                          defaultChecked={index === 0}
                          size="small"
                          sx={{
                            p: 0,
                            mr: "8px",
                            color: "#353539",

                            "&.Mui-checked": {
                              color: "#7558f5",
                            },

                            "& .MuiSvgIcon-root": {
                              fontSize: "16px",
                            },
                          }}
                        />
                      }
                      label={service}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        minHeight: "22px",
                        height: "auto",
                        m: 0,

                        "& .MuiFormControlLabel-label": {
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontSize: {
                            xs: "10.5px",
                            sm: "11px",
                          },
                          lineHeight: "14px",
                          color:
                            index === 0 ? "#e3e3e3" : "#88888b",
                          fontWeight: 400,
                        },
                      }}
                    />
                  ))}
                </Box>
              </MotionBox>

              {/* BUDGET */}

              <MotionBox
                variants={fadeUp}
                sx={{
                  mt: "14px",
                }}
              >
                <FieldLabel>Estimate Budget *</FieldLabel>

                <FormControl fullWidth>
                  <Select
                    defaultValue="₹1.5 lakh – ₹5 lakh"
                    IconComponent={ArrowForwardIcon}
                    sx={{
                      height: "36px",
                      backgroundColor: "#1c1c1e",
                      borderRadius: "6px",
                      color: "#dddddf",
                      fontFamily: "Arial, Helvetica, sans-serif",
                      fontSize: "11px",

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#303033",
                      },

                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#3b3b3f",
                      },

                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#4a4a4f",
                      },

                      "& .MuiSelect-select": {
                        py: "9px",
                        px: "10px",
                      },

                      "& .MuiSvgIcon-root": {
                        color: "#8c8c8e",
                        fontSize: "16px",
                        right: "9px",
                      },
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          backgroundColor: "#222224",
                          color: "#fff",
                        },
                      },
                    }}
                  >
                    <MenuItem value="₹1.5 lakh – ₹5 lakh">
                      ₹1.5 lakh – ₹5 lakh
                    </MenuItem>

                    <MenuItem value="₹5 lakh – ₹10 lakh">
                      ₹5 lakh – ₹10 lakh
                    </MenuItem>

                    <MenuItem value="₹10 lakh+">
                      ₹10 lakh+
                    </MenuItem>
                  </Select>
                </FormControl>
              </MotionBox>

              {/* PROJECT NOTES */}

              <MotionBox
                variants={fadeUp}
                sx={{
                  mt: "14px",
                }}
              >
                <FieldLabel>Project Scope & Notes *</FieldLabel>

                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="Describe what you want us to build, targets, and any specific timelines."
                  sx={{
                    mt: "1px",

                    "& .MuiOutlinedInput-root": {
                      minHeight: "81px",
                      alignItems: "flex-start",
                      borderRadius: "6px",
                      backgroundColor: "#1c1c1e",
                      color: "#d8d8da",
                      fontFamily: "Arial, Helvetica, sans-serif",
                      fontSize: "11px",
                      p: 0,

                      "& fieldset": {
                        borderColor: "#303033",
                      },

                      "&:hover fieldset": {
                        borderColor: "#3b3b3f",
                      },

                      "&.Mui-focused fieldset": {
                        borderColor: "#4a4a4f",
                      },

                      "& textarea": {
                        padding: "10px",
                        lineHeight: "16px",
                      },
                    },

                    "& input::placeholder, & textarea::placeholder": {
                      color: "#656568",
                      opacity: 1,
                    },
                  }}
                />
              </MotionBox>

              {/* SUBMIT */}

              <MotionButton
                variants={fadeUp}
                whileHover={{
                  scale: 1.015,
                  boxShadow: "0 8px 25px rgba(244,217,111,0.12)",
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="submit"
                fullWidth
                disableElevation
                sx={{
                  height: "38px",
                  mt: "21px",
                  borderRadius: "22px",
                  backgroundColor: "#f4d96f",
                  color: "#111111",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "none",

                  "&:hover": {
                    backgroundColor: "#f4d96f",
                  },
                }}
              >
                Send Project Brief
              </MotionButton>
            </MotionBox>
          </Grid>

          {/* =================================
              RIGHT — ALTERNATIVE OPTIONS
          ================================== */}

          <Grid size={{ xs: 12, md: 5 }}>
            <MotionBox
              variants={containerVariants}
              sx={{
                width: "100%",
                pt: {
                  xs: 0,
                  md: "1px",
                },
              }}
            >
              {/* Eyebrow */}

              <MotionTypography
                variants={fadeUp}
                sx={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "9px",
                  lineHeight: "11px",
                  fontWeight: 700,
                  color: "#e5ca56",
                  textTransform: "uppercase",
                  mb: "5px",
                }}
              >
                DIRECT CONNECT
              </MotionTypography>

              {/* Heading */}

              <MotionTypography
                variants={fadeUp}
                sx={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: {
                    xs: "20px",
                    sm: "21px",
                  },
                  lineHeight: "24px",
                  fontWeight: 700,
                  color: "#f4f4f4",
                  mb: "21px",
                }}
              >
                Alternative Options
              </MotionTypography>

              {/* STRATEGY CALL */}

              <MotionBox variants={cardVariants}>
                <AlternativeCard>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "9px",
                      mb: "12px",
                    }}
                  >
                    <IconCircle background="#6950e9">
                      <AutoAwesomeIcon
                        sx={{
                          fontSize: "14px",
                          color: "#fff",
                        }}
                      />
                    </IconCircle>

                    <Typography sx={CardTitle}>
                      Book a Strategy Call
                    </Typography>
                  </Box>

                  <Typography sx={CardDescription}>
                    Schedule a 15-minute consultation directly with our
                    product team. Free, uncompromised technical advice.
                  </Typography>

                  <Box
                    component="a"
                    href="#"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      mt: "11px",
                      color: "#ead45c",
                      fontFamily: "Arial, Helvetica, sans-serif",
                      fontSize: "10px",
                      fontWeight: 700,
                      textDecoration: "underline",
                    }}
                  >
                    Schedule via Cal.com

                    <ArrowUpwardIcon
                      sx={{
                        fontSize: "13px",
                        transform: "rotate(45deg)",
                      }}
                    />
                  </Box>
                </AlternativeCard>
              </MotionBox>

              {/* WHATSAPP */}

              <MotionBox
                variants={cardVariants}
                sx={{
                  mt: "21px",
                }}
              >
                <AlternativeCard>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "9px",
                      mb: "12px",
                    }}
                  >
                    <IconCircle background="#1acb68">
                      <WhatsAppIcon
                        sx={{
                          fontSize: "14px",
                          color: "#fff",
                        }}
                      />
                    </IconCircle>

                    <Typography sx={CardTitle}>
                      Quick Chat on WhatsApp
                    </Typography>
                  </Box>

                  <Typography sx={CardDescription}>
                    Need answers immediately? Send us a quick brief
                    directly on WhatsApp for instant feedback.
                  </Typography>

                  <Box
                    component="a"
                    href="#"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      mt: "11px",
                      color: "#19d46c",
                      fontFamily: "Arial, Helvetica, sans-serif",
                      fontSize: "10px",
                      fontWeight: 700,
                      textDecoration: "underline",
                    }}
                  >
                    Open WhatsApp Chat

                    <ArrowUpwardIcon
                      sx={{
                        fontSize: "13px",
                        transform: "rotate(45deg)",
                      }}
                    />
                  </Box>
                </AlternativeCard>
              </MotionBox>

              {/* OFFICE */}

              <MotionBox
                variants={cardVariants}
                sx={{
                  mt: "21px",
                }}
              >
                <AlternativeCard
                  sx={{
                    minHeight: "105px",
                  }}
                >
                  <Typography
                    sx={{
                      ...CardTitle,
                      mb: "9px",
                    }}
                  >
                    Studio Head Office
                  </Typography>

                  <Typography sx={CardDescription}>
                    Alpha Zeta Lab
                    <br />
                    404, Tech Hub, Phase 2
                    <br />
                    Silicon City, IN 560001
                  </Typography>
                </AlternativeCard>
              </MotionBox>
            </MotionBox>
          </Grid>
        </Grid>
      </MotionBox>
    </Box>
  );
};

/* =========================================
   REUSABLE COMPONENTS
========================================= */

const FieldLabel = ({ children }) => (
  <Typography
    component="label"
    sx={{
      display: "block",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: "10px",
      lineHeight: "13px",
      fontWeight: 700,
      color: "#dedee0",
      mb: "5px",
    }}
  >
    {children}
  </Typography>
);

const StyledTextField = ({ ...props }) => (
  <TextField
    {...props}
    variant="outlined"
    size="small"
    sx={{
      "& .MuiOutlinedInput-root": {
        height: "35px",
        borderRadius: "5px",
        backgroundColor: "#1c1c1e",
        color: "#ddd",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "11px",

        "& fieldset": {
          borderColor: "#303033",
        },

        "&:hover fieldset": {
          borderColor: "#3b3b3f",
        },

        "&.Mui-focused fieldset": {
          borderColor: "#4a4a4f",
        },
      },

      "& input": {
        padding: "9px 10px",
      },

      "& input::placeholder": {
        color: "#656568",
        opacity: 1,
      },
    }}
  />
);

const AlternativeCard = ({ children, sx = {} }) => (
  <MotionBox
    whileHover={{
      y: -4,
      borderColor: "#424247",
      boxShadow: "0 12px 35px rgba(0,0,0,0.18)",
    }}
    transition={{
      duration: 0.25,
      ease: "easeOut",
    }}
    sx={{
      width: "100%",
      minHeight: "123px",
      boxSizing: "border-box",
      backgroundColor: "#1c1c1e",
      border: "1px solid #303033",
      borderRadius: "11px",
      px: "16px",
      py: "15px",
      ...sx,
    }}
  >
    {children}
  </MotionBox>
);

const IconCircle = ({ children, background }) => (
  <MotionBox
    whileHover={{
      scale: 1.08,
      rotate: 5,
    }}
    transition={{
      duration: 0.25,
    }}
    sx={{
      width: "28px",
      height: "28px",
      minWidth: "28px",
      borderRadius: "50%",
      backgroundColor: background,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {children}
  </MotionBox>
);

const CardTitle = {
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "13px",
  lineHeight: "17px",
  fontWeight: 700,
  color: "#f0f0f1",
};

const CardDescription = {
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "10.5px",
  lineHeight: "15px",
  fontWeight: 400,
  color: "#858589",
};

export default ProjectBrief;
