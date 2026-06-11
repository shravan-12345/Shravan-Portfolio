function App() {
  const name = "Rahul";
  const course = "MERN Stack";

  return (
    <div
      style={{
        backgroundColor: "#a8f3f9",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "2px solid black",
          width: "400px",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          backgroundColor: "white",
          boxShadow: "0 0 10px gray",
        }}
      >
        <h1>Hello {name}</h1>
        <h2>Welcome to {course}</h2>
      </div>
    </div>
  );
}

export default App;