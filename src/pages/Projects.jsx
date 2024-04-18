import { Link, Outlet } from "react-router-dom";
import "./Page.scss";
import "./Project.scss";
import cbdsProjectCover from "../images/CbdsProject/cbdsProjectCover.jpg";
import lifespanProjectCover from "../images/LifespanBerdiProject/lifespanHeader.jpg";
export default function Projects(props) {
  return (
    <main>
      <h1> Projects</h1>
      <nav className="project-nav">
        <div className="content-grid">
          <div className="content-row">
            <div className="content--5" id="cbdsProjectCardHolder">
              <Link to={`/cbds-project`}>
                <img
                  src={cbdsProjectCover}
                  alt="Citizens Bank Design System Home Page"
                />
                Cbds Project
                <p>
                  Design System, Interaction Design, Scrum/Agile, Development
                  (React, SCSS), Security
                </p>
              </Link>
            </div>
            <div className="content--5" id="lifespanProjectCardHolder">
              <Link to={`/lifespan-berdi-project`}>
                <img
                  src={lifespanProjectCover}
                  alt="Citizens Bank Design System Home Page"
                />
                Lifespan BERDI Project
                <p>
                  Project Management, UX Consulting, Information Architecture,
                  UXResearch
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* <Link to={`/barder-project`}>Barder Project </Link>
        <Link to={`/food-sustainability-project`}>
          Food Sustainability Project
        </Link> */}
      </nav>
      <Outlet />
    </main>
  );
}
