import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";

function Navbar() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const gotTOSignUp = (setLogin) => {
    navigate("/register", { setLogin });
  };

  return (
    <div>
      <nav className="top-padding">
        <Link
          to="/"
          style={{
            color: "red",
          }}
        >
          MILL AUTOS
        </Link>
        {login ? (
          <>
            <Link
              style={{
                marginLeft: "2rem",
              }}
              to="/admin"
            >
              Dashboard
            </Link>
          </>
        ) : (
          <>
            <div>
              <Link className="right-padding" to="/stock">
                Our Stock
              </Link>
              <Link to="/about" className="right-padding">
                About
              </Link>
              <Link to="/contact">Contacts</Link>
            </div>
            <div>
              <button
                className="right-padding"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button onClick={() => gotTOSignUp(setLogin)}>Signup</button>
            </div>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
