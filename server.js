require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/db");
const Admin = require("./src/models/Admin");
const bcrypt = require("bcryptjs");

const PORT = Number(process.env.PORT) || 5001;

const startServer = async () => {
    if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI must be configured");
    if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
        throw new Error("JWT_SECRET must contain at least 32 characters");
    }

    await connectDB();

    const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (Boolean(adminEmail) !== Boolean(adminPassword)) {
        throw new Error("Set both ADMIN_EMAIL and ADMIN_PASSWORD to bootstrap the admin account");
    }
    if (adminEmail && !(await Admin.exists({ email: adminEmail }))) {
        await Admin.create({ email: adminEmail, passwordHash: await bcrypt.hash(adminPassword, 12) });
        console.log("Initial admin account created");
    }

    const server = app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
    const shutdown = async () => {
        server.close(async () => {
            const mongoose = require("mongoose");
            await mongoose.disconnect();
            process.exit(0);
        });
    };
    process.once("SIGINT", shutdown);
    process.once("SIGTERM", shutdown);
};

startServer().catch(async (error) => {
    console.error("Server startup failed:", error.message);
    await require("mongoose").disconnect().catch(() => {});
    process.exitCode = 1;
});
