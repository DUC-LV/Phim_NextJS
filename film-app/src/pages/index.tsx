import React, { useState, useEffect } from "react";
import { Box } from "theme-ui";
import getNowPlaying from "../service/getNowPlaying";
import {GetServerSideProps} from "next"
import getTopMovie from "../service/getTopMovie";
import getMovieTheater from "../service/getMovieTheater";
import getPopularMovie from "../service/getPopularMovie ";
import getCartoonMovie from "../service/getCartoonMovie";
import Slide from "../container/Slide";
import { showImage } from "../untils";
import SlideShow from "../container/SlideShow";
type Props = {
	dataNowPlaying:Array<Object>;
	dataTopMovie:Array<Object>;
	dataMovieTheater:Array<Object>;
	dataPopularMovie:any;
	// dataMyFilm:any;
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const resDataNowPlaying = await getNowPlaying.getAll();
	const resDataTopMovie = await getTopMovie.getAll();
	const resMovieTheater = await getMovieTheater.getAll();
	const resPopularMovie =await getPopularMovie.getAll();
	// const resDataMyFilm = await getMyFilm.getAll();
	return{
		props: {
			dataNowPlaying: resDataNowPlaying.data.results,
			dataTopMovie: resDataTopMovie.data.results,
			dataMovieTheater:resMovieTheater.data.results,
			dataPopularMovie:resPopularMovie.data.results,
			// dataMyFilm:resDataMyFilm.data.results,
		}
	}
}
const Home = ({ dataNowPlaying, dataTopMovie, dataMovieTheater, dataPopularMovie}: Props) => {
	// console.log("dataNowPlaying",dataNowPlaying)
	// console.log("dataTopMovie",dataTopMovie)
	// console.log("dataMovieTheater", dataMovieTheater)
	// console.log("dataPopularMovie", dataPopularMovie)
	const [dataCartoonMovie, setDataCartoonMovie] = useState<any>();
	// console.log("dataCartoonMovie", dataCartoonMovie)
	// useEffect(() => {
	// 	getCartoonMovie(1)
	// 	.then((res:any) => {
	// 		setDataCartoonMovie(res.data.results)
	// 	})
	// },[])
	return(
		<Box>
			<Slide 
				dataSlide={dataTopMovie?.map((item:any) => {
					return {
						image: showImage+item?.backdrop_path,
						name: item?.title,
						id: item?.id,
						overview: item?.overview,
						release_date: item?.release_date,
						vote_average: item?.vote_average,
					}
				})}
			/>
			<SlideShow
				dataSlide={dataNowPlaying?.map((item:any) => {
					return {
						image: showImage+item?.poster_path,
						name: item?.title,
						id: item?.id,
						vote_average: item?.vote_average,
					}
				})}
				name="Đang Phát"
			/>
			<SlideShow
				dataSlide={dataMovieTheater?.map((item:any) => {
					return {
						image: item?.poster_path,
						name: item?.title,
						id: item?.id,
						vote_average: item?.vote_average,
					}
				})}
				name="Phim Chiếu Rạp"
			/>
			<SlideShow
				dataSlide={dataCartoonMovie?.map((item:any) => {
					return {
						image: item?.poster_path,
						name: item?.title,
						id: item?.id,
						vote_average: item?.vote_average,
					}
				})}
				name="Phim Hoạt Hình"
			/>
			<SlideShow
				dataSlide={dataPopularMovie?.map((item:any) => {
					return {
						image: item?.poster_path,
						name: item?.title,
						id: item?.id,
						vote_average: item?.vote_average,
					}
				})}
				name="Phim Thịnh Hành"
			/>
		</Box>
	)
}

export default Home;
