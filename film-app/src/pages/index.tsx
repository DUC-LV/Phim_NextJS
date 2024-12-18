import React, { useState, useEffect } from "react";
import { Box, Image } from "theme-ui";
import getNowPlaying from "../service/getNowPlaying";
import {GetServerSideProps} from "next"
import getTopMovie from "../service/getTopMovie";
import getMovieTheater from "../service/getMovieTheater";
import getPopularMovie from "../service/getPopularMovie ";
import Slide from "../container/Slide";
import { showImage } from "../untils";
import SlideShow from "../container/SlideShow";
import ChecboxSelected from '../assets/icon/CheckboxSelected.svg';
import ChecboxMinus from '../assets/icon/CheckboxMinus.svg';

type Props = {
	dataNowPlaying:Array<Object>;
	dataTopMovie:Array<Object>;
	dataMovieTheater:Array<Object>;
	dataPopularMovie:any;
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const resDataNowPlaying = await getNowPlaying.getAll();
	const resDataTopMovie = await getTopMovie.getAll();
	const resMovieTheater = await getMovieTheater.getAll(1);
	const resPopularMovie =await getPopularMovie.getAll(1);
	return{
		props: {
			dataNowPlaying: resDataNowPlaying.data.results,
			dataTopMovie: resDataTopMovie.data.results,
			dataMovieTheater:resMovieTheater.data.results,
			dataPopularMovie:resPopularMovie.data.results,
		}
	}
}
const Home = ({ dataNowPlaying, dataTopMovie, dataMovieTheater, dataPopularMovie}: Props) => {
	return(
		<Box>
			<ChecboxSelected />
			<ChecboxMinus />
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
						image: showImage+item?.poster_path,
						name: item?.title,
						id: item?.id,
						vote_average: item?.vote_average,
					}
				})}
				name="Phim Chiếu Rạp"
			/>
			<SlideShow
				dataSlide={dataPopularMovie?.map((item:any) => {
					return {
						image: showImage+item?.poster_path,
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
