import React from "react";
import { Box } from "theme-ui";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export interface DataSlider {
	image: string;
	name: string;
	id: number;
}
export interface DataSlide {
	dataSlide: DataSlider[];
	name: string;
}
const SlideShow = () => {
	return(
		<Box></Box>
	)
}
export default SlideShow;