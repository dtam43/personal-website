import Footer from '../../components/footer';

import event from '../../assets/wec/event.png';

import problem from '../../assets/oec/problem.jpg';
import overview from '../../assets/oec/overview.png';
import logo from '../../assets/oec_splash.jpg'
import algo from '../../assets/oec/algo.png';
import scoring from '../../assets/oec/scoring.png';
import solution from '../../assets/oec/solution.png';

const skills: string[] = ["React.js", "Remix", "TypeScript", "JavaScript", "shadcn-ui", "Front-End Development", "Hackathon"];

export default async function OEC() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center sm:mx-2 lg:mx-10">
                <div className="container mx-auto">
                    <h1 className="text-accent font-courier mb-10 sm:mx-2 lg:mx-20">Letter Ninja</h1>
                    <img className="mx-auto rounded-3xl max-w-4xl" src={logo.src}></img>
                    <h2 className="text-accent text-lg text-center mb-10 sm:mx-2 lg:mx-20 mt-2">Ontario Engineering Competition - First Place</h2>
                    <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
                        {skills.map((skill, index) => {
                            return <p key={index} className="text-accent text-lg border-[1px] rounded-3xl border-accent py-2 px-5">{skill}</p>
                        })}
                    </div>
                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">CONTEXT</h2>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">Attention on the Decline, Dysgraphia on the Rise.</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">In a post-pandemic world, children are struggling to adjust to a changing
                        classroom environment. With the onset of digital learning tools, young students are beginning to neglect their core motor skills
                        in handwriting when in fact, this skill remains ever important in the real world. This problem is compounded by learning
                        disabilities; presently, 1 in 3 children experience difficulty in writing, which often coincides with dysgraphia. But how
                        can one address the monotony in handwriting with consideration for diminished attention span among youth? </p>
                    <img className="max-w-4xl mx-auto mt-10 rounded-3xl" src={problem.src}></img>

                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">PROPOSED SOLUTION</h2>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">A Fun Way to Train.</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">Letter Ninja is an accessible web-based learning experience that plays on the
                        strengths of engaging and repeatable mobile gameplay. Letter Ninja challenges the user to recreate sequences of letters with
                        precision and speed. Compared to traditional tracing books, it brings upon a layer of interactivity and competition with timed
                        challenges and high scores.</p>
                    <img className="max-w-4xl mx-auto mt-10 rounded-3xl" src={solution.src}></img>

                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">IMPLEMENTATION OVERVIEW</h2>
                    <img className="max-w-4xl mx-auto my-10 rounded-3xl border-accent border-[1px]" src={overview.src}></img>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">A Web Game to Rival CoolMathGames.</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">Letter Ninja offers a comprehensive GUI that allows for a customizable learning experience.
                        On its central page, users can track their current performance and aim to achieve new high scores. Upon starting a match, waves of
                        letters will appear in random locations on the canvas for the user to trace, and these traces are scored based on their accuracy.
                        New letters will continue to spawn so long as the user continues to trace them out, making the speed of the trace ever important.
                        Letter Ninja can also be tailored to the needs of any user. Using the focus letters input field, the range of letters can be defined to
                        help the user practice the letters they struggle with most. </p>

                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">SCORING ALGORITHM</h2>
                    <img className="max-w-4xl mx-auto my-10 rounded-3xl" src={algo.src}></img>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">Precision is Key.</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">Letter Ninja utilizes a custom scoring algorithm to determine the scores of a match.
                        As the React Canvas used for the project keeps track of drawings using an array of points, we track each point drawn and find the least
                        squared distance to any point on the ideal letter displayed on the screen. By then averaging these distances and square rooting it, we
                        can find the standard deviation of a given drawn point to the ideal point. This must be done in reverse too, comparing the standard deviation
                        from the ideal letter to the drawn line, to prevent players from scoring high by just drawing a single point on the ideal letter rather than
                        tracing the entire letter. Finally, these two deviations are averaged out and can then be scaled and inverted for a score. </p>
                    <img className="max-w-4xl mx-auto my-10 rounded-3xl" src={scoring.src}></img>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20 mt-10">The overall accuracy score is determined by scaling the list of drawings on a
                        sigmoid curve. This is done to prevent large outliers from having an excessive effect on the overall accuracy. These considerations were
                        ultimately put in place to allow for a satisfying and rewarding gameplay experience for young students to see their progress firsthand.</p>

                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">FINAL THOUGHTS</h2>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">Overcome your Struggles before you Know it.</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">With the release of Letter Ninja, we hope to make the challenge of overcoming
                        dysgraphia more enjoyable and motivating to students of a younger demographic. Referencing the success of classics such as
                        Brain Age, we believe that there is great value in convincing the youth to learn without realizing they are being taught. </p>
                </div>
            </div>
            <div className="my-15">
                <Footer home={true} />
            </div>
        </div>
    );
}
