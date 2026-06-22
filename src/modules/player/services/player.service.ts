import { usePlayerStore } from "../store/player.store";

class PlayerService {
  play(track: any) {
    usePlayerStore.getState().setTrack(track);
  }

  pause() {
    usePlayerStore.getState().pause();
  }

  resume() {
    usePlayerStore.getState().play();
  }

  toggle() {
    const { isPlaying, pause, play } = usePlayerStore.getState();

    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }
}

export default new PlayerService();
