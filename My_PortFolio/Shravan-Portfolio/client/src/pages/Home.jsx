import { Link } from "react-router-dom";
import TechStack from "../components/TechStack";

export default function Home() {
  return (
    <>
      <style>{`
        .home-wrapper {
          min-height: 100vh;
          color: white;
          background:
            radial-gradient(circle at top, rgba(99,102,241,0.25), transparent 55%),
            radial-gradient(circle at bottom, rgba(56,189,248,0.15), transparent 55%),
            #0a0a0a;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 60px;
        }

        .hero {
          text-align: center;
          padding: 120px 20px 50px;
          max-width: 900px;
        }

 .profile-img {
  width: 200px;
  height: 230px;
  border-radius: 35%;
  object-fit: cover;
  object-position: center;
  display: block;
  margin: 0 auto 20px auto;
  border: 5px solid rgba(99,102,241,0.6);
  box-shadow:
    0 0 25px rgba(99,102,241,0.4),
    0 0 50px rgba(99,102,241,0.2);
  transition: all 0.3s ease;
  }

        .badge {
          display: inline-block;
          padding: 7px 16px;
          font-size: 13px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          color: #cbd5e1;
          margin-bottom: 18px;
          backdrop-filter: blur(10px);
        }

        .title {
          font-size: 56px;
          font-weight: 900;
          margin-bottom: 10px;
          letter-spacing: -1px;
        }

        .title span {
          color: #6366f1;
          text-shadow: 0 0 25px rgba(99,102,241,0.6);
        }

        .subtitle {
          font-size: 20px;
          color: #cbd5e1;
          margin-bottom: 18px;
          font-weight: 500;
        }

        .desc {
          font-size: 16px;
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .btn-group {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 12px 22px;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          transition: 0.25s ease;
          display: inline-block;
        }

        .primary {
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: white;
          box-shadow: 0 10px 30px rgba(99,102,241,0.25);
        }

        .primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(99,102,241,0.35);
        }

        .secondary {
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
        }

        .secondary:hover {
          background: rgba(255,255,255,0.08);
        }

        .skills {
          width: 100%;
          max-width: 1000px;
          text-align: center;
          padding: 50px 20px;
        }

        .skills h3 {
          font-size: 30px;
          margin-bottom: 30px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .card {
          padding: 22px;
          border-radius: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          transition: 0.3s ease;
          text-align: left;
        }

        .card:hover {
          transform: translateY(-6px);
          border-color: rgba(99,102,241,0.5);
          box-shadow: 0 10px 30px rgba(99,102,241,0.2);
        }

        .card h4 {
          margin-bottom: 8px;
          font-size: 16px;
        }

        .card p {
          color: #94a3b8;
          font-size: 14px;
        }

        .cta {
          text-align: center;
          padding: 70px 20px;
        }

        .cta h2 {
          font-size: 28px;
          margin-bottom: 18px;
        }

        .large {
          padding: 14px 28px;
          font-size: 16px;
        }

        .tech-stack {
  width: 100%;
  max-width: 1200px;
  padding: 80px 20px;
  text-align: center;
}

.tech-stack h2 {
  font-size: 40px;
  margin-bottom: 10px;
}

.tech-stack p {
  color: #94a3b8;
  margin-bottom: 40px;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(180px,1fr));
  gap: 20px;
}

.tech-card {
  padding: 30px 20px;
  border-radius: 18px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  transition: all .3s ease;
}

.tech-card:hover {
  transform: translateY(-8px);
  border-color: #6366f1;
  box-shadow: 0 0 25px rgba(99,102,241,.3);
}

.tech-card span {
  font-size: 42px;
  display: block;
  margin-bottom: 12px;
}

.tech-card h3 {
  font-size: 18px;
}

        @media (max-width: 768px) {
          .title { font-size: 38px; }
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="home-wrapper">

        {/* HERO */}
        <section className="hero">

          <>
   <img
    src="/shravan...jpg"
    alt="Shravan Nevarekar"
    className="profile-img"
    />

          <p className="badge">
            🚀 Available for DevOps / AWS / MERN Roles
          </p>

          <h1 className="title">
            Hi, I'm <span>Shravan</span>
          </h1>

          <h2 className="subtitle">
            DevOps Engineer | AWS | Linux Admin | MERN Developer
          </h2>

          <p className="desc">
            I design scalable cloud systems, automate deployments using CI/CD,
            and build modern full-stack applications with clean architecture and
            production-ready standards.
          </p>

          <div className="btn-group">

            <Link to="/contact" className="btn primary">
              Hire Me
            </Link>

            <Link to="/projects" className="btn secondary">
              View Projects
            </Link>

          </div>

          
  <hero />
  <TechStack />
</>

        </section>

        {/* SKILLS */}
        <section className="skills">

          <h3>What I Do</h3>

          <div className="skills-grid">

            <div className="card">
              <h4>☁️ AWS & Cloud</h4>
              <p>EC2, S3, IAM, VPC, scalable deployments</p>
            </div>

            <div className="card">
              <h4>⚙️ DevOps</h4>
              <p>CI/CD pipelines, Docker, Linux automation</p>
            </div>

            <div className="card">
              <h4>💻 MERN Stack</h4>
              <p>React, Node.js, Express, MongoDB apps</p>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="cta">

          <h2>Let’s build something production-ready 🚀</h2>

          <Link to="/contact" className="btn primary large">
            Contact Me
          </Link>

        </section>

      </div>
    </>
  );
}