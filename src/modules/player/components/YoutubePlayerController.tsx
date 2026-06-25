import { useEffect, useRef } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

import PlayerService from "../services/player.service";
import { usePlayerStore } from "../store/player.store";

export default function YoutubePlayerController() {
  const playerRef = useRef<any>(null);

  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const isPlaying = usePlayerStore((state) => state.isPlaying);

  // Sinkronisasi progress setiap 1 detik
  useEffect(() => {
    if (!currentTrack) return;

    const interval = setInterval(async () => {
      try {
        const current = await playerRef.current?.getCurrentTime();

        if (typeof current === "number") {
          PlayerService.setCurrentTime(current);
        }
      } catch {}
    }, 1000);

    return () => clearInterval(interval);
  }, [currentTrack]);

  if (!currentTrack) return null;
  return (
    <YoutubePlayer
      ref={playerRef}
      height={0}
      width={0}
      play={isPlaying}
      videoId={currentTrack.videoId}
      forceAndroidAutoplay
      onReady={async () => {
        try {
          const duration = await playerRef.current?.getDuration();

          if (typeof duration === "number") {
            PlayerService.setDuration(duration);
          }

          PlayerService.setReady(true);
          PlayerService.setLoading(false);
        } catch {}
      }}
      onChangeState={(state: string) => {
        switch (state) {
          case "buffering":
            PlayerService.setLoading(true);
            break;

          case "playing":
            PlayerService.setLoading(false);
            break;

          case "paused":
            PlayerService.setLoading(false);
            break;

          case "ended":
            PlayerService.next();
            break;
        }
      }}
      onError={(e: any) => {
        console.log("Youtube Error :", e);
      }}
    />
  );
}
