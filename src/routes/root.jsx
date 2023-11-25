import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./root.scss";

export default function Root() {
  return (
    <div className="root-nav">
      <nav>
        <Link to={`/`} className="nav-link">
          Home
        </Link>

        <div className="nav-away-from-home">
          <Link to={`/projects`} className="nav-link">
            Projects
          </Link>

          <Link to={`/about`} className="nav-link">
            About
          </Link>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}
