import Footer from '../../components/footer';
import chords from '../../assets/pickpro/chords_page.gif';
import logo from '../../assets/pickpro_splash.png'
import metronome from '../../assets/pickpro/metronome_page.gif';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import player from '../../assets/pickpro/player_page.gif';

const skills: string[] = ["Flutter", "Dart", "React.js", "CSS", "Figma", "Apple Development Suite", "Xcode", "Android Studio", "Mobile Development"];

export default async function PickPro() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center sm:mx-2 lg:mx-10">
                <div className="container mx-auto">
                    <h1 className="text-accent font-courier mb-10 sm:mx-2 lg:mx-20">Pick Pro</h1>
                    <img className="mx-auto rounded-3xl" src={logo.src}></img>
                    <h2 className="text-accent text-lg text-center mb-10 sm:mx-2 lg:mx-20">Empowering guitarists to learn their favourite songs.</h2>
                    <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
                        {skills.map((skill, index) => {
                            return <p key={index} className="text-accent text-lg border-[1px] rounded-3xl border-accent py-2 px-5">{skill}</p>
                        })}
                    </div>
                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">CONTEXT</h2>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">Why is Everything so Expensive these Days?</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">My inspiration for creating PickPro came from my dissatisfaction with
                        the resources currently available for learning electric guitar. Not
                        only were different resources often spread across multiple sites, many
                        sites also locked key features behind paywalls that I didn't want to
                        pay. Most prominent among them all, however, was the lack of
                        readily available audio players with fine-tuned playback speed
                        customization. Services like YouTube Music limit customizations to
                        increments of 0.25 - 0.5x, gaps that are simply too large for a
                        novice guitarist like myself to jump between when playing along.</p>

                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">OVERVIEW</h2>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">PickPro is a mobile app created in Flutter that is compatible with
                        both Android and iOS devices. The app contains numerous features to
                        help novice guitarists improve their guitar picking skills.</p>

                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">METRONOME</h2>
                    <img className="mx-auto mb-10" src={metronome.src}></img>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">Stay in Time, For All Time.</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">PickPro includes a custom-built, animated metronome that can be
                        adjusted with the BPM text field or by sliding the counter-weight on
                        the metronome stick. The metronome animation was created using Flutter's <span className="font-courier text-xl">Tween</span> Object.
                        Using a separate frame timer, the angle for the wand as well as the
                        required <span className="font-courier text-xl">CurveTween</span> is calculated using the method below:</p>
                    <div className="max-w-4xl mx-auto mt-10">
                        <SyntaxHighlighter language="dart" style={coldarkDark} className=" border-[1px] rounded-3xl border-secondary">
                            {`double _getAngle() {
    double angle = 0.0;
    double segmentPercent;
    double begin;
    double end;
    Curve curve;
            
    int now = DateTime.now().millisecondsSinceEpoch;
    double rotatePercent = 0;
            
    if (_metronomePlayer.metronomeIs == MetronomeIs.playing ||
        _metronomePlayer.metronomeIs == MetronomeIs.stopping) {
        int timePassed = now - _metronomePlayer.lastEvenTick;
            
        // Reset time interval if tick animation is delayed
        if (timePassed > _metronomePlayer.interval * 2) {
            timePassed -= (_metronomePlayer.interval * 2);
        }
            
        rotatePercent = (timePassed).toDouble() / (_metronomePlayer.interval * 2);
            
        // Restricting rotation in case of extreme intervals
        if (rotatePercent < 0 || rotatePercent > 1) {
            rotatePercent = min(1, max(0, rotatePercent));
        }
    }
            
    // Customize curve and angles depending on the rotation needed
    if (rotatePercent < 0.25) {
        segmentPercent = rotatePercent * 4;
        begin = 0;
        end = _maxAngle;
        curve = Curves.easeOut;
    } else if (rotatePercent < 0.75) {
        segmentPercent = (rotatePercent - 0.25) * 2;
        begin = _maxAngle;
        end = -_maxAngle;
        curve = Curves.easeInOut;
    } else {
        segmentPercent = (rotatePercent - 0.75) * 4;
        begin = -_maxAngle;
        end = 0;
        curve = Curves.easeIn;
    }
            
    // The Curve Tween is used to create the pendulum-swinging curve
    CurveTween curveTween = CurveTween(curve: curve);
    double easedPercent = curveTween.transform(segmentPercent);
            
    Tween<double> tween = Tween<double>(begin: begin, end: end);
    angle = tween.transform(easedPercent);
            
    return angle;
}`}
                        </SyntaxHighlighter>
                    </div>

                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">CHORDS REFERENCE</h2>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">All Your Learning Needs, In One Place.</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">PickPro features a searchable chords list that includes a variation
                        of every single guitar chord. Each chord can be easily found by searching for the note name as
                        well as the tune.</p>
                    <img className="mx-auto mt-10" src={chords.src}></img>

                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">AUDIO PLAYER</h2>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">Learn Your Favourite Songs, at Your Own Pace.</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">The main functionality of PickPro is its audio player. By uploading
                        their own music to the app, users can play their songs at custom
                        and precise playback speeds. Users can fine-tune the desired playback speed within 2 decimal
                        places, allowing them to slowly work their way up to playing
                        along at normal speed. </p>
                    <img className="mx-auto mt-10" src={player.src}></img>

                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">FUTURE IMPROVEMENTS</h2>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">What's Next?</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">The most glaring limitation with PickPro in its current state is the
                        audio player's departure from BPM. Unless the user already knows
                        the BPM of the song, there is no way to sync up the metronome
                        function with the audio player; even if the BPM is known, the only
                        way to sync these functions is by manually timing the playback of the song
                        with the metronome. To solve this issue, there are two main upcoming functionalities that I would
                        like to implement in the audio player. One is the ability to recognize the BPM of
                        the song, and the other is to sync the playback of the song with the built-in
                        metronome. As there exists software capable of recognizing BPM from audio files,
                        the main issue will be implementing such software in Flutter. </p>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20 mt-10">Regardless, I believe that even in its current state, PickPro is an extremely
                        useful tool for guitarists of all skill levels and I plan on continuing to use it myself
                        to further my own guitar skills. </p>
                </div>
            </div>
            <div className="my-15">
                <Footer home={true} />
            </div>
        </div>
    );
}
