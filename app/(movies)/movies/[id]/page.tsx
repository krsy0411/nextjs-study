import { Suspense } from "react";
import MovieInfo, {
	getMovie,
} from "../../../../components/movie-info/movie-info";
import MovieVideos from "../../../../components/movie-videos/movie-videos";

interface IParams {
	params: {
		id: string;
	};
}

// export를 안 하면, metadata를 생성할 수 없다.
// 메타데이터는 서버 컴포넌트에서만 생성 가능
export async function generateMetadata({ params: { id } }: IParams) {
	// 최선 버전의 next는 api 응답값을 캐싱하기 때문에, 여러 번 호출해도 요청이 매번 날아가는게 아님
	const movie = await getMovie(id);
	return {
		title: movie.title,
	};
}

export default function MovieDetail({ params: { id } }: IParams) {
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
