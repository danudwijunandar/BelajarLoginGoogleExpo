export interface Track {
  id: string;
  videoId: string;

  title: string;
  artist: string;

  image: string;

  duration?: number;
}

export interface PlayerState {
  currentTrack: Track | null;

  playlist: Track[];

  currentIndex: number;

  isPlaying: boolean;

  isLoading: boolean;

  isReady: boolean;

  duration: number;

  currentTime: number;

  buffered: number;

  repeat: boolean;

  shuffle: boolean;

  volume: number;
}
