import Footer from '../../components/footer';
import problem from '../../assets/wec/problem.jpg';
import overview from '../../assets/wec/overview.png';
import event from '../../assets/wec/event.png';
import logo from '../../assets/wec_splash.png'

const skills: string[] = ["React.js", "Remix", "Prisma ORM", "SQLite", "TypeScript", "MapBox API", "shadcn-ui", "Full-Stack Development", "Hackathon"];

export default async function WEC() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center sm:mx-2 lg:mx-10">
                <div className="container mx-auto">
                    <h1 className="text-accent font-courier mb-10 sm:mx-2 lg:mx-20">Tempest Tracker</h1>
                    <img className="mx-auto rounded-3xl" src={logo.src}></img>
                    <h2 className="text-accent text-lg text-center mb-10 sm:mx-2 lg:mx-20 mt-2">Western Engineering Competition - First Place</h2>
                    <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
                        {skills.map((skill, index) => {
                            return <p key={index} className="text-accent text-lg border-[1px] rounded-3xl border-accent py-2 px-5">{skill}</p>
                        })}
                    </div>
                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">CONTEXT</h2>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">A Global Emergency.</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">Every year, thousands upon millions of individuals die due to unexpected natural disasters
                        that leave emergency systems overwhelmed and unable to offer the necessary relief efforts to those that need it most.
                        Without the development of a robust infrastructure, many communities will continue to be ill-prepared for these life-changing
                        and life-ending events. This sobering truth is an example of one of many cases in which software can help alleviate the
                        pain points and bottlenecks that allow such communities to continue to be ravaged today. </p>
                    <img className="max-w-4xl mx-auto mt-10 rounded-3xl" src={problem.src}></img>

                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">PROPOSED SOLUTION</h2>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">Giving the Gift of Information.</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">Tempest Tracker is our software-oriented approach to solving the issues
                        presently affecting natural disaster response. As a full-stack web application, the tool is accessible to a diverse palette
                        of individuals in a way that targets all the users that comprise the aforementioned stakeholder groups.</p>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20 mt-10">Two key pillars of Tempest Tracker are information gathering and giving.
                        Information gathering is manifested as a comprehensive list of cataloged natural disasters that can be accessed by users to have
                        important information–including but not limited to geographical location, disaster intensity, and categorization–to stay informed
                        of the events surrounding their region. To the same end, users can actively enrich the utility of this tool as much as they benefit
                        from it by cataloging new and/or previously undocumented events happening near them.</p>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20 mt-10">In this way, Tempest Tracker will augment society’s
                        ability to act when disaster strikes.</p>

                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">IMPLEMENTATION OVERVIEW</h2>
                    <img className="max-w-4xl mx-auto my-10 rounded-3xl" src={overview.src}></img>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">Available at Your Fingertips.</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">At the core of Tempest Tracker is Remix, a full-stack framework that incentivises
                        web standards. It uses PHP-like design principles, prioritizing server-side data retrieval while also using modern tools such as React.
                        The result is a comprehensive user interface that displays key information at a glance and in a way that is visually descriptive. For
                        instance, a large heatmap powered by the Mapbox API makes it easy to understand where the largest disaster impacts are, allowing for
                        resources to be distributed equitably. In this regard, plotted disasters are color-coded by intensity. </p>

                    <p className="text-accent text-lg sm:mx-2 lg:mx-20 mt-10">To further tailor the experience to the user’s needs, a filter box is
                        present adjacent to the map so that users can focus on only the information that is most relevant to them. Special considerations
                        made to how the filters work are as follows:</p>
                    <ul className="list-disc list-inside text-accent text-lg sm:mx-2 lg:mx-20 mt-2">
                        <li>The <span className="font-bold text-secondary">selection box</span> for event type is populated based on unique disaster
                            categorizations that exist in the database. This eliminates the need for the user to needlessly type out a particular category
                            and instead simply rely on the category generalizations handled by the system.
                        </li>
                        <li>The <span className="font-bold text-secondary">region filtering</span> is radial in nature and takes three inputs: latitude, longitude,
                            and radius. The latitude and longitude values specify a central point of the region on the map, and the radius defines the
                            outwarding scope of the region. This makes it easy to filter by proximity to a specific location.
                        </li>
                        <li>The <span className="font-bold text-secondary">intensity slider</span> provides a straightforward way to select a whole number value
                            between 1 and 10, rather than simply relying on a standard numerical text input.
                        </li>
                    </ul>

                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">DISASTER REPORTING</h2>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">Be Informed of the Latest Events.</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">The most important tool to ensure the longevity of Tempest Tracker is its ability
                        to dynamically update the natural disasters in the network. Using a carefully curated submission form, users can report on natural
                        disasters yet to be documented in order to spread awareness to their community. </p>
                    <img className="max-w-4xl mx-auto mt-10 rounded-3xl" src={event.src}></img>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20 mt-10">Inputs are carefully validated to ensure accurate
                        measurements for location and intensity, but categorizations are left open-ended to allow users to accurately convey the event.
                        However, should a certain report be deemed falsifiable, Tempest Tracker also offers the option to remove disasters from its network.
                        Ultimately, the customizability of our service will allow for unprecedented information propagation that will keep communities
                        and interested parties safe from potential disasters.</p>

                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">FINAL THOUGHTS</h2>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">Adhering to the Technological Principles.</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">Our team took careful considerations in adhering to the technological
                        principles throughout the software development process. Through clear communication and balanced work distribution,
                        we exemplified the following principles most strongly:</p>
                    <ul className="list-disc list-inside text-accent text-lg sm:mx-2 lg:mx-20 mt-2">
                        <li><span className="font-bold text-secondary">Widen Approaches</span>: Through our clear communication,
                            we were able to discern the best tools to accelerate the development process. For one, despite our lack of experience with
                            Remix, we took a risk to expand our horizons and it ultimately succeeded.
                        </li>
                        <li><span className="font-bold text-secondary">Shared Action</span>: We used a balanced work distribution that took advantage
                            of each individual’s strengths to complete the project in a timely manner. From the project report creation, database management
                            system, to the main frontend components and functionalities, each of us was given a clear goal early in the project lifetime
                            which allowed us to better concentrate on our tasks.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="my-15">
                <Footer home={true} />
            </div>
        </div>
    );
}
