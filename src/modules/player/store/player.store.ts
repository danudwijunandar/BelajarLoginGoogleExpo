import { create } from "zustand";

export interface Track {
  id: string;
  title: string;
  artist: string;
  image: string;
  videoId: string;
}

interface PlayerStore {
  currentTrack: Track | null;

  isPlaying: boolean;

  duration: number;

  currentTime: number;

  setTrack: (track: Track) => void;

  play: () => void;

  pause: () => void;

  togglePlay: () => void;

  setDuration: (duration: number) => void;

  setCurrentTime: (time: number) => void;
}

export const usePlayerStore = create<PlayerStore>((set) => ({
  currentTrack: null,

  isPlaying: false,

  duration: 0,

  currentTime: 0,

  setTrack: (track) =>
    set({
      currentTrack: track,
      isPlaying: true,
      currentTime: 0,
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

  setDuration: (duration) =>
    set({
      duration,
    }),

  setCurrentTime: (time) =>
    set({
      currentTime: time,
    }),
}));
