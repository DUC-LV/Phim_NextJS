import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Image, Button } from "theme-ui";
import { keyframes } from "@emotion/react";
import { GoTriangleRight } from "react-icons/go";
const Example = () => {
	const [count, setCount] = useState(5);
    useEffect(() => {
        count > 0 && setTimeout(() => setCount(count - 1), 1000);
    }, [count]);
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
				>Tập tiếp theo sẽ phát sau {count}s</Text>
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
					<Flex
						sx={{
							height: '50px',
							width: '260px',
							borderRadius: '8px',
							border: '1px solid white',
							background: 'grey',
							position: 'relative',
							ml: '30px',
							alignItems: 'center',
						}}
					>
						<Flex
							sx={{
								position: 'absolute',
								left: '50%',
								transform: 'translateX(-50%)',
								
							}}
						>
							<GoTriangleRight />
							<Text
								sx={{
									fontSize: '16px',
									fontWeight: '600',
								}}
							>Xem ngay</Text>
						</Flex>
						<Button
							sx={{
							height: '50px',
							borderRadius: '8px',
							border: '1px solid white',
							color: 'black',
							animation: `${fadeIn} 5s infinite`,
							animationTimingFunction: 'linear',
							}}
						></Button>
					</Flex>
				</Flex>
			</Box>
		</Flex>
	)
}
export default Example;
const fadeIn = keyframes({
	from: {
		width: '0px',
		backgroundColor: 'white'
	},
	to: {
		width: '260px',
		backgroundColor: 'white',
	}
})