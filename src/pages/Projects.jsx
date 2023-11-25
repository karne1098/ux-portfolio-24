import { Link, Outlet } from "react-router-dom";

export default function Projects() {
  return (
    <main>
      <h1> Projects</h1>
      <nav>
        <Link to={`/cbds-project`}> Cbds Project</Link>
        <Link to={`/lifespan-berdi-project`}>Lifespan BERDI Project </Link>
      </nav>
      <Outlet />
    </main>
  );
}
