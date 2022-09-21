import React,{ useEffect, useState } from "react";
import getVideo from "../service/getVideo";
import ReactPlayer from 'react-player';
import { Box } from "theme-ui";
type Props = {
    id?:number
}

const VideoPlayer = ( {id}: Props ) => {
	const [key, setKey] = useState<any>([])
    useEffect(() => {
        getVideo.getAll(Number(id))
            .then(res => { 
                setKey(res.data.results)
            })
    },[id])
	return(
		<Box
			sx={{
				"@media only screen and (max-width: 768px)": {
					width: '20em'
				},
				"@media only screen and (min-width: 768px) and (max-width: 1023px)": {
				},
				"@media only screen and (min-width: 1024px) and (max-width: 1123px)": {
				},
				"@media only screen and (min-width: 1124px)": {
				}
			}}
		>
			<ReactPlayer 
				url={'https://www.youtube.com/watch?v=' + key?.[0]?.key}
				controls
				playing = {false}
				className="video-player"
			/>
		</Box>
	);
}
export default VideoPlayer;