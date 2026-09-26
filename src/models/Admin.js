const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            default: "Admin",
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        passwordHash: {
            type: String,
            required() {
                return !this.password;
            }
        },

        password: {
            type: String,
            select: false
        },

        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports =
    mongoose.models.Admin ||
    mongoose.model("Admin", adminSchema);
