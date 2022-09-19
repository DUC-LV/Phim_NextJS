import instance from "../service/axiosClient";

const getMovieTheater = {
	getAll(page:number){
		const url = `upcoming?language=en-US&page=${page}`
		return instance.get(url)
	}
}
export default getMovieTheater;