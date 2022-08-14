/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React, { useEffect, useState} from "react";
import { Box } from "theme-ui";
import getDetailMovie from "../../service/getDetailMovie";

const slugMovie = () => {
	// console.log(router.query.id);
	const router = useRouter();
	useEffect(() => {
		console.log("haha")
        if(router.query.id){
            getDetailMovie.getAll(Number(router.query.id))
                .then(res => {
                    // setFilmInformation(res.data)
                })
            // getRecommendMovie.getAll(del.id,1)
            //     .then(res => {
            //         if(res?.data?.results && res.data.results.length > 0){
            //             setItems(res.data.results)
            //             setPage(2)
            //     }
            //     })
        }
    },[router.query.id])
	return(
		<Box
		sx={{
			mt: "200px",
			ml: "100px",

		}}
		>hah</Box>
	)
}
export default slugMovie;