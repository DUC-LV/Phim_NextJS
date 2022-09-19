import React from "react";
import { Grid, GridProps } from "theme-ui";

const ListOfShare = ({ sx, ...props }: GridProps) => {
	return(
		<Grid
			{...props}
			sx={{
				// "@media only screen and (max-width: 768px)": {
				// 	margin: "10px 5px 0px 5px",
				// 	gridTemplateColumns: ['1','0.1fr 0.1fr'],
				// },
				"@media only screen and (min-width: 768px) and (max-width: 1023px)": {
					margin: "10px 60px 0px 60px",
					gridTemplateColumns: ['6','0.4fr 0.4fr 0.4fr 0.4fr 0.4fr 0.4fr'],
				},
				"@media only screen and (min-width: 1024px) and (max-width: 1123px)": {
					margin: "10px 110px 0px 110px",
					gridTemplateColumns: ['6','0.4fr 0.4fr 0.4fr 0.4fr 0.4fr 0.4fr'],
				},
				"@media only screen and (min-width: 1124px)": {
					margin: "10px 200px 0px 200px",
					gridTemplateColumns: ['6','0.4fr 0.4fr 0.4fr 0.4fr 0.4fr 0.4fr'],
				}
			}}
		></Grid>
	)
}
export default ListOfShare;