import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState} from "react";
import { Box } from "theme-ui";
import getDetailMovie from "../../service/getDetailMovie";
type Props = {
	dataDetailMovie:Object
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
	console.log(dataDetailMovie);
	return(
		<Box
		sx={{
            color: 'white'
		}}
		>hahadadad</Box>
	)
}
export default MovieDetail;