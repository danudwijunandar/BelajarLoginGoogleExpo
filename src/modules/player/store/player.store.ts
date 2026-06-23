import { PlayerState, Track } from "@/modules/player/types/player.type";
import { create } from "zustand";

interface PlayerStore extends PlayerState {
  setTrack: (track: Track) => void;

  setPlaylist: (tracks: Track[], index?: number) => void;

  play: () => void;

  pause: () => void;

  toggle: () => void;

  stop: () => void;

  next: () => void;

  previous: () => void;

  setReady: (ready: boolean) => void;

  setLoading: (loading: boolean) => void;

  setDuration: (duration: number) => void;

  setCurrentTime: (time: number) => void;

  setBuffered: (buffered: number) => void;

  setVolume: (volume: number) => void;

  toggleRepeat: () => void;

  toggleShuffle: () => void;
}

export const usePlayerStore = create<PlayerStore>((set, get) => ({
  currentTrack: null,

  playlist: [],

  currentIndex: 0,

  isPlaying: false,

  isLoading: false,

  isReady: false,

  duration: 0,

  currentTime: 0,

  buffered: 0,

  repeat: false,

  shuffle: false,

  volume: 100,

  setTrack: (track) =>
    set({
      currentTrack: track,
      isPlaying: true,
      currentTime: 0,
      duration: 0,
      buffered: 0,
      isLoading: true,
      isReady: false,
    }),

  setPlaylist: (tracks, index = 0) =>
    set({
      playlist: tracks,
      currentIndex: index,
      currentTrack: tracks[index] ?? null,
      isPlaying: true,
      currentTime: 0,
      duration: 0,
      buffered: 0,
      isLoading: true,
      isReady: false,
    }),

  play: () =>
    set({
      isPlaying: true,
    }),

  pause: () =>
    set({
      isPlaying: false,
    }),

  toggle: () =>
    set((state) => ({
      isPlaying: !state.isPlaying,
    })),

  stop: () =>
    set({
      isPlaying: false,
      currentTime: 0,
    }),

  next: () => {
    const state = get();

    if (state.playlist.length === 0) return;

    let nextIndex = state.currentIndex + 1;

    if (nextIndex >= state.playlist.length) {
      if (state.repeat) {
        nextIndex = 0;
      } else {
        return;
      }
    }

    set({
      currentIndex: nextIndex,
      currentTrack: state.playlist[nextIndex],
      currentTime: 0,
      duration: 0,
      buffered: 0,
      isLoading: true,
      isReady: false,
      isPlaying: true,
    });
  },

  previous: () => {
    const state = get();

    if (state.playlist.length === 0) return;

    let prevIndex = state.currentIndex - 1;

    if (prevIndex < 0) {
      if (state.repeat) {
        prevIndex = state.playlist.length - 1;
      } else {
        return;
      }
    }

    set({
      currentIndex: prevIndex,
      currentTrack: state.playlist[prevIndex],
      currentTime: 0,
      duration: 0,
      buffered: 0,
      isLoading: true,
      isReady: false,
      isPlaying: true,
    });
  },

  setReady: (ready) =>
    set({
      isReady: ready,
    }),

  setLoading: (loading) =>
    set({
      isLoading: loading,
    }),

  setDuration: (duration) =>
    set({
      duration,
    }),

  setCurrentTime: (time) =>
    set({
      currentTime: time,
    }),

  setBuffered: (buffered) =>
    set({
      buffered,
    }),

  setVolume: (volume) =>
    set({
      volume,
    }),

  toggleRepeat: () =>
    set((state) => ({
      repeat: !state.repeat,
    })),

  toggleShuffle: () =>
    set((state) => ({
      shuffle: !state.shuffle,
    })),
}));
