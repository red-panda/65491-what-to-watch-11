type VideoPlayerProps = {
  video: string;
  poster: string;
  hover: boolean;
};

function VideoPlayer({video, poster, hover}: VideoPlayerProps): JSX.Element {

  return (
    <video
      src={hover ? video : ''} poster={poster}
      preload="auto"
      controls={false}
      autoPlay
      loop
      playsInline
      muted
      style={{width: '100%', height: '100%', objectFit: 'cover'}}
    />
  );
}

export default VideoPlayer;
