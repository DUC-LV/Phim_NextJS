import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Image, Text } from "theme-ui";
import Slider from "react-slick";
export interface DataSlider {
	image: string | undefined;
	name: string | undefined;
	id: number | undefined;
	overview: string | undefined;
	release_date: string | undefined;
	vote_average: string | undefined;
}
export interface DataSlide {
	dataSlide: DataSlider[]
}

const Slide = ({ dataSlide }: DataSlide) => {
	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
	}
	return(
		<Container
			sx={{
				"@media screen and (max-width: 739px)": {
					ml: "30px",
					width: "85em",
					mt: "15px"
				},
				"@media screen and (min-width: 740px) and (max-width: 1023px)": {
					padding: "20px 0px 0px 285px",
				},
				"@media screen and (min-width: 1024px)": {
					padding: "20px 332px 0px 285px",
					height: "450px",
				}
			}}
		>
			<Slider {...settings}>
				{dataSlide?.map((item:any, index: any) => {
					return(
						<Box key={index} sx={{ borderRadius: "10px"}}>
							<Image
								sx={{
									cursor: "pointer",
									borderRadius: "10px",
									"@media only screen and (max-width: 739px)": {
										width: "100%",
										height: "650px",
									},
									"@media only screen and (min-width: 740px) and (max-width: 1023px)": {
									},
									"@media only screen and (min-width: 1024px)": {
										width: "100%",
										height: "450px",
									}, 
								}}
								alt=""
								src={item.image} 
							/>
							<Box
								sx={{
									position: "relative",
									bottom: "400px",
									marginLeft: "30px",
									opacity: 0.0 - 1.0
								}}
							>
								<Text
									as="h1"
									sx={{
										color: "#4e75f8"
									}}
								>{item?.name}</Text>
								<Text
									as="h2"
									sx={{
										color: "rgba(246, 244, 258)",
										mt: "40px"
									}}
								>Release date:&ensp;{item?.release_date}</Text>
								<Text
									as="p"
									sx={{
										color: "rgba(246, 244, 258)",
										width: "500px",
										mt: "20px"
									}}
								>{item?.overview}</Text>
							</Box>
						</Box>
					)
				})}
			</Slider>
		</Container>
	)
}
export default Slide;