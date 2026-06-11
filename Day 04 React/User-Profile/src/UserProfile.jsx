function UserProfile({ name, email, profilePic }) {
  return (
    <div
      style={{
        width: "300px",
        border: "2px solid #121312",
        borderRadius: "15px",
        padding: "20px",
        margin: "20px auto",
        textAlign: "center",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        backgroundColor: "#ffffff",
      }}
    >
      <img
        src={profilePic}
        alt="Profile"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
        }}
      />

      <h2>{name}</h2>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserProfile;