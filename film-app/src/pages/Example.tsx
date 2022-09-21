import React from "react";
import { Box, Flex, Text, Image, Button } from "theme-ui";
import { keyframes } from "@emotion/react";
const Example = () => {
	return(
		<Flex
			sx={{
				justifyContent: 'center',
			}}
		>
			<Flex
				sx={{
					flexDirection: 'column',
				}}
			>
				<Text
					sx={{
						color: 'white',
						fontSize: '16px',
						fontWeight: 600,
						lineHeight: '22px'
					}}
				>Tập tiếp theo sẽ phát sau 5s</Text>
				<Image
					alt=""
					src="https://image.tmdb.org/t/p/w500/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg" 
					sx={{
						height: '200px',
						width: '360px',
						mt: '12px'
					}}
				/>
			</Flex>
			<Box
				sx={{
					mt: '38px',
					ml: '24px'
				}}
			>
				<Text
					sx={{
						color: 'white',
						fontSize: '20px',
						fontWeight: 700,
					}}
				>Bóng ma Anh Quốc - Peaky Blinder season 1</Text><br />
				<Text
					sx={{
						color: 'white',
						fontSize: '14px',
						fontWeight: 500,
					}}
				>Nội dung: Được đặt trong bối cảnh nước Anh đầu thế kỷ 19, Peaky Blinders nói về gia đình Shelby, những người cầm đầu băng đảng Peaky</Text>
				<Flex
					sx={{
						mt: '70px'
					}}
				>
					<Button
						sx={{
							height: '50px',
							width: '260px',
							borderRadius: '8px',
							border: '1px solid white',
							color: 'white',
							bg: 'transparent',
							textAlign: 'center',
						}}
					>Bỏ qua</Button>
					<Button
						sx={{
							height: '50px',
							width: '260px',
							borderRadius: '8px',
							border: '1px solid white',
							color: 'black',
							ml: '30px',
							transitionDuration: '5000ms',
							transitionTimingFunction: 'ease-in-out',
							msTransitionProperty: 'background-color, width',
							backgroundColor: 'white',
							':hover': {
								width: '260px',
								backgroundColor: 'grey'
							}
						}}
					>Xem Ngay</Button>
				</Flex>
			</Box>
		</Flex>
	)
}
export default Example;