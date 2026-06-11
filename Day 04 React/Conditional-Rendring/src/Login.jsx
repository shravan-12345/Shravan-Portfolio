import { useState } from "react";

function Login() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div
      style={{
        width: "350px",
        margin: "50px auto",
        padding: "25px",
        textAlign: "center",
        borderRadius: "20px",
        border:"2px solid black",
        backgroundColor: "#eff1eb",
        boxShadow: "0px 5px 15px gray"
      }}
    >

      <h1 style={{color:"#1565c0"}}>
    
        User Portal
    
      </h1>

      {
        isLoggedIn ? (
          <>
            <div
              style={{
                backgroundColor:"#96fc99",
                padding:"15px",
                border:"1px solid black",
                borderRadius:"15px"
              }}
            >
              <h2>Welcome User</h2>
              <p>You are successfully logged in</p>
            </div>

            <button
              onClick={() => setIsLoggedIn(false)}
              style={{
                marginTop:"20px",
                padding:"10px 25px",
                border:"1px solid black",
                borderRadius:"20px",
                backgroundColor:"red",
                color:"white",
                cursor:"pointer"
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <div
              style={{
                backgroundColor:"#49faeb",
                padding:"15px",
                border:"1px solid black",
                borderRadius:"15px"
              }}
            >
              <h2>Please Login</h2>
              <p>Access your dashboard</p>
            </div>

            <button
              onClick={() => setIsLoggedIn(true)}
              style={{
                marginTop:"20px",
                padding:"10px 25px",
                border:"1px solid black",
                borderRadius:"20px",
                backgroundColor:"green",
                color:"white",
                cursor:"pointer"
              }}
            >
              Login
            </button>
          </>
        )
      }

    </div>
  );
}

export default Login;