import React, { useEffect, useRef, useState } from "react";

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  /* =====================================================
     INTERSECTION OBSERVER — Repeats on scroll up/down
  ===================================================== */

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about-section${
        isVisible ? " about-visible" : ""
      }`}
    >
      <div className="about-container">

        {/* TOP CONTENT */}
        <div className="about-top">

          <p className="about-eyebrow">
            THE COMPANY BEHIND THE CODE
          </p>

          <h1 className="about-heading">
            Alpha Zeta <span>World</span>
          </h1>

          <p className="about-intro">
            A modern technology venture operating through a hybrid dual-vertical
            <br />
            business model. We engineer platforms to drive businesses from inception
            <br />
            to maturity.
          </p>

        </div>

        {/* DIVIDER */}
        <div className="about-divider"></div>

        {/* BOTTOM CONTENT */}
        <div className="principle-grid">

          {/* LEFT CONTENT */}
          <div className="principle-content">

            <p className="principle-eyebrow">
              OUR GUIDING PRINCIPLE
            </p>

            <h2 className="principle-heading">
              From Inception to{" "}
              <span>Market Leadership.</span>
            </h2>

            <p className="principle-text">
              Our mission is to help companies cross the threshold from inception
              (Alpha) to scale and market maturity (Zeta). We sit squarely at the
              intersection of production-grade engineering and user growth, acting
              as your technical engine and distribution catalyst.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="principle-image">
            <img
              src="/images/about.png"
              alt="Guiding Principle"
            />
          </div>

        </div>

      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        /* =========================
           SECTION
        ========================= */

        .about-section {
          width: 100%;
          background: #ffffff;
          padding: 45px 5.5% 40px;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .about-container {
          width: 100%;
          max-width: 1450px;
          margin: 0 auto;
        }

        /* =========================
           TOP CONTENT
        ========================= */

        .about-eyebrow {
          margin: 0 0 20px;
          color: #0A4B3F;
          font-size: 16px;
          line-height: 1.2;
          font-weight: 500;
          letter-spacing: 0.3px;

          opacity: 0;
        }

        .about-heading {
          margin: 0;
          color: #142235;
          font-size: 54px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: -2.5px;

          opacity: 0;
        }

        .about-heading span {
          color: #0A4B3F;

          background:
            linear-gradient(
              90deg,
              #0A4B3F 0%,
              #0F5C4A 50%,
              #0A4B3F 100%
            );

          background-size: 200% 100%;

          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;

          animation:
            azGradientShift
            5s
            ease
            infinite;
        }

        .about-intro {
          margin: 21px 0 0;
          color: #5b626a;
          font-size: 18px;
          line-height: 1.5;
          font-weight: 400;

          opacity: 0;
        }

        /* =========================
           DIVIDER
        ========================= */

        .about-divider {
          width: 100%;
          height: 1px;
          margin: 32px 0 34px;
          background: #bcd8d3;

          transform-origin: left center;

          transform: scaleX(0);
          opacity: 0;
        }

        /* =========================
           PRINCIPLE GRID
        ========================= */

        .principle-grid {
          display: grid;
          grid-template-columns: 1.55fr 1fr;
          align-items: center;
          gap: 50px;
        }

        .principle-content {
          min-width: 0;

          opacity: 0;
        }

        .principle-eyebrow {
          margin: 0 0 20px;
          color: #0A4B3F;
          font-size: 16px;
          line-height: 1.2;
          font-weight: 600;
          letter-spacing: 0.3px;
        }

        .principle-heading {
          margin: 0;
          color: #142235;
          font-size: 39px;
          line-height: 1.12;
          font-weight: 700;
          letter-spacing: -1.5px;
        }

        .principle-heading span {
          color: #0A4B3F;
        }

        .principle-text {
          max-width: 850px;
          margin: 20px 0 0;
          color: #626870;
          font-size: 18px;
          line-height: 1.55;
          font-weight: 400;
        }

        /* =========================
           IMAGE
        ========================= */

        .principle-image {
          width: 100%;

          opacity: 0;
        }

        .principle-image img {
          display: block;
          width: 100%;
          height: 280px;
          object-fit: cover;
          border-radius: 27px;

          box-shadow:
            0 8px 24px rgba(10, 75, 63, 0.08);

          transition:
            transform 0.5s ease,
            box-shadow 0.5s ease;
        }

        .principle-image img:hover {
          transform: translateY(-6px) scale(1.02);

          box-shadow:
            0 16px 36px rgba(10, 75, 63, 0.18);
        }

        /* =========================
           VISIBLE STATE — Animations
        ========================= */

        .about-section.about-visible .about-eyebrow {
          animation:
            aboutSlideDown
            0.7s
            cubic-bezier(0.22, 1, 0.36, 1)
            0s
            forwards;
        }

        .about-section.about-visible .about-heading {
          animation:
            aboutHeadingIn
            1s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.15s
            forwards;
        }

        .about-section.about-visible .about-intro {
          animation:
            aboutBlurIn
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.35s
            forwards;
        }

        .about-section.about-visible .about-divider {
          animation:
            aboutDividerIn
            1s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.55s
            forwards;
        }

        .about-section.about-visible .principle-content {
          animation:
            aboutSlideLeft
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.75s
            forwards;
        }

        .about-section.about-visible .principle-image {
          animation:
            aboutSlideRight
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.9s
            forwards;
        }

        /* =========================
           KEYFRAMES
        ========================= */

        @keyframes aboutSlideDown {
          from {
            opacity: 0;
            transform: translateY(-14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes aboutHeadingIn {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.97);
            letter-spacing: 3px;
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            letter-spacing: -2.5px;
          }
        }

        @keyframes aboutBlurIn {
          from {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(5px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes aboutDividerIn {
          from {
            transform: scaleX(0);
            opacity: 0;
          }

          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes aboutSlideLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes aboutSlideRight {
          from {
            opacity: 0;
            transform: translateX(40px) scale(0.95);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes azGradientShift {
          0% {
            background-position: 0% 50%;
          }

          100% {
            background-position: 200% 50%;
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1000px) {

          .about-section {
            padding: 40px 5% 38px;
          }

          .about-heading {
            font-size: 46px;
          }

          .about-intro {
            font-size: 17px;
          }

          .about-divider {
            margin: 28px 0 32px;
          }

          .principle-grid {
            grid-template-columns: 1.15fr 1fr;
            gap: 30px;
          }

          .principle-heading {
            font-size: 32px;
          }

          .principle-text {
            font-size: 16px;
          }

          .principle-image img {
            height: 250px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 700px) {

          .about-section {
            padding: 38px 20px 42px;
          }

          .about-eyebrow {
            margin-bottom: 16px;
            font-size: 13px;
          }

          .about-heading {
            font-size: 37px;
            letter-spacing: -1.5px;
          }

          .about-intro {
            margin-top: 17px;
            font-size: 15px;
            line-height: 1.5;
          }

          .about-intro br {
            display: none;
          }

          .about-divider {
            margin: 28px 0 32px;
          }

          .principle-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .principle-eyebrow {
            margin-bottom: 15px;
            font-size: 13px;
          }

          .principle-heading {
            font-size: 29px;
            line-height: 1.15;
            letter-spacing: -1px;
          }

          .principle-text {
            margin-top: 17px;
            font-size: 15px;
            line-height: 1.5;
          }

          .principle-image img {
            width: 100%;
            height: 235px;
            border-radius: 21px;
          }

          /* Mobile order: image below content (default) */
          /* If you want image above, swap using order */
          .principle-content {
            order: 1;
          }

          .principle-image {
            order: 2;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 480px) {

          .about-section {
            padding: 34px 17px 38px;
          }

          .about-heading {
            font-size: 33px;
          }

          .about-intro {
            font-size: 14px;
          }

          .about-divider {
            margin: 25px 0 30px;
          }

          .principle-heading {
            font-size: 26px;
          }

          .principle-text {
            font-size: 14px;
          }

          .principle-image img {
            height: 205px;
            border-radius: 18px;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .about-section *,
          .about-section *::before,
          .about-section *::after {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;