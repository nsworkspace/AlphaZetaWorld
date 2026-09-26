import React, { useEffect, useRef, useState } from "react";

const teamData = [
  {
    id: 1,
    name: "Alex Carter",
    role: "Partner & Head of Tech",
    image:
      "https://images.unsplash.comto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "Partner & Head of Product",
    image:
      "https://images.unsplash.comb8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    id: 3,
    name: "Devon Miller",
    role: "Director of AI Systems",
    image:
      "https://images.unsplash.cof7cbe7?auto=format&fit=crop&q=80&w=400&h=300",
  },
];

const LeadershipSection: React.FC = () => {
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
      className={`ls-wrapper${isVisible ? " ls-visible" : ""}`}
    >
      <div className="ls-container">

        {/* Header */}
        <div className="ls-header">

          <div>
            <span className="ls-subtitle">LEADERSHIP</span>

            <h2 className="ls-title">
              The Minds Behind the Tech
            </h2>
          </div>

          {/* Nav buttons */}
          <div className="ls-nav-buttons">
            <button
              type="button"
              className="ls-nav-button"
              aria-label="Previous"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A4B3F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button
              type="button"
              className="ls-nav-button"
              aria-label="Next"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A4B3F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

        </div>

        {/* Cards Grid */}
        <div className="ls-grid">

          {teamData.map((member) => (
            <div key={member.id} className="ls-card">

              {/* Image */}
              <div className="ls-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="ls-image"
                />
              </div>

              {/* Content */}
              <div className="ls-text-content">
                <h3 className="ls-name">{member.name}</h3>

                <p className="ls-role">{member.role}</p>

                <div className="ls-underline"></div>
              </div>

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

        .ls-wrapper {
          width: 100%;
          background: #ffffff;

          padding: 4rem 2rem;

          font-family:
            system-ui,
            -apple-system,
            Arial,
            Helvetica,
            sans-serif;

          position: relative;
        }

        .ls-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        /* =========================
           HEADER
        ========================= */

        .ls-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;

          margin-bottom: 2.5rem;

          flex-wrap: wrap;
          gap: 1rem;
        }

        .ls-subtitle {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #0A4B3F;
          text-transform: uppercase;

          display: block;
          margin-bottom: 0.5rem;

          opacity: 0;
        }

        .ls-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #142235;
          margin: 0;
          letter-spacing: -0.025em;

          opacity: 0;
        }

        /* =========================
           NAV BUTTONS
        ========================= */

        .ls-nav-buttons {
          display: flex;
          gap: 0.75rem;

          opacity: 0;
        }

        .ls-nav-button {
          width: 2.5rem;
          height: 2.5rem;

          border-radius: 50%;

          border: 1px solid #dce8e3;

          background: #ffffff;

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;

          transition:
            background 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .ls-nav-button svg {
          transition: stroke 0.3s ease;
        }

        .ls-nav-button:hover {
          background: #0A4B3F;

          border-color: #0A4B3F;

          transform: translateY(-2px);

          box-shadow:
            0 8px 18px rgba(10, 75, 63, 0.20);
        }

        .ls-nav-button:hover svg {
          stroke: #ffffff;
        }

        /* =========================
           GRID
        ========================= */

        .ls-grid {
          display: grid;

          grid-template-columns:
            repeat(
              auto-fit,
              minmax(300px, 1fr)
            );

          gap: 2rem;
        }

        /* =========================
           CARD
        ========================= */

        .ls-card {
          display: flex;
          flex-direction: column;

          opacity: 0;

          transition: transform 0.4s ease;
        }

        .ls-card:hover {
          transform: translateY(-8px);
        }

        /* =========================
           IMAGE
        ========================= */

        .ls-image-container {
          position: relative;

          width: 100%;
          height: 280px;

          border-radius: 1rem;
          overflow: hidden;

          margin-bottom: 1.25rem;

          background: #eaf2f0;

          opacity: 0;
        }

        /* Gradient overlay for polish */
        .ls-image-container::after {
          content: "";

          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              to bottom,
              transparent 55%,
              rgba(10, 75, 63, 0.06) 100%
            );

          pointer-events: none;

          transition: opacity 0.4s ease;
        }

        .ls-card:hover .ls-image-container::after {
          opacity: 0;
        }

        .ls-image {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;

          transition:
            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ls-card:hover .ls-image {
          transform: scale(1.06);
        }

        /* =========================
           TEXT CONTENT
        ========================= */

        .ls-text-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .ls-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #142235;

          margin: 0 0 0.25rem 0;

          opacity: 0;
        }

        .ls-role {
          font-size: 0.875rem;
          color: #5b6472;

          margin: 0 0 0.75rem 0;

          opacity: 0;
        }

        .ls-underline {
          height: 3px;
          width: 3rem;

          background:
            linear-gradient(
              90deg,
              #0A4B3F,
              #4fb3a2
            );

          border-radius: 2px;

          transform-origin: left center;

          transform: scaleX(0);

          opacity: 0;
        }

        /* =========================
           VISIBLE STATE — Animations
        ========================= */

        .ls-wrapper.ls-visible .ls-subtitle {
          animation:
            lsSlideDown
            0.7s
            cubic-bezier(0.22, 1, 0.36, 1)
            0s
            forwards;
        }

        .ls-wrapper.ls-visible .ls-title {
          animation:
            lsTitleIn
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.15s
            forwards;
        }

        .ls-wrapper.ls-visible .ls-nav-buttons {
          animation:
            lsNavIn
            0.8s
            cubic-bezier(0.34, 1.4, 0.64, 1)
            0.3s
            forwards;
        }

        /* Card entrance — stagger */
        .ls-wrapper.ls-visible .ls-card {
          animation:
            lsCardIn
            0.85s
            cubic-bezier(0.34, 1.4, 0.64, 1)
            forwards;
        }

        .ls-wrapper.ls-visible .ls-card:nth-child(1) {
          animation-delay: 0.45s;
        }

        .ls-wrapper.ls-visible .ls-card:nth-child(2) {
          animation-delay: 0.6s;
        }

        .ls-wrapper.ls-visible .ls-card:nth-child(3) {
          animation-delay: 0.75s;
        }

        /* Image reveal */
        .ls-wrapper.ls-visible .ls-image-container {
          animation:
            lsImageIn
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .ls-wrapper.ls-visible
        .ls-card:nth-child(1) .ls-image-container {
          animation-delay: 0.55s;
        }

        .ls-wrapper.ls-visible
        .ls-card:nth-child(2) .ls-image-container {
          animation-delay: 0.7s;
        }

        .ls-wrapper.ls-visible
        .ls-card:nth-child(3) .ls-image-container {
          animation-delay: 0.85s;
        }

        /* Name */
        .ls-wrapper.ls-visible .ls-name {
          animation:
            lsFadeUp
            0.7s
            ease
            forwards;
        }

        .ls-wrapper.ls-visible
        .ls-card:nth-child(1) .ls-name {
          animation-delay: 0.75s;
        }

        .ls-wrapper.ls-visible
        .ls-card:nth-child(2) .ls-name {
          animation-delay: 0.9s;
        }

        .ls-wrapper.ls-visible
        .ls-card:nth-child(3) .ls-name {
          animation-delay: 1.05s;
        }

        /* Role */
        .ls-wrapper.ls-visible .ls-role {
          animation:
            lsFadeUp
            0.7s
            ease
            forwards;
        }

        .ls-wrapper.ls-visible
        .ls-card:nth-child(1) .ls-role {
          animation-delay: 0.9s;
        }

        .ls-wrapper.ls-visible
        .ls-card:nth-child(2) .ls-role {
          animation-delay: 1.05s;
        }

        .ls-wrapper.ls-visible
        .ls-card:nth-child(3) .ls-role {
          animation-delay: 1.2s;
        }

        /* Underline */
        .ls-wrapper.ls-visible .ls-underline {
          animation:
            lsLineGrow
            0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .ls-wrapper.ls-visible
        .ls-card:nth-child(1) .ls-underline {
          animation-delay: 1.05s;
        }

        .ls-wrapper.ls-visible
        .ls-card:nth-child(2) .ls-underline {
          animation-delay: 1.2s;
        }

        .ls-wrapper.ls-visible
        .ls-card:nth-child(3) .ls-underline {
          animation-delay: 1.35s;
        }

        /* =========================
           KEYFRAMES
        ========================= */

        @keyframes lsSlideDown {
          from {
            opacity: 0;
            transform: translateY(-14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lsTitleIn {
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

        @keyframes lsNavIn {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }

          70% {
            opacity: 1;
            transform: translateX(-6px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes lsCardIn {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.96);
          }

          60% {
            opacity: 1;
            transform: translateY(-5px) scale(1.01);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes lsImageIn {
          from {
            opacity: 0;
            transform: scale(1.08);
            filter: blur(6px);
          }

          to {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }

        @keyframes lsFadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lsLineGrow {
          from {
            transform: scaleX(0);
            opacity: 0;
          }

          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {
          .ls-wrapper {
            padding: 3.5rem 1.75rem;
          }

          .ls-title {
            font-size: 2.25rem;
          }

          .ls-grid {
            gap: 1.5rem;
          }

          .ls-image-container {
            height: 260px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {
          .ls-wrapper {
            padding: 3rem 1.25rem;
          }

          .ls-title {
            font-size: 2rem;
          }

          .ls-header {
            margin-bottom: 2rem;
          }

          .ls-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .ls-image-container {
            height: 240px;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 420px) {
          .ls-wrapper {
            padding: 2.5rem 1rem;
          }

          .ls-title {
            font-size: 1.75rem;
          }

          .ls-image-container {
            height: 220px;
          }

          .ls-name {
            font-size: 1.125rem;
          }

          .ls-nav-button {
            width: 2.25rem;
            height: 2.25rem;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .ls-wrapper *,
          .ls-wrapper *::before,
          .ls-wrapper *::after {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }

          .ls-card:hover .ls-image {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default LeadershipSection;