import "./ProjectHook.scss";

export default function ProjectHook(props) {
  return (
    <>
      <h2> Project Peek</h2>
      <div className="project-hook-container">
        <div className="project-hook-goal">
          <h3>Goal</h3> {props.goal}
        </div>
        <div className="project-hook-role">
          <h3>Role</h3> {props.role}
        </div>
        <div className="project-hook-team">
          <h3>Team</h3> {props.team}
        </div>
        <div className="project-hook-duration">
          <h3>Duration</h3>
          {props.duration}
        </div>
        <div className="project-hook-final-prototype">
          <h3>Final Prototype</h3> {props.finalPrototypeLink}
        </div>
      </div>
    </>
  );
}
