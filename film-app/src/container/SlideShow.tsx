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
		slidesToShow: 6,
		slidesToScroll: 6,
	}
	const responsiveSettings = [
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 5,
			}
		},
		{
			breakpoint: 1123,
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
				"@media only screen and (max-width: 768px)": {
					margin: "50px 10px 0px 20px",
				},
				"@media only screen and (min-width: 768px) and (max-width: 1023px)": {
					margin: "50px 40px 0px 60px",
				},
				"@media only screen and (min-width: 1024px) and (max-width: 1123px)": {
					margin: "50px 100px 0px 110px",
				},
				"@media only screen and (min-width: 1124px)": {
					margin: "50px 200px 0px 200px",
				}
			}}
		>
			<Text 
				as="h2"
				sx={{
					color: "rgba(255,255,255,0.87)",
				}}
			>{name}</Text>
			<Slider {...setting} responsive={responsiveSettings}>
				{dataSlide?.map((item:any, index: any) => {
					return(
						<Box 
							key={index}
							sx={{
								mt: '20px',
								outline: 'none',
							}}
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
									height: '280px',
									width: '90%',
									"@media only screen and (min-width: 768px) and (max-width: 1023px)": {
										height: '200px'
									},
									"@media only screen and (min-width: 1124px)": {
										transform: "scale(1)",
										cursor: "pointer",
										":hover": {
											transform: "scale(1.01)",
											border: "3px solid red",
											width: "90%"
										},
									}
								}}
								alt=""
								src={(showImageSlide + item.image) || item.image} 
							/>
						</Box>
					)
				})}
			</Slider>
		</Box>
	)
}
export default SlideShow;