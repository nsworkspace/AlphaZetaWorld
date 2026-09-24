const submitContactForm = (req, res) => {
  const {
    fullName,
    email,
    phone,
    companyName,
    serviceNeeded,
    estimatedBudget,
    projectNotes,

    // AI Video specific fields
    productDetails,
    videoHighlights,
    voice,
    language,
    character,
    videoDuration,
  } = req.body;

  // Clean incoming data
  const cleanFullName = fullName ? fullName.trim() : "";
  const cleanEmail = email ? email.trim().toLowerCase() : "";
  const cleanPhone = phone ? phone.trim() : "";
  const cleanCompanyName = companyName ? companyName.trim() : "";
  const cleanProjectNotes = projectNotes ? projectNotes.trim() : "";

  const cleanProductDetails = productDetails ? productDetails.trim() : "";

  const cleanVideoHighlights = videoHighlights ? videoHighlights.trim() : "";

  const cleanLanguage = language ? language.trim() : "";

  const cleanVideoDuration = videoDuration ? videoDuration.trim() : "";

  // Required field validation
  if (
    !cleanFullName ||
    !cleanEmail ||
    !cleanPhone ||
    !serviceNeeded ||
    !estimatedBudget ||
    !cleanProjectNotes
  ) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields.",
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(cleanEmail)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address.",
    });
  }

  // Phone validation
  const phoneRegex = /^[0-9]{10}$/;

  if (!phoneRegex.test(cleanPhone)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid 10-digit phone number.",
    });
  }

  // Service validation
  const allowedServices = [
    "Web/App Development",
    "AI Video Ads & Shorts",
    "Google & AI SEO",
    "Full Growth Stack",
  ];

  if (!allowedServices.includes(serviceNeeded)) {
    return res.status(400).json({
      success: false,
      message: "Please select a valid service.",
    });
  }

  // Budget validation
  const allowedBudgets = ["< ₹50,000", "₹50k–₹1.5L", "₹1.5L–₹5L", "₹5L+"];

  if (!allowedBudgets.includes(estimatedBudget)) {
    return res.status(400).json({
      success: false,
      message: "Please select a valid budget range.",
    });
  }

  // AI Video specific validation
  if (serviceNeeded === "AI Video Ads & Shorts") {
    if (
      !cleanProductDetails ||
      !cleanVideoHighlights ||
      !voice ||
      !cleanLanguage ||
      !character ||
      !cleanVideoDuration
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required AI Video details.",
      });
    }

    if (!["Male", "Female"].includes(voice)) {
      return res.status(400).json({
        success: false,
        message: "Please select a valid voice.",
      });
    }

    if (!["Male", "Female"].includes(character)) {
      return res.status(400).json({
        success: false,
        message: "Please select a valid character.",
      });
    }
  }

  // Successful response
  res.status(201).json({
    success: true,
    message: "Project brief received successfully",
    data: {
      fullName: cleanFullName,
      email: cleanEmail,
      phone: cleanPhone,
      companyName: cleanCompanyName,
      serviceNeeded,
      estimatedBudget,
      projectNotes: cleanProjectNotes,

      // AI Video details
      ...(serviceNeeded === "AI Video Ads & Shorts" && {
        productDetails: cleanProductDetails,
        videoHighlights: cleanVideoHighlights,
        voice,
        language: cleanLanguage,
        character,
        videoDuration: cleanVideoDuration,
      }),
    },
  });
};

module.exports = {
  submitContactForm,
};
