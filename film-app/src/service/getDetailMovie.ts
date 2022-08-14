import instance from "./axiosClient";

const getDetailMovie = {
	getAll(id:number){
		const url = `${id}?language=en-US&page=2`
		return instance.get(url)
	}
}
export default getDetailMovie;
// import axios from "axios";
// const getDetailMovie = (id: number) => {
// 	return axios.get(`
// 	https://api.themoviedb.org/3/movie/${id}?api_key=beb36572ce908c61fa2c0585f6e2ced8&language=en-US`)
// }
// export default getDetailMovie;