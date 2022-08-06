import React, { useState, useEffect } from "react";
import { Box } from "theme-ui";
import getNowPlaying from "../service/getNowPlaying";
import {GetServerSideProps} from "next"
import getTopMovie from "../service/getTopMovie";
import Slide from "../container/Slide";
import { showImage } from "../untils";
type Props = {
	dataNowPlaying:Array<Object>;
	dataTopMovie:Array<Object>;
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const resDataNowPlaying = await getNowPlaying.getAll();
	const resDataTopMovie = await getTopMovie.getAll();
	return{
		props: {
			dataNowPlaying: resDataNowPlaying.data.results,
			dataTopMovie: resDataTopMovie.data.results,
		}
	}
}
const Home = ({ dataNowPlaying, dataTopMovie }: Props) => {
	// console.log("dataNowPlaying",dataNowPlaying)
	// console.log("dataTopMovie",dataTopMovie)
	return(
		<Box>
			<Slide
				dataSlide={dataTopMovie?.map((item:any) => {
					return {
						image: showImage+item?.backdrop_path,
						name: item?.title,
						id: item?.id
					}
				})}
			/>
		</Box>
	)
}

export default Home;
