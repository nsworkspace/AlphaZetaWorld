const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
            maxlength: 120
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            maxlength: 254,
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address"]
        },
        contactNumber: {
            type: String,
            required: true,
            trim: true,
            match: [/^\+?[\d\s().-]{7,20}$/, "Enter a valid contact number"]
        },
        services: {
            type: [{ type: String, trim: true }],
            required: true,
            validate: {
                validator: (services) => services.length > 0 && services.every(Boolean),
                message: "Select at least one service"
            }
        },
        description: {
            type: String,
            trim: true,
            maxlength: 5000,
            default: ""
        },
        status: {
            type: String,
            enum: ["pending", "success"],
            default: "pending"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
