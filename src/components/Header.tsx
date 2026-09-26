import { NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Products", "/products"],
  ["Contact", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">

          {/* Logo — Image Only */}
          <NavLink
            to="/"
            className="brand"
            onClick={() => setOpen(false)}
          >
            <img
              src="/images/logo.png"
              alt="Alpha Zeta World"
              className="brand-logo"
            />
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Nav */}
          <nav className={open ? "nav open" : "nav"}>
            {links.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              className="nav-cta"
              onClick={() => setOpen(false)}
            >
              Get Started
            </NavLink>
          </nav>

        </div>
      </header>

      <style>{`
        * {
          box-sizing: border-box;
        }

        /* =========================
           HEADER
        ========================= */

        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;

          width: 100%;

          background: #ffffff;

          border-bottom: 1px solid #e5ece9;

          font-family:
            system-ui,
            -apple-system,
            Arial,
            Helvetica,
            sans-serif;
        }

        .container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 3rem;
        }

        .nav-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;

          height: 90px;

          gap: 2rem;
        }

        /* =========================
           BRAND / LOGO
        ========================= */

        .brand {
          display: inline-flex;
          align-items: center;

          text-decoration: none;

          flex-shrink: 0;

          margin-left: 1rem;
        }

        .brand-logo {
          height: 92px;
          width: auto;
          max-width: 460px;
          max-height: 92px;

          object-fit: contain;

          display: block;

          transition: transform 0.3s ease;
        }

        .brand-logo:hover {
          transform: scale(1.05);
        }

        /* =========================
           NAVIGATION
        ========================= */

        .nav {
          display: flex;
          align-items: center;

          gap: 2rem;
        }

        .nav-link {
          position: relative;

          font-size: 0.95rem;
          font-weight: 500;

          color: #1f2a3d;

          text-decoration: none;

          padding: 0.5rem 0;

          transition: color 0.25s ease;
        }

        .nav-link::after {
          content: "";

          position: absolute;
          left: 0;
          bottom: 0;

          width: 0;
          height: 2px;

          background: #0A4B3F;

          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #0A4B3F;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active {
          color: #0A4B3F;
          font-weight: 700;
        }

        .nav-link.active::after {
          width: 100%;
        }

        /* =========================
           CTA BUTTON
        ========================= */

        .nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          padding: 0 1.35rem;

          height: 44px;

          border-radius: 24px;

          background:
            linear-gradient(
              135deg,
              #0A4B3F,
              #0F5C4A
            );

          color: #ffffff;

          font-size: 0.9rem;
          font-weight: 600;

          text-decoration: none;

          box-shadow:
            0 6px 16px rgba(10, 75, 63, 0.20);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .nav-cta:hover {
          transform: translateY(-2px);

          box-shadow:
            0 10px 22px rgba(10, 75, 63, 0.28);
        }

        /* =========================
           MENU BUTTON (Mobile)
        ========================= */

        .menu-btn {
          display: none;

          width: 44px;
          height: 44px;

          border: 1px solid #dce8e3;
          border-radius: 10px;

          background: #ffffff;

          font-size: 1.25rem;
          line-height: 1;

          color: #0A4B3F;

          cursor: pointer;

          transition:
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .menu-btn:hover {
          background: #f2f7f5;
          border-color: #0A4B3F;
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {
          .container {
            padding: 0 2rem;
          }

          .nav-wrap {
            height: 80px;
          }

          .nav {
            gap: 1.25rem;
          }

          .nav-link {
            font-size: 0.9rem;
          }

          .brand {
            margin-left: 0.5rem;
          }

          .brand-logo {
            height: 60px;
            max-width: 220px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 760px) {
          .container {
            padding: 0 1.25rem;
          }

          .nav-wrap {
            height: 72px;
          }

          .brand {
            margin-left: 0.5rem;
          }

          .brand-logo {
            height: 50px;
            max-width: 180px;
          }

          .menu-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          /* Mobile nav — dropdown */
          .nav {
            position: absolute;

            top: 72px;
            left: 0;
            right: 0;

            background: #ffffff;

            flex-direction: column;
            align-items: stretch;

            gap: 0;

            padding: 1rem 1.25rem 1.5rem;

            border-bottom: 1px solid #e5ece9;

            box-shadow:
              0 12px 24px rgba(10, 75, 63, 0.08);

            transform: translateY(-20px);
            opacity: 0;
            pointer-events: none;

            transition:
              transform 0.3s ease,
              opacity 0.3s ease;
          }

          .nav.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }

          .nav-link {
            padding: 0.9rem 0;

            font-size: 1rem;

            border-bottom: 1px solid #eef3f1;
          }

          .nav-link::after {
            display: none;
          }

          .nav-link.active {
            color: #0A4B3F;
          }

          .nav-cta {
            margin-top: 1rem;

            width: 100%;
            height: 46px;

            font-size: 0.95rem;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 420px) {
          .container {
            padding: 0 1rem;
          }

          .nav-wrap {
            height: 66px;
          }

          .brand {
            margin-left: 0.25rem;
          }

          .brand-logo {
            height: 44px;
            max-width: 150px;
          }

          .menu-btn {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
}