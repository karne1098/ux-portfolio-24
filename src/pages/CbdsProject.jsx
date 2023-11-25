import ProjectHook from "../components/ProjectHook";
import "./CbdsProject.scss";

import userflow_full from "../images/userflow-full.jpg";
import lofi_cds_home from "../images/lofi-cds-home.jpg";
import lofi_get_started from "../images/lofi-get-started.jpg";
import lofi_dev_home from "../images/lofi-dev-home.jpg";
import lofi_lesson_overview from "../images/lofi-lesson-overview.jpg";
import lofi_lesson_demo from "../images/lofi-lesson-demo.jpg";
import lofi_lesson_practice from "../images/lofi-lesson-practice.jpg";

import developer_persona_icon from "../images/support_agent_FILL0_wght500_GRAD0_opsz48.png";

//imports for comparative analysis section
import google_material_design_logo from "../images/kindpng_1010609.png";
import shopify_polaris_logo from "../images/1_-8mqgDwriZNBxKAazV-rjg.png";
import microsoft_fluent_logo from "../images/microsoft_fluent.png";
import w3_schools_logo from "../images/w3schools-2048.png";
import code_academy_logo from "../images/codecademy-logo.png";
import unity_learn_logo from "../images/UnityLogo-690x258.png";
import codecademy_interactive from "../images/codecademy-interactive.jpg";
import unity_learn_step_by_step from "../images/unity-learn-step-by-step.jpg";
import w3schools_fork_view from "../images/w3schools-fork-view.jpg";
import lofi_practice_problem_default from "../images/lofi-practice-problem-default.jpg";
import lofi_practice_problem_success from "../images/lofi-practice-problem-success.jpg";
import hifi_1_practice_problem_default from "../images/hifi-1-practice-problem-default.jpg";
//design elements
import rightDownArrowGreen from "../images/right-down-arrow-green.png";
import downRightArrowGreen from "../images/down-right-arrow-green.png"; //<a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Freepik - Flaticon</a>

//imports for design thinking section
import design_thinking_my_sketches from "../images/design-thinking-my-sketches.jpg";
import design_thinking_fav from "../images/design-thinking-fav.jpg";

export default function CbdsProject() {
  return (
    <main>
      <h1>Citizens Design System Learning Hub</h1>
      <ProjectHook
        goal="To Create an engaging learning experience for new and unfamiliar
        users interacting with the Citizens Design System."
        role="UX Developer"
        team={[
          "1 UX Researcher",
          "2 UX Designers",
          "2 UX Developers",
          "1 CX Researcher",
        ]}
        duration="2 weeks"
        finalPrototypeLink=""
        //TODO: add final prototype link once Cam sends it to you!
      />
      {/* TODO: create some sort of separator for the major parts */}
      <div className="h2-holder">
        <h2>Userflow & Low Fidelity Wireframes</h2>
      </div>
      --{">"} userflow:
      {/* TODO: make the images expandable somehow... */}
      <div className="content-grid">
        <div className="content-row">
          <div className="content--12 lowered-content--small">
            <img
              src={userflow_full}
              alt="Full userflow of Citizens Design System Learning Hub"
              id="userflow-full"
            />
          </div>
        </div>
      </div>
      --{">"} wireframes:
      <div className="content-grid">
        <div className="content-row">
          <div className="content--4 lowered-content--small">
            <img
              src={lofi_cds_home}
              alt="Low fidelity wireframe of Citizens Design System (CDS) Home page"
              id="lofi-cds-home"
            />
          </div>
          <div className="content--4 lowered-content--small">
            <img
              src={lofi_get_started}
              alt="Low fidelity wireframe of CDS Learning Hub's Getting Started page"
              id="lofi-get-started"
            />
          </div>
          <div className="content--4 lowered-content--small">
            <img
              src={lofi_dev_home}
              alt="Low fidelity wireframe of CDS Learning Hub's Developer Home page"
              id="lofi-dev-home"
            />
          </div>
        </div>
        <div className="content-row">
          <div className="content--4 lowered-content--small">
            <img
              src={lofi_lesson_overview}
              alt="Low fidelity wireframe of CDS Learning Hub's lesson overview page"
              id="lofi-lesson-overview"
            />
          </div>
          <div className="content--4 lowered-content--small">
            <img
              src={lofi_lesson_demo}
              alt="Low fidelity wireframe of CDS Learning Hub's lesson demo page"
              id="lofi-lesson-demo"
            />
          </div>
          <div className="content--4 lowered-content--small">
            <img
              src={lofi_lesson_practice}
              alt="Low fidelity wireframe of CDS Learning Hub's lesson practice page"
              id="lofi-lesson-practice"
            />
          </div>
        </div>
      </div>
      <section>
        <h3>Identify the User</h3>
        <p>
          We began the design process by identifying the target user by
          brainstorming as a team and clarifying any points of confusion we had
          with the stakeholders.
        </p>
        <p className="my-role-in-project">
          As one of the developers on the team, I provided information about the
          different kinds of developer users that might interact with the
          Citizens Design System.
        </p>
        <p>We created the protopersona: Java Developer Jackie</p>
        <div className="content-grid">
          <div className="content-row">
            <div
              className="content--3 lowered-content--small"
              id="cbds-project_protopersona-icon"
            >
              <img src={developer_persona_icon} alt="" />
            </div>
            <div className="content--9 lowered-content--small">
              <h4>Experience</h4>
              <ul>
                <li>
                  little experience or unfamiliar with front end development
                </li>
                <li> unfamiliar with design vocabulary or jargon</li>
                <li> backend or full stack developer</li>
              </ul>
            </div>
          </div>
          <div className="content-row">
            <div className="content--6 lowered-content--small">
              <h4>Pain-points</h4>
              <ul>
                <li>annoyed they can't quickly locate topics at a glance</li>
                <li> spends too much time sifting through search results </li>
                <li> pressed for time on a new project</li>
              </ul>
            </div>
            <div className="content--6 lowered-content--small ">
              <h4>Preferences</h4>
              <ul>
                <li>
                  comfortable with code snippets embedded in contextual examples
                </li>
                <li>
                  likes to use google and stack overflow to get direct answers
                  to coding questions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3>Comparative Analysis</h3>
        <p>
          Our designers worked on a comparative analysis of other design
          systems' approach to learning, including but not limited to:
        </p>

        <div className="content-grid">
          <div className="content-row">
            <div className="content--4 lowered-content--small">
              <h4>Google Material Design</h4>
              <img
                src={google_material_design_logo}
                alt="Google Material Design Logo"
                id="google-material-design-logo"
              />
            </div>
            <div className="content--4 lowered-content--small">
              <h4>Shopify Polaris</h4>
              <img
                src={shopify_polaris_logo}
                alt="Shopify Polaris Logo"
                id="shopify-polaris-logo"
              />
            </div>
            <div className="content--4 lowered-content--small">
              <h4>Microsoft Fluent</h4>
              <img
                src={microsoft_fluent_logo}
                alt="Microsoft Fluent Logo"
                id="microsoft-fluent-logo"
              />
            </div>
          </div>
        </div>

        <p className="my-role-in-project">
          While the findings from this initial comparison influenced the
          wireframes and userflows significantly, we developers called upon our
          experience to recommend sites that utilize developer learning spaces
          to do further comparative analysis on.
        </p>

        <div className="content-grid">
          <div className="content-row">
            <div className="content--4 lowered-content--small">
              <h4>Unity Learn</h4>
              <img
                src={unity_learn_logo}
                alt="Unity Learn Logo"
                id="unity-learn-logo"
              />
            </div>
            <div className="content--4 lowered-content--small">
              <h4>W3 Schools</h4>
              <img
                src={w3_schools_logo}
                alt="W3 Schools Logo"
                id="w3-schools-logo"
              />
            </div>
            <div className="content--4 lowered-content--small">
              <h4>Code Academy</h4>
              <img
                src={code_academy_logo}
                alt="Code Academy Logo"
                id="code-academy-logo"
              />
            </div>
          </div>
        </div>
        <p className="my-role-in-project">
          My contributions as a developer made the process more effecient and
          productive, because designers gained critical insights from analyzing
          developer learning spaces.
        </p>

        <div className="content-grid">
          <div className="content-row ">
            <div className="content--10 lowered-content--small">
              <h4>Interactive Code, Output, and Responses</h4>
              <img
                src={codecademy_interactive}
                alt="codecademy interactive code window"
                id="w3schools-fork-view"
              />
              <p>
                A user can code in an interactive window. A 'run' button runs
                the code and the corresponding output is displayed. Various
                responses like success or failure messages will appear
                accordingly.
              </p>
            </div>
            <div className="content--2" id="right-down-arrow-holder">
              <img
                src={rightDownArrowGreen}
                alt=""
                id="right-down-arrow-green"
              />
            </div>
          </div>
          <div className="content-row">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small">
              <h4>Impact</h4>
              <img
                src={lofi_practice_problem_default}
                alt="low fidelity wireframe of the default screen for a practice problem"
                id="lofi-practice-problem-default"
              />
              <img
                src={lofi_practice_problem_success}
                alt="low fidelity wireframe of the success screen for a practice problem"
                id="lofi-practice-problem-success"
              />
              <p>
                Our designer's initial lofi wireframes contain an interactive
                code window, an output area, and a button (labeled "Fix Error")
                that leads to responses (labeled "Success!").
              </p>
            </div>
          </div>
          <div className="content-row margin-top-1em">
            <div className="content--10 lowered-content--small">
              <h4> Fork View</h4>
              <img src={w3schools_fork_view} alt="" id="w3schools-fork-view" />
              <p>
                Developer learning often involves a component where the coding
                workspace and the output of their code are side by side. This
                allows developers to check what their code is doing without
                having to scroll, toggle, or write commands.
              </p>
            </div>
            <div className="content--2" id="right-down-arrow-holder">
              <img
                src={rightDownArrowGreen}
                alt=""
                id="right-down-arrow-green"
              />
            </div>
          </div>
          <div className="content-row">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small">
              <h4>Impact</h4>
              <img
                src={hifi_1_practice_problem_default}
                alt=""
                id="hifi-1-practice-problem-default"
              />
            </div>
          </div>
          <div className="content-row">
            <div className="content--10 lowered-content--small">
              <h4> Step by Step Learning Plan</h4>
              <img
                src={unity_learn_step_by_step}
                alt=""
                id="unity-learn-step-by-step"
              />
            </div>
            <div className="content--2" id="right-down-arrow-holder">
              <img
                src={rightDownArrowGreen}
                alt=""
                id="right-down-arrow-green"
              />
            </div>
          </div>
          <div className="content-row">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small">
              wires
              {/* TODO: add image */}
              userflow
              {/* TODO: add userflow */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3>Design Thinking Session: Crazy 8s</h3>
        <p>
          Our team used the Crazy 8s activity to create 8 ideas in 8 minutes to
          solve a problem.
        </p>
        <p>
          This collaborative high-level ideation session also influneced the
          initial wireframes and userflow.
        </p>

        <p className="my-role-in-project">
          As part of the session, I created 6 ideas of my own.
        </p>
        <div className="content-grid">
          <div className="content-row">
            <div className="content--12 lowered-content--small">
              <img
                src={design_thinking_my_sketches}
                alt="My 6 ideas from the design thinking session. One suggests 
                mentioning that there's a demo at the top of the page so that 
                developers that want to jump to it at the bottom can. Another 
                suggests designing the page according to the mental model of a 
                workbook, the kind from school where icons are used on the side 
                to emphasize a new or important concept. Another considers 
                whether to have multiple pages dedicated to teaching one 
                component, or have quick links that auto-scrolls the user to 
                the right part of a singular page. Yet another suggests 
                considering the kitchen mental model, where we design the page 
                similar to a recipe or cookbook. Another idea is to design the 
                component overview to look like a database or excel sheet, 
                which might be a design that backend developers are familiar 
                with. The remaining ideas are undiscernable or trivial."
                id="design_thinking_my_sketches"
              />
            </div>
          </div>
        </div>
        <p className="my-role-in-project">
          One of my ideas that the team collectively liked and voted for was to
          expedite the process for developers to get to interactive code
          components (ex. sandbox).
        </p>

        <div className="content-grid">
          <div className="content-row">
            <div className="content--10 lowered-content--small">
              <img
                src={design_thinking_fav}
                alt="This is the idea that mentions that there's a demo at the 
                top of the page so that developers that want to jump to it at 
                the bottom can."
                id="design_thinking_fav"
              />
            </div>
            <div className="content--2" id="right-down-arrow-holder">
              <img
                src={rightDownArrowGreen}
                alt=""
                id="right-down-arrow-green"
              />
            </div>
          </div>
          <div className="content-row">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small">
              wires userflow
              {/* TODO: addd wires and userflow */}
              "in the wires and userflow, you can skip directly to practice and
              demo supbages."
            </div>
          </div>
        </div>
      </section>
      <div className="h2-holder">
        <h2> Final, High Fidelity Wireframes</h2>
      </div>
      {/* TODO: add photo of all of them */}
      How did we go from low fidelity wireframes and a userflow, to the high
      fidelity designs?
      <section>
        <h3> Usability Test</h3>
        <p>
          Our UX Researcher did a usability test to verify that the low fidelity
          design was easy to navigate and there was minimal confusion
          surrounding the flow of lessions.
        </p>
        <p className="my-role-in-project">
          I was a pilot study participant for this usability test because I fit
          part part of the target user description.
        </p>
        <p className="my-role-in-project">
          My involvement in the design process targetted these usability test
          takeaways regarding the practice subpage of a lesson:
        </p>
        <div className="content">
          <div className="content-row">
            <div className="content--12 lowered-content--small">
              <ul>
                <li>
                  practice subpage of the lesson needs to be more familiar and
                  effective for developers
                </li>
                <li>
                  users were confused about the order of elements on the
                  practice page
                </li>
                <li>
                  need to adjust language and layout of code window and output
                  elements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3> Changes to Practice Problem Design</h3>
        <p className="my-role-in-project">
          The portion of the userflow that I was crucially involved with was the
          sandbox portion of a lesson. This is the portion that a developer
          would use to practice coding in-site and get feedback in live-time.
        </p>
        <div className="content-grid">
          <div className="content-row">
            <div className="content--6 lowered-content--small">
              TODO: place image here of userflow
            </div>
            <div className="content--6 lowered-content--small">
              TODO: place image here of wireframe
            </div>
          </div>
        </div>
        <p className="my-role-in-project">
          The designer reached out to me for support in this particular part of
          the site because of my experience using developmer learning interfaces
          I provided my initial sketches on the UI and interactivity of a
          practice problem
        </p>
        <div className="content-grid">
          <div className="content-row">
            <div className="content--12 lowered-content--small">
              TODO: insert image/s here of sketches
            </div>
          </div>
        </div>

        <p>
          From this, the designer created the first iteration of the high
          fidelity design.
        </p>
        <div className="content-grid">
          <div className="content-row">
            <div className="content--12 lowered-content--small">
              TODO: insert image/s here of Ethan's high fidelity ver 1
            </div>
          </div>
        </div>

        <p className="my-role-in-project">
          Later, while the other developer and I coded the site, we realized
          that this design was not very responsive to various screen sizes
          because there were too many elements stacked horizontally. After
          discussing with the designer in a collaborative session, we agreed on
          a new design.
        </p>
        <div className="content-grid">
          <div className="content-row">
            <div className="content--12 lowered-content--small">
              TODO: insert image/s here of Ethan's high fidelity ver 2
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3> Determining Practice Page Flow</h3>
        <p>
          The stakeholder requested that we make an example lesson on how to
          develop an accessible form.
        </p>
        <p>
          As designers and developers, we thought it would make the most sense
          to have a developer user 'build up' a form element by element in the
          practice portion of the lesson. We had to decide whether to TODO: fix
          the text here...
        </p>
        <p className="my-role-in-project">
          I advocated for all of the practice problems to be on one scannable
          page because many developers like to scan and would not prefer to
          click 'next' multiple times to reach an answer to their specific
          problem.
        </p>

        <div className="content-grid">
          <div className="content-row">
            <div className="content--12 lowered-content--small">
              TODO: insert image/s here of practice problems
            </div>
          </div>
        </div>
      </section>
      <div className="h2-holder">
        <h2> Development: A Collaborative Process</h2>
      </div>
      <p>
        Here I've provided the TODO:[developed prototype link] and TODO:
        [development repository link]
      </p>
      <p> How did we bring the high fidelity designs to life?</p>
      <section>
        <h3> Using Citizens Design System conventions</h3>
        <p>
          This was a little inception-like because we were using existing code
          for the citizens design system, while developing a new part of the
          citizens design system.
        </p>
        <p className="my-role-in-project">
          Through this process, I gained experience in using large design
          systems and other developers' code a part of my workflow.
        </p>
        <div className="content-grid">
          <div className="content-row">
            <div className="content--10 lowered-content--small">
              TODO: insert image/s here of code of layout grid
            </div>
            <div className="content--2" id="right-down-arrow-holder">
              <img
                src={rightDownArrowGreen}
                alt=""
                id="right-down-arrow-green"
              />
            </div>
          </div>
          <div className="content-row">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small">
              TODO: insert image/s here of resulting layout grid
            </div>
          </div>
          <div className="content-row">
            <div className="content--10 lowered-content--small">
              TODO: insert image/s here of code of design tokens (colors)
            </div>
            <div className="content--2" id="right-down-arrow-holder">
              <img
                src={rightDownArrowGreen}
                alt=""
                id="right-down-arrow-green"
              />
            </div>
          </div>
          <div className="content-row">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small">
              TODO: insert image/s here of resulting design tokens (colors)
            </div>
          </div>
        </div>
        <p className="my-role-in-project">
          I also became accustomed to SASS practices like nesting and extending
          that tightened my code and made my workflow more efficient.
        </p>
      </section>
      <section>
        <h3> Interactivity</h3>
        <p className="my-role-in-project">
          useState allowed me to let React do the work of re-rendering the page
          everytime I changed the appropriate state-variable
        </p>
        <div className="content-grid">
          <div className="content-row">
            <div className="content--10 lowered-content--small">
              TODO: insert image/s here of code of codeMirror TODO: insert
              image/s here of code of showHint caption: for color and message
              response when a user interacts with the button toolkit.
            </div>
            <div className="content--2" id="right-down-arrow-holder">
              <img
                src={rightDownArrowGreen}
                alt=""
                id="right-down-arrow-green"
              />
            </div>
          </div>
          <div className="content-row">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small">
              TODO: insert image/s here of resulting init state TODO: insert
              image/s here of resulting hint state
            </div>
          </div>
        </div>

        <p className="my-role-in-project">
          useEffect allowed me to let React do the work of setting up aspects of
          the page when it is initially rendered/loaded.
        </p>
        <div className="content-grid">
          <div className="content-row">
            <div className="content--10 lowered-content--small">
              TODO: insert image/s here of useEffect code pic srcDoc
            </div>
            <div className="content--2" id="right-down-arrow-holder">
              <img
                src={rightDownArrowGreen}
                alt=""
                id="right-down-arrow-green"
              />
            </div>
          </div>
          <div className="content-row">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small">
              TODO: insert image/s here of init screen pic caption: Note that as
              the user types their answer, we update a React state,{" "}
              <code>userscode</code>, and React will re-render the page for us
              anytime <code>userscode</code> is changed.
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3> Security </h3>
        <p className="my-role-in-project">
          Security became a point of consideration because the code I had
          initially written directly placed the user's inputted code into the
          website's code. The lack of checks for malicious code worried me, so
          the other developer and I collaborated to enhance the security.
        </p>
        <p>
          Our final solution uses an <code>iFrame</code>, which is a component
          that allows us to house embeds separate from the rest of a website's
          code, because <code>iFrames</code> allow scripts to be contained to
          only the 'frame'.
        </p>
        <div className="content-grid">
          <div className="content-row">
            <div className="content--10 lowered-content--small">
              TODO: insert image/s here of iFrame pic
            </div>
            <div className="content--2" id="right-down-arrow-holder">
              <img
                src={rightDownArrowGreen}
                alt=""
                id="right-down-arrow-green"
              />
            </div>
          </div>
          <div className="content-row">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small">
              TODO: insert image/s here of resulting frame TODO: insert image/s
              here of security exploit1 TODO: insert image/s here of security
              exploit2
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3>Code Workspace Aesthetics</h3>
        <p className="my-role-in-project">
          The visual aesthetics of the coding window became a point of
          consideration because I was initially coding within the frameworks
          provided by the existing Citizens design system. However, there were
          no existing frameworks for code color, indentation, auto-fill, and
          other aspects that many developers expect in a coding workspace. The
          other designer and I again collaborated to find a better solution.
        </p>
        <p>
          Our final solution uses <code>CodeMirror</code>, which is an external
          Reach component that allows for syntax highlighting, auto-enclosing
          brackets, and some shortcuts that we wanted to ensure a smooth coding
          experience.
        </p>
        <div className="content-grid">
          <div className="content-row">
            <div className="content--10 lowered-content--small">
              TODO: insert image/s here of codemirror code
            </div>
            <div className="content--2" id="right-down-arrow-holder">
              <img
                src={rightDownArrowGreen}
                alt=""
                id="right-down-arrow-green"
              />
            </div>
          </div>
          <div className="content-row">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small">
              TODO: insert image/s here of resulting code space TODO: insert
              image/s here of security exploits caption: we checked to make sure
              that any attempts to access and/or edit the website's parent code
              from user inputs to the CodeMirror were blocked.
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3>Tools for Collab: Github</h3>
        <p>
          Github was a crucial tool that the other developer and I used to
          minimize logistical roadblocks in both of our workflows; track the
          development of our project; and work collaboratively
        </p>
        <p className="my-role-in-project">
          We kept certain versions of our project
          <b> static on different branches</b>, to have a snapshot view of where
          our project was at various <b>benchmarks</b>. We also made sure to use
          <b className="emph"> consistent naming standards</b> on branches to
          better track them.
        </p>
        <div className="content-grid">
          <div className="content-row">
            <div className="content--12 lowered-content--small">
              TODO: insert image of branch versions
            </div>
          </div>
        </div>
        <p className="my-role-in-project">
          We worked on separate pages whenever possible, and communicated to
          prevent merge conflicts. When there were merge conflicts,
          communication was also key to resolve them without losing important
          work on either end.
        </p>
      </section>
      <section>
        <h3>Looking Ahead</h3>
        <p>
          Finally, the other developer and I left some notes for future
          developers who might use the work we've done to deploy the learning
          center.
        </p>
        <div className="content-grid">
          <div className="content-row">
            <div className="content--12 lowered-content--small">
              <ul>
                <li>
                  Consider responsivity of code to smaller screen sizes, for the
                  Practice Page
                </li>
                <li>
                  Create a stronger success response when a user finishes an
                  entire lesson
                </li>
                <li>
                  Create an accessible tabs component for keyboard navigation of
                  subpage tabs
                </li>
                <li>Certain MDX files may require neater formatting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
