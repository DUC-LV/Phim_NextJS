/* eslint-disable react/jsx-key */
import React, { useState, useCallback } from "react";
import { Box, Flex, Image, Input, NavLink } from "theme-ui";
import { imageLogo } from "../untils";
import { BsBell } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";
import { BiMenuAltLeft } from "react-icons/bi";
import DropdownSearch from "../container/DropdownSearch";

const Header = () => {
	const categories = [
		{
			id: 1,
			name: "Trang chủ",
			routLink: "/",
			color: "#989898",
		},
		{
			id: 2,
			name: "Phim chiếu rạp",
			routLink: "/phim-chieu-rap",
			color: "#989898",
		},
		{
			id: 3,
			name: "Phim thịnh hành",
			routLink: "/phim-thinh-hanh",
			color: "#989898",
		},
		{
			id: 4,
			name: "Bảng xếp hạng",
			routLink: "/bang-xep-hang",
			color: "#989898",
		}
	]
	const router = useRouter();
	const [searchTxt, setSearchTxt] = useState(" ");
	const handleSearch = useCallback(() => {
		if (!searchTxt) return;
		router.push({
			pathname : `/search`,
			query:{q:searchTxt}
		})
	}, [router, searchTxt]);
	const [ isActive, setIsActive] = useState(false);
	const handelOnDropdown = () => {
		setIsActive(true);
	}
	return(
		<Flex
			sx={{
				height: '64px',
				width: '100%',
			}}
		>
			<Flex
				sx={{
					alignItems: 'center',
					justifyContent: 'space-between',
					"@media only screen and (max-width: 768px)": {
						width: '100%',
						paddingX: '8px',
					},
					"@media only screen and (min-width: 768px) and (max-width: 1023px)": {
						width: '100%',
						paddingX: '8px',
					},
					"@media only screen and (min-width: 1024px) and (max-width: 1123px)": {
						paddingX: '8px',
						width: '100%',
					},
					"@media only screen and (min-width: 1124px)": {
						paddingX: '64px',
						width: '100%',
					}
				}}
			>
				<Flex>
					{/* comment */}
					<Flex
						sx={{
							"@media only screen and (min-width: 1024px) and (max-width: 1123px)": {
								display: 'none',
							},
							"@media only screen and (min-width: 1124px)": {
								display: 'none',
							}
						}}
					>
						<BiMenuAltLeft style={{ color: 'white', height: '25px', width: '25px', marginRight: "20px"}}/>
					</Flex>
					{/* comment */}
					<Image
						alt=""
						src={imageLogo}
						sx={{
							height: '30px',
							width: '80px'
						}} 
					/>
					{categories.map((item:any) => {
						if(router.pathname == (`${item.routLink}`)){
							item.color = "red"
						}
						return(
							<Flex
								key={item.id}
								sx={{
									color: item.color,
									ml: '20px',
									alignItems: 'center',
									cursor: 'pointer',
									"@media only screen and (max-width: 1023px)": {
										display: 'none'
									},
								}}
							>
								<NavLink
									onClick={() => {
										router.push({
											pathname: item.routLink
										})
									}}
								>{item.name}</NavLink>
							</Flex>
						)
					})}
				</Flex>
				<Flex
					sx={{
						height: '40px',
						border: '1px solid grey',
						borderRadius: '20px',
						alignItems: 'center',
						"@media only screen and (max-width: 768px)": {
							display: 'none'
						},
						"@media only screen and (min-width: 1124px)": {
							width: '25%'
						},
					}}
				>
					<Input
						sx={{
							outline: 'none',
							border: 'none',
							color: 'white',
							
						}}
						placeholder="Search..."
						onChange={(e: any) => setSearchTxt(e.target.value)}
						onKeyPress = {event => {
							if(event.key === 'Enter'){
								handleSearch();
							}
						}}
					/>
					<FiSearch 
						style={{ 
							color: 'white', 
							height: '25px', 
							width: '25px',
							marginRight: '10px', 
							cursor: 'pointer'
						}} 
						onClick={handleSearch}
					/>
				</Flex>
				<Flex
					sx={{
						alignItems: 'center',
						"@media only screen and (max-width: 768px)": {
							display: 'none',
						},
					}}
				>
					<BsBell 
						style={{ 
							color: 'white', 
							height: '25px', 
							width: '25px',
							marginRight: '20px', 
							cursor: 'pointer'
						}}
						/>
					<Flex 
						as="a" 
						sx={{ 
							color: 'white', 
							background: 'red', 
							marginRight: '20px',
							height: '30px', 
							width: '70px', 
							borderRadius: '8px', 
							justifyContent: 'center', 
							alignItems: 'center', 
							cursor: 'pointer'
						}}
						>Mua gói</Flex>
					<AiOutlineLogin 
						style={{ 
							color: 'white', 
							height: '25px', 
							width: '25px', 
							cursor: 'pointer'
						}}
						onClick={() => router.push({pathname: '/login'})}
					/>
				</Flex>
				{/* comment */}
				<Flex
					sx={{
						alignItems: 'center',
						"@media only screen and (min-width: 769px) and (max-width: 1023px)": {
							display: 'none',
						},
						"@media only screen and (min-width: 1024px) and (max-width: 1123px)": {
							display: 'none',
						},
						"@media only screen and (min-width: 1124px)": {
							display: 'none',
						}
					}}
				>
					<FiSearch style={{ color: 'white', height: '25px', width: '25px',marginRight: '20px'}}/>
					<BsBell style={{ color: 'white', height: '25px', width: '25px',marginRight: '20px', cursor: 'pointer'}}/>
					<Flex as="a" sx={{ color: 'white', background: 'red',height: '30px', width: '70px', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>Mua gói</Flex>
				</Flex>
				{/* comment */}
			</Flex>
		</Flex>
	)
}
export default Header;