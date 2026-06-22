import { useEffect, useState } from "react";
import api from "../services/api";

function Certifications() {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCertifications = async () => {
      try {
        const res = await api.get("/certifications");
        setCertifications(res.data);
      } catch (error) {
        console.error("Error loading certifications:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCertifications();
  }, []);

  return (
    <>
      <style>{`
        .cert-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top, rgba(99,102,241,0.25), transparent 45%),
            #0a0a0a;
          color: white;
          padding: 60px 20px;
        }

        .cert-header {
          text-align: center;
          max-width: 850px;
          margin: auto;
          margin-bottom: 50px;
        }

        .cert-title {
          font-size: 52px;
          font-weight: 800;
          margin-bottom: 15px;
        }

        .cert-title span {
          color: #6366f1;
        }

        .cert-desc {
          color: #94a3b8;
          line-height: 1.8;
          font-size: 17px;
        }

        .stats {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 35px;
        }

        .stat-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 20px;
          border-radius: 15px;
          min-width: 180px;
          text-align: center;
          backdrop-filter: blur(12px);
        }

        .stat-number {
          font-size: 32px;
          font-weight: bold;
          color: #6366f1;
        }

        .stat-label {
          color: #cbd5e1;
          margin-top: 8px;
        }

        .cert-grid {
          max-width: 1300px;
          margin: 60px auto 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 25px;
        }

        .cert-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .cert-card:hover {
          transform: translateY(-8px);
          border-color: rgba(99,102,241,0.5);
          box-shadow: 0 15px 40px rgba(99,102,241,0.25);
        }

        .cert-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          transition: 0.4s;
        }

        .cert-card:hover .cert-image {
          transform: scale(1.05);
        }

        .cert-content {
          padding: 20px;
        }

        .cert-name {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .issuer {
          color: #60a5fa;
          margin-bottom: 10px;
        }

        .date {
          color: #94a3b8;
          margin-bottom: 15px;
        }

        .tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .tag {
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(99,102,241,0.15);
          color: #c7d2fe;
          font-size: 12px;
        }

        .verify-btn {
          display: inline-block;
          text-decoration: none;
          background: linear-gradient(
            135deg,
            #6366f1,
            #4f46e5
          );
          color: white;
          padding: 10px 18px;
          border-radius: 10px;
          font-weight: 600;
          transition: 0.3s;
        }

        .verify-btn:hover {
          transform: translateY(-2px);
        }

        .loading {
          text-align: center;
          color: #94a3b8;
          margin-top: 50px;
        }

        @media (max-width: 768px) {
          .cert-title {
            font-size: 38px;
          }
        }
      `}</style>

      <div className="cert-page">

        {/* Header */}
        <div className="cert-header">
          <h1 className="cert-title">
            🏆 Certifications & <span>Achievements</span>
          </h1>

          <p className="cert-desc">
            Professional certifications validating my expertise
            in AWS Cloud, DevOps, Linux Administration,
            Networking and Full Stack Development.
          </p>

          <div className="stats">
            <div className="stat-card">
              <div className="stat-number">
                {certifications.length}
              </div>
              <div className="stat-label">
                Certifications
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-number">
                AWS
              </div>
              <div className="stat-label">
                Cloud Skills
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-number">
                DevOps
              </div>
              <div className="stat-label">
                Automation
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        {loading ? (
          <div className="loading">
            Loading Certifications...
          </div>
        ) : (
          <div className="cert-grid">
            {certifications.map((cert) => (
              <div
                className="cert-card"
                key={cert._id}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-image"
                />

                <div className="cert-content">
                  <h3 className="cert-name">
                    {cert.title}
                  </h3>

                  <p className="issuer">
                    🏢 {cert.issuer}
                  </p>

                  <p className="date">
                    📅 {cert.issueDate}
                  </p>

                  <div className="tags">
                    <span className="tag">AWS</span>
                    <span className="tag">DevOps</span>
                    <span className="tag">Linux</span>
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="verify-btn"
                    >
                      Verify Certificate →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Certifications;