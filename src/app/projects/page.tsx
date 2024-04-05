import Link from 'next/link';
import Footer from '@/components/footer';
import oecSplash from '@/assets/oec_splash.jpg';
import wecSplash from '@/assets/wec_splash.png';
import pickproSplash from '@/assets/pickpro_splash.png';
import ruinraiderSplash from '@/assets/ruinraider_splash.jpeg';

export default async function Projects() {
	return (
		<div>
			<div className="flex flex-col items-start lg:items-center">
				<div className="container mx-auto">
					<h1 className="text-accent font-courier sm:mx-2 lg:mx-10 mb-5 self-start">Projects</h1>
					<div className="grid sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mx-2">
						<div className="col-span-1 border-[1px] rounded-3xl border-tertiary lg:max-h-[500px] text-accent max-w-3xl ml-10 my-10">
							<Link href="/oec">
								<div className="rounded-lg text-accent">
									<div className="relative w-full h-72 rounded-t-3xl overflow-hidden">
										<div
											className="absolute inset-0 bg-center bg-cover"
											style={{ backgroundImage: `url(${oecSplash.src})`, opacity: 0.75 }}
										></div>
									</div>
									<div className="p-10">
										<h2 className="font-courier text-3xl">Letter Ninja</h2>
										<h2 className="font-courier text-xl mt-1">An <span className="font-bold text-secondary">engaging</span> tool to overcome learning disabilities.</h2>
										<div className="text-xs mt-8 flex flex-row justify-between font-bold text-secondary">
											<p>JAN 2024</p>
											<p>ONTARIO ENGINEERING COMPETITION</p>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-span-1 border-[1px] rounded-3xl border-tertiary lg:max-h-[500px] text-accent max-w-3xl ml-10 my-10">
							<Link href="/wec">
								<div className="rounded-lg text-accent">
									<div className="relative w-full h-72 rounded-t-3xl overflow-hidden">
										<div
											className="absolute inset-0 bg-center bg-cover"
											style={{ backgroundImage: `url(${wecSplash.src})`, opacity: 0.75 }}
										></div>
									</div>
									<div className="p-10">
										<h2 className="font-courier text-3xl">Tempest Tracker</h2>
										<h2 className="font-courier text-xl mt-1">An <span className="font-bold text-secondary">efficient</span> tool to locate natural disasters.</h2>
										<div className="text-xs mt-8 flex flex-row justify-between font-bold text-secondary">
											<p>JAN 2024</p>
											<p>WESTERN ENGINEERING COMPETITION </p>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-span-1 border-[1px] rounded-3xl border-tertiary lg:max-h-[500px] text-accent max-w-3xl ml-10 my-10">
							<Link href="/pickpro">
								<div className="rounded-lg text-accent">
									<div className="relative w-full h-72 rounded-t-3xl overflow-hidden">
										<div
											className="absolute inset-0 bg-center bg-cover"
											style={{ backgroundImage: `url(${pickproSplash.src})`, opacity: 0.75 }}
										></div>
									</div>
									<div className="p-10">
										<h2 className="font-courier text-3xl">PickPro</h2>
										<h2 className="font-courier text-xl mt-1">An <span className="font-bold text-secondary">accessible</span> tool to improve musical performance.</h2>
										<div className="text-xs mt-8 flex flex-row justify-between font-bold text-secondary">
											<p>SUMMER 2023</p>
											<p>PERSONAL PROJECT</p>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-span-1 border-[1px] rounded-3xl border-tertiary lg:max-h-[500px] text-accent max-w-3xl ml-10 my-10">
							<Link href="/ruinraider">
								<div className="rounded-lg text-accent">
									<div className="relative w-full h-72 rounded-t-3xl overflow-hidden">
										<div
											className="absolute inset-0 bg-center bg-cover"
											style={{ backgroundImage: `url(${ruinraiderSplash.src})`, opacity: 0.75 }}
										></div>
									</div>
									<div className="p-10">
										<h2 className="font-courier text-3xl">Ruin Raider</h2>
										<h2 className="font-courier text-xl mt-1">An <span className="font-bold text-secondary">addictive</span> top-down dungeon-crawling experience.</h2>
										<div className="text-xs mt-8 flex flex-row justify-between font-bold text-secondary">
											<p>APRIL 2023</p>
											<p>TERM PROJECT FOR SE 2250</p>
										</div>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div >
			</div >
			<div className="my-15">
				<Footer home={false} />
			</div>
		</div>
	);
}
