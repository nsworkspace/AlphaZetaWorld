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
    <header className="site-header">
      <div className="container nav-wrap">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">AZ</span>
          <span>AlphaZeta<span>World</span></span>
        </NavLink>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          ☰
        </button>

        <nav className={open ? "nav open" : "nav"}>
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="nav-cta" onClick={() => setOpen(false)}>
            Get Started
          </NavLink>
        </nav>
      </div>
    </header>
  );
}