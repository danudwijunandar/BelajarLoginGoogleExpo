import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Screen from "@/components/Screen/Screen";
import { usePlayerStore } from "@/modules/player/store/player.store";
import Colors from "@/theme/colors";

import { YoutubeService } from "@/modules/explore/services/youtube.service";

export default function ExplorePage() {
  const [query, setQuery] = useState("");

  const [results, setResults] = useState<any[]>([]);

  const [selectedSong, setSelectedSong] = useState<any>(null);

  const setTrack = usePlayerStore((state) => state.setTrack);

  const handleSearch = async () => {
    if (!query.trim()) return;

    const data = await YoutubeService.searchMusic(query);

    setResults(data);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Explore</Text>

          <TouchableOpacity style={styles.settingButton}>
            <Text style={styles.settingIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search songs, artists..."
          placeholderTextColor="#64748B"
          style={styles.search}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
        />

        {selectedSong && (
          <View style={styles.player}>
            <Image
              source={{
                uri: selectedSong.snippet.thumbnails.high.url,
              }}
              style={styles.playerImage}
            />

            <View style={styles.playerInfo}>
              <Text numberOfLines={2} style={styles.playerTitle}>
                {selectedSong.snippet.title}
              </Text>

              <Text style={styles.playerArtist}>
                {selectedSong.snippet.channelTitle}
              </Text>
            </View>
          </View>
        )}

        <FlatList
          data={results}
          keyExtractor={(item) => item.id.videoId}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                const playlist = results.map((video) => ({
                  id: video.id.videoId,
                  title: video.snippet.title,
                  artist: video.snippet.channelTitle,
                  image: video.snippet.thumbnails.high.url,
                  videoId: video.id.videoId,
                }));

                const index = playlist.findIndex(
                  (track) => track.id === item.id.videoId,
                );

                setSelectedSong(item);

                usePlayerStore.getState().setPlaylist(playlist, index);
              }}
            >
              <Image
                source={{
                  uri: item.snippet.thumbnails.high.url,
                }}
                style={styles.thumbnail}
              />

              <View style={styles.info}>
                <Text numberOfLines={2} style={styles.videoTitle}>
                  {item.snippet.title}
                </Text>

                <Text numberOfLines={1} style={styles.channel}>
                  {item.snippet.channelTitle}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 8,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    color: Colors.text,
    fontSize: 32,
    fontWeight: "800",
  },

  settingButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.card,
    justifyContent: "center",
    alignItems: "center",
  },

  settingIcon: {
    fontSize: 24,
  },

  search: {
    height: 58,
    backgroundColor: Colors.card,
    borderRadius: 22,
    paddingHorizontal: 20,
    color: Colors.text,
    marginBottom: 20,
  },

  player: {
    backgroundColor: Colors.card,
    borderRadius: 24,
    padding: 16,
    flexDirection: "row",
    marginBottom: 20,
  },

  playerImage: {
    width: 90,
    height: 90,
    borderRadius: 18,
  },

  playerInfo: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "center",
  },

  playerTitle: {
    color: Colors.text,
    fontWeight: "800",
    fontSize: 16,
  },

  playerArtist: {
    color: Colors.textSecondary,
    marginTop: 8,
  },

  card: {
    backgroundColor: Colors.card,
    borderRadius: 22,
    overflow: "hidden",
    flexDirection: "row",
    marginBottom: 14,
  },

  thumbnail: {
    width: 120,
    height: 90,
  },

  info: {
    flex: 1,
    padding: 14,
    justifyContent: "center",
  },

  videoTitle: {
    color: Colors.text,
    fontWeight: "700",
    fontSize: 15,
  },

  channel: {
    color: Colors.textSecondary,
    marginTop: 8,
    fontSize: 13,
  },
});
