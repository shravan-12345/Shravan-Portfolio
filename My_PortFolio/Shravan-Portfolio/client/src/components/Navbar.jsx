import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <style>{`
        nav {
          position: sticky;
          top: 0;
          z-index: 1000;

          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;

          padding: 14px 20px;

          background: rgba(10, 10, 10, 0.75);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        nav a {
          color: #cbd5e1;
          text-decoration: none;
          font-weight: 500;

          padding: 8px 12px;
          border-radius: 8px;

          transition: all 0.3s ease;
        }

        nav a:hover {
          background: rgba(99,102,241,0.15);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .active {
          background: rgba(99,102,241,0.25);
          color: #ffffff !important;
          box-shadow: 0 0 15px rgba(99,102,241,0.3);
        }

        /* mobile improvement */
        @media (max-width: 600px) {
          nav {
            gap: 6px;
            padding: 12px;
          }

          nav a {
            font-size: 14px;
            padding: 6px 10px;
          }
        }
      `}</style>

      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/projects">
          Projects
        </NavLink>

        <NavLink to="/experience">
          Experience
        </NavLink>

        <NavLink to="/education">
          Education
        </NavLink>

        <NavLink to="/blogs">
          Blogs
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

        <NavLink to="/certifications">
        Certifications
        </NavLink>

        <NavLink to="/resume">Resume</NavLink>

      </nav>
    </>
  );
}

export default Navbar;