import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="top-padding">
        <logo>MILL AUTOS</logo>
        {/* Links */}
        <div>
          <Link to="/about" className="right-padding">About</Link>
          <Link to="/contact">Contacts</Link>
        </div>
        {/* Login && signup link */}
        <div>
          <Link to="/login" className="right-padding">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;