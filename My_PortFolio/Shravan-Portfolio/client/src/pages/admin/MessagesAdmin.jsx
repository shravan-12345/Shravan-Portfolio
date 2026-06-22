import { useEffect, useState } from "react";
import api from "../../services/api";

function MessagesAdmin() {
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  const fetchMessages = async () => {
    try {
      const res = await api.get("/contact", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessages(res.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

 useEffect(() => {
  let ignore = false;

  const loadMessages = async () => {
    try {
      const res = await api.get("/contact", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!ignore) {
        setMessages(res.data);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  loadMessages();

  return () => {
    ignore = true;
  };
}, [token]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/contact/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchMessages();

      alert("Message Deleted Successfully");
    } catch (error) {
      console.error(error);
      alert("Delete Failed");
    }
  };

  const filteredMessages = messages.filter(
    (msg) =>
      msg.name?.toLowerCase().includes(search.toLowerCase()) ||
      msg.email?.toLowerCase().includes(search.toLowerCase()) ||
      msg.message?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <div style={styles.topBar}>
        <h1>📨 Message Management</h1>

        <div style={styles.countCard}>
          Total Messages: {messages.length}
        </div>
      </div>

      <input
        type="text"
        placeholder="Search messages..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      <div style={styles.grid}>
        {filteredMessages.length === 0 ? (
          <p>No Messages Found</p>
        ) : (
          filteredMessages.map((msg) => (
            <div key={msg._id} style={styles.card}>
              <div style={styles.header}>
                <h3>{msg.name}</h3>
              </div>

              <p style={styles.email}>
                📧 {msg.email}
              </p>

              <p style={styles.message}>
                {msg.message}
              </p>

              <p style={styles.date}>
                {new Date(msg.createdAt).toLocaleDateString()}
              </p>

              <button
                style={styles.deleteBtn}
                onClick={() => handleDelete(msg._id)}
              >
                Delete Message
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MessagesAdmin;

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "#fff",
    padding: "30px",
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    flexWrap: "wrap",
    gap: "15px",
  },

  countCard: {
    background: "#1e293b",
    padding: "12px 18px",
    borderRadius: "10px",
    border: "1px solid #334155",
    fontWeight: "600",
  },

  search: {
    width: "100%",
    padding: "12px",
    marginBottom: "25px",
    borderRadius: "8px",
    border: "1px solid #334155",
    background: "#1e293b",
    color: "#fff",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#1e293b",
    border: "1px solid #334155",
    borderRadius: "14px",
    padding: "20px",
  },

  header: {
    marginBottom: "10px",
  },

  email: {
    color: "#60a5fa",
    marginBottom: "12px",
  },

  message: {
    color: "#cbd5e1",
    lineHeight: "1.6",
    marginBottom: "15px",
  },

  date: {
    color: "#94a3b8",
    fontSize: "14px",
    marginBottom: "15px",
  },

  deleteBtn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
};