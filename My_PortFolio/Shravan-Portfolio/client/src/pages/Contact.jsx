import { useState } from "react";
import api from "../services/api";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await api.post("/contact", form);

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.log("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>

      <h1 style={styles.title}>📩 Contact Me</h1>

      <form onSubmit={submitForm} style={styles.form}>

        <input
          style={styles.input}
          placeholder="Your Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

        <input
          style={styles.input}
          placeholder="Your Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />

        <textarea
          style={{ ...styles.input, height: "120px", resize: "none" }}
          placeholder="Your Message"
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          required
        />

        <button
          type="submit"
          style={styles.button}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message 🚀"}
        </button>

        {success && (
          <p style={styles.success}>
            ✅ Message sent successfully!
          </p>
        )}

      </form>

    </div>
  );
}

export default Contact;

/* ================= STYLES ================= */
const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, rgba(99,102,241,0.15), transparent 50%), #0a0a0a",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 10px",
  },

  title: {
    fontSize: "40px",
    marginBottom: "30px",
    fontWeight: "700",
  },

  form: {
    width: "100%",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    background: "rgba(255,255,255,0.05)",
    padding: "25px",
    borderRadius: "14px",
    border: "1px solid rgba(99, 102, 241, 0.35)",
    backdropFilter: "blur(10px)",
  },

  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(0,0,0,0.3)",
    color: "white",
    outline: "none",
    fontSize: "14px",
  },

  button: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#6366f1",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  },

  success: {
    color: "#4ade80",
    fontSize: "14px",
    textAlign: "center",
  },
};