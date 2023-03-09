import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';


export default function HomeVideo() {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    width: '100%',
    height: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      modestbranding: 1,
      fs: 0,
      rel: 0,
      controls: 0
    },
  };

  return <YouTube
    videoId="IMEEedT3JD4"
    opts={opts}
    onReady={onPlayerReady} className="aspect-video" />
  //...
}

