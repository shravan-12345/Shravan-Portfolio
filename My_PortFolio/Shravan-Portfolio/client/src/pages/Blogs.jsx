import { useEffect, useState } from "react";
import api from "../services/api";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const res = await api.get("/blogs");
        setBlogs(res.data);
      } catch (error) {
        console.log("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>📝 Blogs</h1>

      {loading && <p style={styles.msg}>Loading blogs...</p>}

      {!loading && blogs.length === 0 && (
        <p style={styles.msg}>No blogs found 😕</p>
      )}

      <div style={styles.grid}>
        {blogs.map((blog) => (
          <div key={blog._id} style={styles.card}>
            {blog.image && (
              <img
                 src={
                  blog.image.startsWith("http")
                  ? blog.image
                  : `http://localhost:5000${blog.image}`
                    }
                    alt={blog.title}
                    style={styles.image}
                    />
                   )}

            <h2 style={styles.blogTitle}>{blog.title}</h2>

            <p style={styles.desc}>
              {blog.content
                ? `${blog.content.substring(0, 120)}...`
                : "No description available"}
            </p>

            {blog.date && (
              <p style={styles.date}>
                📅 {new Date(blog.date).toLocaleDateString()}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;

/* ================= STYLES ================= */
const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, rgba(99,102,241,0.15), transparent 50%), #0a0a0a",
    color: "white",
    padding: "60px 20px",
    textAlign: "center",
  },

  title: {
    fontSize: "40px",
    marginBottom: "40px",
    fontWeight: "700",
  },

  msg: {
    color: "#94a3b8",
    fontSize: "16px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
    maxWidth: "1200px",
    margin: "auto",
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(99, 102, 241, 0.35)",
    borderRadius: "16px",
    overflow: "hidden",
    textAlign: "left",
    backdropFilter: "blur(10px)",
    transition: "0.3s ease",
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },

  blogTitle: {
    fontSize: "20px",
    padding: "20px 20px 10px",
    color: "#e2e8f0",
    margin: 0,
  },

  desc: {
    fontSize: "14px",
    color: "#94a3b8",
    lineHeight: "1.6",
    padding: "0 20px",
  },

  date: {
    fontSize: "13px",
    color: "#a5b4fc",
    padding: "0 20px 20px",
  },
};