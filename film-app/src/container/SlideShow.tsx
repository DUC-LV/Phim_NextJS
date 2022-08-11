import React from "react";
import { Box, Text, Image, Flex } from "theme-ui";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { imageLogo, showImage } from "../untils";
import { AiFillStar } from "react-icons/ai"
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
	const settings = {
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
	}
	const responsiveSettings = [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3.5,
			}
		},
	];
	return(
		<Box
			sx={{
				"@media screen and (min-width: 1024px)": {
					padding: "40px 332px 0px 285px",
				}
			}}
		>
			<Text 
				as="h3"
				sx={{
					color: "rgba(255,255,255,0.87)",
				}}
			>{name}</Text>
			<Slider {...settings} responsive={responsiveSettings}>
				{dataSlide?.map((item:any, index: any) => {
					if(item?.image == null){
						item.image = imageLogo;
					}
					return(
						<Box key={index}>
							
							<Image
								sx={{
									cursor: "pointer",
									borderRadius: "10px",
									WebkitTransform: "scale(1.1)",
									transform: "scale(1)",
									WebkitTransition: ".3s ease-in-out",
									transition: ".3s ease-in-out",
									mt: "15px",
									":hover": {
										WebkitTransform: "scale(1)",
										transform: "scale(1)",
										border: "3px solid white",
										width: "92%"
									},
									"@media only screen and (min-width: 1024px)": {
										height: "230px",
										width: "92%",
									}
								}}
								alt=""
								src={(showImage + item.image) || item.image} 
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
									cursor: "pointer"
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
									bottom: "12px"
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