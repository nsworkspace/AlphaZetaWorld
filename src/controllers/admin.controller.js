const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const loginAdmin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (typeof email !== "string" || typeof password !== "string") {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        const admin = await Admin.findOne({
            email: email.trim().toLowerCase()
        }).select("+password");

        console.log("LOGIN EMAIL:", email);
        console.log("ADMIN FOUND:", admin ? "YES" : "NO");

        if (!admin) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            admin.passwordHash || admin.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                id: admin._id,
                role: "admin"
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN || "7d"
            }
        );

        return res.json({
            success: true,
            message: "Login successful",
            token,
            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                role: "admin"
            }
        });

    } catch (error) {
        console.error("ADMIN LOGIN ERROR:", error);
        next(error);
    }
};

const changeAdminPassword = async (req, res, next) => {
    try {
        const { currentPassword, newPassword } = req.body || {};
        if (typeof currentPassword !== "string" || typeof newPassword !== "string") {
            return res.status(400).json({ success: false, message: "Current and new passwords are required" });
        }
        if (newPassword.length < 8) {
            return res.status(400).json({ success: false, message: "New password must be at least 8 characters" });
        }

        const admin = await Admin.findById(req.admin.id).select("+password");
        if (!admin || !admin.isActive) {
            return res.status(404).json({ success: false, message: "Admin account not found" });
        }

        const storedHash = admin.passwordHash || admin.password;
        if (!storedHash || !(await bcrypt.compare(currentPassword, storedHash))) {
            return res.status(401).json({ success: false, message: "Current password is incorrect" });
        }

        admin.passwordHash = await bcrypt.hash(newPassword, 12);
        admin.password = undefined;
        await admin.save();

        return res.json({ success: true, message: "Password changed successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    loginAdmin,
    changeAdminPassword
};
