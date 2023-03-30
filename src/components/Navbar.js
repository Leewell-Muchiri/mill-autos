import { Link } from "react-router-dom";

function Navbar() {
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
        {/* Login && signup link */}
        <div>
          <Link className="right-padding" to="/stock">
            Our Stock
          </Link>
          <Link className="right-padding">About</Link>
          <Link>Contacts</Link>
        </div>
        {/* Login && signup link */}
        <div>
          <Link className="right-padding" to="/login">
            Login
          </Link>
          <Link to="/register">Signup</Link>
          <Link
            style={{
              marginLeft: "2rem",
            }}
            to="/admin"
          >
            Dashboard
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
