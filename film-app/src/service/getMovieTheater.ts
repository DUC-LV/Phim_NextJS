import instance from "../service/axiosClient";

const getMovieTheater = {
	getAll(){
		const url = `upcoming?language=en-US&page=1`
		return instance.get(url)
	}
}
export default getMovieTheater;