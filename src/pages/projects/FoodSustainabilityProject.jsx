import "./FoodSustainabilityProject.scss";
export default function FoodSustainabilityProject(props) {
  return (
    <main className={props.mode}>
      <h1>Food Sustainability Project</h1>
      <div className="h2-holder">
        <h2>At a Glance</h2>
      </div>
      <section>
        <div className="content-grid">
          <div className="content-row">
            <div className="content--6">
              <h3>Stakeholder (hypothetical) </h3>
              <p>Brown Dining Services, RISD Dining Services</p>
            </div>
            <div className="content--6">
              <h3>Duration</h3>
              <p>Sep 2022 - Dec 2022 (3 months)</p>
            </div>
          </div>
          <div className="content-row">
            <div className="content--6">
              <h3>Industry</h3>
              Food, Sustainability, Dining, Takeout, Campus, Waste, Containers
            </div>
            <div className="content--6">
              <h3>Role</h3>
              Focus Groups Researcher, Notetaker, Analyzer, Moderator
            </div>
          </div>
          <div className="content-row">
            <div className="content--12">
              <h3>Project Summary</h3>
              <p>
                I worked with a diverse group of Brown and RISD students to
                learn more about student perceptions and social dynamics towards
                "food sustainability" on Brown and RISD campuses.
              </p>
              <p>
                I gained an understanding of Focus Groups as a research method
                by immersing myself in the different roles (notetaker, analyzer,
                moderator) and workig collectively (debriefing, adjusting
                questioning route).
              </p>
            </div>
          </div>
        </div>
      </section>
      <h2>Research Approach</h2>
      <section>
        <h3>Research Question</h3>
        <p>
          What are Brown and RISD students' perceptions, thoughts, and group
          social dynamics regarding food sustainability initiatives on campus?
        </p>
        <p>Supporting Questions</p>
        <ul>
          <li>
            Are students aware of food sustainability initiatives on campus?
          </li>
          <li>Do students care about food sustainability on campus?</li>
          <li>
            Are there social dynamics that influence how students perceive the
            food sustainability initiatives on campus?
          </li>
        </ul>
      </section>
      <section>
        <h3>Literature Review: Why Campus Food Sustainability?</h3>
        <p>
          My group did a preliminary literature review to better understand how
          campuses contribute to the wider movement towards food sustainability.
        </p>
        <p>
          <b>
            Universities can influence students' sustainability efforts for life
          </b>
        </p>
        <ul>
          <li>
            <p>
              According to "The Green Campus," by Anne Underwood (2007),
              exposure to food sustainability at university influences
              impressionable students not only while they are on campus, but
              also all throughout their lives. By making efforts to take
              sustainable actions and communicating to students about all of it;
              universities can influence students into being more sustainable
              from their time in college and beyond.
            </p>
          </li>
          <li>
            <p>
              <a href="https://sciencedirect.com/science/article/abs/pii/S0278431914000954">
                "Local Foods in University Setting..."
              </a>{" "}
              suggests ways for universities to normalize students to food
              sustainability: creating student-participatory programs to promote
              buying locally, increasing exposure to local food purchasing by
              the university, and creating emotional and personal responses in
              students about food sustainability. Students tend to care more if
              their university makes it easier for them to be exposed to, learn
              about, and participate in food sustainability efforts.
            </p>
          </li>
        </ul>
      </section>
      <h2></h2>
    </main>
  );
}
