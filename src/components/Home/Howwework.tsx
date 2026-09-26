import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: "code",
    title: (
      <>
        Web & Mobile
        <br />
        App Dev
      </>
    ),
    description: (
      <>
        Custom web and mobile applications
        <br />
        built for performance, scalability,
        <br />
        and real business value.
      </>
    ),
    image: "/images/homeweb.png",
  },
  {
    icon: "ai",
    title: (
      <>
        AI Videos Ads &
        <br />
        Content
      </>
    ),
    description: (
      <>
        AI-powered video marketing, reels,
        <br />
        ads, and creative content to grow
        <br />
        your brand faster.
      </>
    ),
    image: "/images/homemo.png",
  },
  {
    icon: "seo",
    title: (
      <>
        Google SEO &
        <br />
        AI Search
      </>
    ),
    description: (
      <>
        Rank higher on Google and get
        <br />
        discovered in AI search results with
        <br />
        proven SEO strategies.
      </>
    ),
    image: "/images/homeseo.png",
  },
  {
    icon: "product",
    title: (
      <>
        Digital Product
        <br />
        Lab
      </>
    ),
    description: (
      <>
        Innovative digital tools, SaaS ideas,
        <br />
        and custom solutions to solve real
        <br />
        problems and create new opportunities.
      </>
    ),
    image: "/images/homedigi.png",
  },
];

/* =========================================================
   ICONS
========================================================= */

const Icon = ({ type }: { type: string }) => {
  if (type === "code") {
    return (
      <svg viewBox="0 0 24 24" className="wwb-icon-svg">
        <path
          d="M8.5 7L3 12l5.5 5M15.5 7l5.5 5-5.5 5M13.5 4l-3 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "ai") {
    return (
      <svg viewBox="0 0 24 24" className="wwb-icon-svg">
        <rect
          x="6"
          y="6"
          width="12"
          height="12"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M9 2v4M15 2v4M9 18v4M15 18v4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M2 9h4M2 15h4M18 9h4M18 15h4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 10h4v4h-4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  if (type === "seo") {
    return (
      <svg viewBox="0 0 24 24" className="wwb-icon-svg">
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 14l3-3 2 2 4-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 8h-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="wwb-icon-svg">
      <path
        d="M5 8h14l1 13H4L5 8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 8V6a3 3 0 0 1 6 0v2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

/* =========================================================
   ARROW
========================================================= */

const Arrow = () => (
  <svg viewBox="0 0 24 24" className="wwb-arrow">
    <path
      d="M5 12h13"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M13 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* =========================================================
   COMPONENT
========================================================= */

const WhatWeBuild: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  /* =====================================================
     INTERSECTION OBSERVER
     Triggers animation when section enters viewport
  ===================================================== */

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, stop observing — animation runs only once
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`

        /* =====================================================
           RESET
        ===================================================== */

        .wwb-section,
        .wwb-section * {
          box-sizing: border-box;
        }

        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .wwb-section {
          width: 100%;
          padding: 10px 3.2% 20px;
          background: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
          color: #111827;
        }

        .wwb-wrapper {
          width: 100%;
          max-width: 1450px;
          margin: 0 auto;
        }

        /* =====================================================
           WHAT WE BUILD
        ===================================================== */

        .wwb-intro {
          position: relative;

          min-height: 145px;

          padding: 20px 38px;

          border: 1.5px solid #0A4B3F;

          border-radius: 30px;

          overflow: hidden;

          background:
            linear-gradient(
              100deg,
              #ffffff 0%,
              #ffffff 55%,
              #f8fbfa 100%
            );

          opacity: 0;
        }

        .wwb-intro::before {
          content: "";

          position: absolute;

          right: 40px;
          top: -90px;

          width: 480px;
          height: 280px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(10, 75, 63, 0.10) 0%,
              rgba(10, 75, 63, 0.04) 45%,
              transparent 72%
            );

          pointer-events: none;

          animation:
            wwbGlowFloat
            8s
            ease-in-out
            infinite;
        }

        .wwb-intro-content {
          position: relative;
          z-index: 5;
          max-width: 720px;
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .wwb-heading {
          margin: 0;

          font-size: clamp(
            40px,
            4vw,
            46px
          );

          line-height: 0.95;

          letter-spacing: -2px;

          font-weight: 800;

          opacity: 0;
        }

        .wwb-heading-green {
          color: #0A4B3F;
        }

        .wwb-heading-dark {
          color: #111827;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .wwb-description {
          margin: 7px 0 0;

          color: #445066;

          font-size: 16px;

          line-height: 1.2;

          opacity: 0;
        }

        /* =====================================================
           EXPLORE SERVICES
        ===================================================== */

        .wwb-intro-button {
          position: absolute;

          z-index: 10;

          right: 38px;
          top: 52px;

          min-width: 225px;

          height: 46px;

          padding: 0 22px;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 16px;

          border: 1.5px solid #8eaeb6;

          border-radius: 30px;

          background: rgba(
            255,
            255,
            255,
            0.88
          );

          color: #111827;

          font-size: 13px;

          font-weight: 700;

          cursor: pointer;

          transition: 0.3s ease;

          opacity: 0;
        }

        .wwb-intro-button:hover {
          border-color: #0A4B3F;
          transform: translateY(-2px);
          background: #ffffff;
        }

        .wwb-intro-button .wwb-arrow {
          transition: transform 0.3s ease;
        }

        .wwb-intro-button:hover .wwb-arrow {
          transform: translateX(5px);
        }

        /* =====================================================
           HOW WE WORK
        ===================================================== */

        .wwb-process {
          position: relative;

          margin-top: 12px;

          padding:
            18px
            26px
            20px;

          border:
            1.5px solid
            #0A4B3F;

          border-radius: 30px;

          overflow: hidden;

          background: #ffffff;

          opacity: 0;
        }

        .wwb-process::before {
          content: "";

          position: absolute;

          top: 0;
          right: 350px;

          width: 400px;
          height: 240px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(10, 75, 63, 0.06) 0%,
              rgba(10, 75, 63, 0.02) 45%,
              transparent 72%
            );

          pointer-events: none;

          animation:
            wwbGlowFloat
            10s
            ease-in-out
            infinite;
        }

        /* =====================================================
           PROCESS HEADER
        ===================================================== */

        .wwb-process-header {
          position: relative;

          z-index: 10;

          display: flex;

          justify-content: space-between;

          align-items: flex-start;

          margin-bottom: 8px;
        }

        .wwb-process-title {
          margin: 0;

          font-size: clamp(
            40px,
            4vw,
            45px
          );

          line-height: 0.9;

          letter-spacing: -2px;

          font-weight: 800;

          opacity: 0;
        }

        .wwb-process-description {
          margin: 4px 0 0;

          color: #445066;

          font-size: 16px;

          line-height: 1.15;

          opacity: 0;
        }

        /* =====================================================
           OUR PROCESS BUTTON
        ===================================================== */

        .wwb-process-button {
          margin-top: 3px;

          min-width: 180px;

          height: 45px;

          padding: 0 20px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 14px;

          border:
            1.5px solid
            #8eaeb6;

          border-radius: 28px;

          background: #ffffff;

          color: #111827;

          font-size: 12px;

          font-weight: 700;

          cursor: pointer;

          transition: 0.3s ease;

          opacity: 0;
        }

        .wwb-process-button:hover {
          border-color: #0A4B3F;
          transform: translateY(-2px);
        }

        .wwb-process-button .wwb-arrow {
          transition: transform 0.3s ease;
        }

        .wwb-process-button:hover .wwb-arrow {
          transform: translateX(5px);
        }

        /* =====================================================
           SERVICE GRID
        ===================================================== */

        .wwb-grid {
          position: relative;

          z-index: 10;

          display: grid;

          grid-template-columns:
            repeat(
              2,
              minmax(
                0,
                1fr
              )
            );

          gap: 10px;
        }

        /* =====================================================
           SERVICE CARD
        ===================================================== */

        .wwb-card {
          position: relative;

          width: 100%;

          height: 205px;

          border:
            1px solid
            #dce7e9;

          border-radius: 15px;

          overflow: hidden;

          background: #ffffff;

          box-shadow: none;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;

          opacity: 0;
        }

        .wwb-card:hover {
          transform: translateY(-3px);

          box-shadow:
            0 8px 22px
            rgba(
              10,
              75,
              63,
              0.10
            );
        }

        /* =====================================================
           CARD CONTENT
        ===================================================== */

        .wwb-card-content {
          position: relative;

          z-index: 20;

          width: 56%;

          height: 100%;

          padding:
            9px
            16px
            10px
            23px;

          display: flex;

          flex-direction: column;
        }

        /* =====================================================
           ICON
        ===================================================== */

        .wwb-icon {
          width: 45px;
          height: 45px;

          flex-shrink: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          margin-bottom: 6px;

          border:
            2px solid
            #0A4B3F;

          border-radius: 50%;

          color: #0A4B3F;

          background: #ffffff;

          transition:
            transform 0.4s ease,
            background 0.4s ease,
            color 0.4s ease;
        }

        .wwb-card:hover .wwb-icon {
          transform: scale(1.08) rotate(-4deg);

          background: #0A4B3F;

          color: #ffffff;
        }

        .wwb-icon-svg {
          width: 24px;
          height: 24px;
        }

        /* =====================================================
           CARD TITLE
        ===================================================== */

        .wwb-card-title {
          margin: 0;

          color: #11182c;

          font-size: 21px;

          line-height: 0.98;

          letter-spacing: -0.5px;

          font-weight: 800;
        }

        /* =====================================================
           CARD DESCRIPTION
        ===================================================== */

        .wwb-card-description {
          margin: 6px 0 0;

          color: #4a5569;

          font-size: 13px;

          line-height: 1.15;

          font-weight: 400;
        }

        /* =====================================================
           LEARN MORE
        ===================================================== */

        .wwb-learn {
          margin-top: auto;

          display: inline-flex;

          align-items: center;

          gap: 8px;

          width: fit-content;

          color: #0A4B3F;

          font-size: 12px;

          font-weight: 700;

          text-decoration: none;

          transition:
            gap 0.25s ease;
        }

        .wwb-learn:hover {
          gap: 13px;
        }

        .wwb-arrow {
          width: 17px;
          height: 17px;
        }

        /* =====================================================
           IMAGE AREA
        ===================================================== */

        .wwb-card-image-wrap {
          position: absolute;

          z-index: 2;

          top: 0;
          right: 0;

          width: 53%;
          height: 100%;

          display: flex;

          align-items: center;
          justify-content: center;

          overflow: hidden;

          background: transparent;

          border: none;
        }

        /* =====================================================
           IMAGE GLOW
        ===================================================== */

        .wwb-card-image-wrap::before {
          content: "";

          position: absolute;

          width: 220px;
          height: 180px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(
                10,
                75,
                63,
                0.15
              ) 0%,
              rgba(
                10,
                75,
                63,
                0.05
              ) 42%,
              transparent 72%
            );

          animation:
            wwbGlowPulse
            4s
            ease-in-out
            infinite;
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .wwb-card-image {
          position: relative;

          z-index: 3;

          width: 100%;
          height: 100%;

          object-fit: contain;

          object-position: center;

          mix-blend-mode: multiply;

          border: none;

          outline: none;

          filter:
            drop-shadow(
              0 8px 14px
              rgba(
                10,
                75,
                63,
                0.08
              )
            );

          transition:
            transform 0.4s ease;
        }

        .wwb-card:hover
        .wwb-card-image {
          transform:
            scale(1.04);
        }

        /* =====================================================
           SOFT DECORATION
        ===================================================== */

        .wwb-card:nth-child(1)::after,
        .wwb-card:nth-child(2)::after,
        .wwb-card:nth-child(3)::after,
        .wwb-card:nth-child(4)::after {
          content: "";

          position: absolute;

          border-radius: 50%;

          pointer-events: none;

          background:
            rgba(
              10,
              75,
              63,
              0.06
            );

          animation:
            wwbDotFloat
            6s
            ease-in-out
            infinite;
        }

        .wwb-card:nth-child(1)::after {
          width: 90px;
          height: 90px;

          right: 140px;
          top: 30px;
        }

        .wwb-card:nth-child(2)::after {
          width: 75px;
          height: 75px;

          right: 155px;
          top: 28px;

          animation-delay: 1s;
        }

        .wwb-card:nth-child(3)::after {
          width: 65px;
          height: 65px;

          right: 165px;
          top: 35px;

          animation-delay: 2s;
        }

        .wwb-card:nth-child(4)::after {
          width: 90px;
          height: 90px;

          right: 125px;
          top: 20px;

          animation-delay: 3s;
        }

        /* =====================================================
           EXACT DESKTOP LINE BREAKS
        ===================================================== */

        .desktop-break {
          display: block;
        }

        /* =====================================================
           VISIBLE STATE
           These animations only run when .wwb-visible
           class is added by the IntersectionObserver
        ===================================================== */

        .wwb-section.wwb-visible .wwb-intro {
          animation:
            wwbSlideUp
            0.8s
            ease
            0s
            forwards;
        }

        .wwb-section.wwb-visible .wwb-heading {
          animation:
            wwbSlideLeft
            0.8s
            ease
            0.25s
            forwards;
        }

        .wwb-section.wwb-visible .wwb-description {
          animation:
            wwbFadeUp
            0.8s
            ease
            0.45s
            forwards;
        }

        .wwb-section.wwb-visible .wwb-intro-button {
          animation:
            wwbFadeUp
            0.8s
            ease
            0.6s
            forwards;
        }

        .wwb-section.wwb-visible .wwb-process {
          animation:
            wwbSlideUp
            0.8s
            ease
            0.75s
            forwards;
        }

        .wwb-section.wwb-visible .wwb-process-title {
          animation:
            wwbSlideLeft
            0.7s
            ease
            1s
            forwards;
        }

        .wwb-section.wwb-visible .wwb-process-description {
          animation:
            wwbFadeUp
            0.7s
            ease
            1.15s
            forwards;
        }

        .wwb-section.wwb-visible .wwb-process-button {
          animation:
            wwbFadeUp
            0.7s
            ease
            1.3s
            forwards;
        }

        .wwb-section.wwb-visible .wwb-card {
          animation:
            wwbCardIn
            0.7s
            ease
            forwards;
        }

        /* Card stagger — one by one */
        .wwb-section.wwb-visible .wwb-card:nth-child(1) {
          animation-delay: 1.5s;
        }

        .wwb-section.wwb-visible .wwb-card:nth-child(2) {
          animation-delay: 1.65s;
        }

        .wwb-section.wwb-visible .wwb-card:nth-child(3) {
          animation-delay: 1.8s;
        }

        .wwb-section.wwb-visible .wwb-card:nth-child(4) {
          animation-delay: 1.95s;
        }

        /* =====================================================
           KEYFRAMES
        ===================================================== */

        @keyframes wwbSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes wwbSlideLeft {
          from {
            opacity: 0;
            transform: translateX(-25px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes wwbFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes wwbCardIn {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes wwbGlowFloat {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-15px, 15px);
          }
        }

        @keyframes wwbGlowPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }

          50% {
            transform: scale(1.15);
            opacity: 1;
          }
        }

        @keyframes wwbDotFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .wwb-section {
            padding:
              8px
              3%
              18px;
          }

          .wwb-intro {
            min-height: 135px;

            padding:
              18px
              30px;
          }

          .wwb-heading {
            font-size: 40px;
          }

          .wwb-description,
          .wwb-process-description {
            font-size: 15px;
          }

          .wwb-process {
            padding:
              15px
              22px
              17px;
          }

          .wwb-card {
            height: 195px;
          }

          .wwb-card-content {
            padding-left: 20px;
          }

          .wwb-card-title {
            font-size: 20px;
          }

          .wwb-card-description {
            font-size: 12px;
          }

          .wwb-icon {
            width: 42px;
            height: 42px;
          }

          .wwb-icon-svg {
            width: 22px;
            height: 22px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 768px) {

          .wwb-section {
            padding:
              10px
              14px
              20px;
          }

          .wwb-intro {
            min-height: auto;

            padding:
              22px
              20px
              72px;

            border-radius:
              25px;
          }

          .wwb-heading {
            font-size: 32px;

            letter-spacing:
              -1.4px;
          }

          .wwb-description {
            font-size: 14px;

            line-height: 1.3;
          }

          .wwb-intro-button {
            top: auto;

            right: 20px;
            bottom: 17px;

            min-width: 195px;

            height: 43px;

            font-size: 11px;
          }

          .wwb-process {
            margin-top:
              10px;

            padding:
              18px
              13px
              17px;

            border-radius:
              25px;
          }

          .wwb-process-header {
            flex-direction:
              column;

            margin-bottom:
              7px;
          }

          .wwb-process-title {
            font-size:
              32px;
          }

          .wwb-process-description {
            font-size:
              14px;
          }

          .wwb-process-button {
            margin-top:
              12px;

            width:
              175px;

            min-width:
              175px;

            height:
              43px;
          }

          .wwb-grid {
            grid-template-columns:
              1fr;

            gap:
              9px;
          }

          .wwb-card {
            height:
              260px;

            border-radius:
              14px;
          }

          .wwb-card-content {
            width:
              62%;

            padding:
              15px
              12px
              14px
              18px;
          }

          .wwb-icon {
            width:
              44px;

            height:
              44px;

            margin-bottom:
              7px;
          }

          .wwb-card-title {
            font-size:
              20px;
          }

          .wwb-card-description {
            font-size:
              12.5px;

            line-height:
              1.2;
          }

          .wwb-card-image-wrap {
            width:
              48%;
          }

          .desktop-break {
            display:
              none;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .wwb-heading {
            font-size:
              28px;
          }

          .wwb-description {
            font-size:
              13px;
          }

          .wwb-intro-button {
            left:
              20px;

            right:
              20px;

            width:
              auto;

            min-width:
              0;
          }

          .wwb-process-title {
            font-size:
              28px;
          }

          .wwb-card {
            height:
              275px;
          }

          .wwb-card-content {
            width:
              64%;
          }

          .wwb-card-image-wrap {
            width:
              48%;
          }

          .wwb-card-title {
            font-size:
              19px;
          }

          .wwb-card-description {
            font-size:
              12px;
          }

          .wwb-learn {
            font-size:
              11px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .wwb-section *,
          .wwb-section *::before,
          .wwb-section *::after {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
          }
        }

      `}</style>

      <section
        ref={sectionRef}
        className={`wwb-section${
          isVisible ? " wwb-visible" : ""
        }`}
      >

        <div className="wwb-wrapper">

          {/* =================================================
              WHAT WE BUILD
          ================================================= */}

          <div className="wwb-intro">

            <div className="wwb-intro-content">

              <h2 className="wwb-heading">

                <span className="wwb-heading-green">
                  What We Build
                </span>{" "}

                <span className="wwb-heading-dark">
                  &amp; Deliver
                </span>

              </h2>

              <p className="wwb-description">

                From ideas to impact — we build digital products.

                <br className="desktop-break" />

                tech solutions, and growth strategies that help

                <br className="desktop-break" />

                businesses scale in the real world.

              </p>

            </div>

            <button
              type="button"
              className="wwb-intro-button"
            >
              <span>
                EXPLORE SERVICES
              </span>

              <Arrow />
            </button>

          </div>


          {/* =================================================
              HOW WE WORK
          ================================================= */}

          <div className="wwb-process">

            <div className="wwb-process-header">

              <div>

                <h2 className="wwb-process-title">

                  <span className="wwb-heading-green">
                    How We
                  </span>{" "}

                  <span className="wwb-heading-dark">
                    Work
                  </span>

                </h2>

                <p className="wwb-process-description">

                  From concept to launch, we keep it simple —

                  <br className="desktop-break" />

                  transparent, focused, and result-driven.

                </p>

              </div>

              <button
                type="button"
                className="wwb-process-button"
              >
                <span>
                  OUR PROCESS
                </span>

                <Arrow />
              </button>

            </div>


            {/* =================================================
                SERVICE CARDS
            ================================================= */}

            <div className="wwb-grid">

              {services.map(
                (service, index) => (

                  <article
                    className="wwb-card"
                    key={index}
                  >

                    {/* IMAGE */}

                    <div className="wwb-card-image-wrap">

                      <img
                        src={service.image}
                        alt=""
                        className="wwb-card-image"
                      />

                    </div>


                    {/* CARD CONTENT */}

                    <div className="wwb-card-content">

                      <div className="wwb-icon">

                        <Icon
                          type={service.icon}
                        />

                      </div>

                      <h3 className="wwb-card-title">

                        {service.title}

                      </h3>

                      <p className="wwb-card-description">

                        {service.description}

                      </p>

                      <a
                        href="#"
                        className="wwb-learn"
                      >

                        <span>
                          LEARN MORE
                        </span>

                        <Arrow />

                      </a>

                    </div>

                  </article>

                )
              )}

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default WhatWeBuild;