import React from "react";
import { Box, Text, Image } from "theme-ui";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { imageLogo, showImage } from "../untils";
export interface DataSlider {
	image: string;
	name: string;
	id: number;
}
export interface DataSlide {
	dataSlide: DataSlider[];
	name: string;
}
const SlideShow = ({ dataSlide, name }: DataSlide) => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
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
				width: "70em",
				ml: "140px",
				mt: "40px",
				"@media only screen and (max-width:  47.9375em)": {
					position: "relative",
					right: "140px",
					width: "90em",
				}
			}}
		>
			<Text 
				as="h2"
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
									height: "350px",
									width: "220px",
									p: "4px",
									cursor: "pointer",
									WebkitTransform: "scale(1.1)",
									transform: "scale(1)",
									WebkitTransition: ".3s ease-in-out",
									transition: ".3s ease-in-out",
									borderRadius: "10px",
									mt: "15px",
									":hover": {
										WebkitTransform: "scale(1)",
										transform: "scale(1)",
										border: "3px solid white",
										width: "100%"
									},
									"@media only screen and (max-width:  47.9375em)": {
										height: "200px",
										width: "100%",
										position: "relative",
										right: "240px",
									}
								}}
								alt=""
								src={(showImage + item.image) || item.image} 
							/>
						</Box>
					)
				})}
			</Slider>
		</Box>
	)
}
export default SlideShow;