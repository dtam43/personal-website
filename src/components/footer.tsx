'use client';

import Link from 'next/link';
import {
	ArrowUp,
	ArrowRight,
	ArrowLeft,
	MapPin,
	BookText,
	Github,
	Linkedin,
	Mail,
} from 'lucide-react';

interface props {
	home: boolean;
}

const Footer = ({ home }: props) => {
	return (
		<div>
			<div className="bg-primary text-accent">
				<div className="container mx-auto">
					<div className="flex flex-row justify-between mx-10 my-10">
						<button className="flex gap-5 lg:px-10 sm:px-2 lg:py-3 w-fit items-center rounded-full sm:text-sm lg:text-lg font-courier font-bold text-accent hover:bg-accent hover:text-primary transition-colors border border-text border-opacity-75"
							onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
							<p>Back to Top</p>
							<ArrowUp />
						</button>
						{home ?
							<Link key={0} href={'/projects'} className="flex gap-5 lg:px-10 sm:px-2 lg:py-3 w-fit items-center rounded-full font-courier font-bold sm:text-sm lg:text-lg text-accent hover:bg-accent hover:text-primary transition-colors border border-text border-opacity-75">
								<p>View all Projects</p>
								<ArrowRight />
							</Link> :
							<Link key={0} href={'/'} className="flex gap-5 lg:px-10 sm:px-2 lg:py-3 w-fit items-center rounded-full font-courier font-bold sm:text-sm lg:text-lg text-accent hover:bg-accent hover:text-primary transition-colors border border-text border-opacity-75">
								<p>Return to Home</p>
								<ArrowLeft />
							</Link>}
						<Link key={1} href="https://uwoca-my.sharepoint.com/:b:/g/personal/dtam43_uwo_ca/EflABfYw4fNBuA4EAGFM4iUBgdZbvbzUDCPR6RUig41lLw?e=cXVOhc" target="_blank" rel="noopener noreferrer" className="flex gap-5 lg:px-10 sm:px-2 lg:py-3 w-fit items-center rounded-full font-courier font-bold sm:text-sm lg:text-lg text-accent hover:bg-accent hover:text-primary transition-colors border border-text border-opacity-75">
							<p>View Resume</p>
							<BookText />
						</Link>
						<Link key={2} href="https://github.com/dtam43" target="_blank" rel="noopener noreferrer" className="flex gap-5 lg:px-5 sm:px-2 lg:py-3 w-fit items-center rounded-full text-lg text-accent hover:bg-accent hover:text-primary transition-colors border border-text border-opacity-75">
							<Github />
						</Link>
						<Link key={3} href="https://www.linkedin.com/in/dtam0915/" target="_blank" rel="noopener noreferrer" className="flex gap-2 lg:px-5 sm:px-2 lg:py-3 w-fit items-center rounded-full text-lg text-accent hover:bg-accent hover:text-primary transition-colors border border-text border-opacity-75">
							<Linkedin />
						</Link>
						<Link key={4} href="mailto:dtam43@uwo.ca" target="_blank" rel="noopener noreferrer" className="flex gap-2 lg:px-5 sm:px-2 lg:py-3 w-fit items-center rounded-full text-lg text-accent hover:bg-accent hover:text-primary transition-colors border border-text border-opacity-75">
							<Mail />
						</Link>

					</div>
					<div className="flex flex-row justify-between pb-8 mx-10">
						<div className="flex justify-center font-sans font-bold">
							<p>CREATED BY DAVID TAM</p>
						</div>
						<div className="flex justify-center font-sans font-bold text-sm">
							<div className="flex space-x-2">
								<MapPin />
								<p>LONDON, ON, CANADA</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
