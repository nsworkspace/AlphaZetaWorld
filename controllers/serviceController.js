const services = require("../services/servicesData");

const getAllServices = (req, res) => {
  res.status(200).json({
    success: true,
    count: services.length,
    data: services,
  });
};

const getServiceBySlug = (req, res) => {
  const { slug } = req.params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return res.status(404).json({
      success: false,
      message: "Service not found.",
    });
  }

  res.status(200).json({
    success: true,
    data: service,
  });
};

module.exports = {
  getAllServices,
  getServiceBySlug,
};
