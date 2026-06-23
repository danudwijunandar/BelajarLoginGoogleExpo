import Screen from "@/components/Screen/Screen";
import PlayerService from "@/modules/player/services/player.service";
import { usePlayerStore } from "@/modules/player/store/player.store";
import Colors from "@/theme/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function VideoPlayerPage() {
  const { currentTrack, isPlaying, isLoading, currentTime, duration } =
    usePlayerStore();

  if (!currentTrack) {
    return (
      <Screen>
        <View style={styles.empty}>
          <Text style={styles.emptyText}>Tidak ada lagu dipilih</Text>
        </View>
      </Screen>
    );
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const formatTime = (time: number) => {
    const minute = Math.floor(time / 60);
    const second = Math.floor(time % 60);

    return `${minute}:${second.toString().padStart(2, "0")}`;
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Image source={{ uri: currentTrack.image }} style={styles.cover} />

        <Text numberOfLines={2} style={styles.title}>
          {currentTrack.title}
        </Text>

        <Text style={styles.artist}>{currentTrack.artist}</Text>

        <View style={styles.progressContainer}>
          <View style={styles.progressBackground}>
            <View
              style={[
                styles.progress,
                {
                  width: `${progress}%`,
                },
              ]}
            />
          </View>

          <View style={styles.timeRow}>
            <Text style={styles.time}>{formatTime(currentTime)}</Text>

            <Text style={styles.time}>{formatTime(duration)}</Text>
          </View>
        </View>

        <View style={styles.controls}>
          <TouchableOpacity onPress={() => PlayerService.previous()}>
            <Ionicons name="play-skip-back" size={34} color="white" />
          </TouchableOpacity>

          {isLoading ? (
            <ActivityIndicator size="large" color={Colors.primary} />
          ) : (
            <TouchableOpacity
              style={styles.playButton}
              onPress={() => PlayerService.toggle()}
            >
              <Ionicons
                name={isPlaying ? "pause" : "play"}
                size={34}
                color="black"
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={() => PlayerService.next()}>
            <Ionicons name="play-skip-forward" size={34} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    marginBottom: 40,
    marginTop: -120,
  },

  cover: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 30,
    marginBottom: 40,
  },

  title: {
    color: Colors.text,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },

  artist: {
    color: Colors.textSecondary,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 40,
    fontSize: 16,
  },

  progressContainer: {
    marginBottom: 40,
  },

  progressBackground: {
    height: 6,
    borderRadius: 3,
    backgroundColor: "#374151",
    overflow: "hidden",
  },

  progress: {
    height: 6,
    backgroundColor: Colors.primary,
  },

  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  time: {
    color: Colors.textSecondary,
    fontSize: 12,
  },

  controls: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  playButton: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    color: Colors.text,
    fontSize: 20,
  },
});
