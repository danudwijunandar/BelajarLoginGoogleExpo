import { create } from "zustand";

interface Track {
  id: string;
  title: string;
  artist: string;
  image: string;
}

interface PlayerStore {
  currentTrack: Track | null;

  isPlaying: boolean;

  setTrack: (track: Track) => void;

  play: () => void;

  pause: () => void;

  togglePlay: () => void;
}

export const usePlayerStore = create<PlayerStore>((set) => ({
  currentTrack: null,

  isPlaying: false,

  setTrack: (track) =>
    set({
      currentTrack: track,
      isPlaying: true,
    }),

  play: () =>
    set({
      isPlaying: true,
    }),

  pause: () =>
    set({
      isPlaying: false,
    }),

  togglePlay: () =>
    set((state) => ({
      isPlaying: !state.isPlaying,
    })),
}));
