import profile from "../images/profile.jpg";

export default function About(props) {
  return (
    <main>
      <h1> About </h1>
      <h2> Bio </h2>
      <section>
        <div className="content-grid lowered-content--small">
          <div className="content-row">
            <div className="content--4">
              <img src={profile} alt="close up head shot of Karen Hu" />
              <p>Karen Hu</p>
            </div>
            <div className="content--8">
              <p>
                I graduate from Brown University May 2024 with a degree in
                Computer Science and Visual Art. User Experience to me is about
                designing social interaction and experience of life in a way
                that makes peoples lives better. I'm looking to kickstart my
                career in UX by working in a high-impact social context. I focus
                on accessibility, user-centered and equity-focused design. As a
                junior UX worker, I am actively learning and growing.
              </p>
              <p>
                I am based on Narragansett land, "Providence, Rhode Island."
              </p>
            </div>
          </div>
        </div>
      </section>

      <h2>UX, Work Values</h2>
      <section>
        <h3>User-centered Design and Research-motivated Design</h3>
        <p>
          UX serves the user. They have needs that must be met through the
          design and functioning of an interface. In order to understand their
          needs, we must be informed through UX research. In order to meet their
          needs, we need to center users' needs as the critical concern for how
          the interface is designed, not profit or beauty.
        </p>
        <h3>Social Equity and Justice</h3>
        <p>
          Design is always political, social, and powerful. I believe in
          centering the most underrepresented, oppressed users when creating
          experiences.
        </p>
        <h3>Direct, Open Communication</h3>
        <p>
          Open communication fosters an honest sharing of opinion and expertise.
          The more knowledge we share, the more robust, intersectional, and
          encompassing our design becomes.
        </p>
      </section>

      <h2>Social, Political, Environmental Values</h2>
      <section>
        <ul>
          <li>
            Prison Abolition, Racial Justice, Stop Cop City, Defund the Police
          </li>
          <li>Land Back, Indigenous Sovereignty, Palestinian Liberation</li>{" "}
          <li>Demilitarization, Anti-imperialism</li>
          <li>Housing Justice, Affordable Housing</li>
          <li>Food Security, Access to Nutritous Food</li>
          <li>Disability Justice</li>
          <li>Healthcare Access, Public Healthcare</li>
          <li>Wealth Equity, Anti-capitalism, Worker's Rights</li>
          <li>Queer Liberation</li>
          <li>Feminism, Bodily Autonomy</li>
        </ul>
      </section>
    </main>
  );
}
