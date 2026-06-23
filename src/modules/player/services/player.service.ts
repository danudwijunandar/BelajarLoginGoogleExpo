import { Track } from "@/modules/player/types/player.type";
import { usePlayerStore } from "../store/player.store";

class PlayerService {
  play(track: Track) {
    const store = usePlayerStore.getState();

    store.setTrack(track);
  }

  playCurrent() {
    usePlayerStore.getState().play();
  }

  pause() {
    usePlayerStore.getState().pause();
  }

  toggle() {
    usePlayerStore.getState().toggle();
  }

  stop() {
    usePlayerStore.getState().stop();
  }

  next() {
    usePlayerStore.getState().next();
  }

  previous() {
    usePlayerStore.getState().previous();
  }

  setReady(ready: boolean) {
    usePlayerStore.getState().setReady(ready);
  }

  setLoading(loading: boolean) {
    usePlayerStore.getState().setLoading(loading);
  }

  setDuration(duration: number) {
    usePlayerStore.getState().setDuration(duration);
  }

  setCurrentTime(time: number) {
    usePlayerStore.getState().setCurrentTime(time);
  }

  setBuffered(buffered: number) {
    usePlayerStore.getState().setBuffered(buffered);
  }

  setVolume(volume: number) {
    usePlayerStore.getState().setVolume(volume);
  }

  toggleRepeat() {
    usePlayerStore.getState().toggleRepeat();
  }

  toggleShuffle() {
    usePlayerStore.getState().toggleShuffle();
  }
}

export default new PlayerService();
