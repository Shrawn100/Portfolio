import { Link } from "react-router-dom";

function PNavBar() {
  return (
    <nav className="pnav">
      <Link className="pnav-link" to="/">
        Go back
      </Link>
    </nav>
  );
}
export default PNavBar;
