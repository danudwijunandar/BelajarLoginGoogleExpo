import { useRef } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { usePlayerStore } from "../store/player.store";

export default function YoutubePlayerController() {
  const playerRef = useRef<any>(null);

  const { currentTrack, isPlaying, setDuration } = usePlayerStore();

  if (!currentTrack) return null;

  return (
    <YoutubePlayer
      ref={playerRef}
      height={1}
      width={1}
      play={isPlaying}
      videoId={currentTrack.videoId}
      onReady={async () => {
        try {
          const duration = await playerRef.current?.getDuration();

          if (duration) {
            setDuration(duration);
          }
        } catch (e) {
          console.log(e);
        }
      }}
      onChangeState={(state: string) => {
        if (state === "ended") {
          usePlayerStore.setState({
            isPlaying: false,
            currentTime: 0,
          });
        }
      }}
    />
  );
}
