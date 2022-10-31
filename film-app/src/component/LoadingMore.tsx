import React, {useCallback, useEffect, useState} from "react";
import { Box, Text, Image } from "theme-ui";
import InfiniteScroll from 'react-infinite-scroll-component';
import { convertSlug, showImage } from "../untils";
import ListOfShare from "./ListOfShare";
import { useRouter } from "next/router";
type Props = {
    title?:string,
    fetchData :() => void;
    items?:Array<object>,
    hasMore?:boolean,
}
const LoadingMore = ({ title, fetchData, items, hasMore }:Props) => {
	const router = useRouter();
	return(
		<Box>
			<Text
				as="h2"
				sx={{
					color: '#989898',
					"@media only screen and (max-width: 768px)": {
						margin: "10px 10px 0px 20px",
					},
					"@media only screen and (min-width: 768px) and (max-width: 1023px)": {
						margin: "10px 40px 0px 60px",
					},
					"@media only screen and (min-width: 1024px) and (max-width: 1123px)": {
						margin: "10px 100px 0px 110px",
					},
					"@media only screen and (min-width: 1124px)": {
						margin: "10px 200px 0px 200px",
					}
				}}
			>{title}</Text>
			<InfiniteScroll
				dataLength={Number(items?.length)}
				next = {fetchData}
				hasMore = {Boolean(hasMore)}
				loader={<h4>...</h4>}
            >
				<ListOfShare>
					{items?.map((item:any, index:any) => {
						if(item?.poster_path == null){
							item.poster_path = "/iXfBBbIXBieCApytWqwsA2gC7xH.jpg"
						}
						return(
							// eslint-disable-next-line react/jsx-key
							<Box
							key={index}
							>
								<Image
									alt=""
									src = {showImage+item.poster_path}
									sx={{
										transform: "scale(1)",
										cursor: "pointer",
										borderRadius: '8px',
										":hover": {
											transform: "scale(1.01)",
											border: "3px solid red",
										},
										width: '90%',
										"@media only screen and (max-width: 768px)": {
											width: '20%',
											height: '100px',
										},
										"@media only screen and (min-width: 768px) and (max-width: 1023px)": {
											height: '150px',
											width: '100%',
										},
										"@media only screen and (min-width: 1024px) and (max-width: 1123px)": {
											height: '230px',
											width: '100%',
										},
										"@media only screen and (min-width: 1124px)": {
											height: '260px',
										}
									}}
									onClick={() => {
										router.push({
											pathname: "/movie/[slugMovie]",
											query: { 
												slugMovie: convertSlug(item?.title),
												id: item?.id
											}
										})
									}}
								/>
							</Box>
						)
					})}
				</ListOfShare>
            </InfiniteScroll>
		</Box>
	)
}
export default LoadingMore;