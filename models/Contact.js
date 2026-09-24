const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    companyName: {
      type: String,
      trim: true,
      default: "",
    },

    serviceNeeded: {
      type: String,
      required: true,
      enum: [
        "Web/App Development",
        "AI Video Ads & Shorts",
        "Google & AI SEO",
        "Full Growth Stack",
      ],
    },

    estimatedBudget: {
      type: String,
      required: true,
      enum: ["< ₹50,000", "₹50k–₹1.5L", "₹1.5L–₹5L", "₹5L+"],
    },

    projectNotes: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Contact", contactSchema);
