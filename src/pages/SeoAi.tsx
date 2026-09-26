import React, { useState, useEffect, useRef } from 'react';
import CTA from "../components/Home/CTA";

// 🎨 LOGO COLORS (AlphaZetaWorld deep teal green — from actual logo)
const COLORS = {
  primary: '#032522',
  primaryDark: '#0e3a37',
  accent: '#17554d',
  accentSoft: '#ccfbf1',
  accentVerySoft: '#d1fae5',
};

// ================== DATA: SEO SERVICES COMPARISON ==================
const comparisonData = [
  {
    id: 1,
    title: 'Traditional SEO',
    description: 'Technical optimizations, solid content hierarchy, and structural schema designed specifically to dominate classic Google search results.',
    points: [
      'Technical site audits & Core Web Vitals profiling',
      'Clean structural schema and semantic markup',
      'Sleek commercial keyword mapping & clustering',
      'Advanced indexing pipelines & page optimization',
    ],
  },
  {
    id: 2,
    title: 'AI Search Optimization (GEO)',
    description: 'Ensure your product or brand is listed as the primary recommendation inside LLM searches (ChatGPT, Perplexity, Gemini, Copilot).',
    points: [
      'Citation optimization for emerging LLM backends',
      'Query intent analysis for conversational prompts',
      'Direct API response structural optimization',
      'Dynamic sentiment and authority mapping',
    ],
  },
];

// ================== DATA: METHODOLOGY ==================
const methodologySteps = [
  { id: 'Step 01', title: 'Audit', description: 'Technical crawls, page load profiling, and Core Web Vitals.' },
  { id: 'Step 02', title: 'Strategy', description: 'Map search queries, competitor leaks, and AI target indexing.' },
  { id: 'Step 03', title: 'Deploy', description: 'Write semantic code markup, clean schema, and structure copy.' },
  { id: 'Step 04', title: 'Optimize', description: 'Analyze index tracking, rank performance, and update copy.' },
];

// ================== DATA: PERFORMANCE ==================
const performanceData = [
  {
    id: 1,
    value: '+140%',
    title: 'Organic Search Volume',
    description: 'Growth in commercial intent terms within 120 days',
  },
  {
    id: 2,
    value: 'Top 3',
    title: 'Core Keyword Positioning',
    description: 'For primary high-converting customer terms',
  },
  {
    id: 3,
    value: '88/100',
    title: 'Average Core Web Vitals',
    description: 'Sleek site indexing performance across mobile',
  },
];

// ================== CUSTOM HOOK: Scroll Reveal (REPEATABLE) ==================
const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // 👇 Enter ainappudu true, exit ainappudu false
        // So scroll up/down chesthe repeat avutundi
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Konchem kinda scroll ainappude trigger
      }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold]);

  return { ref, isVisible };
};

// ================== REVEAL WRAPPER ==================
const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'zoom';
}> = ({ children, delay = 0, direction = 'up' }) => {
  const { ref, isVisible } = useScrollReveal();

  const getAnimation = () => {
    if (direction === 'left') return `seoRevealLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s both`;
    if (direction === 'right') return `seoRevealRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s both`;
    if (direction === 'zoom') return `seoRevealZoom 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s both`;
    return `seoRevealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s both`;
  };

  return (
    <div
      ref={ref}
      style={{
        height: '100%',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(0)',
        animation: isVisible ? getAnimation() : 'none',
      }}
    >
      {children}
    </div>
  );
};

// ================== ANIMATIONS + STYLES ==================
const seoStyles = `
  /* ============================================================
     KEYFRAMES — SCROLL REVEAL (repeatable)
     ============================================================ */
  @keyframes seoRevealUp {
    0%   { opacity: 0; transform: translateY(50px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes seoRevealLeft {
    0%   { opacity: 0; transform: translateX(-60px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  @keyframes seoRevealRight {
    0%   { opacity: 0; transform: translateX(60px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  @keyframes seoRevealZoom {
    0%   { opacity: 0; transform: scale(0.85); }
    100% { opacity: 1; transform: scale(1); }
  }

  /* Continuous effects */
  @keyframes seoShimmer {
    0%   { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  @keyframes seoPulseDot {
    0%, 100% { transform: scale(1);   opacity: 1;   }
    50%      { transform: scale(1.5); opacity: 0.6; }
  }
  @keyframes seoGlowPulse {
    0%, 100% { box-shadow: 0 4px 6px -1px ${COLORS.primary}1a, 0 2px 4px -1px ${COLORS.primary}0d; }
    50%      { box-shadow: 0 16px 28px -6px ${COLORS.primary}4d, 0 8px 12px -4px ${COLORS.primary}26; }
  }

  /* ============================================================
     BASE
     ============================================================ */
  .seo-page {
    width: 100%;
    background-color: #ffffff;
    font-family: system-ui, -apple-system, sans-serif;
    box-sizing: border-box;
  }

  /* ============================================================
     HERO SECTION
     ============================================================ */
  .seo-hero-wrapper {
    width: 100%;
    padding: 3.5rem 2rem 3rem;
    box-sizing: border-box;
  }
  .seo-hero-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
  .seo-hero-badge {
    display: inline-block;
    border: 1px solid ${COLORS.primary};
    border-radius: 9999px;
    padding: 0.35rem 1rem;
    margin-bottom: 1.5rem;
  }
  .seo-hero-badge-text {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: ${COLORS.primary};
    text-transform: uppercase;
  }
  .seo-hero-title {
    font-size: 3rem;
    font-weight: 800;
    color: ${COLORS.primary};
    margin: 0 0 1.5rem 0;
    line-height: 1.15;
    letter-spacing: -0.03em;
  }
  .seo-hero-desc {
    font-size: 1rem;
    line-height: 1.7;
    color: #64748b;
    margin: 0;
    max-width: 650px;
  }

  /* ============================================================
     SERVICES SECTION
     ============================================================ */
  .seo-services-wrapper {
    width: 100%;
    padding: 3rem 2rem;
    box-sizing: border-box;
  }
  .seo-services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    align-items: stretch;
  }
  .seo-service-card {
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 1.5rem;
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                box-shadow 0.4s ease,
                border-color 0.4s ease,
                background-color 0.4s ease;
    cursor: pointer;
  }
  .seo-service-card:hover {
    transform: translateY(-10px) scale(1.01);
    box-shadow: 0 25px 35px -10px ${COLORS.primary}40, 0 12px 16px -8px ${COLORS.primary}26;
    border-color: ${COLORS.primary};
    background-color: #ffffff;
  }
  .seo-service-card-title {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${COLORS.primary};
    margin: 0 0 1rem 0;
    letter-spacing: -0.025em;
    transition: transform 0.3s ease;
  }
  .seo-service-card:hover .seo-service-card-title {
    transform: translateX(6px);
  }
  .seo-service-card-desc {
    font-size: 0.9rem;
    line-height: 1.6;
    color: #64748b;
    margin: 0 0 1.5rem 0;
  }
  .seo-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .seo-list-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    transition: transform 0.35s ease;
  }
  .seo-service-card:hover .seo-list-item:nth-child(1) { transform: translateX(6px); transition-delay: 0.02s; }
  .seo-service-card:hover .seo-list-item:nth-child(2) { transform: translateX(6px); transition-delay: 0.07s; }
  .seo-service-card:hover .seo-list-item:nth-child(3) { transform: translateX(6px); transition-delay: 0.12s; }
  .seo-service-card:hover .seo-list-item:nth-child(4) { transform: translateX(6px); transition-delay: 0.17s; }

  .seo-bullet {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${COLORS.primary};
    margin-top: 8px;
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }
  .seo-service-card:hover .seo-bullet {
    animation: seoPulseDot 1.2s ease-in-out infinite;
  }
  .seo-list-text {
    font-size: 0.9rem;
    line-height: 1.5;
    color: #334155;
  }

  /* ============================================================
     METHODOLOGY SECTION
     ============================================================ */
  .seo-methodology-wrapper {
    width: 100%;
    padding: 3rem 2rem;
    box-sizing: border-box;
  }
  .seo-methodology-header {
    margin-bottom: 2.5rem;
  }
  .seo-methodology-title {
    font-size: 2rem;
    font-weight: 800;
    color: #1e293b;
    margin: 0;
    letter-spacing: -0.025em;
  }
  .seo-methodology-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    align-items: stretch;
  }
  .seo-methodology-card {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 1rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    box-sizing: border-box;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                box-shadow 0.4s ease,
                border-color 0.4s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .seo-methodology-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, ${COLORS.primary}, ${COLORS.accent}, ${COLORS.primary});
    background-size: 200% 100%;
    animation: seoShimmer 3s linear infinite;
  }
  .seo-methodology-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 28px -8px ${COLORS.primary}33, 0 10px 12px -6px ${COLORS.primary}1a;
    border-color: ${COLORS.primary};
  }
  .seo-step-number {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: ${COLORS.primary};
    text-transform: uppercase;
    margin-bottom: 1rem;
    transition: transform 0.3s ease;
  }
  .seo-methodology-card:hover .seo-step-number {
    transform: translateX(6px);
  }
  .seo-methodology-card-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #1e293b;
    margin: 0 0 0.5rem 0;
  }
  .seo-methodology-card-desc {
    font-size: 0.875rem;
    line-height: 1.6;
    color: #64748b;
    margin: 0;
    margin-top: auto;
  }

  /* ============================================================
     PERFORMANCE SECTION
     ============================================================ */
  .seo-performance-wrapper {
    width: 100%;
    padding: 3.5rem 2rem 5rem;
    box-sizing: border-box;
  }
  .seo-performance-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 3rem;
  }
  .seo-performance-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #1e293b;
    margin: 0 0 1rem 0;
    letter-spacing: -0.025em;
  }
  .seo-performance-subtitle {
    font-size: 1rem;
    line-height: 1.6;
    color: #64748b;
    margin: 0;
    max-width: 600px;
  }
  .seo-performance-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    align-items: stretch;
  }
  .seo-performance-card {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 1.5rem;
    padding: 2.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
    box-sizing: border-box;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                box-shadow 0.4s ease,
                border-color 0.4s ease;
    position: relative;
    overflow: hidden;
  }
  .seo-performance-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 0%, ${COLORS.primary}14, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  .seo-performance-card:hover::after {
    opacity: 1;
  }
  .seo-performance-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 25px 35px -10px ${COLORS.primary}40, 0 12px 16px -8px ${COLORS.primary}26;
    border-color: ${COLORS.primary};
  }
  .seo-performance-value {
    font-size: 2.5rem;
    font-weight: 800;
    color: ${COLORS.primary};
    margin-bottom: 0.5rem;
    letter-spacing: -0.05em;
    position: relative;
    z-index: 1;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .seo-performance-card:hover .seo-performance-value {
    transform: scale(1.12);
  }
  .seo-performance-card-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #1e293b;
    margin: 0 0 0.5rem 0;
    position: relative;
    z-index: 1;
  }
  .seo-performance-card-desc {
    font-size: 0.875rem;
    line-height: 1.6;
    color: #64748b;
    margin: 0;
    position: relative;
    z-index: 1;
  }

  /* ============================================================
     TABLET (<= 1024px)
     ============================================================ */
  @media (max-width: 1024px) {
    .seo-hero-wrapper { padding: 2.5rem 1.5rem; }
    .seo-services-wrapper { padding: 2.5rem 1.5rem; }
    .seo-methodology-wrapper { padding: 2.5rem 1.5rem; }
    .seo-performance-wrapper { padding: 3rem 1.5rem 3.5rem; }

    .seo-hero-title { font-size: 2.25rem; }
    .seo-performance-title { font-size: 2rem; }
    .seo-methodology-title { font-size: 1.75rem; }

    .seo-services-grid { grid-template-columns: 1fr; gap: 1.5rem; }
    .seo-methodology-grid { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.25rem; }
  }

  /* ============================================================
     MOBILE (<= 640px)
     ============================================================ */
  @media (max-width: 640px) {
    .seo-hero-wrapper { padding: 2rem 1rem; }
    .seo-services-wrapper { padding: 1.75rem 1rem; }
    .seo-methodology-wrapper { padding: 1.75rem 1rem; }
    .seo-performance-wrapper { padding: 2rem 1rem 3rem; }

    .seo-hero-badge { padding: 0.3rem 0.75rem; margin-bottom: 1rem; }
    .seo-hero-badge-text { font-size: 0.65rem; }
    .seo-hero-title { font-size: 1.75rem; margin-bottom: 1rem; }
    .seo-hero-desc { font-size: 0.9rem; }

    .seo-service-card { padding: 1.75rem 1.25rem; border-radius: 1rem; }
    .seo-service-card-title { font-size: 1.25rem; }
    .seo-service-card-desc { font-size: 0.85rem; margin-bottom: 1.25rem; }
    .seo-list-text { font-size: 0.85rem; }

    .seo-methodology-header { margin-bottom: 1.75rem; }
    .seo-methodology-title { font-size: 1.5rem; }
    .seo-methodology-grid { grid-template-columns: 1fr; gap: 1rem; }
    .seo-methodology-card { padding: 1.25rem; }
    .seo-methodology-card-title { font-size: 1rem; }
    .seo-methodology-card-desc { font-size: 0.82rem; }

    .seo-performance-header { margin-bottom: 2rem; }
    .seo-performance-title { font-size: 1.6rem; margin-bottom: 0.75rem; }
    .seo-performance-subtitle { font-size: 0.9rem; }
    .seo-performance-grid { grid-template-columns: 1fr; gap: 1rem; }
    .seo-performance-card { padding: 1.75rem 1.25rem; border-radius: 1rem; }
    .seo-performance-value { font-size: 2rem; }
    .seo-performance-card-title { font-size: 1rem; }
    .seo-performance-card-desc { font-size: 0.82rem; }
  }

  /* ============================================================
     SMALL MOBILE (<= 400px)
     ============================================================ */
  @media (max-width: 400px) {
    .seo-hero-title { font-size: 1.5rem; }
    .seo-performance-title { font-size: 1.4rem; }
    .seo-methodology-title { font-size: 1.35rem; }
    .seo-service-card { padding: 1.5rem 1rem; }
  }

  /* ============================================================
     REDUCED MOTION
     ============================================================ */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

// ================== SEO PAGE COMPONENT ==================
const SeoAi: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  return (
    <div className="seo-page">
      <style>{seoStyles}</style>

      {/* ================= HERO SECTION ================= */}
      <div className="seo-hero-wrapper">
        <Reveal direction="up">
          <div className="seo-hero-container">
            <div className="seo-hero-badge">
              <span className="seo-hero-badge-text">SERVICES / MARKETING</span>
            </div>
            <h1 className="seo-hero-title">
              Google SEO &amp; AI Search Optimization
            </h1>
            <p className="seo-hero-desc">
              Be discovered where decisions are actually made. Build absolute organic
              dominance on Google, while securing key placements inside ChatGPT,
              Perplexity, and new LLM platforms.
            </p>
          </div>
        </Reveal>
      </div>

      {/* ================= SERVICES SECTION ================= */}
      <div className="seo-services-wrapper">
        <div className="seo-services-grid">
          {comparisonData.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 0.15}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="seo-service-card">
                <h3 className="seo-service-card-title">{item.title}</h3>
                <p className="seo-service-card-desc">{item.description}</p>
                <ul className="seo-list">
                  {item.points.map((point, i) => (
                    <li key={i} className="seo-list-item">
                      <span className="seo-bullet"></span>
                      <span className="seo-list-text">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ================= METHODOLOGY SECTION ================= */}
      <div className="seo-methodology-wrapper">
        <Reveal>
          <div className="seo-methodology-header">
            <h2 className="seo-methodology-title">Our SEO Methodology</h2>
          </div>
        </Reveal>
        <div className="seo-methodology-grid">
          {methodologySteps.map((step, index) => {
            const isHovered = hoveredStep === step.id;
            return (
              <Reveal key={step.id} delay={index * 0.12}>
                <div
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`seo-methodology-card${isHovered ? ' seo-methodology-card-hovered' : ''}`}
                >
                  <div className="seo-step-number">{step.id}</div>
                  <h3 className="seo-methodology-card-title">{step.title}</h3>
                  <p className="seo-methodology-card-desc">{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* ================= PERFORMANCE SECTION ================= */}
      <div className="seo-performance-wrapper">
        <Reveal>
          <div className="seo-performance-header">
            <h2 className="seo-performance-title">Real Organic Performance</h2>
            <p className="seo-performance-subtitle">
              Our strategy focuses purely on qualified organic growth, not vanity search metrics.
            </p>
          </div>
        </Reveal>
        <div className="seo-performance-grid">
          {performanceData.map((item, index) => (
            <Reveal key={item.id} direction="zoom" delay={index * 0.12}>
              <div className="seo-performance-card">
                <div className="seo-performance-value">{item.value}</div>
                <h3 className="seo-performance-card-title">{item.title}</h3>
                <p className="seo-performance-card-desc">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
       <CTA />
    </div>
  );
};

export default SeoAi;