import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand"><span className="brand-mark">AZ</span> AlphaZetaWorld</div>
          <p>Building modern digital experiences with clarity, creativity and purpose.</p>
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <span>hello@alphazetaworld.com</span>
          <span>+91 90000 00000</span>
          <span>India</span>
        </div>
      </div>
      <div className="footer-bottom">© 2026 AlphaZetaWorld. All Rights Reserved.</div>
    </footer>
  );
}