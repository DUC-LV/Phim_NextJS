import instance from "./axiosClient";

const getMyFilm =  {
	getAll(){
		const url = `latest?&language=en-US`;
		return instance.get(url)
	}
}
export default getMyFilm;