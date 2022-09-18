import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Container, Image } from "theme-ui";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import { convertSlug } from "../untils";
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
export interface ResponsiveObject {
    breakpoint:number,
    slidesToShow:number,
    slidesToScroll: number
}
export interface ReposiveSlide {
    reposiveSlide: ResponsiveObject[]
}
const Slide = ({ dataSlide }: DataSlide) => {
	const [slideIndex, setSlideIndex] = useState(0)
	const setting = {
		speed: 1000,
		infinite: true,
		autoplaySpeed: 3000,
		beforeChange: (current:any,next:any) => setSlideIndex(next),
		autoplay: true,
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
	}
	const responsiveSettings = [
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 1123,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
	];
	const router = useRouter();
	return(
		<Container
			sx={{
				width: '96%',
				mt: '20px',
			}}
		>
			<Slider {...setting} responsive={responsiveSettings}>
				{dataSlide.map((item:any, index: any) => {
					return(
						<Box 
							className={index === slideIndex ? 'slide slide-active' : 'slide'} 
							key={index}
							sx={{
								width: '100%',
								height: '100%',
								outline: 'none',
							}}
						>
							<Image
								alt=""
								src={item.image}
								sx={{
									borderRadius: '20px',
									cursor: 'pointer',
								}}
								onClick={() => {
									router.push({
										pathname: "/movie/[slugMovie]",
										query: { 
											slugMovie: convertSlug(item?.name),
											id: item?.id
										}
									})
								}}
							/>
						</Box>
					)
				})}
			</Slider>
		</Container>
	)
}
export default Slide;