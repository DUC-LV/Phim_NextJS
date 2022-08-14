import React, { useState, useCallback, useEffect } from "react";
import { Box, Flex, Input, Text, Image, Button } from "theme-ui";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import getTrending from "../service/getTrending";
import { showImage } from "../untils";
import { AiFillStar } from "react-icons/ai";
const SearchBar = () => {
	const [dataTrending, setDataTrending] = useState<Array<any>>()
	// console.log(showImage+dataTrending?.[9]?.backdrop_path)
	useEffect(() => {
		getTrending().then((res:any) => {
			// console.log(res.data.results)
			setDataTrending(res.data.results)
		})
	},[])
	const [searchTxt, setSearchTxt] = useState("");
	const router = useRouter();
	const handleSearch = useCallback(() => {
		if (!searchTxt) return;
		router.push({
			pathname : `/search`,
			query:{q:searchTxt}
		})
	}, [router, searchTxt]);
	return(
		<>
		<Box
			sx={{
				"@media only screen and (max-width: 739px)": {
					display: "none"
				},
				"@media only screen and (min-width: 740px) and (max-width: 1024px)": {
					display: "none"
				},
				"@media only screen and (min-width: 1024px)": {
					display: "block",
					width: "310px",
					height: "100%",
					borderLeft: "2px solid #2b2a2b",
					position: "fixed",
					right: "0px",
					bottom: "1px",
				}
			}}
		>
			<Flex>
				<FiSearch
					style={{
						color: "#989898",
						height: "25px",
						width: "25px",
						position: "relative",
						top: "20px",
						left: "30px",
						cursor: "pointer"
					}} 
					onClick={handleSearch}
				/>
				<Input
					placeholder="Search..."
					sx={{
						height: "48px",
						width: "262px",
						borderRadius: "10px",
						background: "#333335",
						border: "none",
						mt: "10px",
						color: "white",
						textAlign: "center",
						"::placeholder": {
							textAlign: "center"
						},
						":active": {
							border: "none"
						}
					}}
					value={searchTxt}
					onChange={(e: any) => setSearchTxt(e.target.value)}
					onKeyPress = {event => {
						if(event.key === 'Enter'){
							handleSearch();
						}
					}}
				/>
			</Flex>
			<Flex sx={{ml: "25px", mt: "20px"}}>
				<Box
					sx={{
						height: "35px",
						width: "127px",
						borderRadius: "10px",
						background: "#333335",
						cursor: "pointer",
						":hover": {
							background: "#333348"
						}
					}}
				>
					<Text sx={{color: "#969696",position: "relative", top: "4px", ml: "14px"}}>Documentary</Text>
				</Box>
				<Box
					sx={{
						height: "35px",
						width: "105px",
						borderRadius: "10px",
						background: "#333335",
						ml: "15px",
						cursor: "pointer",
						":hover": {
							background: "#333348"
						}
					}}
				>
					<Text sx={{color: "#969696",ml: "14px", position: "relative", top: "4px"}}>Animation</Text>
				</Box>
			</Flex>
			<Flex sx={{ml: "25px", mt: "20px"}}>
				<Box
					sx={{
						height: "35px",
						width: "99px",
						borderRadius: "10px",
						background: "#333335",
						cursor: "pointer",
						":hover": {
							background: "#333348"
						}
					}}
				>
					<Text sx={{color: "#969696",ml: "14px", position: "relative", top: "4px"}}>Romance</Text>
				</Box>
				<Box
					sx={{
						height: "35px",
						width: "140px",
						borderRadius: "10px",
						background: "#333335",
						ml: "15px",
						cursor: "pointer",
						":hover": {
							background: "#333348"
						}
					}}
				>
					<Text sx={{color: "#969696",ml: "14px", position: "relative", top: "4px"}}>Science Fiction</Text>
				</Box>
			</Flex>
			<Flex sx={{ml: "25px", mt: "20px"}}>
				<Box
					sx={{
						height: "35px",
						width: "79px",
						borderRadius: "10px",
						background: "#333335",
						cursor: "pointer",
						":hover": {
							background: "#333348"
						}
					}}
				>
					<Text sx={{color: "#969696",ml: "14px", position: "relative", top: "4px"}}>Drama</Text>
				</Box>
				<Box
					sx={{
						height: "35px",
						width: "79px",
						borderRadius: "10px",
						background: "#333335",
						ml: "15px",
						cursor: "pointer",
						":hover": {
							background: "#333348"
						}
					}}
				>
					<Text sx={{color: "#969696",ml: "14px", position: "relative", top: "4px"}}>Family</Text>
				</Box>
				<Box
					sx={{
						height: "35px",
						width: "74px",
						borderRadius: "10px",
						background: "#333335",
						ml: "15px",
						cursor: "pointer",
						":hover": {
							background: "#333348"
						}
					}}
				>
					<Text sx={{color: "#969696",ml: "14px", position: "relative", top: "4px"}}>Crime</Text>
				</Box>
			</Flex>
			<Text as="h3" sx={{ color: "white", mt:"20px", ml: "25px"}}>Trending</Text>
			<Flex sx={{ml: "25px", mt: "10px"}}>
				<Image 
					alt=""
					src={showImage+dataTrending?.[8]?.backdrop_path}
					sx={{
						height: "180px",
						width: "150px", 
						borderRadius: "10px",
						cursor: "pointer"
					}}
				/>
				<Box sx={{ml: "20px", mt: "20px"}}>
					<Text as="h3" sx={{ color: "white"}}>{dataTrending?.[8]?.original_title}</Text><br></br>
					<Text sx={{ color: "#969696"}}>{dataTrending?.[8]?.release_date}</Text>
					<Flex
						sx={{
							height: "25px",
							width: "46px",
							borderRadius: "10px",
							background: "red",
							cursor: "pointer",
							mt: "10px"
						}}
					>
						<Text
							sx={{
								color: "white",
								ml: "4px"
							}}
						>{dataTrending?.[11]?.vote_average}</Text>
						<AiFillStar 
							style={{
								color: "white",
								float: "right",
								position: "relative",
								top: "4px"
							}}
						/>
					</Flex>
				</Box>
			</Flex>
			<Flex sx={{ml: "25px", mt: "20px"}}>
				<Image 
					alt=""
					src={showImage+dataTrending?.[11]?.backdrop_path}
					sx={{
						height: "180px",
						width: "150px", 
						borderRadius: "10px",
						cursor: "pointer",
						position: "relative",
						top: 0,
						right: 0,
						bottom: 0,
						left: 0,
						"::after": {
							background: "#dddddd",
							width: "100%",
							height: "100%",
							position: "absolute"
						}
					}}
				/>
				<Box sx={{ml: "20px", mt: "20px"}}>
					<Text as="h3" sx={{ color: "white"}}>{dataTrending?.[11]?.original_title}</Text><br></br>
					<Text sx={{ color: "#969696"}}>{dataTrending?.[11]?.release_date}</Text>
					<Flex
						sx={{
							height: "25px",
							width: "46px",
							borderRadius: "10px",
							background: "red",
							cursor: "pointer",mt: "10px"
						}}
					>
						<Text
							sx={{
								color: "white",
								ml: "4px"
							}}
						>{dataTrending?.[11]?.vote_average}</Text>
						<AiFillStar 
							style={{
								color: "white",
								float: "right",
								position: "relative",
								top: "4px"
							}}
						/>
					</Flex>
				</Box>
			</Flex>
			<Button sx={{height: "40px", width: "262px", bg: "#333335", color: "white", borderRadius: "10px", mt: "10px", ml: "25px", cursor: "pointer"}}>See More</Button>
		</Box>
		{/* <Flex
			sx={{
				ml: "23em",
				mt: "10px",
				"@media only screen and (max-width: 767px)": {
					display: "none"
				},
				"@media only screen and (min-width: 1025px)": {
					display: "none"
				}
			}}
		>
			<FiSearch
				style={{
					color: "#989898",
					height: "25px",
					width: "25px",
					cursor: "pointer",
					position: "relative",
					top: "7px",
					left: "30px"
				}}  
			/>
			<Input
				sx={{
					height: "40px",
					width: "80%",
					background: "#333335",
					borderRadius: "10px",
					color: "white",
					border: "none",
					textAlign: "center",
					"::placeholder": {
						textAlign: "center"
					}
				}} 
				placeholder= "Tìm kiếm ..."
				value={searchTxt}
				onChange={(e: any) => setSearchTxt(e.target.value)}
				onKeyPress = {event => {
					if(event.key === 'Enter'){
						handleSearch();
					}
				}}
			/>
		</Flex> */}
		</>
		
	)
}
export default SearchBar;