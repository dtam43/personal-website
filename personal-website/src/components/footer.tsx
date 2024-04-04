'use client';

import Image from 'next/image';
import { Gavel, MapPin, Scale, Star, X } from 'lucide-react';
import * as Popover from '@radix-ui/react-popover';
import Link from 'next/link';

import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

import {
	Home,
	ArrowUp,
	ArrowRight,
	BookText,
	Github,
	Linkedin,
	Mail,
	MenuIcon,
	HeartHandshake,
	MessageCircleQuestion
} from 'lucide-react';

type Link = {
	label: string;
	href: string;
	icon: ReactNode;
};

const links: Link[] = [
	{ label: 'HOME', href: '/', icon: <Home /> },
	{ label: 'PROJECTS', href: '/projects', icon: <MessageCircleQuestion /> },
	{ label: 'CONTACT', href: '/contact', icon: <Mail /> }
];

const NavBarLink = ({ href, label, icon }: Link) => {
	return (
		<Link
			key={href}
			className="flex gap-2 px-4 py-2 w-fit items-center rounded-full text-accent hover:bg-accent hover:text-primary transition-colors border border-accent border-opacity-25"
			href={href}
		>
			{icon}
			{label}
		</Link>
	);
};

const Footer = () => {
	return (
		<div>
			<div className="bg-primary bg-opacity-90 border-t-[1px] border-tertiary text-accent px-10">
				<div className="flex flex-row justify-between mx-10 my-10">
					<button className="flex gap-5 px-10 py-3 w-fit items-center rounded-full text-lg font-courier font-bold text-accent hover:bg-accent hover:text-primary transition-colors border border-text border-opacity-75"
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
						<p>Back to Top</p>
						<ArrowUp />
					</button>
					<Link key={0} href={'/projects'} className="flex gap-5 px-10 py-3 w-fit items-center rounded-full font-courier font-bold text-lg text-accent hover:bg-accent hover:text-primary transition-colors border border-text border-opacity-75">
						<p>View All Projects</p>
						<ArrowRight />
					</Link>
					<Link key={1} href="https://uwoca-my.sharepoint.com/:b:/g/personal/dtam43_uwo_ca/EflABfYw4fNBuA4EAGFM4iUBgdZbvbzUDCPR6RUig41lLw?e=cXVOhc" target="_blank" rel="noopener noreferrer" className="flex gap-5 px-10 py-2 w-fit items-center rounded-full font-courier font-bold text-lg text-accent hover:bg-accent hover:text-primary transition-colors border border-text border-opacity-75">
						<p>View Resume</p>
						<BookText />
					</Link>
					<Link key={2} href="https://github.com/dtam43" target="_blank" rel="noopener noreferrer" className="flex gap-5 px-5 py-2 w-fit items-center rounded-full text-lg text-accent hover:bg-accent hover:text-primary transition-colors border border-text border-opacity-75">
						<Github />
					</Link>
					<Link key={3} href="https://www.linkedin.com/in/dtam0915/" target="_blank" rel="noopener noreferrer" className="flex gap-2 px-5 py-2 w-fit items-center rounded-full text-lg text-accent hover:bg-accent hover:text-primary transition-colors border border-text border-opacity-75">
						<Linkedin />
					</Link>
					<Link key={4} href="mailto:dtam43@uwo.ca" target="_blank" rel="noopener noreferrer" className="flex gap-2 px-5 py-2 w-fit items-center rounded-full text-lg text-accent hover:bg-accent hover:text-primary transition-colors border border-text border-opacity-75">
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
	);
};

export default Footer;
