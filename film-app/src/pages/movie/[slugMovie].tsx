import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Box, Flex } from "theme-ui";
import getDetailMovie from "../../service/getDetailMovie";
export interface DataDetailMovie {
	adult: boolean;
}
type Props = {
	dataDetailMovie:DataDetailMovie,
}
export const getServerSideProps: GetServerSideProps<Props> = async ( {query} ) => {
	const { id } = query;
	const resDataDetailMovie = await getDetailMovie.getAll(Number(id));
	return{
		props: {
			dataDetailMovie: resDataDetailMovie.data,
		}
	}
}
const MovieDetail = ({ dataDetailMovie }: Props) => {
	console.log(dataDetailMovie?.adult)
	return(
		<Flex></Flex>
	)
}
export default MovieDetail;