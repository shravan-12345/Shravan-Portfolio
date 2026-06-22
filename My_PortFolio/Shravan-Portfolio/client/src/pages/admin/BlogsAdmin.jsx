import { useEffect, useState } from "react";
import api from "../../services/api";

function BlogsAdmin() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);
  const [image, setImage] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const res = await api.get("/blogs");

        console.log("Blogs API Response:", res.data);

        if (Array.isArray(res.data)) {
          setBlogs(res.data);
        } else if (Array.isArray(res.data.blogs)) {
          setBlogs(res.data.blogs);
        } else if (Array.isArray(res.data.data)) {
          setBlogs(res.data.data);
        } else {
          setBlogs([]);
        }
      } catch (error) {
        console.log(error);
        setBlogs([]);
      }
    };

    loadBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await api.get("/blogs");

      if (Array.isArray(res.data)) {
        setBlogs(res.data);
      } else if (Array.isArray(res.data.blogs)) {
        setBlogs(res.data.blogs);
      } else if (Array.isArray(res.data.data)) {
        setBlogs(res.data.data);
      } else {
        setBlogs([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Add Blog
  const addBlog = async () => {
    try {
      await api.post(
        "/blogs",
        {
          title,
          description,
          content,
          image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setDescription("");
      setContent("");
      setImage("");

      fetchBlogs();

      alert("Blog Added Successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to Add Blog");
    }
  };

  // Update Blog
  const updateBlog = async () => {
    try {
      await api.put(
        `/blogs/${editId}`,
        {
          title,
          description,
          content,
          image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEditId(null);
      setTitle("");
      setDescription("");
      setContent("");
      setImage("");

      fetchBlogs();

      alert("Blog Updated Successfully");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  // Delete Blog
  const deleteBlog = async (id) => {
    try {
      await api.delete(`/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchBlogs();

      alert("Blog Deleted");
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  return (
    <div style={styles.container}>
      <h1>📝 Blogs Admin</h1>

      {/* Blog Form */}
      <div style={styles.form}>
        <input
          style={styles.input}
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Short Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
        style={styles.input}
        type="text"
        placeholder="Blog Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        />

        <textarea
          style={styles.textarea}
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {editId ? (
          <button
            style={{
              ...styles.addBtn,
              background: "#16a34a",
            }}
            onClick={updateBlog}
          >
            Update Blog
          </button>
        ) : (
          <button style={styles.addBtn} onClick={addBlog}>
            Add Blog
          </button>
        )}
      </div>

      {/* Blog List */}
      <div>
        {blogs.length === 0 ? (
          <p>No Blogs Found</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog._id} style={styles.card}>

            {blog.image && (
            <img
            src={blog.image}
            alt={blog.title}
            style={styles.blogImage}
            />
            )}
              <h3>{blog.title}</h3>

              <p>{blog.description}</p>

              <button
                style={{
                  background: "#f59e0b",
                  color: "#fff",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
               onClick={() => {
                  setEditId(blog._id);
                  setTitle(blog.title || "");
                  setDescription(blog.description || "");
                  setContent(blog.content || "");
                  setImage(blog.image || "");
                }}
              >
                Edit
              </button>

              <button
                style={styles.deleteBtn}
                onClick={() => deleteBlog(blog._id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    color: "#fff",
    padding: "20px",
  },

  form: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #334155",
  },

  textarea: {
    width: "100%",
    minHeight: "120px",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #334155",
  },

  addBtn: {
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "15px",
  },

  deleteBtn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default BlogsAdmin;