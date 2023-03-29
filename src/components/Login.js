import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

  }
  // added form in the login

  return (
    <div className="signUpContainer">

      <Link
      style={{
        position: 'absolute',
        top: '15px',
        left: '15px',
        color: "green",
        textDecoration: 'none',
      }}
      to='/'>Return To Home</Link>
      <h1 className="text-center mb-4">Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <div className="form-group mb-2 col-md-4">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              id="email"
              className="form-control"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="form-group mb-4 col-md-4">
            <input
              type="password"
              placeholder="password"
              name="password"
              id="password"
              className="form-control"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
        </div>

        <button type="submit" className="loginNav">
          Submit
        </button>

        <p>Haven't Registered? Sign up here</p>
        <button className="loginNav" onClick={() => navigate("/register")}>
          Register
        </button>
        <p>
          Forgot password? Click{" "}
          <Link
            style={{
              color: "green",
            }}
            to="/reset"
          >
            Here
          </Link>{" "}
          to reset
        </p>
      </form>
    </div>
  );
}

export default Login;
