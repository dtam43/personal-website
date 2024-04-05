import Footer from '../../components/footer';
import boss from '../../assets/ruinraider/boss.gif';
import cave from '../../assets/ruinraider/cave_dungeon.gif';
import char from '../../assets/ruinraider/char-select.jpg';
import lighting from '../../assets/ruinraider/lighting.jpg';
import level from '../../assets/ruinraider/lvl_creation.jpg';
import ruin from '../../assets/ruinraider/ruin_dungeon.gif';
import logo from '../../assets/ruinraider_splash.jpeg'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const skills: string[] = ["Python", "Pygame", "Tiled", "Object-Oriented Programming", "Graphic Design", "Game Development", "Algorithmic Design"];

export default async function RuinRaider() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center sm:mx-2 lg:mx-10">
                <div className="container mx-auto">
                    <h1 className="text-accent font-courier mb-10 sm:mx-2 lg:mx-20">Ruin Raider</h1>
                    <img className="mx-auto rounded-3xl" src={logo.src}></img>
                    <h2 className="text-accent text-lg text-center mb-10 sm:mx-2 lg:mx-20 mt-2">A top-down shooter RPG made in Pygame. Created for Western
                        Engineering's Software Construction course.</h2>
                    <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
                        {skills.map((skill, index) => {
                            return <p key={index} className="text-accent text-lg border-[1px] rounded-3xl border-accent py-2 px-5">{skill}</p>
                        })}
                    </div>
                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">OVERVIEW</h2>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">Replayable. Riveting. Relentless.</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">Ruin Raider is a top-down shooter created in Python using Pygame and
                        Tiled. In the game, players take on the role of a mercenary hired to
                        explore the ruins of a desolate world and collect valuable crystals
                        known as Arctium. As they progress through the game, they must defeat
                        various enemies, from basic crawlers to poisonous cave spiders and
                        autonomous turrets.</p>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6 max-w-4xl mx-auto mt-10">
                        <img className="grid col-span-1 mx-auto mb-10 rounded-3xl" src={ruin.src}></img>
                        <img className="grid col-span-1 mx-auto mb-10 rounded-3xl" src={cave.src}></img>
                    </div>

                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">GAME DEVELOPMENT</h2>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">An Object-Oriented Approach.</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">Ruin Raider was constructed using object-oriented design principles.
                        For example, enemies and players share a common “character” class to
                        house movement logic, collectibles such as hearts and ammo share a
                        common “item” class to house inventory logic, and all visible entities
                        share a common “entity” class to house collision and sprite logic.
                        Other core objects within the game include:</p>
                    <ul className="list-disc list-inside text-accent text-lg sm:mx-2 lg:mx-20 mt-2">
                        <li><span className="font-bold text-secondary">Transform</span>: Dictates the position, rotation, and scale of the
                            object for the purposes of collision and movement.</li>
                        <li><span className="font-bold text-secondary">Sprite</span>: Defines the sprite of the object.</li>
                        <li><span className="font-bold text-secondary">Light</span>: Defines the light source of the object.</li>
                    </ul>
                    <img className="max-w-4xl mx-auto mt-10 rounded-3xl" src={level.src}></img>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20 mt-10">The levels for the game were created in Tiled, a software that allows
                        one to export layers of drawn tiles as a collection of surfaces. This
                        made it easy to extract objects from the levels; walls could be
                        extracted for collision and fire sprites could be extracted for
                        lighting.</p>



                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">PATHFINDING ALGORITHM</h2>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">On the Hunt.</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">Ruin Raider utilizes a custom A* pathfinding algorithm that allows the
                        enemies to track and chase the player around obstacles.</p>
                    <div className="max-w-4xl mx-auto mt-10">
                        <SyntaxHighlighter language="python" style={coldarkDark} className=" border-[1px] rounded-3xl border-secondary">
                            {`# Loop through the open nodes
while len(toSearch) > 0:
    current_node = min(toSearch, key=lambda node: node.get_f())
            
    if current_node == target_node:
        path = [current_node]
            
        # Loop through the connections
        while current_node.connection is not None:
            # Add the connection to the path
            path.append(current_node.connection)
            
            # Set the current node to the connection
            current_node = current_node.connection
            
        # Reverse the path and return it
        return path[::-1]
            
    # Remove the current node from the open nodes list and add it to the closed nodes list
    toSearch.remove(current_node)
    searched.add(current_node)
            
    for neighbor in current_node.neighbors:
        in_search = neighbor in toSearch
            
        # If the neighbor is not active or the neighbor is in the closed nodes list, skip it
        if not neighbor.active or neighbor in searched:
            continue
            
        cost_dist = np.sqrt((neighbor.x - current_node.x) ** 2 + (neighbor.y - current_node.y) ** 2)
        cost_to_neighbor = current_node.get_g() + cost_dist
            
        # If the neighbor is not in the open nodes list, set the neighbor's g value to the cost to the neighbor and add it to the open nodes list
        if not in_search or cost_to_neighbor < neighbor.get_g():
            neighbor.set_g(cost_to_neighbor)
            neighbor.connection = current_node
            
            if not in_search:
                h_dist = np.sqrt((neighbor.x - target_node.x) ** 2 + (neighbor.y - target_node.y) ** 2)
                neighbor.set_h(h_dist)
                toSearch.add(neighbor)`}
                        </SyntaxHighlighter>
                    </div>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20 mt-10">An object called a Navmesh houses the matrix of nodes that determine
                        if a given pathfinding agent can successfully move to a given point.
                        To calculate the path, each node holds a reference to its neighbours
                        and an f-score, which rates how beneficial the node is to a path. This
                        f-score is the key to the A* algorithm and it is calculated using the
                        sum of the path cost of the node (g score) and the distance between
                        the node and the target (h score). </p>

                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">LIGHTING ENGINE</h2>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">An Immersive Dungeon-Crawling Experience.</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">This game utilizes an open-source lighting engine with real-time
                        dynamic rendering to give the illusion of raytraced lighting.</p>
                    <img className="max-w-4xl mx-auto mt-10 rounded-3xl" src={lighting.src}></img>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20 mt-10">The idea behind the lighting engine is that it layers pygame surfaces
                        on top of all other rendered sprites, as they have unique rendering
                        flags that allow them to be dynamically rendered. The source code for
                        the lighting engine can be found <a href="https://github.com/LuckeyDuckey/Pygame_Lighting_Engine" className="text-secondary">here</a>.</p>

                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">OTHER GAMEPLAY FEATURES</h2>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">Customizable. Repeatable. Relentless.</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">Ruin Raider features multiple weapons and multiple playable
                        characters, each with their own unique stats and playstyles. The character select screen, accessible from the main menu. Switching
                        characters does not reset the player's level, but instead modifies
                        their current HP and base speed.</p>
                    <img className="max-w-4xl mx-auto mt-10 rounded-3xl" src={char.src}></img>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20 mt-10">Ruin Raider also includes a player progression system where players
                        get stronger by defeating enemies. After progressing far enough,
                        players are able to take on the ArctBeast, a final boss that offers a
                        unique gameplay mechanic and valuable rewards.</p>
                    <img className="max-w-4xl mx-auto mt-10 rounded-3xl" src={boss.src}></img>

                    <h2 className="text-accent text-lg font-bold mb-5 sm:mx-2 lg:mx-20 mt-10">FUTURE IMPROVEMENTS</h2>
                    <h3 className="text-accent text-xl font-bold text-secondary font-courier sm:mx-2 lg:mx-20 mb-2">What's Next?</h3>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20">Given the time frame my team had to complete the project, there are a
                        number of things that we would have liked to include. Most notably, we
                        would have liked to implement our own lighting engine rather than
                        using an open-source one. This lighting engine is only able to project
                        light radially outwards; by creating our own, we may have been able to
                        make the lighting emerge from the player like a flashlight would,
                        enhancing the immersive experience.</p>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20 mt-10">In terms of gameplay, we are satisfied with the experience of the
                        current dungeons but we would have liked to have a larger selection of
                        levels and enemies to explore. Additionally, having more varied weapon
                        options, such as melee weapons, would have helped to broaden the
                        gameplay experience. </p>
                    <p className="text-accent text-lg sm:mx-2 lg:mx-20 mt-10">In spite of this, I am satisfied with how the project turned out and
                        find the game to be genuinely fun to play. To learn more about the
                        game mechanics and to hear the custom music we created for the game,
                        you can find the demo video for the game
                        <a className="text-secondary" href="https://youtu.be/4oAG6zzpbpw"> here</a>. </p>
                </div>
            </div>
            <div className="my-15">
                <Footer home={true} />
            </div>
        </div>
    );
}
