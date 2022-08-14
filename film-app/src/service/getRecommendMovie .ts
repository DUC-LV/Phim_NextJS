import instance from "./axiosClient";

const getRecommendMovie  = {
	getAll(id:number, page: number){
		const url = `${id}/recommendations?language=en-US&page=${page}`
		return instance.get(url)
	}
}
export default getRecommendMovie ;