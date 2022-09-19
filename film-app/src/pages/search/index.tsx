import React, { useState, useEffect, useCallback } from "react";
import { Box, Flex, Text } from "theme-ui";
import { useRouter } from "next/router";
import getSearchMovieByName from "../../service/getSearchMovieByName";
import LoadingMore from "../../component/LoadingMore";

const Search = () => {
	const [items, setItems] = useState<any>([]);
	const [page, setPage] = useState(0);
	const [hasMore, setHasMore] = useState(true);
	const router = useRouter();
	useEffect(() => {
		if(router.query.q){
			getSearchMovieByName(router.query.q,1)
				.then(res => {
					setItems(res.data.results)
					setPage(2)
				})
		}
	},[router.query.q])
	const fetchData = useCallback(() => {
		getSearchMovieByName(router.query.q,page).then(res => {
			if(!page && !items){
				return
			}
			setItems([...items,...res.data.results])
	})
	if(items.length === 0 ){ 
			setHasMore(false)
	}
	setPage(page+1)
	}, [page, items, router.query.q]);
	return(
		<Box>
			<Flex
				sx={{
					"@media only screen and (max-width: 768px)": {
						margin: "10px 20px 0px 20px",
					},
					"@media only screen and (min-width: 768px) and (max-width: 1023px)": {
						margin: "10px 60px 0px 60px",
					},
					"@media only screen and (min-width: 1024px) and (max-width: 1123px)": {
						margin: "10px 110px 0px 110px",
					},
					"@media only screen and (min-width: 1124px)": {
						margin: "10px 200px 0px 200px",
					}
				}}
			>
				<Text as='h2' sx={{ color: '#989898'}}>Kết quả tìm kiếm cho</Text>&ensp;
				<Text as='h2' sx={{ color: 'red'}}>{`${router.query.q}`}</Text>
			</Flex>
			<LoadingMore
				title=""
				fetchData = {fetchData}
				hasMore = {hasMore}
				items = {items}
			/>
		</Box>
	)
}
export default Search;