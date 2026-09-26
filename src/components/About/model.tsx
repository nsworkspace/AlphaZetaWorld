import React, { useEffect, useRef, useState } from "react";

const OperatingModel: React.FC = () => {
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
      className={`operating-section${
        isVisible ? " om-visible" : ""
      }`}
    >
      <div className="operating-container">

        {/* SECTION HEADING */}
        <div className="operating-heading-wrap">

          <div className="operating-label">
            <span>OUR OPERATING MODEL</span>
            <i></i>
          </div>

          <h2 className="operating-title">
            Dual-Vertical <span>Framework</span>
          </h2>

        </div>

        {/* CARDS */}
        <div className="model-grid">

          {/* PRODUCT LAB */}
          <div className="model-card">

            <div className="card-glow">
              <div className="glow-circle glow-one"></div>
              <div className="glow-circle glow-two"></div>
            </div>

            <div className="model-content">

              <div className="model-icon product-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M3.8 12H20.2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M12 3.5C14.2 5.8 15.3 8.6 15.3 12C15.3 15.4 14.2 18.2 12 20.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M12 3.5C9.8 5.8 8.7 8.6 8.7 12C8.7 15.4 9.8 18.2 12 20.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <h3 className="model-title">
                Product Lab
              </h3>

              <p className="model-description">
                We build, launch, operate, and monetize our own proprietary
                digital products. This includes SaaS platforms, mobile utility
                apps, and browser integrations that act as real-world proof of
                our speed, technical capacity, and execution capability.
              </p>

            </div>
          </div>

          {/* AGENCY SERVICES */}
          <div className="model-card">

            <div className="card-glow">
              <div className="glow-circle glow-one"></div>
              <div className="glow-circle glow-two"></div>
            </div>

            <div className="model-content">

              <div className="model-icon agency-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="7"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <circle
                    cx="5.5"
                    cy="10"
                    r="2.3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <circle
                    cx="18.5"
                    cy="10"
                    r="2.3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M6.5 20C6.5 16.2 8.5 13.5 12 13.5C15.5 13.5 17.5 16.2 17.5 20"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />

                  <path
                    d="M2.5 19C2.5 16.2 3.8 14.5 6.1 14.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M21.5 19C21.5 16.2 20.2 14.5 17.9 14.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h3 className="model-title">
                Agency Services
              </h3>

              <p className="model-description">
                We provide end-to-end digital execution for select external
                clients. Our team implements custom application development,
                deploys AI-powered automated video content production networks,
                and manages systemic organic search optimization.
              </p>

            </div>
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

        .operating-section {
          width: 100%;
          background: #ffffff;
          padding: 40px 5% 45px;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .operating-container {
          width: 100%;
          max-width: 1450px;
          margin: 0 auto;
        }

        /* =========================
           HEADING
        ========================= */

        .operating-heading-wrap {
          margin-bottom: 28px;
        }

        .operating-label {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 12px;

          opacity: 0;
        }

        .operating-label span {
          color: #0A4B3F;
          font-size: 14px;
          line-height: 1;
          font-weight: 600;
          letter-spacing: 1.4px;
        }

        .operating-label i {
          width: 58px;
          height: 2px;
          border-radius: 5px;
          background: #b8d4ce;

          transform-origin: left center;
          transform: scaleX(0);
        }

        .operating-title {
          margin: 0;
          color: #142235;
          font-size: 45px;
          line-height: 1.05;
          font-weight: 700;
          letter-spacing: -1.8px;

          opacity: 0;
        }

        .operating-title span {
          color: #0A4B3F;
        }

        /* =========================
           CARDS
        ========================= */

        .model-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .model-card {
          position: relative;
          height: 270px;
          overflow: hidden;

          border: 1px solid #d6e8e3;
          border-radius: 20px;
          background: #ffffff;

          box-shadow:
            0 6px 20px rgba(10, 75, 63, 0.04);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;

          opacity: 0;
        }

        .model-card:hover {
          transform: translateY(-6px);

          border-color: #0A4B3F;

          box-shadow:
            0 14px 32px rgba(10, 75, 63, 0.12);
        }

        /* =========================
           DECORATION
        ========================= */

        .card-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 200px;
          height: 200px;
          pointer-events: none;
        }

        .glow-circle {
          position: absolute;
          border-radius: 50%;
        }

        .glow-one {
          width: 225px;
          height: 225px;
          top: -112px;
          right: -75px;

          background: radial-gradient(
            circle,
            rgba(79, 179, 162, 0.17) 0%,
            rgba(79, 179, 162, 0.06) 48%,
            rgba(79, 179, 162, 0) 72%
          );

          animation:
            omGlowFloat
            8s
            ease-in-out
            infinite;
        }

        .glow-two {
          width: 170px;
          height: 170px;
          top: 12px;
          right: -85px;

          border: 1px solid rgba(79, 179, 162, 0.08);

          animation:
            omGlowFloat
            10s
            ease-in-out
            infinite;
        }

        /* =========================
           CONTENT
        ========================= */

        .model-content {
          position: relative;
          z-index: 2;
          padding: 28px 42px 25px;
        }

        /* =========================
           ICON
        ========================= */

        .model-icon {
          width: 68px;
          height: 68px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          margin-bottom: 20px;

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;

          opacity: 0;
        }

        .model-icon svg {
          width: 38px;
          height: 38px;

          transition: transform 0.4s ease;
        }

        .product-icon {
          background: #0A4B3F;
          color: #ffffff;

          box-shadow:
            0 8px 20px rgba(10, 75, 63, 0.18);
        }

        .agency-icon {
          background: #e8f3ef;
          color: #0A4B3F;

          box-shadow:
            0 8px 20px rgba(10, 75, 63, 0.10);
        }

        .model-card:hover .model-icon {
          transform: scale(1.08) rotate(-4deg);

          box-shadow:
            0 12px 28px rgba(10, 75, 63, 0.22);
        }

        .model-card:hover .model-icon svg {
          transform: rotate(6deg);
        }

        /* =========================
           TITLE
        ========================= */

        .model-title {
          margin: 0;
          color: #142235;
          font-size: 29px;
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -0.7px;

          opacity: 0;
        }

        /* =========================
           DESCRIPTION
        ========================= */

        .model-description {
          max-width: 850px;
          margin: 16px 0 0;

          color: #646b75;
          font-size: 16px;
          line-height: 1.5;
          font-weight: 400;

          opacity: 0;
        }

        /* =========================
           VISIBLE STATE — Animations
        ========================= */

        .operating-section.om-visible .operating-label {
          animation:
            omSlideDown
            0.7s
            cubic-bezier(0.22, 1, 0.36, 1)
            0s
            forwards;
        }

        .operating-section.om-visible .operating-label i {
          animation:
            omLineGrow
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.15s
            forwards;
        }

        .operating-section.om-visible .operating-title {
          animation:
            omTitleIn
            1s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.25s
            forwards;
        }

        /* Card 1 — from left */
        .operating-section.om-visible .model-card:nth-child(1) {
          animation:
            omCardFromLeft
            0.9s
            cubic-bezier(0.34, 1.4, 0.64, 1)
            0.4s
            forwards;
        }

        /* Card 2 — from right */
        .operating-section.om-visible .model-card:nth-child(2) {
          animation:
            omCardFromRight
            0.9s
            cubic-bezier(0.34, 1.4, 0.64, 1)
            0.55s
            forwards;
        }

        /* Icon animations — inside cards */
        .operating-section.om-visible .model-icon {
          animation:
            omIconBounce
            0.9s
            cubic-bezier(0.34, 1.4, 0.64, 1)
            forwards;
        }

        .operating-section.om-visible
        .model-card:nth-child(1) .model-icon {
          animation-delay: 0.7s;
        }

        .operating-section.om-visible
        .model-card:nth-child(2) .model-icon {
          animation-delay: 0.85s;
        }

        /* Title inside cards */
        .operating-section.om-visible .model-title {
          animation:
            omFadeUp
            0.7s
            ease
            forwards;
        }

        .operating-section.om-visible
        .model-card:nth-child(1) .model-title {
          animation-delay: 0.85s;
        }

        .operating-section.om-visible
        .model-card:nth-child(2) .model-title {
          animation-delay: 1s;
        }

        /* Description inside cards */
        .operating-section.om-visible .model-description {
          animation:
            omFadeUp
            0.7s
            ease
            forwards;
        }

        .operating-section.om-visible
        .model-card:nth-child(1) .model-description {
          animation-delay: 1s;
        }

        .operating-section.om-visible
        .model-card:nth-child(2) .model-description {
          animation-delay: 1.15s;
        }

        /* =========================
           KEYFRAMES
        ========================= */

        @keyframes omSlideDown {
          from {
            opacity: 0;
            transform: translateY(-14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes omLineGrow {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        @keyframes omTitleIn {
          from {
            opacity: 0;
            transform: translateY(28px) scale(0.97);
            letter-spacing: 2px;
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            letter-spacing: -1.8px;
          }
        }

        @keyframes omCardFromLeft {
          0% {
            opacity: 0;
            transform:
              perspective(900px)
              rotateY(-22deg)
              translateX(-40px);
          }

          60% {
            opacity: 1;
            transform:
              perspective(900px)
              rotateY(6deg)
              translateX(6px);
          }

          100% {
            opacity: 1;
            transform:
              perspective(900px)
              rotateY(0)
              translateX(0);
          }
        }

        @keyframes omCardFromRight {
          0% {
            opacity: 0;
            transform:
              perspective(900px)
              rotateY(22deg)
              translateX(40px);
          }

          60% {
            opacity: 1;
            transform:
              perspective(900px)
              rotateY(-6deg)
              translateX(-6px);
          }

          100% {
            opacity: 1;
            transform:
              perspective(900px)
              rotateY(0)
              translateX(0);
          }
        }

        @keyframes omIconBounce {
          0% {
            opacity: 0;
            transform: scale(0.4) rotate(-45deg);
          }

          70% {
            opacity: 1;
            transform: scale(1.1) rotate(10deg);
          }

          100% {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }

        @keyframes omFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes omGlowFloat {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-12px, 12px);
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1050px) {

          .operating-section {
            padding: 35px 5% 40px;
          }

          .operating-title {
            font-size: 40px;
          }

          .model-grid {
            gap: 20px;
          }

          .model-card {
            height: 255px;
          }

          .model-content {
            padding: 25px 28px;
          }

          .model-icon {
            width: 60px;
            height: 60px;
            margin-bottom: 17px;
          }

          .model-icon svg {
            width: 34px;
            height: 34px;
          }

          .model-title {
            font-size: 26px;
          }

          .model-description {
            font-size: 15px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 700px) {

          .operating-section {
            padding: 34px 20px 38px;
          }

          .operating-heading-wrap {
            margin-bottom: 23px;
          }

          .operating-label {
            gap: 12px;
            margin-bottom: 10px;
          }

          .operating-label span {
            font-size: 11px;
            letter-spacing: 1px;
          }

          .operating-label i {
            width: 40px;
            height: 2px;
          }

          .operating-title {
            font-size: 32px;
            letter-spacing: -1.2px;
          }

          .model-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .model-card {
            height: auto;
            min-height: 225px;
            border-radius: 18px;
          }

          .model-content {
            padding: 23px 22px 24px;
          }

          .model-icon {
            width: 56px;
            height: 56px;
            margin-bottom: 16px;
          }

          .model-icon svg {
            width: 31px;
            height: 31px;
          }

          .model-title {
            font-size: 23px;
          }

          .model-description {
            margin-top: 13px;
            font-size: 14px;
            line-height: 1.5;
          }

          /* Simpler animations on mobile */
          @keyframes omCardFromLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes omCardFromRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 480px) {

          .operating-section {
            padding: 30px 17px 34px;
          }

          .operating-title {
            font-size: 29px;
          }

          .model-card {
            min-height: 215px;
          }

          .model-content {
            padding: 21px 19px 22px;
          }

          .model-icon {
            width: 52px;
            height: 52px;
          }

          .model-icon svg {
            width: 29px;
            height: 29px;
          }

          .model-title {
            font-size: 22px;
          }

          .model-description {
            font-size: 13.5px;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .operating-section *,
          .operating-section *::before,
          .operating-section *::after {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default OperatingModel;