import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { useSelector } from "react-redux";

function Navbar() {
  let name
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      name = user;
      setLogin(true);
    } else setLogin(false);
  }, [user]);
  const navigate = useNavigate();
  const [selectRegister, setSelectRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const [selectLogin, setSelectLogin] = useState(false);
  const gotTOSignUp = (setLogin) => {
    navigate("/register");
    setSelectRegister(true);
    Toggle();
  };

  const Toggle = () => {
    if (selectRegister) {
      setSelectLogin(false);
      return <Signup />;
    } else if (selectLogin) {
      setSelectRegister(false);
      return <Login />;
    }
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
        <div>
          <Link className="right-padding" to="/stock">
            Our Stock
          </Link>
          <Link to="/about" className="right-padding">
            About
          </Link>
          <Link to="/contact">Contacts</Link>
        </div>

        {login ? (
          <>
            <button
              style={{
                marginLeft: "2rem",
              }}
              onClick={() => navigate("/admin", { state: { carData: name } })}
            >
              Dashboard
            </button>
            <button
              style={{
                marginLeft: "2rem",
              }}
              onClick={() => setLogin(false)}
            >
              Logout
            </button>
          </>
        ) : (
          <div>
            <button
              className="right-padding"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button onClick={() => gotTOSignUp(setLogin)}>Signup</button>
          </div>
        )}
      </nav>
      {selectRegister}
      {selectLogin}
    </div>
  );
}

export default Navbar;
