export default function MovieDetail({
	params: { id },
}: {
	params: { id: string };
}) {
	console.log(`id는 다음과 같습니다 - ${id}`);
	return <h1>Movie {id}</h1>;
}
