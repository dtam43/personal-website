'use client'
import Lottie from 'lottie-react';
import motherboard from '../assets/motherboard.json';
import pencil from '../assets/pencil.json';
import game from '../assets/game.json';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from './footer';
import splashImage from '../assets/oec_splash.jpg';

type Course = {
    name: string;
    grade: string;
};

const courses: Course[] = [
    { name: 'ES 1036 | Programming Fundamentals for Engineers', grade: '100%' },
    { name: 'NMM 1412 | Calculus Fundamentals for Engineers I', grade: '100%' },
    { name: 'NMM 1411 | Linear Algebra Analysis for Engineers', grade: '94%' },
    { name: 'ES 1050 | Foundations of Engineering Practice', grade: '97%' },
    { name: 'UWO In-Course Scholarships Year II & Year III', grade: '2022, 2023' },
    { name: 'Faculty Association Scholarship in Engineering', grade: '2022' },
    { name: 'Chris Lakich and Family Engineering Award', grade: '2023' },
    { name: 'ECE 2238 | Intro to Electrical Engineering', grade: '96%' },
    { name: 'MATH 2151 | Discrete Structures for Engineering', grade: '93%' },
    { name: 'NMM 2270 | Advanced Mathematics for Engineering', grade: '93%' },
    { name: 'NMM 2276 | Applied Math for Electrical Engineering', grade: '92%' },
    { name: 'ECE 2277 | Intro to Digital Logic Systems', grade: '99%' },
    { name: 'SE 2202 | Scripting Language Fundamentals', grade: '94%' },
    { name: 'SE 2205 | Algorithms and Data Structures', grade: '98%' },
    { name: 'SE 2250 | Applications of Software Construction', grade: '99%' },
    { name: 'STATS 2141 | Applied Probabilities and Statistics', grade: '100%' },
    { name: 'ECE 4436 | Networking Principles and Architectures', grade: '90%' },
    { name: 'SE 3316 | Introduction to Web Technologies', grade: '98%' },
    { name: 'SE 3309 | Database Management Systems', grade: '93%' },
    { name: 'SE 3351 | Software Project Management', grade: '96%' },
    { name: 'SE 3352 | Software Requirements and Analysis', grade: '96%' }
];

export default function MainPage() {
    return (
        <div>
            <div className="flex flex-col items-start lg:items-center">
                <div className="container mx-auto">
                    <h1 className="text-accent font-courier sm:mx-2 lg:mx-10 mb-5 self-start">David Tam <span className="text-2xl">- Currently Working @ Yumebau Inc.</span></h1>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-10 sm:mx-2 lg:mx-10 mb-10">
                        <div className="col-span-3 flex flex-col pr-5 justify-center items-center">
                            <Lottie animationData={motherboard}></Lottie>
                        </div>
                        <div className="col-span-7 border-[1px] rounded-3xl border-tertiary lg:max-h-[350px] text-accent p-10 max-w-500">
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
                    <div className="grid sm:grid-cols-2 lg:grid-cols-10 sm:mx-2 lg:mx-10">
                        <div className="col-span-7 border-[1px] rounded-3xl border-tertiary lg:max-h-500 text-accent max-w-500">
                            <Link href="/oec">
                                <div className="rounded-lg text-accent">
                                    <div className="relative w-full h-96 rounded-t-3xl overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-center bg-cover"
                                            style={{ backgroundImage: `url(${splashImage.src})`, opacity: 0.75 }}
                                        ></div>
                                        <div className="relative">
                                            <p className="p-5 font-bold text-accent text-lg">FEATURED PROJECT</p>
                                        </div>
                                    </div>
                                    <div className="p-10">
                                        <h2 className="font-courier text-3xl"><span className="font-sans font-bold text-secondary">WINNER</span> Provincial Programming Competition</h2>
                                        <h2 className="font-courier text-xl mt-1">Developing engaging tools to overcome learning disabilities.</h2>
                                        <div className="mt-8 flex flex-row justify-between font-bold text-secondary">
                                            <p>JANUARY 2024</p>
                                            <p>ONTARIO ENGINEERING COMPETITION</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-span-3 mt-10 lg:my-0 flex flex-col lg:h-full lg:ml-10 p-10 justify-between items-center border-[1px] rounded-3xl border-tertiary text-accent">
                            <Lottie animationData={game}></Lottie>
                            <p className="text-lg pt-5 lg:pt-0 font-courier text-secondary font-bold text-center">Hello, World!</p>
                            <p className="text-md xl:text-lg pt-5 lg:pt-0 font-courier text-accent">My name is David, and I am a third-year full-stack Software Engineering student passionate in the process, from ideation to creation.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-accent mx-2 lg:mx-10 mt-10 mb-5">ACADEMIC ACHIEVEMENTS<span className="text-m font-normal font-courier"> - 4.0 Cumulative GPA (2021-2024)</span></h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-10 sm:mx-2 lg:mx-10 mb-10 max-h-[150px]">
                        <div className="col-span-7 border-[1px] rounded-3xl border-tertiary text-accent max-h-[150px]p-10 max-w-500 overflow-hidden flex items-center">
                            <motion.div
                                className="flex items-center justify-center"
                                initial={{ x: 900 }}
                                animate={{ x: -6000 }}
                                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                            >
                                {courses.map((course, index) => (
                                    <div key={index} className="w-[300px] lg:h-[150px] lg:mt-5 px-4 py-2 text-accent flex flex-col justify-between items-center">
                                        <p className="font-bold text-lg text-center text-secondary">{course.name}</p>
                                        <p className="text-center lg:mb-10">{course.grade}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                        <div className="col-span-3 sm:hidden lg:flex justify-center items-center max-h-[150px] lg:max-w-[300px] ml-10">
                            <Lottie animationData={pencil}></Lottie>
                        </div>
                    </div>
                </div >
            </div >
            <div className="my-15">
                <Footer home={true} />
            </div>
        </div>
    );
}
