import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info/movie-info";
import MovieVideos from "../../../../components/movie-videos/movie-videos";

export default function MovieDetail({
	params: { id },
}: {
	params: { id: string };
}) {
	return (
		<div>
			<Suspense fallback={<h1>Loading movie info</h1>}>
				<MovieInfo id={id} />
			</Suspense>
			<Suspense fallback={<h1>Loading movie videos</h1>}>
				<MovieVideos id={id} />
			</Suspense>
		</div>
	);
}
