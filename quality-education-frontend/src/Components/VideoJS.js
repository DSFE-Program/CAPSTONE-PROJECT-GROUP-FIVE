import React from "react";
import VideoPlayer from 'react-video-js-player';
import Microsoft from "../Components/video/Microsoft.mp4";


const Videojs = () => {
    const videoSrc = Microsoft;
    const poster = "https://www.pexels.com/photo/close-up-of-a-keyboard-4567339/";



    return (
        <div className="App">
            <h1>Videojs</h1>
            <VideoPlayer
            src={videoSrc}
            poster={poster} width="720" height="420" />
        </div>
    );
};

export default Videojs;

