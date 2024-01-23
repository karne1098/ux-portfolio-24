// import { useState } from "react";
import { useEffect } from "react";
import "./ProjectHook.scss";

export default function ProjectHook(props) {
  // const [codeMirrorData, setCodeMirrorData] = useState({
  //   colorStatus: "--black",
  //   formLabelText: "Code Here",
  //   validationState: "valid",
  //   placeHolderText: "Get Started Here",
  //   defaultValue: "",
  //   value: null,
  //   microcopyBelowText: null,
  // });

  // function showHint() {
  //   setCodeMirrorData({
  //     colorStatus: "--blue",
  //     formLabelText: "Code Here",
  //     validationState: "valid",
  //     microcopyBelowText: props.hintMessage,
  //   });
  // }
  // const [usersCode, setUsersCode] = useState("");

  // const [srcDoc, setsrcDoc] = useState("");
  // useEffect(() => {
  //   setsrcDoc(
  //     `
  //     <html>
  //       <body>${usersCode}</body>
  //     </html>
  //     `
  //   );
  // });

  // srcDoc
  // function onChange() {
  //   return "hi"
  // }
  // showHint();
  // codeMirrorData;
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
      {/* <iframe
        id="learning-test-preview-window-iframe-user"
        width={290}
        sandbox="allow-scripts"
        srcDoc={srcDoc}
      ></iframe> */}
      {/* <div class="cbds-1-grid">
        <div class="cbds-1-grid__row cbds-u-marginBottom__4x cbds-u-marginX__neg6x@lg">
          <div class="cbds-1-grid__col--6 cbds-u-paddingX__1x">
            lots of stuff
          </div>
          <div class="cbds-1-grid__col--4 cbds-u-paddingX__1x cbds-u-marginLeft__auto">
            lots of stuff
          </div>
        </div>

        <div class="cbds-1-grid__row cbds-u-marginBottom__24x cbds-1-grid__row-cols--3 cbds-u-marginX__neg6x@lg">
          <div class="cbds-1-grid__col--8 cbds-u-paddingX__1x">
            lots of stuff
          </div>
          <div class="cbds-1-grid__col--4 cbds-u-paddingX__1x">
            lots of stuff ooyafjsd;lkjadslfkja;dlfkja;lkdjfa;lkdjf;lakdjf;aldkjf
          </div>
        </div>
      </div> */}
    </>
  );
}
