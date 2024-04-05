import Link from 'next/link';
import Footer from '../..//components/footer';
import oecSplash from '../../assets/oec_splash.jpg';
import wecSplash from '../../assets/wec_splash.png';
import pickproSplash from '../../assets/pickpro_splash.png';
import ruinraiderSplash from '../../assets/ruinraider_splash.jpeg';

type Project = {
	name: string;
	desc: string;
	keyword: string;
	src: string;
	img: string;
	href: string;
	date: string;
	topic1: string;
	topic2: string;
};

const projects: Project[] = [
	{ name: "Letter Ninja", desc: "tool to overcome learning disabilities.", keyword: "engaging", src: oecSplash.src, img: oecSplash.src, href: "/oec", date: "JAN 2024", topic1: "ONTARIO ENGINEERING", topic2: "COMPETITION-WINNER" },
	{ name: "Tempest Tracker", desc: "tool to locate natural disasters.", keyword: "efficient", src: wecSplash.src, img: wecSplash.src, href: "/wec", date: "JAN 2024", topic1: "WESTERN ENGINEERING", topic2: "COMPETITION-WINNER" },
	{ name: "PickPro", desc: "tool to improve musical performance.", keyword: "accessible", src: pickproSplash.src, img: pickproSplash.src, href: "/pickpro", date: "SUMMER 2023", topic1: "PERSONAL PROJECT", topic2: "" },
	{ name: "Ruin Raider", desc: "top-down dungeon-crawling experience.", keyword: "addictive", src: ruinraiderSplash.src, img: ruinraiderSplash.src, href: "/ruinraider", date: "APRIL 2023", topic1: "TERM PROJECT FOR SE 2250", topic2: "" }
]

export default async function Projects() {
	return (
		<div>
			<div className="flex flex-col items-start lg:items-center">
				<div className="container mx-auto">
					<h1 className="text-accent font-courier sm:mx-2 lg:mx-10 mb-5 self-start">Projects</h1>
					<div className="grid sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-2">
						{projects.map((project, index) => {
							return (
								<div className="col-span-1 border-[1px] rounded-3xl border-tertiary lg:max-h-300 text-accent max-w-3xl ml-10 my-10">
									<Link href={project.href}>
										<div className="rounded-lg text-accent">
											<div className="relative w-full h-72 rounded-t-3xl overflow-hidden">
												<div
													className="absolute inset-0 bg-center bg-cover"
													style={{ backgroundImage: `url(${project.src})`, opacity: 0.75 }}
												></div>
											</div>
											<div className="p-10">
												<h2 className="font-courier text-3xl">{project.name}</h2>
												<h2 className="font-courier text-xl mt-1">An <span className="font-bold text-secondary">{project.keyword}</span> {project.desc}</h2>
												<div className="text-xs mt-8 flex flex-row justify-between items-center font-bold text-secondary">
													<p>{project.date}</p>
													<div>
														<p>{project.topic1}</p>
														{project.topic2 && <p className="text-right">{project.topic2}</p>}
													</div>
												</div>
											</div>
										</div>
									</Link>
								</div>
							)
						})}
					</div>
				</div >
			</div >
			<div className="my-15">
				<Footer home={false} />
			</div>
		</div>
	);
}
