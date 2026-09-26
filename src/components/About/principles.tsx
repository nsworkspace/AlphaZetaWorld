import React, { useEffect, useRef, useState } from "react";

const principlesData = [
  {
    id: 1,
    title: "Technical Excellence",
    description:
      "We build fast, clean, scalable applications designed to last and scale easily.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0A4B3F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="6"></circle>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Radical Transparency",
    description:
      "No opaque pricing or bloated timelines. Expect absolute clarity at every step.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0A4B3F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Rapid Execution",
    description:
      "We run on weekly sprints and cycles, delivering usable features instead of decks.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0A4B3F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Invention Spirit",
    description:
      "We don't just consume. We discover new, better frameworks to build.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0A4B3F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18h6"></path>
        <path d="M10 22h4"></path>
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A6 6 0 1 0 7.5 11.5c.76.76 1.23 1.52 1.41 2.5"></path>
      </svg>
    ),
  },
];

const CorePrinciples: React.FC = () => {
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
    <div
      ref={sectionRef}
      className={`cp-wrapper${isVisible ? " cp-visible" : ""}`}
    >
      <div className="cp-container">

        {/* Header */}
        <div className="cp-header">
          <span className="cp-subtitle">PRINCIPLES</span>

          <h2 className="cp-title">
            Core <span className="cp-title-green">Principles</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="cp-grid">
          {principlesData.map((item) => (
            <div key={item.id} className="cp-card">

              {/* Icon Circle */}
              <div className="cp-icon-circle">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="cp-card-title">{item.title}</h3>

              <p className="cp-card-description">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        /* =========================
           WRAPPER
        ========================= */

        .cp-wrapper {
          width: 100%;
          background: #ffffff;

          padding: 4rem 2rem;

          font-family:
            system-ui,
            -apple-system,
            Arial,
            Helvetica,
            sans-serif;
        }

        .cp-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        /* =========================
           HEADER
        ========================= */

        .cp-header {
          margin-bottom: 2.5rem;
        }

        .cp-subtitle {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #0A4B3F;
          text-transform: uppercase;

          display: block;
          margin-bottom: 0.5rem;

          opacity: 0;
        }

        .cp-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #142235;
          margin: 0;
          letter-spacing: -0.025em;

          opacity: 0;
        }

        .cp-title-green {
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
            cpGradientShift
            5s
            ease
            infinite;
        }

        /* =========================
           GRID
        ========================= */

        .cp-grid {
          display: grid;

          grid-template-columns:
            repeat(
              auto-fit,
              minmax(240px, 1fr)
            );

          gap: 1.5rem;
        }

        /* =========================
           CARD
        ========================= */

        .cp-card {
          position: relative;

          background: #ffffff;

          border: 1px solid #dce8e3;
          border-radius: 1rem;

          padding: 1.5rem;

          display: flex;
          flex-direction: column;
          align-items: flex-start;

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;

          opacity: 0;
        }

        .cp-card:hover {
          transform: translateY(-6px);

          border-color: #0A4B3F;

          box-shadow:
            0 12px 28px rgba(10, 75, 63, 0.12),
            0 4px 8px rgba(10, 75, 63, 0.06);
        }

        /* =========================
           ICON CIRCLE
        ========================= */

        .cp-icon-circle {
          width: 3rem;
          height: 3rem;

          border-radius: 50%;

          background: #e8f3ef;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 1.25rem;

          transition:
            transform 0.4s ease,
            background 0.4s ease,
            box-shadow 0.4s ease;

          opacity: 0;
        }

        .cp-card:hover .cp-icon-circle {
          transform: scale(1.1) rotate(-8deg);

          background: #0A4B3F;

          box-shadow:
            0 8px 20px rgba(10, 75, 63, 0.22);
        }

        /* Icon stroke turns white on hover */
        .cp-card:hover .cp-icon-circle svg {
          stroke: #ffffff;
        }

        .cp-icon-circle svg {
          transition: stroke 0.4s ease;
        }

        /* =========================
           CARD TITLE
        ========================= */

        .cp-card-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #142235;

          margin: 0 0 0.5rem 0;

          opacity: 0;
        }

        /* =========================
           CARD DESCRIPTION
        ========================= */

        .cp-card-description {
          font-size: 0.875rem;
          line-height: 1.6;
          color: #5b6472;

          margin: 0;

          opacity: 0;
        }

        /* =========================
           VISIBLE STATE — Animations
        ========================= */

        .cp-wrapper.cp-visible .cp-subtitle {
          animation:
            cpSlideDown
            0.7s
            cubic-bezier(0.22, 1, 0.36, 1)
            0s
            forwards;
        }

        .cp-wrapper.cp-visible .cp-title {
          animation:
            cpTitleIn
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.15s
            forwards;
        }

        /* Card entrance — stagger */
        .cp-wrapper.cp-visible .cp-card {
          animation:
            cpCardIn
            0.85s
            cubic-bezier(0.34, 1.4, 0.64, 1)
            forwards;
        }

        .cp-wrapper.cp-visible .cp-card:nth-child(1) {
          animation-delay: 0.35s;
        }

        .cp-wrapper.cp-visible .cp-card:nth-child(2) {
          animation-delay: 0.5s;
        }

        .cp-wrapper.cp-visible .cp-card:nth-child(3) {
          animation-delay: 0.65s;
        }

        .cp-wrapper.cp-visible .cp-card:nth-child(4) {
          animation-delay: 0.8s;
        }

        /* Icon bounce */
        .cp-wrapper.cp-visible .cp-icon-circle {
          animation:
            cpIconBounce
            0.85s
            cubic-bezier(0.34, 1.4, 0.64, 1)
            forwards;
        }

        .cp-wrapper.cp-visible
        .cp-card:nth-child(1) .cp-icon-circle {
          animation-delay: 0.55s;
        }

        .cp-wrapper.cp-visible
        .cp-card:nth-child(2) .cp-icon-circle {
          animation-delay: 0.7s;
        }

        .cp-wrapper.cp-visible
        .cp-card:nth-child(3) .cp-icon-circle {
          animation-delay: 0.85s;
        }

        .cp-wrapper.cp-visible
        .cp-card:nth-child(4) .cp-icon-circle {
          animation-delay: 1s;
        }

        /* Card title fade up */
        .cp-wrapper.cp-visible .cp-card-title {
          animation:
            cpFadeUp
            0.7s
            ease
            forwards;
        }

        .cp-wrapper.cp-visible
        .cp-card:nth-child(1) .cp-card-title {
          animation-delay: 0.7s;
        }

        .cp-wrapper.cp-visible
        .cp-card:nth-child(2) .cp-card-title {
          animation-delay: 0.85s;
        }

        .cp-wrapper.cp-visible
        .cp-card:nth-child(3) .cp-card-title {
          animation-delay: 1s;
        }

        .cp-wrapper.cp-visible
        .cp-card:nth-child(4) .cp-card-title {
          animation-delay: 1.15s;
        }

        /* Description fade up */
        .cp-wrapper.cp-visible .cp-card-description {
          animation:
            cpFadeUp
            0.7s
            ease
            forwards;
        }

        .cp-wrapper.cp-visible
        .cp-card:nth-child(1) .cp-card-description {
          animation-delay: 0.85s;
        }

        .cp-wrapper.cp-visible
        .cp-card:nth-child(2) .cp-card-description {
          animation-delay: 1s;
        }

        .cp-wrapper.cp-visible
        .cp-card:nth-child(3) .cp-card-description {
          animation-delay: 1.15s;
        }

        .cp-wrapper.cp-visible
        .cp-card:nth-child(4) .cp-card-description {
          animation-delay: 1.3s;
        }

        /* =========================
           KEYFRAMES
        ========================= */

        @keyframes cpSlideDown {
          from {
            opacity: 0;
            transform: translateY(-14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cpTitleIn {
          from {
            opacity: 0;
            transform: translateY(28px) scale(0.97);
            letter-spacing: 2px;
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            letter-spacing: -0.025em;
          }
        }

        @keyframes cpCardIn {
          0% {
            opacity: 0;
            transform: translateY(35px) scale(0.96);
          }

          60% {
            opacity: 1;
            transform: translateY(-4px) scale(1.01);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes cpIconBounce {
          0% {
            opacity: 0;
            transform: scale(0.4) rotate(-45deg);
          }

          70% {
            opacity: 1;
            transform: scale(1.12) rotate(10deg);
          }

          100% {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }

        @keyframes cpFadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cpGradientShift {
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

        @media (max-width: 900px) {
          .cp-wrapper {
            padding: 3.5rem 1.75rem;
          }

          .cp-title {
            font-size: 2.25rem;
          }

          .cp-grid {
            gap: 1.25rem;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {
          .cp-wrapper {
            padding: 3rem 1.25rem;
          }

          .cp-title {
            font-size: 2rem;
          }

          .cp-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .cp-card {
            padding: 1.35rem;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 420px) {
          .cp-wrapper {
            padding: 2.5rem 1rem;
          }

          .cp-title {
            font-size: 1.75rem;
          }

          .cp-card {
            padding: 1.2rem;
          }

          .cp-card-title {
            font-size: 1.05rem;
          }

          .cp-card-description {
            font-size: 0.85rem;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .cp-wrapper *,
          .cp-wrapper *::before,
          .cp-wrapper *::after {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }

          .cp-card:hover .cp-icon-circle svg {
            stroke: #ffffff;
          }
        }
      `}</style>
    </div>
  );
};

export default CorePrinciples;