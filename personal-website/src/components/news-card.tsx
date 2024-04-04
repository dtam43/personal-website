'use client';

import Link from 'next/link';
import { BookOpen } from 'lucide-react';

interface NewsCardProps {
	postID: string;
	postName: string;
	postDate: Date;
	thumbnailURL: string;
	postBody: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ postID, postName, postDate, thumbnailURL }) => {

	return (
		<div className="border-[1px] rounded-3xl">
			<img
				src={thumbnailURL}
				alt={postName}
				className="border-b-[1px] rounded-t-3xl object-cover h-64 w-full"
			/>
			<div className="grid grid-cols-3 p-7">
				<div className="col-span-2">
					<Link href={`/news/${postID}`}>
						<h2 className="text-text leading-tight hover:underline">{postName}</h2>
					</Link>
					<p className="text-sm text-tertiary font-semibold pt-1">
						{postDate
							.toLocaleDateString('en-US', {
								year: '2-digit',
								month: 'numeric',
								day: 'numeric'
							})
							.toUpperCase()}
					</p>
				</div>
				<div className="flex justify-end items-end">
					<Link href={`/news/${postID}`}>
						<button className="flex flex-row gap-2 w-fit h-fit">
							READ
							<BookOpen />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
