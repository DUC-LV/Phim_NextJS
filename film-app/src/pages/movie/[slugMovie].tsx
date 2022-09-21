import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React,{ useEffect, useState,useCallback } from "react";
import { Box, Flex,Text } from "theme-ui";
import VideoPlayer from "../../container/Video";
import getDetailMovie from "../../service/getDetailMovie";
import getRecommendMovie from "../../service/getRecommendMovie ";
// export interface DataDetailMovie {
// 	name: string;
// 	acotor:Array<any>;
// 	overview:string;
// 	release_date:string;
// }
// type Props = {
// 	dataDetailMovie:DataDetailMovie,
// }
// export const getServerSideProps: GetServerSideProps<Props> = async ( {query} ) => {
// 	const { id } = query;
// 	const resDataDetailMovie = await getDetailMovie.getAll(Number(id));
// 	return{
// 		props: {
// 			dataDetailMovie: resDataDetailMovie.data,
// 		}
// 	}
// }
const MovieDetail = () => {
	const router = useRouter();
    const [items, setItems] = useState<any>([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
	const [dataDetail, setDataDetail] = useState<any>();
	useEffect(() => {
		if(router.query.id){
			getDetailMovie.getAll(Number(router.query.id))
			.then(res => {
				setDataDetail(res.data)
			})
			getRecommendMovie.getAll(Number(router.query.id),1)
				.then(res => {
					if(res?.data?.results && res.data.results.length > 0){
						setItems(res.data.results)
						setPage(2)
					}
				})
		}
	},[router.query.id])
	const fetchData = useCallback(() => {
        getRecommendMovie.getAll(Number(router.query.id),page).then(res => {
            if(!page && !items){
                    return
            }
            setItems([...items,...res.data.results])
        })
        if(items.length === 0 ){ 
            setHasMore(false)
        }
        setPage(page+1)
}, [page, items,router.query.id]);
	return(
		<Flex
			sx={{
				"@media only screen and (max-width: 768px)": {
					flexDirection: 'column',
				},
				"@media only screen and (min-width: 768px) and (max-width: 1023px)": {
					flexDirection: 'column',
				},
				"@media only screen and (min-width: 1024px) and (max-width: 1123px)": {
					flexDirection: 'column',
				},
				"@media only screen and (min-width: 1124px)": {
					justifyContent: 'center',
				}
			}}
		>
			<VideoPlayer id = {Number(router.query.id)}/>
			<Box
				sx={{
					"@media only screen and (max-width: 768px)": {
						ml: '15px',
					},
					"@media only screen and (min-width: 768px) and (max-width: 1023px)": {
						ml: '15px',
					},
					"@media only screen and (min-width: 1024px) and (max-width: 1123px)": {
						ml: '15px',
					},
					"@media only screen and (min-width: 1124px)": {
						justifyContent: 'center',
						ml: '20px'
					},
				}}
			>
				<Text
					as="h2"
					sx={{
						color: 'white'
					}}
				>{dataDetail?.original_title}</Text><br />
				<Text
					as="p"
					sx={{
						color: '#989898',

						"@media only screen and (min-width: 1124px)": {
							display: 'block',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							wordWrap: 'break-word',
							maxHeight: '9em',
							lineHeight: '1.8em',
							maxWidth: '450px',
						},
					}}
				>{dataDetail?.overview}</Text>
			</Box>
		</Flex>
	)
}
export default MovieDetail;