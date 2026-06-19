import axios from "axios";

const API_KEY = "AIzaSyAWA7G1ZBUT9zd9G6PKgMoNBkRRWdz32Ss";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

export class YoutubeService {
  static async searchMusic(query: string) {
    try {
      const response = await axios.get(`${BASE_URL}/search`, {
        params: {
          part: "snippet",
          q: query,
          type: "video",
          maxResults: 20,
          key: API_KEY,
        },
      });

      return response.data.items;
    } catch (error) {
      console.log(error);

      return [];
    }
  }
}
