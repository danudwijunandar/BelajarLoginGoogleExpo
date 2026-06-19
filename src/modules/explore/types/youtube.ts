export interface YoutubeVideo {
  id: {
    videoId: string;
  };

  snippet: {
    title: string;

    channelTitle: string;

    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}
