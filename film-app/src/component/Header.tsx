/* eslint-disable react/jsx-key */
import React, { useState, useCallback } from "react";
import { Box, Button, Flex, Image, Input, NavLink } from "theme-ui";
import { imageLogo, styleNav } from "../untils";
import { FiSearch, FiBell } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { RiMenu2Line } from "react-icons/ri";
import { useRouter } from "next/router";
const Header = () => {
	const category = [
		{
			id: 1,
			name: "Trang Chủ",
			routLink: "/",
			color: ""
		},
		{
			id: 2,
			name: "Phim Chiếu Rạp",
			routLink: "/phim-chieu-rap",
			color: ""
		},
		{
			id: 3,
			name: "Phim Thiếu Nhi",
			routLink: "/phim-thieu-nhi",
			color: ""
		},
		{
			id: 4,
			name: "Bảng Xếp Hạng",
			routLink: "/bang-xep-hang",
			color: ""
		}
	]
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
		<Box>
			<Flex
			sx={{
				mt: "10px",
				ml: "50px",
				height: "60px",
				"@media only screen and (max-width: 47.9375em)": {
					display: "none"
				},
				"@media only screen and (min-width: 48em) and (max-width:64em)": {
					width: "92.5em"
				},
				"@media only screen and (min-width: 64em)": {
					width: "90.5em"
				}
			}}
			>
				<Image
					alt=""
					src={imageLogo}
					sx={{
						height: "40px",
						width: "80px",
						borderRadius: "8px",
					}}
				/>
				<Flex as="nav" sx={styleNav}>
					{category.map((item:any) => {
						if(router.pathname == (`${item.routLink}`)){
							item.color = "red"
						}
						return(
							<NavLink
								onClick={() => {
									router.push({
										pathname: item.routLink
									})
								}}
								key={item.id} 
								p={2} 
								sx={{
									ml: "1.8em",
									cursor: "pointer",
									fontSize: "16px",
									":hover": {
										color: "white"
									},
									color: item.color,
									
								}}
							>{item.name}</NavLink>
						)
					})}
				</Flex>
				<Flex>
					<Input
						value={searchTxt}
						onChange={(e: any) => setSearchTxt(e.target.value)}
						onKeyPress = {event => {
							if(event.key === 'Enter'){
								handleSearch()
							}
						}}
						placeholder="Tìm Kiếm"
						sx={{
							height: "35px",
							width: "300px",
							border: "1px solid rgba(255,255,255,0.87)",
							borderRadius: "10px",
							outline: "none",
							color: "white",
							"::placeholder": {
								color: "white"
							},
							mt: "3px",
							ml: "120px"
						}}
					/>
					<FiSearch 
						style={{
							color: "white", 
							height: "25px", 
							width: "25px",
							position: "relative",
							top: "7px",
							right: "30px",
							cursor: "pointer"
						}}
						onClick={handleSearch}
					/>
				</Flex>
				<Flex
					sx={{
						mt: "3px",
						ml: "80px"
					}}
				>
					<FiBell
						style={{
							color: "white",
							height: "25px",
							width: "25px",
							cursor: "pointer",
							position: "relative",
							top: "5px"
						}}
					/>
					<Button
						sx={{
							height: "35px",
							width: "100px",
							bg: "#ED2C25",
							color: "white",
							cursor: "pointer",
							borderRadius: "10px",
							ml: "30px",
							fontSize: "90%"
						}}
					>Mua Gói</Button>
					<BsPeople
						style={{
							color: "white",
							height: "25px",
							width: "25px",
							cursor: "pointer",
							marginLeft: "30px",
							position: "relative",
							top: "5px"
						}} 
					/>
				</Flex>
			</Flex>
			{/* reposive mobile */}
			<Flex
				sx={{
					"@media only screen and (max-width:  47.9375em)": {
						display: "block"
					},
					"@media only screen and (min-width: 48em) and (max-width:64em)": {
						display: "none"
					},
					"@media only screen and (min-width: 64em)": {
						display: "none"
					}
				}}
			>
				<RiMenu2Line
					style={{
						color: "white",
						height: "40px",
						width: "40px",
						marginLeft: "50px",
						marginTop: "30px"
					}} 
				/>
				<FiSearch
					style={{
						color: "white",
						height: "40px",
						width: "40px",
						marginTop: "30px",
						position: "relative",
						left: "74em"
					}}  
				/>
				<Button
					sx={{
						color: "white",
						bg: "red",
						position: "relative",
						left: "75.8em",
						bottom: "15px"
					}}
				>Đăng Nhập</Button>
			</Flex>
		</Box>
	)
}
export default Header;