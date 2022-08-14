import React from "react";
import { Box, Text, Image, Flex } from "theme-ui";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { imageLogo, convertSlug, showImageSlide } from "../untils";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/router";
export interface ResponsiveObject {
    breakpoint:number,
    slidesToShow:number,
    slidesToScroll: number
}
export interface ReposiveSlide {
    reposiveSlide: ResponsiveObject[]
}
export interface DataSlider {
	image: string | undefined;
	name: string | undefined;
	id: number | undefined;
	vote_average: string | undefined;
}
export interface DataSlide {
	dataSlide: DataSlider[];
	name: string;
}
const SlideShow = ({ dataSlide, name }: DataSlide) => {
	const setting = {
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
	}
	const responsiveSettings = [
		{
			breakpoint: 739,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 1023,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			}
		},
	];
	const router = useRouter();
	return(
		<Box
			sx={{
				"@media screen and (min-width: 1024px)": {
					padding: "40px 332px 0px 285px",
				},
				"@media screen and (max-width: 739px)": {
					ml: "20px",
					width: "85em",
					mt: "15px"
				},
				"@media screen and (min-width: 740px) and (max-width: 1023px)": {
					padding: "20px 0px 0px 285px",
				}
			}}
		>
			<Text 
				as="h3"
				sx={{
					color: "rgba(255,255,255,0.87)",
					"@media screen and (max-width: 739px)": {
						ml: "25px"
					}
				}}
			>{name}</Text>
			<Slider {...setting} responsive={responsiveSettings}>
				{dataSlide?.map((item:any, index: any) => {
					if(item?.image == null){
						item.image = imageLogo;
					}
					return(
						<Box 
							key={index}
						>
							<Image
								onClick={() => {
									router.push({
										pathname: "/movie/[slugMovie]",
										query: { 
											slugMovie: convertSlug(item?.name),
											id: item?.id
										}
									})
								}}
								sx={{
									borderRadius: "10px",
									mt: "15px",
									"@media only screen and (min-width: 1024px)": {
										height: "230px",
										width: "90%",
										WebkitTransform: "scale(1.1)",
										transform: "scale(1)",
										WebkitTransition: ".3s ease-in-out",
										transition: ".3s ease-in-out",
										cursor: "pointer",
										":hover": {
											WebkitTransform: "scale(1)",
											transform: "scale(1)",
											border: "3px solid white",
											width: "92%"
										},
									},
									"@media only screen and (max-width: 739px)": {
										width: "90%",
										height: "550px",
										ml: "25px"
									},
									"@media screen and (min-width: 740px) and (max-width: 1023px)": {
										height: "280px",
										width: "96%",
									}
								}}
								alt=""
								src={(showImageSlide + item.image) || item.image} 
							/>
							<Flex
								sx={{
									height: "25px",
									width: "46px",
									borderRadius: "10px",
									background: "red",
									position: "relative",
									bottom: "220px",
									left: "16px",
									cursor: "pointer",
									"@media only screen and (max-width: 739px)": {
										position: "relative",
										bottom: "530px",
										left: "36px",
									},
									"@media screen and (min-width: 740px) and (max-width: 1023px)": {
										position: "relative",
										bottom: "260px",
										left: "16px",
									}
								}}
							>
								<Text
									sx={{
										color: "white",
										ml: "4px"
									}}
								>{item?.vote_average}</Text>
								<AiFillStar 
									style={{
										color: "white",
										float: "right",
										position: "relative",
										top: "4px"
									}}
								/>
							</Flex>
							<Text 
								as="p"
								sx={{
									color: "#ced2d8",
									width: "160px",
									textAlign: "center",
									position: "relative",
									bottom: "12px",
									"@media screen and (max-width: 739px)": {
										ml: "140px",
										width: "160px",
									}
								}}
							>{item.name}</Text>
						</Box>
					)
				})}
			</Slider>
		</Box>
	)
}
export default SlideShow;

function covertSlug(): string | number | boolean | readonly string[] | readonly number[] | readonly boolean[] | null | undefined {
	throw new Error("Function not implemented.");
}
