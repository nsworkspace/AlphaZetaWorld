import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="section">
      <div className="container">
        <h1>Welcome to AlphaZetaWorld</h1>
        <p>
          Ideas that move your world forward. We create thoughtful digital
          solutions, services and products that help businesses grow with
          confidence.
        </p>
        <p>
          AlphaZetaWorld brings design, technology and business thinking together
          to create experiences that are useful, elegant and ready for growth.
        </p>
        <p>
          We offer modern web experiences designed around real business goals,
          practical solutions that simplify everyday workflows, and clear product
          thinking from concept to launch.
        </p>
        <p>
          Our featured products include Alpha Connect, a streamlined platform for
          connecting teams and customers; Alpha Flow, simple tools for organizing
          work and keeping momentum; and Alpha Insights, clear data experiences
          that turn information into action.
        </p>
        <p>
          Have an idea worth exploring? <Link to="/contact">Start a conversation →</Link>
        </p>
      </div>
    </section>
  );
}