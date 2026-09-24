const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Routes
const contactRoutes = require("./routes/contactRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const productRoutes = require("./routes/productRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const aiVideoRoutes = require("./routes/aiVideoRoutes");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", contactRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/products", productRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/ai-video", aiVideoRoutes);

// Home route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Alpha Zeta World Backend is running!",
  });
});

// Error handling
app.use(notFound);
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
