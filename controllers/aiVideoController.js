const aiVideoData = require("../services/aiVideoData");

const getAiVideo = (req, res) => {
  res.status(200).json({
    success: true,
    data: aiVideoData,
  });
};

module.exports = {
  getAiVideo,
};
