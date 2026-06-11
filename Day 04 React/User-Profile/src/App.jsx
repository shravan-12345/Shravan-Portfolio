import UserProfile from "./UserProfile";
import shravanPhoto from "./assets/shravan.jpg";
import shreyaPhoto from "./assets/shreya.jpg";

function App() {
  return (

      <div
      style={{
        width: "700px",
        margin: "30px auto",
        padding: "30px",
        border: "3px solid black",
        borderRadius: "20px",
        backgroundColor: "#43ff75",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        Student Profile Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >

      <UserProfile
        name="Shravan. N"
        email="Shravan@gmail.com"
        profilePic={shravanPhoto}
      />

      <UserProfile
        name="Shreya Patil"
        email="shreya@gmail.com"
        profilePic={shreyaPhoto}
      />
    </div>
    </div>
  );
}

export default App;