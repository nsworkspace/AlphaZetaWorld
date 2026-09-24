const aiVideoData = {
  title: "AI Video Ads & Content Creation",

  description:
    "High-converting commercial video ads, Instagram Reels, YouTube Shorts, AI avatars, and social media content.",

  price: "₹1,200",

  services: [
    {
      title: "Commercial Video Ads",
      description:
        "High-impact video creatives for digital advertising campaigns.",
    },
    {
      title: "Instagram Reels",
      description:
        "Short-form vertical content designed for social media engagement.",
    },
    {
      title: "YouTube Shorts",
      description: "Short-form videos created for YouTube audience growth.",
    },
    {
      title: "AI Avatars",
      description:
        "AI-powered digital spokespersons and presenter-style content.",
    },
    {
      title: "AI Voiceovers",
      description: "AI-generated voiceovers with multilingual support.",
    },
    {
      title: "Automated Subtitles",
      description:
        "Automated subtitle generation for accessible short-form content.",
    },
    {
      title: "Scriptwriting",
      description:
        "Scripts designed around the campaign objective and target audience.",
    },
    {
      title: "Storyboarding",
      description: "Structured visual planning before video production.",
    },
    {
      title: "A/B Testing Variations",
      description:
        "Multiple creative variations for testing different content approaches.",
    },
  ],

  platforms: ["Instagram", "Facebook", "TikTok", "YouTube"],

  clientRequirements: [
    {
      field: "productDetails",
      label: "Product Details",
      required: true,
    },
    {
      field: "videoHighlights",
      label: "What points/highlights should we focus on?",
      required: true,
    },
    {
      field: "voice",
      label: "Voice",
      options: ["Male", "Female"],
      required: true,
    },
    {
      field: "language",
      label: "Language",
      required: true,
    },
    {
      field: "character",
      label: "Character",
      options: ["Male", "Female"],
      required: true,
    },
    {
      field: "videoDuration",
      label: "Video Duration",
      required: true,
    },
  ],
};

module.exports = aiVideoData;
