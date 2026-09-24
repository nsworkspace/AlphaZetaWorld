const aboutData = require("../services/aboutData");

const getAbout = (req, res) => {
  res.status(200).json({
    success: true,
    data: aboutData,
  });
};

module.exports = {
  getAbout,
};
