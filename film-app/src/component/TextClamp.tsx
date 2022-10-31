import React from "react";
import { Box, BoxProps } from "theme-ui";

const TextClamp = ({ sx, children, ...rest}: BoxProps) => {
	return(
		<Box
			sx={{
				overflow: 'hidden',
				whiteSpace: 'nowrap',
				textOverflow: 'ellipsis',
				"@media only screen and (max-width: 768px)": {
				},
				"@media only screen and (min-width: 768px) and (max-width: 1023px)": {
				},
				"@media only screen and (min-width: 1024px) and (max-width: 1123px)": {
				},
				"@media only screen and (min-width: 1124px)": {
					WebkitLineClamp: 3 as any,
					
				},
			}}
			{...rest}
		>
			{children}
		</Box>
	);
}
export default  TextClamp;