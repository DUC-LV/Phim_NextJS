/* eslint-disable react/jsx-key */
import React, { useState, useCallback } from "react";
import { Box, Button, Flex, Image, Input, NavLink, Text } from "theme-ui";
import { imageLogo, styleIconHeader, styleNav } from "../untils";
import { BsPeople, BsBookmarkCheck } from "react-icons/bs";
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineHome, AiOutlineFieldTime } from "react-icons/ai";
import { BiLogOutCircle, BiMoviePlay } from "react-icons/bi";
import { TiFlowChildren } from "react-icons/ti";
import { GiAtomicSlashes } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";

const Header = () => {
	const category = [
		{
			id: 1,
			name: "Trang Chủ",
			routLink: "/",
			color: "#989898",
			icon: <AiOutlineHome style={styleIconHeader}/>
		},
		{
			id: 2,
			name: "Phim Chiếu Rạp",
			routLink: "/phim-chieu-rap",
			color: "#989898",
			icon: <BiMoviePlay style={styleIconHeader}/>
		},
		{
			id: 3,
			name: "Phim Thiếu Nhi",
			routLink: "/phim-thieu-nhi",
			color: "#989898",
			icon: <TiFlowChildren style={styleIconHeader}/>
		},
		{
			id: 4,
			name: "Bảng Xếp Hạng",
			routLink: "/bang-xep-hang",
			color: "#989898",
			icon: <GiAtomicSlashes style={styleIconHeader}/>
		}
	]
	const personal = [
		{
			id: 1,
			name: "Bookmaked",
			icon: <BsBookmarkCheck style={styleIconHeader}/>,
			routLink: "/haha",
			color: "#989898",
		},
		{
			id: 2,
			name: "Lịch Sử",
			icon: <AiOutlineFieldTime style={styleIconHeader}/>,
			routLink: "/haha",
			color: "#989898",
		}
	]
	const general = [
		{
			id: 1,
			name: "Profile",
			icon: <CgProfile style={styleIconHeader}/>,
			routLink: "/haha",
			color: "#989898",
		},
		{
			id: 2,
			name: "Đăng Nhập",
			icon: <BiLogOutCircle style={styleIconHeader}/>,
			routLink: "/haha",
			color: "#989898",
		}
	]
	const router = useRouter();
	return(
		<>
		<Box
			sx={{
				width: "260px",
				height: "100%",
				borderRight: "1px solid #2b2a2b",
				position: "fixed",
				left: 0,
				bottom: "1px",
				"@media only screen and (max-width: 739px)": {
					display: "none"
				},
			}}
		>
			<Image
				alt=""
				src={imageLogo}
				sx={{
					height: "60px",
					width: "150px",
					borderRadius: "6px",
					mt: "10px",
					ml: "40px"
				}}
			/>
			<Text
				as="h3"
				sx={{
					color: "white",
					mt: "60px",
					ml: "40px",
					fontSize: "20px",
					fontWeight: "700"
				}}
			>MENU</Text>
			<Box as="nav" sx={{mt: "20px"}}>
				{category.map((item:any) => {
					if(router.pathname == (`${item.routLink}`)){
						item.color = "red"
					}
					return(
						<Flex key={item.id}>
							{item.icon}
							<NavLink
							onClick={() => {
								router.push({
									pathname: item.routLink
								})
							}}
							key={item.id} 
							p={2} 
							sx={{
								ml: "0.5em",
								cursor: "pointer",
								fontSize: "16px",
								":hover": {
									color: "white"
								},
								color: item.color,
								
							}}
							>{item.name}</NavLink>
						</Flex>
					)
				})}
			</Box>
			<Text
				as="h3"
				sx={{
					color: "white",
					mt: "50px",
					ml: "40px",
					fontSize: "20px",
					fontWeight: "700"
				}}
			>PERSONAL</Text>
			<Box as="nav" sx={{mt: "20px"}}>
				{personal.map((item:any) => {
					if(router.pathname == (`${item.routLink}`)){
						item.color = "red"
					}
					return(
						<Flex key={item.id}>
							{item.icon}
							<NavLink
							onClick={() => {
								router.push({
									pathname: item.routLink
								})
							}}
							key={item.id} 
							p={2} 
							sx={{
								ml: "0.5em",
								cursor: "pointer",
								fontSize: "16px",
								":hover": {
									color: "white"
								},
								color: item.color,
								
							}}
							>{item.name}</NavLink>
						</Flex>
					)
				})}
			</Box>
			<Text
				as="h3"
				sx={{
					color: "white",
					mt: "50px",
					ml: "40px",
					fontSize: "20px",
					fontWeight: "700"
				}}
			>GENERAL</Text>
			<Box as="nav" sx={{mt: "20px"}}>
				{general.map((item:any) => {
					if(router.pathname == (`${item.routLink}`)){
						item.color = "red"
					}
					return(
						<Flex key={item.id}>
							{item.icon}
							<NavLink
							onClick={() => {
								router.push({
									pathname: item.routLink
								})
							}}
							key={item.id} 
							p={2} 
							sx={{
								ml: "0.5em",
								cursor: "pointer",
								fontSize: "16px",
								":hover": {
									color: "white"
								},
								color: item.color,
								
							}}
							>{item.name}</NavLink>
						</Flex>
					)
				})}
			</Box>
		</Box>
		<Flex
				sx={{
					"@media only screen and (max-width: 739px)": {
						display: "block"
					},
					"@media only screen and (min-width: 740px) and (max-width: 1023px)": {
						display: "none"
					},
					"@media only screen and (min-width: 1024px)": {
						display: "none"
					}
				}}
			>
				<RiMenu2Line
					style={{
						color: "white",
						height: "40px",
						width: "40px",
						marginLeft: "8px",
						marginTop: "10px"
					}} 
				/>
				<FiSearch
					style={{
						color: "white",
						height: "40px",
						width: "40px",
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
		</>
	)
}
export default Header;