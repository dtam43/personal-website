'use client'
import Lottie from 'lottie-react';
import animationData from '@/assets/motherboard.json';

export default function MainPage() {
    return (
        <div className="flex flex-col">
            <h1 className="text-accent font-courier sm:mx-2 lg:mx-10 mb-5">David Tam</h1>
            <div className="grid sm:grid-cols-1 lg:grid-cols-8 sm:mx-2 lg:mx-10 mb-10">
                <div className="col-span-2 flex justify-center items-center">
                    <Lottie animationData={animationData}></Lottie>
                </div>
                <div className="col-span-6 border-[1px] rounded-3xl border-tertiary lg:max-h-[350px] text-accent ml-10 p-10 max-w-4xl">
                    <h2 className="text-3xl font-courier text-accent">Technical Skills</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 font-body pt-8 flex justify-center items-center">
                        <div>
                            <p className="text-secondary font-bold mb-2">Languages</p>
                            <p>Python</p>
                            <p>Java</p>
                            <p>JavaScript</p>
                            <p>C++</p>
                            <p>PostgreSQL</p>
                            <p>HTML/CSS</p>
                            <p>Verse</p>
                        </div>
                        <div>
                            <p className="text-secondary font-bold mb-2">Frameworks</p>
                            <p>React.js</p>
                            <p>Express.js</p>
                            <p>Next.js</p>
                            <p>JavaFX</p>
                            <p>Prisma</p>
                            <p>OpenCV</p>
                            <p>Tailwind CSS</p>
                        </div>
                        <div>
                            <p className="text-secondary font-bold mb-2">Technologies</p>
                            <p>GitHub</p>
                            <p>Node.js</p>
                            <p>Express.js</p>
                            <p>Confluence</p>
                            <p>Jira</p>
                            <p>Google Cloud</p>
                            <p>Unreal Engine</p>
                        </div>
                        <div>
                            <p className="text-secondary font-bold mb-2">Core Competencies</p>
                            <p>Agile</p>
                            <p>Algorithms</p>
                            <p>Data Structures</p>
                            <p>OOP Design</p>
                            <p>UML</p>
                            <p>ER Modelling</p>
                            <p>UI/UX Design</p>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-bold text-accent sm:mx-2 lg:mx-10">FEATURED PROJECT</h2>
            </div>
            <div className="grid grid-cols-8 sm:mx-2 lg:mx-10">
                <div className="col-span-2 flex justify-center items-center">
                    <Lottie animationData={animationData}></Lottie>
                </div>
                <div className="col-span-6 border-[1px] rounded-3xl border-tertiary text-accent ml-10 p-10 max-w-4xl">
                    <h2 className="text-3xl font-courier text-accent">Technical Skills</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 font-body pt-8 flex justify-center items-center">
                        <div>
                            <p className="text-secondary font-bold mb-2">Languages</p>
                            <p>Python</p>
                            <p>Java</p>
                            <p>JavaScript</p>
                            <p>C++</p>
                            <p>PostgreSQL</p>
                            <p>HTML/CSS</p>
                            <p>Verse</p>
                        </div>
                        <div>
                            <p className="text-secondary font-bold mb-2">Frameworks</p>
                            <p>React.js</p>
                            <p>Express.js</p>
                            <p>Next.js</p>
                            <p>JavaFX</p>
                            <p>Prisma</p>
                            <p>OpenCV</p>
                            <p>Tailwind CSS</p>
                        </div>
                        <div>
                            <p className="text-secondary font-bold mb-2">Technologies</p>
                            <p>GitHub</p>
                            <p>Node.js</p>
                            <p>Express.js</p>
                            <p>Confluence</p>
                            <p>Jira</p>
                            <p>Google Cloud</p>
                            <p>Unreal Engine</p>
                        </div>
                        <div>
                            <p className="text-secondary font-bold mb-2">Core Competencies</p>
                            <p>Agile</p>
                            <p>Algorithms</p>
                            <p>Data Structures</p>
                            <p>OOP Design</p>
                            <p>UML</p>
                            <p>ER Modelling</p>
                            <p>UI/UX Design</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
