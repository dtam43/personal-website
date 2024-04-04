import NewsCard from '@/components/news-card';

export default async function News() {
	return (
		<>
			<div className="md:flex md:flex-row md:space-x-10 md:items-center space-y-4 md:space-y-0">
				<h1 className="text-tertiary">News</h1>
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 pt-10">
				<NewsCard
					key={0}
					postID={'1234'}
					postName={'Hello'}
					postDate={new Date()}
					thumbnailURL={'picurl'}
					postBody={'Hello'}
				/>
			</div>
		</>
	);
}
