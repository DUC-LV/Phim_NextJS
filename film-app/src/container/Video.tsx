import React,{ useCallback, useEffect, useState } from "react";
import getVideo from "../service/getVideo";
import ReactPlayer from 'react-player';
import { Box } from "theme-ui";
import { VideoJsPlayer } from 'video.js'
type Props = {
    id?:number
}

const VideoPlayer = ( {id}: Props ) => {
	const [key, setKey] = useState<any>([])
	const [isShow, setIsShow] = useState(false);
	const handleEndVideo = useCallback(() => {
		setIsShow(true);
	}, [])
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
				// controls={false}
				controls
				light={true}
				playing = {false}
				className="video-player"
				onEnded={handleEndVideo}
			/>
			{isShow && <Box sx={{ color: 'white'}}>hahah</Box>}
		</Box>
	);
}
export default VideoPlayer;