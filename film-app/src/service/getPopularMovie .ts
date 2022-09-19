import instance from "../service/axiosClient";

const getPopularMovie = {
	getAll(page:number){
		const url = `popular?language=en-US&page=${page}`
		return instance.get(url)
	}
}
export default getPopularMovie;