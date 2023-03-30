import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
//
function Signup({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  // added form to enable user to enter their credials and sign up
  return (
    <div className="signUpContainer">
      <Link
        style={{
          position: "absolute",
          top: "15px",
          left: "15px",
          color: "green",
          textDecoration: "none",
        }}
        to="/"
      >
        Return To Home
      </Link>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div>
          <div>
            <svg
              style={{
                height: "2rem",
                width: "2rem",
                padding: "4px",
                position: "absolute",
                top: "22.8%",
                marginLeft: "20px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            onChange={handleChange}
            value={formData.username}
          />
        </div>

        {/* Email */}
        <div>
          <div
            style={{
              height: "1.7rem",
              width: "1.7rem",
              padding: "4px",
              position: "absolute",
              top: "32.5%",
              marginLeft: "20px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="currentColor"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
          </div>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        {/* Password */}
        <div className="form-group4">
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        {/* Confirm password */}
        <div className="form-group4">
          <input
            type="password"
            placeholder="confirmPassword"
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
        </div>
        <button type="submit" className="loginNav">
          Submit
        </button>
        <p>Have an account? Click here to Login</p>
      </form>

      <button className="loginNav" onClick={() => navigate("/login")}>
        Login
      </button>
    </div>
  );
}

export default Signup;
