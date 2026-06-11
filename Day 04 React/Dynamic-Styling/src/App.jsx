import { useState } from "react";

function App() {

  const [active, setActive] = useState(false);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f2f2f2"
    }}>

      <div style={{
        width: "350px",
        padding: "30px",
        textAlign: "center",
        backgroundColor: "white",
        border: "2px solid #101010",
        borderRadius: "20px",
        boxShadow: "0px 8px 20px rgba(57, 57, 57, 0.2)"
      }}>

        <h2>Dynamic Button Styling</h2>

        <p>
          Status: <b>{active ? "Active" : "Inactive"}</b>
        </p>

        <button
          onClick={() => setActive(!active)}
          style={{
            backgroundColor: active ? "green" : "red",
            color: "white",
            padding: "12px 35px",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          {active ? "Active" : "Inactive"}
        </button>

      </div>

    </div>
  );
}

export default App;