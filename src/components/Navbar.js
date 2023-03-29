import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="top-padding">
        <logo
          style={{
            color: "red",
          }}
        >
          MILL AUTOS
        </logo>
        {/* Login && signup link */}
        <div>
          <Link className="right-padding">Our Stock</Link>
          <Link className="right-padding">About</Link>
          <Link>Contacts</Link>
        </div>
        {/* Login && signup link */}
        <div>
          <Link className="right-padding" to='/login'>Login</Link>
          <Link to='/register'>Signup</Link>
        </div>
      </nav>
    </div>

  );
}

export default Navbar;
