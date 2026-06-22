function TechStack() {
  const skills = [
    "AWS",
    "Linux",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Terraform",
    "Ansible",
    "React",
    "Node.js",
    "MongoDB",
    "Git",
    "GitHub",
  ];

  return (
    <section
      style={{
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "40px",
          marginBottom: "20px",
        }}
      >
        Tech Stack
      </h2>

      <p
        style={{
          color: "#aaa",
          marginBottom: "40px",
        }}
      >
        Technologies I work with
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill}
            style={{
              padding: "20px",
              border: "1px solid #333",
              borderRadius: "15px",
              background: "#111",
              transition: "0.3s",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;