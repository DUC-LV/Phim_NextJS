import React, { useState, useEffect } from "react";
import { Box } from "theme-ui";
import { useRouter } from "next/router";
import getSearchMovieByName from "../../service/getSearchMovieByName";

const Search = () => {
	const router = useRouter();
	useEffect(() => {
		if(router.query.q){
			getSearchMovieByName(router.query.q,1)
				.then(res => {
					console.log(res.data)
				})
		}
	},[router.query.q])
	return(
		<Box></Box>
	)
}
export default Search;