import React, { useEffect, useRef, useState } from "react";

const ExecutionOverHype: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`eoh-wrapper${
        isVisible ? " eoh-visible" : ""
      }`}
    >
      <div className="eoh-card">

        {/* Gradient Overlay */}
        <div className="eoh-gradient" />

        {/* Grid */}
        <div className="eoh-grid">

          {/* Left — Title */}
          <div className="eoh-title-section">

            <h2 className="eoh-title">
              <span className="eoh-execution">Execution</span>
              <span className="eoh-hype">Over Hype</span>
            </h2>

            <div className="eoh-underline" />

          </div>

          {/* Right — Quote */}
          <div className="eoh-quote-section">

            <p className="eoh-quote-text">
              "We demonstrate capability through the products we've built
              ourselves. No vague claims, no theoretical decks. Just working
              software with real, paying clients."
            </p>

            {/* Footer / Tagline */}
            <div className="eoh-footer">
              <span className="eoh-footer-text">
                The Alpha Zeta Philosophy
              </span>

              <div className="eoh-footer-line" />
            </div>

          </div>

        </div>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        /* =========================
           WRAPPER
        ========================= */

        .eoh-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
          background: #fafbfb;
          font-family:
            system-ui,
            -apple-system,
            Arial,
            Helvetica,
            sans-serif;
        }

        /* =========================
           CARD
        ========================= */

        .eoh-card {
          position: relative;
          width: 100%;

          background: #ffffff;

          border-radius: 0;

          padding: 3rem 4rem;

          box-shadow:
            0 1px 3px rgba(10, 75, 63, 0.05);

          overflow: hidden;

          opacity: 0;
        }

        /* =========================
           GRADIENT OVERLAY
        ========================= */

        .eoh-gradient {
          position: absolute;

          top: 0;
          right: 0;

          height: 100%;
          width: 33.333%;

          background:
            linear-gradient(
              to bottom right,
              rgba(79, 179, 162, 0) 0%,
              rgba(79, 179, 162, 0.10) 50%,
              rgba(79, 179, 162, 0.18) 100%
            );

          pointer-events: none;
          z-index: 0;

          animation:
            eohGradientFloat
            8s
            ease-in-out
            infinite;
        }

        /* =========================
           GRID
        ========================= */

        .eoh-grid {
          position: relative;
          z-index: 10;

          display: grid;

          grid-template-columns:
            repeat(
              auto-fit,
              minmax(300px, 1fr)
            );

          gap: 3rem;
        }

        /* =========================
           TITLE SECTION
        ========================= */

        .eoh-title-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .eoh-title {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.025em;
          margin: 0;
        }

        .eoh-execution {
          display: block;
          color: #142235;

          opacity: 0;
        }

        .eoh-hype {
          display: block;
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
            eohGradientShift
            5s
            ease
            infinite;

          opacity: 0;
        }

        /* UNDERLINE */

        .eoh-underline {
          margin-top: 1rem;
          height: 4px;
          width: 6rem;
          border-radius: 9999px;

          background:
            linear-gradient(
              90deg,
              #0A4B3F,
              #4fb3a2,
              #0A4B3F
            );

          background-size: 200% 100%;

          transform-origin: left center;
          transform: scaleX(0);

          opacity: 0;

          animation:
            eohUnderlinePulse
            3s
            ease
            infinite;
        }

        /* =========================
           QUOTE SECTION
        ========================= */

        .eoh-quote-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.5rem;
        }

        .eoh-quote-text {
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.6;
          color: #4a5568;
          margin: 0;

          opacity: 0;
        }

        /* =========================
           FOOTER
        ========================= */

        .eoh-footer {
          display: flex;
          align-items: center;
          gap: 1rem;

          opacity: 0;
        }

        .eoh-footer-text {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #6b7a8c;
        }

        .eoh-footer-line {
          height: 2px;
          width: 3rem;
          background: #cfe8e3;

          transform-origin: left center;
          transform: scaleX(0);

          opacity: 0;
        }

        /* =========================
           VISIBLE STATE — Animations
        ========================= */

        .eoh-wrapper.eoh-visible .eoh-card {
          animation:
            eohCardIn
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0s
            forwards;
        }

        .eoh-wrapper.eoh-visible .eoh-execution {
          animation:
            eohExecutionIn
            0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.25s
            forwards;
        }

        .eoh-wrapper.eoh-visible .eoh-hype {
          animation:
            eohHypeIn
            0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.4s
            forwards;
        }

        .eoh-wrapper.eoh-visible .eoh-underline {
          animation:
            eohUnderlineIn
            0.9s
            cubic-bezier(0.34, 1.4, 0.64, 1)
            0.6s
            forwards;
        }

        .eoh-wrapper.eoh-visible .eoh-quote-text {
          animation:
            eohQuoteIn
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.75s
            forwards;
        }

        .eoh-wrapper.eoh-visible .eoh-footer {
          animation:
            eohFooterIn
            0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.95s
            forwards;
        }

        .eoh-wrapper.eoh-visible .eoh-footer-line {
          animation:
            eohLineGrow
            0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            1.1s
            forwards;
        }

        /* =========================
           KEYFRAMES
        ========================= */

        @keyframes eohCardIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes eohExecutionIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes eohHypeIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes eohUnderlineIn {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }

          70% {
            transform: scaleX(1.08);
            opacity: 1;
          }

          100% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes eohQuoteIn {
          from {
            opacity: 0;
            transform: translateY(22px);
            filter: blur(5px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes eohFooterIn {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes eohLineGrow {
          from {
            transform: scaleX(0);
            opacity: 0;
          }

          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes eohGradientShift {
          0% {
            background-position: 0% 50%;
          }

          100% {
            background-position: 200% 50%;
          }
        }

        @keyframes eohUnderlinePulse {
          0%,
          100% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes eohGradientFloat {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.9;
          }

          50% {
            transform: translate(-15px, 15px);
            opacity: 1;
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {
          .eoh-card {
            padding: 2.5rem 3rem;
          }

          .eoh-title {
            font-size: 2.5rem;
          }

          .eoh-grid {
            gap: 2rem;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {
          .eoh-card {
            padding: 2rem 1.5rem;
          }

          .eoh-title {
            font-size: 2rem;
          }

          .eoh-grid {
            grid-template-columns: 1fr;
            gap: 1.75rem;
          }

          .eoh-quote-text {
            font-size: 0.95rem;
          }

          .eoh-underline {
            width: 4.5rem;
          }

          .eoh-gradient {
            width: 50%;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 420px) {
          .eoh-card {
            padding: 1.75rem 1.25rem;
          }

          .eoh-title {
            font-size: 1.75rem;
          }

          .eoh-quote-text {
            font-size: 0.9rem;
          }

          .eoh-footer-text {
            font-size: 0.6rem;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .eoh-wrapper *,
          .eoh-wrapper *::before,
          .eoh-wrapper *::after {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ExecutionOverHype;