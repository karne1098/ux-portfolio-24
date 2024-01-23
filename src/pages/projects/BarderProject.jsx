import "./BarderProject.scss";
export default function BarderProject(props) {
  return (
    <main className={props.mode}>
      <h1>Barder Project</h1>
      <section>
        <h2>At a Glance</h2>
        <div className="content-grid">
          <div className="content-row">
            <div className="content--6">
              <h3>Stakeholder (hypothetical) </h3>
              People of the world
            </div>
            <div className="content--6">
              <h3>Duration</h3> 3 weeks
            </div>
          </div>
          <div className="content-row">
            <div className="content--6">
              <h3>Industry</h3>
              Bardering, Mutual Aid, Alternative Economy
            </div>
            <div className="content--6">
              <h3>Role</h3>
              Context Researcher, UX Designer, Frontend Software Engineer
            </div>
          </div>
          <div className="content-row">
            <div className="content--12">
              <h3>Project Summary</h3>
              <p>
                I research and analysze how the covid-19 pandemic, economic
                downturns, and climate crisis necessitate new forms of material
                exchange. I suggest bartering can be a crucial part of a healthy
                economy that works for the people.
              </p>
              <p>
                I analyze how Craigslist UX might support bartering, and then I
                code a prototype that depicts functionality for online
                bartering.
              </p>
            </div>
          </div>
        </div>
      </section>
      <h2>Context Research</h2>
      <p>
        I briefly research the economy, climate crisis, and covid-19 effects and
        analyze findings in relation to the practice of bartering
      </p>
      <h3>Findings</h3>
      <ol>
        <li>
          We are Entering an Economic Recession
          <ul>
            <li>
              The economy is weak and we are headed into a recession (a period
              of decreased economic activity where people spend a lot less
              money), according to{" "}
              <a href="https://www.conference-board.org/us/">
                The Conference Board
              </a>{" "}
              2022 reports.
            </li>
            <li>
              Sea freight rates are high, leading to less global trade. Further,
              Russan invasion of Ukraine and resulting sanctions on Russian
              energy resources leads to inflation of gas prices. This makes the
              cost of travel by any vehicle that requires oil more expensive
              (including cars), according to{" "}
              <a href="https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/global-economics-intelligence-executive-summary-october-2022">
                Global Economics Intelligence Summary - McKinsey
              </a>{" "}
            </li>
          </ul>
        </li>
        <li>
          Housing Affordability Crisis Drives Inflation in US, according to{" "}
          <a href="https://www.cnn.com/2022/09/17/politics/housing-market-questions-what-matters/index.html">
            The Housing Mess - CNN
          </a>
          <ul>
            <li>
              "Mortgage rates are the highest they have been since 2008 and home
              prices remain near record highs...because there is a national
              shortage of homes..., pricing many prospective homebuyers out of
              the market. Those people then remain in the already tight rental
              market, pushing rents up even further."
            </li>
            <li>
              cost of housing drives inflation (since housing is a critical
              marker of the buying power of ones money)
            </li>
          </ul>
        </li>
        <li>
          We Need a Greener Global Economy, according to{" "}
          <a href="https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/global-economics-intelligence-executive-summary-october-2022">
            Global Economics Intelligence Summary - McKinsey
          </a>
          <ul>
            <li>
              "the burden of economic and climate crises will fall
              disproportionately on poorer populations and societies"
            </li>
            <li>
              global, governmental, (and otherwise large-sclae) climate crisis
              efforts "must go far beyond short-term measures, toward
              diversifying supply and accelerating the transition to a
              green-energy economy.
            </li>
          </ul>
        </li>
        <li>
          Covid-19 Created Echo Chambers & Local Networks, according to{" "}
          <a href="https://jech.bmj.com/content/76/2/128">
            Covid-19, Social Relationships, and Health - Journal of Epidemiology
          </a>
          <ul>
            <li>
              "local area-based networks emerged due to geographic restrictions
              (eg, stay-at-home orders), resulting in increases in neighbourly
              support and local volunteering."
            </li>
            <li>
              More homogeneous (less diverse) social interactions, and thus less
              diversity of opinion in ones day to day interactions
            </li>
            <li>
              "while online platforms have potential to provide intergroup
              contact, the tendency of much social media to form homogeneous
              'echo chambers' can serve to further reduce intergroup contact."
            </li>
            <li>
              "Individuals with marginalized identities have the least access to
              social support" which is defined as "the psychological and
              material resources provided through social interaction."
            </li>
          </ul>
        </li>
      </ol>
      <h3>Bartering as a Solution</h3>
      <ol>
        <li>
          Bartering is Effective during Economic Recession, according to{" "}
          <a href="https://www.investopedia.com/terms/b/barter.asp#toc-understanding-bartering">
            Barter - Investopedia
          </a>
          <ul>
            <li>
              "Barter is an act of trading goods or services between two or more
              parties without the use of money —or a monetary medium, such as a
              credit card. Two individuals negotiate to determine the relative
              value of their goods and services and offer them to one another in
              an even exchange. It is the oldest form of commerce, dating back
              to a time before hard currency even existed."
            </li>
            <li>
              "In an economic crunch, bartering can be a great way to get the
              goods and services you need without having to pull money out of
              your pocket." This is why "online barter exchanges became
              especially popular with small businesses after the 2008 financial
              crisis, which culminated in the Great Recession."
            </li>
          </ul>
        </li>
        <li>
          Local Bartering Is Green
          <ul>
            <li>
              Bartering may reduce excess waste, since a person can exchange
              goods or services they don't need (and might otherwise throw away
              or leave idle), with goods or services that they do need. Under
              late stage capitalism and hyper-consumerism, there is a lot of
              material waste produced because there is an excess of consumer
              products and not enough means to 're-use', 'value', and 'sustain'
              a good or service.
            </li>
            <li>
              Since bartering is local, it reduces the amount of energy required
              to travel via car (or ship the item via mail). By maximally
              meeting the needs of community members through trading resources
              locally, bartering also reduces the amount of objects shipped
              through global trade (which requires energy).
            </li>
          </ul>
        </li>
        <li>
          Bartering Increases and Diversifies Interactions
          <ul>
            <li>
              Bartering creates "a deeper personal relationship between trading
              partners than a typical monetized transaction," according to{" "}
              <a href="https://www.investopedia.com/terms/b/barter.asp#toc-understanding-bartering">
                Barter - Investopedia
              </a>
            </li>
            <li>
              there is potential for more localised, coherent communities due to
              scaled-down travel, homeworking and local focus that has continued
              as a norm after the height of the Covid-19 Pandemic, according to{" "}
              <a href="https://jech.bmj.com/content/76/2/128">
                Covid-19, Social Relationships, and Health - Journal of
                Epidemiology
              </a>
            </li>
          </ul>
        </li>
      </ol>
      <h2>Competitor Analysis on Craigslist</h2>
      <p>
        I do a competitor analysis on Craigslist to highlight how the UX of this
        website directly and indirectly supports bartering.
      </p>
      <h3>General Findings</h3>
      <ul>
        <li>
          Geographical Landing Page Supports User Goals
          <ul>
            "Craigslist is successful because it is available globally, in ~70
            countries and ~700 cities, but users enter their approximate
            location and can only see and post ads that are available in their
            near proximity, visualized on a map. This facilitates and expediates
            coordination as users can from start eliminate contact with anyone
            outside of their willing 'transportation zone'," according to{" "}
            <a href="https://d3.harvard.edu/platform-digit/submission/craigslist-the-remarkable-but-potentially-obsolete-success-story-of-the-ultimate-platform/">
              Craigslist: Platform Success Story - Harvard
            </a>
          </ul>
        </li>
        <li>
          Vulnerability Builds Trust between Users, according to{" "}
          <a href="https://www.uxmatters.com/mt/archives/2017/06/craigslists-unconventional-user-experience.php">
            Craiglist's Unconventional User Experience - UX Matters
          </a>
          <ul>
            <li>
              social penetration theory says that "people can break down formal
              social barriers by being perceived as vulnerable."
            </li>
            <li>
              Since there is no way to contact another user in-app, a post must
              include a point of contact (phone number, email). A person might
              be more inclined to trust a user that has shared this semi-private
              method of communication to the internet (which is somewhat
              vulnerable).
            </li>
            <li>
              Facebook Marketplace may be an even better example of this, where
              people are posting from their Facebook accounts which have social
              and oftentimes personal information.
            </li>
          </ul>
        </li>
        <li>
          Unstyled, Unchanging, 2000s Era UI Builds Trust in the Platform
          <ul>
            <li>
              The busy UI increases cognitive load, which tends to lead users to
              think longer and more critically. As a result, users feel in
              control of their decisions, something that is important in a
              context where there is so much variability in users and
              goods/services available. Since the user feels in control, they
              trust that the app is not trying to exploit or manipulate them,
              according to{" "}
              <a href="https://www.uxmatters.com/mt/archives/2017/06/craigslists-unconventional-user-experience.php">
                Craiglist's Unconventional User Experience - UX Matters
              </a>
            </li>
            <li>
              Because there are no sponsored ads Craigslist like there are in
              similar resale apps, users trust that Craigslist is not trying to
              'sell' anything to them, according to{" "}
              <a href="https://www.uxmatters.com/mt/archives/2017/06/craigslists-unconventional-user-experience.php">
                Craiglist's Unconventional User Experience - UX Matters
              </a>
            </li>
            <li>
              Despite the potential for scammers to degrade the trust between
              users and the platform, and the fact that the UI has barely
              changed, Craigslist has seen immense success since its launch in
              2000, according to{" "}
              <a href="https://www.usertesting.com/blog/craigslist-success-without-design">
                Craiglist: Success Without Design - User Testing
              </a>
            </li>
          </ul>
        </li>
        <li>
          Craigslist is Quite Accessible & Universally Designed, according to{" "}
          <a href="https://www.usertesting.com/blog/craigslist-success-without-design">
            Craiglist: Success Without Design - User Testing
          </a>
          <ul>
            <li>
              Craigslist is all text, so it is good for those who using
              assistive reading technology Most icons are labeled, which is
              helpful to those that might not know what newer icons mean.
            </li>
            <li>
              Because the site reminiscent of older online interfaces, older
              users might face less of a learning curve when learning how to use
              Craigslist.
            </li>
            <li>
              There's very little color, and the color that is present is high
              contrast. This is good for people with any degree of color
              blindness or sensitivity to light.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Prioritizing Tasks</h2>
      <p>
        I review the coding requirements for the assignment alongside users'
        needs, in order to prioritize the most critical functionalities to code
        in the timespan of 2.5 weeks.
      </p>
      <h3>Summary</h3>
      <p>
        I was tasked to develop an interactive interface, use Components, and
        tie the components to an internal data state. This project required that
        I code in React to create a list-based interface where users can select
        items out of a list and see how their items aggregate.
      </p>
      <h3>Structural Requirements</h3>
      <ul>
        <li>
          At least 2 filtering categories
          <ul className="decision-holder">
            <li className="decision">
              I decided to do itemType offered and itemType accepted by the
              nature of bartering. A user, Bob, will want to filter for posts
              that accept items that Bob has to offer. Bob might also want to
              filter for posts that offer items that Bob is looking for. For a
              perfect barter, Bob will find a post that accepts an item Bob has
              to offer, and that offers an item that Bob wants.
            </li>
          </ul>
        </li>
        <li>
          At least 1 sorting feature
          <ul className="decision-holder">
            <li className="decision">
              I decided to do this by date posted, since this is an indirect way
              of showing whether the user posting on Barder is active or not
              (without impeding on their privacy and showing activity status).
              Users of Craigslist are used to their posts having the date posted
              revealed, so this won't come as a surprise either.
            </li>
          </ul>
        </li>
        <li>
          An aggregator section displaying:
          <ul className="decision-holder">
            <li className="decision">
              I decided to make a 'Trading List' viewable to the user as an
              'aggregator'.
            </li>
          </ul>
          <ul>
            <li>Items the user has added to the aggregator</li>
            <ul className="decision-holder">
              <li className="decision">
                Users' posts or 'items for trade' are added to the Trading List.
              </li>
            </ul>
            <li>
              Aggregation of a property (ex. time, cost) but NOT the total
              number of items
              <ul className="decision-holder">
                <li className="decision">
                  The aggregated property would be 'equivalent cost.' I realized
                  I would need more time to think critically and meaningfully
                  about a value that aggregates in the context of bartering.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          At least 12 item cards, each displaying:
          <ul className="decision-holder">
            <li className="decision">
              The data for these items were collected from objects lying around
              my living space. Some belong to my roommates, some are mine, and
              some are shared
            </li>
          </ul>
          <ul>
            <li>Item image</li>
            <ul className="decision-holder">
              <li className="decision">this is similar to Craigslist</li>
            </ul>

            <li>Categories used by the filtering feature</li>
            <ul className="decision-holder">
              <li className="decision">
                I included the itemType of an object in green and parenthesized,
                anywhere an object showed up (under the 'accepted items' of a
                post or the offered item itself)
              </li>
            </ul>
            <li>Field(s) used by the sorting feature</li>
            <ul className="decision-holder">
              <li className="decision">I included this on each post</li>
            </ul>
            <li>Property being aggregated</li>
            <ul className="decision-holder">
              <li className="decision">I also included this on each post</li>
            </ul>
            <li>A button that adds to/removes from the aggregator</li>
            <ul className="decision-holder">
              <li className="decision">
                The button changes from 'add to Trading List' to 'remove From
                Trading List' and back, accordingly.
              </li>
            </ul>
          </ul>
          <ul></ul>
        </li>

        <li>
          An element that users can interact with to revert the page back to the
          original state without refreshing
          <ul className="decision-holder">
            <li className="decision">
              I did not implement this feature fully, as it was lower in task
              priority
            </li>
          </ul>
        </li>
      </ul>

      <h3>Functional Requirements</h3>
      <ul>
        <li>
          Site should handle any combination of filters and sorting features
          <ul className="decision-holder">
            <li className="decision">
              There is a bug where adding an additional filter category after
              sorting causes the items to no longer be sorted. This might be an
              issue, but users can reclick the sort button. Like Craigslist,
              requiring the user to do some extra work with a larger cognitive
              might actually build trust in the platform.
            </li>
          </ul>
        </li>
        <li>
          Users should be able to add to and remove items from the aggregator
          section. The aggregated property should update accordingly.
          <ul className="decision-holder">
            <li className="decision">
              The aggregated property should update accordingly: I implement
              this fully.
            </li>
          </ul>
        </li>
        <li>
          The design should be intuitive and easy to use.
          <ul className="decision-holder">
            <li className="decision">
              {" "}
              I decided on a layout where the filters and sorting were on the
              left, the items were in the center, and the trading list were on
              the right. This design is intuitive because it follows in the
              tradition of Craigslist, as well as corporate shopping sites such
              as Amazon.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Coded Site</h2>
      <p>I code the website using React.</p>
      <h3>
        Feel free to check it out and play around with the filtering, sorting,
        and trading list!
      </h3>
      {/* TODO: image of barder site 
      TODO: link to barder site */}
      <a
        href="https://radicalwaterbear101.github.io/development-final/"
        target="_blank"
        rel="noreferrer"
      >
        Barder Prototype Website
      </a>

      <h2>Reflection</h2>
      <h3>What I learned</h3>
      <p>
        I applied context research and competitor analysis strategies to think
        through my code and design choices
      </p>
      <p>
        I learned how to prioritize coding and design work according to the
        user's expectations and technical expectations
      </p>
      <h3>Next Steps</h3>
      <p>
        I'd get answers to some questions I have, which were beyond the scope of
        the brief research I did.
      </p>
      <ul>
        <li>
          How would the website deal with the fact that barter transactions are
          considered taxable by the IRS (Internal Revenue Service)?
        </li>
        <li>
          Is there an increased awareness of social inequality due to people
          spending more time online during the Covid-19 pandemic?
        </li>
        <li>
          Are people more conscious of how their actions might perpetuate
          exploitative and violent systems due to the insights that were
          especially highlighted by the Black Lives Matter movement?
        </li>
        <li>
          How might resource distribution and praxis be tied into the site?
        </li>
        <li>
          How do social support networks (mutual aid, etc.) create a safety net
          for those that are facing or at risk of experiencing houselessness?
        </li>
      </ul>
    </main>
  );
}
