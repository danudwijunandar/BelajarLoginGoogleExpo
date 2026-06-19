import { useState } from "react";

import { YoutubeService } from "@/modules/explore/services/youtube.service";

export function useYoutubeSearch() {
  const [loading, setLoading] = useState(false);

  const [results, setResults] = useState([]);

  const search = async (query: string) => {
    try {
      setLoading(true);

      const data = await YoutubeService.searchMusic(query);

      setResults(data);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    results,
    search,
  };
}
