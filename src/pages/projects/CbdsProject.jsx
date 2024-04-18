import ProjectHook from "../../components/ProjectHook";
import "./CbdsProject.scss";

import userflow_full from "../../images/CbdsProject/userflow-full.jpg";
import lofi_cds_home from "../../images/CbdsProject/lofi-cds-home.jpg";
import lofi_get_started from "../../images/CbdsProject/lofi-get-started.jpg";
import lofi_dev_home from "../../images/CbdsProject/lofi-dev-home.jpg";
import lofi_lesson_overview from "../../images/CbdsProject/lofi-lesson-overview.jpg";
import lofi_lesson_demo from "../../images/CbdsProject/lofi-lesson-demo.jpg";
import lofi_lesson_practice from "../../images/CbdsProject/lofi-lesson-practice.jpg";

import developer_persona_icon from "../../images/CbdsProject/developer-persona.png";

//imports for comparative analysis section
import googleMaterialDesignLogo from "../../images/CbdsProject/kindpng_1010609.png";
import shopifyPolarisLogo from "../../images/CbdsProject/1_-8mqgDwriZNBxKAazV-rjg.png";
import microsoftFluentLogo from "../../images/CbdsProject/microsoft_fluent.png";
import w3SchoolsLogo from "../../images/CbdsProject/w3schools-2048.png";
import codeAcademyLogo from "../../images/CbdsProject/codecademy-logo.png";
import unityLearnLogo from "../../images/CbdsProject/UnityLogo-690x258.png";
import codecademyInteractive from "../../images/CbdsProject/codecademy-interactive.jpg";
import lofiPracticeProblemDefault from "../../images/CbdsProject/lofi-practice-problem-default.jpg";
import lofiPracticeProblemSuccess from "../../images/CbdsProject/lofi-practice-problem-success.jpg";
import w3schoolsForkView from "../../images/CbdsProject/w3schools-fork-view.jpg";
import hifi1PracticeProblemDefault from "../../images/CbdsProject/hifi-1-practice-problem-default.jpg";
import unityLearnStepByStep from "../../images/CbdsProject/unity-learn-step-by-step.jpg";
import lofiContentOutline from "../../images/CbdsProject/lofi-content-outline.jpg";

//design elements
import rightDownArrowGreen from "../../images/right-down-arrow-green.png";
import downRightArrowGreen from "../../images/down-right-arrow-green.png"; //<a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Freepik - Flaticon</a>

//design thinking
import design_thinking_my_sketches from "../../images/CbdsProject/design-thinking-my-sketches.jpg";
import design_thinking_fav from "../../images/CbdsProject/design-thinking-fav.jpg";
import LofiSkipToPractice from "../../images/CbdsProject/lofi-skip-to-practice.jpg";

//Final HiFi Wireframes
import HifiHomePage from "../../images/CbdsProject/hifi-home-page.jpg";
import HifiLearnDesignPage from "../../images/CbdsProject/hifi-learn-design-page.jpg";
import HifiLearnDevelopmentPage from "../../images/CbdsProject/hifi-learn-development-page.jpg";
import HifiLessonOverviewPage from "../../images/CbdsProject/hifi-lesson-overview-page.jpg";
import HifiLessonTutorialPage from "../../images/CbdsProject/hifi-lesson-tutorial-page.jpg";
import HifiLessonTestPage from "../../images/CbdsProject/hifi-lesson-test-page.jpg";
//changes to practice problem design
import UserflowSandbox from "../../images/CbdsProject/userflow-sandbox.jpg";
import SketchPracticeProblem1 from "../../images/CbdsProject/sketch-practice-problem-1.jpg";
import SketchPracticeProblem2 from "../../images/CbdsProject/sketch-practice-problem-2.jpg";
import HiFi1PracticeProblem from "../../images/CbdsProject/hifi-1-practice-problem.jpg";
import HiFi1PracticeProblemHint from "../../images/CbdsProject/hifi-1-practice-problem-hint.jpg";
import HiFi1PracticeProblemError from "../../images/CbdsProject/hifi-1-practice-problem-error.jpg";
import HiFi1PracticeProblemReveal from "../../images/CbdsProject/hifi-1-practice-problem-reveal.jpg";
import HiFi2PracticeProblem from "../../images/CbdsProject/hifi-2-practice-problem.jpg";
//determining practice page flow
import HiFi2Question1Correct from "../../images/CbdsProject/hifi-2-question-1-correct.jpg";
import HiFi2Question2Correct from "../../images/CbdsProject/hifi-2-question-2-correct.jpg";
import HiFi2Question3Correct from "../../images/CbdsProject/hifi-2-question-3-correct.jpg";

//imports for "development" section
import DevLayout from "../../images/CbdsProject/dev-layout.jpg";
import DevLayoutCode from "../../images/CbdsProject/dev-layout-code.jpg";
import DevDesignTokenCode from "../../images/CbdsProject/dev-design-token-code.jpg";
import DevDesignTokenBlue from "../../images/CbdsProject/dev-design-token-blue.jpg";
import DevDesignTokenBlack from "../../images/CbdsProject/dev-design-token-black.jpg";

import DevInteractivityUsestate from "../../images/CbdsProject/dev-interactivity-usestate.jpg";
import DevInteractivityUseEffect from "../../images/CbdsProject/dev-interactivity-useEffect.jpg";
import DevInteractivityShowhintCode from "../../images/CbdsProject/dev-interactivity-showhint-code.jpg";
import DevInteractivityInitPreview from "../../images/CbdsProject/dev-interactivity-init-preview.jpg";

import DevIframe from "../../images/CbdsProject/dev-iframe.jpg";
import DevIframeCodeblock from "../../images/CbdsProject/dev-iframe-codeblock.jpg";
import DevIframeSecurity from "../../images/CbdsProject/dev-iframe-security.jpg";
import DevCodeMirror from "../../images/CbdsProject/dev-codemirror.jpg";
import DevCodeMirrorCodeblock from "../../images/CbdsProject/dev-codemirror-codeblock.jpg";
import DevCodeMirrorUnstyled from "../../images/CbdsProject/dev-codemirror-unstyled.jpg";

export default function CbdsProject(props) {
  return (
    <main className="project">
      <h1>Citizens Design System Learning Hub</h1>
      <h2>At a Glance</h2>
      <section className="at-a-glance">
        <div className="content-grid">
          <div className="content-row">
            <div className="content--6">
              <h3>Stakeholder</h3>
              Citizens Design System
            </div>
            <div className="content--6">
              <h3>Duration</h3>
              Jun 2023 - Aug 2023 (10 weeks, 40 hours/week)
            </div>
          </div>
          <div className="content-row">
            <div className="content--6">
              <h3>Industry</h3>
              Banking, Finance
            </div>
            <div className="content--6">
              <h3>Role</h3>
              User Experience Engineer/Developer
            </div>
          </div>
          <div className="content-row">
            <div className="content--12">
              <h3>Project Summary</h3>
              <p>
                I worked with a team of designers, researchers, and engineers to
                collaboratively create an engaging learning experience for new
                and unfamiliar users interacting with the Citizens Design
                System.
              </p>

              <p>
                Our final product was a {/*TODO: add final prototype link */}
                <a href="">CDS Learning Hub Prototype Website</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="h2-holder">
        <h2>Userflow & Low Fidelity Wireframes</h2>
      </div>
      <p>
        {" "}
        How did I contribute in the early stages of userflow and lofi wireframe
        development? Through collaboration with designers and researchers in
        proto-persona creation, comparative analysis, and design thinking
        sessions!{" "}
      </p>
      {/* TODO: make the images expandable somehow... */}
      <div className="content-grid">
        <div className="content-row">
          <div className="content--12">
            <img
              src={userflow_full}
              alt="Full userflow of Citizens Design System Learning Hub"
              id="userflow-full"
            />
          </div>
        </div>
      </div>
      <div className="content-grid">
        <div className="content-row">
          <div className="content--4">
            <img
              src={lofi_cds_home}
              alt="Low fidelity wireframe of Citizens Design System (CDS) Home page"
              id="lofi-cds-home"
            />
          </div>
          <div className="content--4">
            <img
              src={lofi_get_started}
              alt="Low fidelity wireframe of CDS Learning Hub's Getting Started page"
              id="lofi-get-started"
            />
          </div>
          <div className="content--4">
            <img
              src={lofi_dev_home}
              alt="Low fidelity wireframe of CDS Learning Hub's Developer Home page"
              id="lofi-dev-home"
            />
          </div>
        </div>
        <div className="content-row">
          <div className="content--4">
            <img
              src={lofi_lesson_overview}
              alt="Low fidelity wireframe of CDS Learning Hub's lesson overview page"
              id="lofi-lesson-overview"
            />
          </div>
          <div className="content--4">
            <img
              src={lofi_lesson_demo}
              alt="Low fidelity wireframe of CDS Learning Hub's lesson demo page"
              id="lofi-lesson-demo"
            />
          </div>
          <div className="content--4">
            <img
              src={lofi_lesson_practice}
              alt="Low fidelity wireframe of CDS Learning Hub's lesson practice page"
              id="lofi-lesson-practice"
            />
          </div>
        </div>
      </div>
      <section>
        <h3>Identifying the User</h3>
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
        <div className="content-grid lowered-content--small">
          <div className="content-row">
            <div className="content--6" id="cbds-project_protopersona-icon">
              <img src={developer_persona_icon} alt="" />
            </div>
            <div className="content--6">
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
            <div className="content--6">
              <h4>Pain-points</h4>
              <ul>
                <li>annoyed they can't quickly locate topics at a glance</li>
                <li> spends too much time sifting through search results </li>
                <li> pressed for time on a new project</li>
              </ul>
            </div>
            <div className="content--6">
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

        <div className="content-grid lowered-content--small">
          <div className="content-row">
            <div className="content--4">
              <h4>Google Material Design</h4>
              <img
                src={googleMaterialDesignLogo}
                alt="Google Material Design Logo"
                id="google-material-design-logo"
              />
            </div>
            <div className="content--4">
              <h4>Shopify Polaris</h4>
              <img
                src={shopifyPolarisLogo}
                alt="Shopify Polaris Logo"
                id="shopify-polaris-logo"
              />
            </div>
            <div className="content--4">
              <h4>Microsoft Fluent</h4>
              <img
                src={microsoftFluentLogo}
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

        <div className="content-grid lowered-content--small">
          <div
            className="content-row"
            id="comparative-analysis-developer-codespace"
          >
            <div className="content--4">
              <h4>Unity Learn</h4>
              <img
                src={unityLearnLogo}
                alt="Unity Learn Logo"
                id="unity-learn-logo"
              />
            </div>
            <div className="content--4">
              <h4>W3 Schools</h4>
              <img
                src={w3SchoolsLogo}
                alt="W3 Schools Logo"
                id="w3-schools-logo"
              />
            </div>
            <div className="content--4">
              <h4>Code Academy</h4>
              <img
                src={codeAcademyLogo}
                alt="Code Academy Logo"
                id="code-academy-logo"
              />
            </div>
          </div>
        </div>
        <p className="my-role-in-project">
          My contributions as a developer made the process more efficient and
          productive, because designers gained critical insights from analyzing
          developer learning spaces.
        </p>

        <div className="content-grid">
          <div className="content-row ">
            <div className="content--10 lowered-content--small">
              <h4>Interactive Code, Output, and Responses</h4>
              <img
                src={codecademyInteractive}
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
          <div className="content-row margin-top--24px">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small padding-top--48px">
              <img
                src={lofiPracticeProblemDefault}
                alt="low fidelity wireframe of the default screen for a practice problem"
                id="lofi-practice-problem-default"
              />
              <img
                src={lofiPracticeProblemSuccess}
                alt="low fidelity wireframe of the success screen for a practice problem"
                id="lofi-practice-problem-success"
              />
              <p>
                Our designer's initial lofi wireframes contain an interactive
                code window (the code block below "Fix the Error" heading), an
                output/preview area (below "Preview" heading), and a button
                (labeled "Fix Error") that leads to responses (labeled
                "Success!").
              </p>
            </div>
          </div>
          <div className="content-row margin-top--48px">
            <div className="content--10 lowered-content--small">
              <h4> Fork View</h4>
              <img
                src={w3schoolsForkView}
                alt="w3schools developer learning space with fork view. Code space and output preview are side by side."
                id="w3schools-fork-view"
              />
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
          <div className="content-row margin-top--24px">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small padding-top--48px">
              <img
                src={hifi1PracticeProblemDefault}
                alt="high fidelity design of practice problem, where coding space and output preview are side by side in a fork view."
                id="hifi-1-practice-problem-default"
              />
              <p>
                The first high fidelity design was influenced by the
                side-by-side nature of many coding practice interfaces.
              </p>
            </div>
          </div>
          <div className="content-row margin-top--48px">
            <div className="content--10 lowered-content--small">
              <h4> Step by Step Learning Plan</h4>
              <img
                src={unityLearnStepByStep}
                alt="Content outline for a lesson in Unity's developer learning platform."
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
          <div className="content-row  margin-top--24px">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small padding-top--48px">
              <img
                src={lofiContentOutline}
                alt="Digital Foundations content outline, with cards for Accessibility, Design Tokens, Utilities, and Color."
              />
              <p>
                For each category (such as Digital Foundations), there is an
                outline of content to learn within that category.
              </p>
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
        <div className="content-grid lowered-content--small">
          <div className="content-row">
            <div className="content--12 padding-top--24px">
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
            <div className="content--10 lowered-content--small  padding-top--24px">
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
          <div className="content-row margin-top--24px">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small  padding-top--48px">
              <img
                src={LofiSkipToPractice}
                alt="low fidelity design of top-navigation bar for a lesson page."
              />
              <p>You can skip directly to practice and demo supbages.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="h2-holder">
        <h2> Final, High Fidelity Wireframes</h2>
      </div>
      <div className="content-grid">
        <div className="content-row">
          <div className="content--4">
            <img
              src={HifiHomePage}
              alt="high fidelity design of citizens design system home page"
            />
          </div>
          <div className="content--4">
            <img
              src={HifiLearnDesignPage}
              alt="high fidelity design of cds learning design page"
            />
          </div>
          <div className="content--4">
            <img
              src={HifiLearnDevelopmentPage}
              alt="high fidelity design of cds learning development page"
            />
          </div>
        </div>
        <div className="content-row">
          <div className="content--4">
            <img
              src={HifiLessonOverviewPage}
              alt="high fidelity design of cds lesson overview page for lesson on accessible forms"
            />
          </div>
          <div className="content--4">
            <img
              src={HifiLessonTutorialPage}
              alt="high fidelity design of cds lesson tutorial page for lesson on accessible forms"
            />
          </div>
          <div className="content--4">
            <img
              src={HifiLessonTestPage}
              alt="high fidelity design of cds lesson test page for lesson on accessible forms"
            />
          </div>
        </div>
      </div>
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
            <div className="content--12 lowered-content--small">
              <img
                src={UserflowSandbox}
                alt="portion of the userflow containing a sandbox."
              />
            </div>
          </div>
        </div>
        <p className="my-role-in-project">
          The designer reached out to me for support in this particular part of
          the site because of my experience using developer learning interfaces.
          I provided my initial sketches on the UI and interactivity of a
          practice problem:
        </p>
        <div className="content-grid lowered-content--small">
          <div className="content-row">
            <div className="content--12">
              <img
                src={SketchPracticeProblem1}
                alt="sketch of frontend and backend parts of live-time coding practice interface"
              />
            </div>
          </div>
          <div className="content-row">
            <div className="content--12">
              <img
                src={SketchPracticeProblem2}
                alt="sketch of how UI changes as user interacts with different parts of coding practice interface"
              />
            </div>
          </div>
        </div>

        <p>
          From this, the designer created the first iteration of the high
          fidelity design.
        </p>
        <div className="content-grid lowered-content--small">
          <div className="content-row">
            <div className="content--12 ">
              <img
                src={HiFi1PracticeProblem}
                alt="high fidelity design of practice problem, including text instructions and coding practice interface"
              />
            </div>
          </div>
          <div className="content-row">
            <div className="content--12 ">
              <img
                src={HiFi1PracticeProblemError}
                alt="high fidelity design of coding practice interface, when user has submitted incorrect code"
              />
            </div>
          </div>
          <div className="content-row">
            <div className="content--12 ">
              <img
                src={HiFi1PracticeProblemHint}
                alt="high fidelity design of coding practice interface, when user has selected the hint option"
              />
            </div>
          </div>
          <div className="content-row">
            <div className="content--12">
              <img
                src={HiFi1PracticeProblemReveal}
                alt="high fidelity design of coding practice interface, when user has selected the reveal option"
              />
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
        <div className="content-grid lowered-content--small">
          <div className="content-row">
            <div className="content--12">
              <img
                src={HiFi2PracticeProblem}
                alt="high fidelity design of practice problem, including responsive text instructions and coding practice interface."
              />
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
          As designers and developers, we decided that the developer user 'build
          up' a form element by element in the practice portion of the lesson.
          We needed to decide whether each part of this building process would
          be shown on one page, or if the user would be shown one part at a
          time.
        </p>
        <p className="my-role-in-project">
          I advocated for all parts of the practice to be on one scannable page
          because many developers like to scan (or skip to the answer) and would
          not prefer to click 'next' multiple times to reach an answer to their
          specific problem.
        </p>

        <div className="content-grid lowered-content--small">
          <div className="content-row">
            <div className="content--12">
              <img
                src={HiFi2Question1Correct}
                alt="responsive high fidelity design of question 1: create a text input"
              />
            </div>
            <div className="content--12">
              <img
                src={HiFi2Question2Correct}
                alt="responsive high fidelity design of question 2: radio selector"
              />
            </div>
            <div className="content--12">
              <img
                src={HiFi2Question3Correct}
                alt="responsive high fidelity design of question 3: submit button"
              />
            </div>
          </div>
        </div>

        <p>
          Something we discussed was having the user's code autofill into the
          next portion of the practice problem. Though we did not have enough
          time to implement this.
        </p>
      </section>
      <div className="h2-holder">
        <h2> Development: A Collaborative Process</h2>
      </div>
      <p>
        Feel free to explore the TODO:[developed prototype link] and TODO:
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
              <h4>Citizens Layout Grid</h4>
              <img
                src={DevLayoutCode}
                alt="code snippet where citizens design system layout grid is used"
              />
              <p>
                The citizens design system layout grid is like a framework to
                create components that are organized in a grid manner.
                Customization is standardized by using predefined parameters
                like <code>cbds-u-marginBottom__4x</code>.
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
          <div className="content-row margin-top--24px">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small padding-top--48px">
              <img
                src={DevLayout}
                alt="practice problem with underlying layout grid outlined in dashed lines"
              />
            </div>
          </div>
          <div className="content-row margin-top--48px">
            <div className="content--10 lowered-content--small">
              <h4>Citizens Design Tokens</h4>
              <img
                src={DevDesignTokenCode}
                alt="code snippet where citizens design tokens for design system colors are used"
              />
              <p>
                Design tokens are scss variables that track colors, fonts, and
                other design elements that are standardized across the site.
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
          <div className="content-row margin-top--24px">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small padding-top--48px">
              <img
                src={DevDesignTokenBlack}
                alt="user's coding window with design token black border and text"
              />
              <img
                src={DevDesignTokenBlue}
                alt="user's coding window with design token blue border and text"
              />
            </div>
          </div>
        </div>
        <p className="my-role-in-project">
          I also became accustomed to SASS practices like nesting and extending
          that tightened my code and made my workflow more efficient.
        </p>
      </section>
      <section>
        <h3> Interactivity </h3>
        <p>
          <code>useState</code> is a React hook that re-renders the page
          everytime the appropriate state-variable is changed.
        </p>
        <p className="my-role-in-project">
          One way I used <code>useState</code> was for rendering different text
          and color responses (for example, red border and "warning: ")
        </p>
        <div className="content-grid">
          <div className="content-row">
            <div className="content--10 lowered-content--small">
              <h4>React useState</h4>
              <img
                src={DevInteractivityUsestate}
                alt="code snippet where React usestate is used to set up a variable codeMirrorData"
              />
              <img
                src={DevInteractivityShowhintCode}
                alt="code snippet where React usestate variable codeMirrorData is being updated when a hint is shown"
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
          <div className="content-row margin-top--24px">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small padding-top--48px">
              <img
                src={DevDesignTokenBlack}
                alt="user's coding window with codeMirrorData set to visual indicators of neutral/default"
              />
              <img
                src={DevDesignTokenBlue}
                alt="user's coding window with codeMirrorData set to visual indicators of hint"
              />
            </div>
          </div>
        </div>
        <p className="my-role-in-project">
          <code>useEffect</code> allowed me to let React do the work of setting
          up aspects of the page when it is initially rendered/loaded.
        </p>
        <div className="content-grid">
          <div className="content-row">
            <div className="content--10 lowered-content--small">
              <h4>React useEffect</h4>
              <img
                src={DevInteractivityUseEffect}
                alt="code block using React useEffect hook"
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
          <div className="content-row margin-top--24px">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small padding-top--48px">
              <img
                src={DevInteractivityInitPreview}
                alt="initial preview window, as it appears when website is initially rendered"
              />
              Note that as the user types their answer, we update a React state,{" "}
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
              <h4>iFrame component</h4>
              <img
                src={DevIframeCodeblock}
                alt="block of code with iFrame component"
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
          <div className="content-row margin-top--24px">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small">
              <p>
                This is the resulting output preview of the user's code. It
                looks same as before, since the iFrame acts merely as a security
                container.
              </p>
              <img
                src={DevIframe}
                alt="user interface of iFrame component, as seen on user's screen"
              />
              <p>
                The other developer tested for potential exploits or
                vulnerabilities that might come from allowing scripts. They made
                sure that an error would be thrown if the user tried access
                'frames' other than the preview iFrame.
              </p>
              <img
                src={DevIframeSecurity}
                alt="uncaught security error and uncaught dom exception messages indicating other frames were blocked"
              />
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
          React component that allows for syntax highlighting, auto-enclosing
          brackets, and some shortcuts that we wanted to ensure a smooth coding
          experience.
        </p>
        <div className="content-grid">
          <div className="content-row">
            <div className="content--10 lowered-content--small">
              <p>
                The prior design implementation had no syntax highlighting or
                indenting.
              </p>
              <img
                src={DevCodeMirrorUnstyled}
                alt="unstyled coding window with no syntax highlighting nor indenting"
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
          <div className="content-row margin-top--24px">
            <div className="content--2">
              <img
                src={downRightArrowGreen}
                alt=""
                id="down-right-arrow-green"
              />
            </div>
            <div className="content--10 lowered-content--small">
              <p>
                The implementation with <code>CodeMirror</code> is more like
                what developers are used to.
              </p>
              <img
                src={DevCodeMirror}
                alt="user interface of CodeMirror component, as seen on user's screen"
              />
              <p>
                We utilized many aspects of <code>CodeMirror</code> to achieve
                the desired UX.
              </p>
              <img
                src={DevCodeMirrorCodeblock}
                alt="block of code with a CodeMirror component"
              />
              <p>
                Note: The other developer checked to make sure that any attempts
                to access and/or edit the website's parent code from user inputs
                to the CodeMirror were blocked.
              </p>
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
          We kept certain versions of our project static on different branches,
          to have a snapshot view of where our project was at various
          benchmarks. We also made sure to use consistent naming standards on
          branches to better track them.
        </p>
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
