import React, { useCallback, useEffect, useState } from "react";
import { Box } from "theme-ui";
import LoadingMore from "../component/LoadingMore";
import getPopularMovie from "../service/getPopularMovie ";

const PopularMovie = () => {
	const [items, setItems] = useState<any>([]);
	const [page, setPage] = useState(0);
	const [hasMore, setHasMore] = useState(true);
	useEffect(() => {
		getPopularMovie.getAll(1)
			.then(res => {
				setItems(res.data.results)
				setPage(2)
			})
	},[])
	const fetchData = useCallback(() => {
		getPopularMovie.getAll(page).then(res => {
			if(!page && !items){
				return
			}
			setItems([...items,...res.data.results])
	})
	if(items.length === 0 ){ 
			setHasMore(false)
	}
	setPage(page+1)
	}, [page, items]);
	return(
		<Box>
			<LoadingMore
				title="Phim thịnh hành"
				fetchData = {fetchData}
				hasMore = {hasMore}
				items = {items}
			/>
		</Box>
	)
}
export default PopularMovie;