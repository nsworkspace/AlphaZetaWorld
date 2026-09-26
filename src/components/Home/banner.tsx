import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="banner-section">
      <div className="banner-container">

        {/* LEFT CONTENT */}
        <div className="banner-content">

          {/* Badge */}
          <div className="banner-badge">
            <span className="banner-dot"></span>
            <span>GROW YOUR BUSINESS</span>
          </div>

          {/* Heading */}
          <h1 className="banner-title">
            Transform Ideas
            <br />
            Into <span>Real Growth</span>
          </h1>

          {/* Description */}
          <p className="banner-description">
            We build digital solutions that help businesses grow — with
            <br />
            modern websites, scalable applications, and AI-powered tools.
          </p>

          {/* Buttons */}
          <div className="banner-buttons">
            <button className="banner-primary-btn">
              Get Started
              <span>→</span>
            </button>

            <button className="banner-secondary-btn">
              Our Services
            </button>
          </div>

          {/* Features */}
          <div className="banner-features">

            {/* Trusted Solutions */}
            <div className="banner-feature">
              <div className="banner-feature-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3L20 6V11C20 16.5 16.5 20 12 21C7.5 20 4 16.5 4 11V6L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M8.5 12L11 14.5L15.5 9.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
              </div>

              <div>
                <span>Trusted</span>
                <span>Solutions</span>
              </div>
            </div>

            <div className="banner-divider"></div>

            {/* Fast Performance */}
            <div className="banner-feature">
              <div className="banner-feature-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 2L4 13H11L10 22L20 10H13L13 2Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
              </div>

              <div>
                <span>Fast</span>
                <span>Performance</span>
              </div>
            </div>

            <div className="banner-divider"></div>

            {/* Expert Support */}
            <div className="banner-feature">
              <div className="banner-feature-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="9"
                    cy="7"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <circle
                    cx="17"
                    cy="8"
                    r="2.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M3 20C3 15.8 5.5 13 9 13C12.5 13 15 15.8 15 20"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M14 14C15 12.8 16.2 12 18 12C20.7 12 22 14.2 22 17"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
              </div>

              <div>
                <span>Expert</span>
                <span>Support</span>
              </div>
            </div>

            <div className="banner-divider"></div>

            {/* Measurable Results */}
            <div className="banner-feature">
              <div className="banner-feature-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 20V14" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M9 20V9" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M14 20V5" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M19 20V2" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M3 20H21" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </div>

              <div>
                <span>Measurable</span>
                <span>Results</span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="banner-image">
          <img
            src="/Images/homebanner.png"
            alt="Dashboard"
          />
        </div>

      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        /* =========================
           BANNER
        ========================= */

        .banner-section {
          width: 100%;
          height: 450px;
          min-height: 450px;

          overflow: hidden;

          background: #003d31;

          color: #ffffff;

          font-family: Arial, Helvetica, sans-serif;
        }

        .banner-container {
          position: relative;

          width: 100%;
          max-width: 1450px;

          height: 100%;

          margin: 0 auto;

          padding: 35px 7%;

          display: flex;
          align-items: center;
        }

        /* =========================
           LEFT CONTENT
        ========================= */

        .banner-content {
          position: relative;
          z-index: 2;

          width: 55%;
        }

        /* =========================
           BADGE
        ========================= */

        .banner-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          padding: 7px 14px;

          border: 1px solid #00dba3;
          border-radius: 30px;

          color: #00e2a8;

          font-size: 13px;
          font-weight: 600;

          opacity: 0;

          animation:
            bnSlideDown
            0.7s
            cubic-bezier(0.22, 1, 0.36, 1)
            0s
            forwards;
        }

        .banner-dot {
          width: 10px;
          height: 10px;

          border-radius: 50%;

          background: #19e5a9;

          box-shadow:
            0 0 8px rgba(25, 229, 169, 0.6);

          animation:
            bnDotPulse
            2s
            ease-in-out
            infinite;
        }

        /* =========================
           TITLE
        ========================= */

        .banner-title {
          margin: 20px 0 12px;

          font-size: 52px;

          line-height: 1.02;

          letter-spacing: -2px;

          font-weight: 700;

          color: #ffffff;

          opacity: 0;

          animation:
            bnSlideLeft
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.15s
            forwards;
        }

        .banner-title span {
          color: #19e7a8;

          background: linear-gradient(
            90deg,
            #19e7a8,
            #42edb8,
            #19e7a8
          );

          background-size: 200% 100%;

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          background-clip: text;

          animation:
            bnGradientShift
            4s
            ease
            infinite;
        }

        /* =========================
           DESCRIPTION
        ========================= */

        .banner-description {
          margin: 0;

          font-size: 16px;

          line-height: 1.5;

          color: rgba(255, 255, 255, 0.72);

          opacity: 0;

          animation:
            bnFadeUp
            0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.35s
            forwards;
        }

        /* =========================
           BUTTONS
        ========================= */

        .banner-buttons {
          display: flex;
          align-items: center;

          gap: 16px;

          margin-top: 20px;

          opacity: 0;

          animation:
            bnFadeUp
            0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.5s
            forwards;
        }

        .banner-primary-btn,
        .banner-secondary-btn {
          height: 48px;

          padding: 0 28px;

          border-radius: 28px;

          font-size: 15px;

          font-weight: 500;

          cursor: pointer;

          transition: all 0.3s ease;
        }

        .banner-primary-btn {
          position: relative;

          border: none;

          background: #ffffff;

          color: #111111;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          overflow: hidden;

          box-shadow:
            0 0 0 rgba(25, 231, 168, 0);

          animation:
            bnBtnPulse
            3s
            ease-in-out
            1.4s
            infinite;
        }

        .banner-primary-btn::before {
          content: "";

          position: absolute;

          top: 0;
          left: -120%;

          width: 80%;
          height: 100%;

          background:
            linear-gradient(
              120deg,
              transparent,
              rgba(25, 231, 168, 0.25),
              transparent
            );

          transform: skewX(-20deg);

          animation:
            bnShine
            3.5s
            ease-in-out
            2s
            infinite;
        }

        .banner-primary-btn span {
          font-size: 20px;

          transition: transform 0.3s ease;
        }

        .banner-primary-btn:hover {
          transform: translateY(-2px);

          box-shadow:
            0 8px 20px rgba(0, 0, 0, 0.18);
        }

        .banner-primary-btn:hover span {
          transform: translateX(4px);
        }

        .banner-secondary-btn {
          min-width: 165px;

          background: transparent;

          border: 1px solid #22dca9;

          color: #ffffff;
        }

        .banner-secondary-btn:hover {
          background: rgba(34, 220, 169, 0.08);

          transform: translateY(-2px);
        }

        /* =========================
           FEATURES
        ========================= */

        .banner-features {
          display: flex;
          align-items: center;

          gap: 20px;

          margin-top: 27px;
        }

        .banner-feature {
          display: flex;
          align-items: center;

          gap: 9px;

          color: rgba(255, 255, 255, 0.72);

          font-size: 12px;

          line-height: 1.3;

          white-space: nowrap;

          opacity: 0;

          animation:
            bnFadeUp
            0.7s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        /* Feature stagger — one by one */
        .banner-feature:nth-child(1) {
          animation-delay: 0.65s;
        }

        .banner-feature:nth-child(3) {
          animation-delay: 0.8s;
        }

        .banner-feature:nth-child(5) {
          animation-delay: 0.95s;
        }

        .banner-feature:nth-child(7) {
          animation-delay: 1.1s;
        }

        .banner-feature span {
          display: block;
        }

        .banner-feature-icon {
          width: 31px;
          height: 31px;

          flex-shrink: 0;

          color: #d8fff4;

          transition: transform 0.3s ease;
        }

        .banner-feature:hover .banner-feature-icon {
          transform: scale(1.15) rotate(-6deg);
        }

        .banner-feature-icon svg {
          width: 100%;
          height: 100%;
        }

        .banner-divider {
          width: 1px;
          height: 35px;

          background: rgba(255, 255, 255, 0.15);

          opacity: 0;

          animation:
            bnDividerIn
            0.5s
            ease
            forwards;
        }

        .banner-divider:nth-child(2) {
          animation-delay: 0.72s;
        }

        .banner-divider:nth-child(4) {
          animation-delay: 0.87s;
        }

        .banner-divider:nth-child(6) {
          animation-delay: 1.02s;
        }

        /* =========================
           RIGHT SIDE IMAGE
        ========================= */

        .banner-image {
          position: absolute;

          z-index: 1;

          width: 50%;

          right: 3%;

          top: 50%;

          transform: translateY(-50%);

          display: flex;
          align-items: center;
          justify-content: center;

          opacity: 0;

          animation:
            bnImageIn
            1.1s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.4s
            forwards;
        }

        .banner-image img {
          display: block;

          width: 100%;
          max-width: 720px;

          height: auto;

          object-fit: contain;

          transform: translateX(0);

          filter:
            drop-shadow(
              0 25px 25px rgba(0, 0, 0, 0.3)
            );

          transition:
            transform 0.4s ease,
            filter 0.4s ease;
        }

        .banner-image img:hover {
          transform:
            translateX(-3px)
            translateY(-4px)
            scale(1.01);

          filter:
            drop-shadow(
              0 30px 30px rgba(0, 0, 0, 0.38)
            );
        }

        /* =========================
           KEYFRAMES
        ========================= */

        @keyframes bnSlideDown {
          from {
            opacity: 0;
            transform: translateY(-16px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bnSlideLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bnFadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bnDividerIn {
          from {
            opacity: 0;
            transform: scaleY(0.3);
          }

          to {
            opacity: 1;
            transform: scaleY(1);
          }
        }

        @keyframes bnImageIn {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(50px) scale(0.94);
          }

          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0) scale(1);
          }
        }

        @keyframes bnDotPulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 8px rgba(25, 229, 169, 0.6);
          }

          50% {
            transform: scale(1.25);
            box-shadow: 0 0 14px rgba(25, 229, 169, 0.9);
          }
        }

        @keyframes bnBtnPulse {
          0%,
          100% {
            box-shadow: 0 0 0 rgba(25, 231, 168, 0);
          }

          50% {
            box-shadow: 0 0 22px rgba(25, 231, 168, 0.35);
          }
        }

        @keyframes bnShine {
          0% {
            left: -120%;
          }

          60% {
            left: 130%;
          }

          100% {
            left: 130%;
          }
        }

        @keyframes bnGradientShift {
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

        @media (max-width: 1100px) {

          .banner-container {
            padding-left: 5%;
            padding-right: 3%;
          }

          .banner-content {
            width: 58%;
          }

          .banner-title {
            font-size: 45px;
          }

          .banner-description {
            font-size: 14px;
          }

          .banner-features {
            gap: 12px;
          }

          .banner-feature {
            font-size: 10px;
          }

          .banner-image {
            width: 47%;
            right: 3%;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 700px) {

          .banner-section {
            height: auto;
            min-height: 620px;
          }

          .banner-container {
            padding: 35px 6% 30px;

            display: block;
          }

          .banner-content {
            width: 100%;
          }

          .banner-title {
            font-size: 39px;

            letter-spacing: -1.5px;
          }

          .banner-description {
            font-size: 14px;
          }

          .banner-description br {
            display: none;
          }

          .banner-buttons {
            gap: 10px;
          }

          .banner-primary-btn,
          .banner-secondary-btn {
            height: 46px;
          }

          .banner-features {
            display: grid;

            grid-template-columns: 1fr 1fr;

            gap: 16px 10px;

            margin-top: 28px;
          }

          .banner-divider {
            display: none;
          }

          .banner-feature {
            font-size: 11px;
          }

          .banner-feature-icon {
            width: 28px;
            height: 28px;
          }

          /* Mobile image */
          .banner-image {
            position: relative;

            width: 100%;

            height: 220px;

            right: auto;
            top: auto;

            transform: none;

            margin-top: 20px;

            animation: none;
            opacity: 1;
          }

          .banner-image img {
            width: 125%;

            max-width: none;

            transform: translateX(0);
          }

          .banner-image img:hover {
            transform: translateX(0);
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 480px) {

          .banner-section {
            min-height: 590px;
          }

          .banner-container {
            padding: 30px 5%;
          }

          .banner-title {
            font-size: 35px;
          }

          .banner-description {
            font-size: 13px;
          }

          .banner-image {
            height: 185px;
          }

          .banner-image img {
            width: 135%;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .banner-section *,
          .banner-section *::before,
          .banner-section *::after {
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

export default Banner;