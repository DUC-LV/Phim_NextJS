import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "theme-ui";
import Slider from "react-slick";
export interface DataSlider {
	image: string;
	name: string;
	id: number;
}
export interface DataSlide {
	dataSlide: DataSlider[]
}
const Slide = ({ dataSlide }: DataSlide) => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
	}
	const responsiveSettings = [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
	];
	return(
		<Box
			sx={{
				ml: "30px",
				width: "92em",
				mt: "20px"
			}}
		>
			<Slider {...settings} responsive={responsiveSettings}>
				{dataSlide?.map((item:any, index: any) => {
					return(
						<Box key={index}>
							<Image
								sx={{
									height: "350px",
									width: "500px",
									p: "4px",
									cursor: "pointer",
									WebkitTransform: "scale(1.1)",
									transform: "scale(1)",
									WebkitTransition: ".3s ease-in-out",
									transition: ".3s ease-in-out",
									borderRadius: "6px",
									":hover": {
										WebkitTransform: "scale(1)",
										transform: "scale(1)",
										border: "3px solid white",
										width: "100%"
									},
									"@media only screen and (max-width:  47.9375em)": {
										height: "600px",
										width: "99%"
									}
								}}
								alt=""
								src={item.image} 
							/>
						</Box>
					)
				})}
			</Slider>
		</Box>
	)
}
export default Slide;