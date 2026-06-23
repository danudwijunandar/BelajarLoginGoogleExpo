import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Colors from "@/theme/colors";

import PlayerService from "../services/player.service";
import { usePlayerStore } from "../store/player.store";
import ProgressBar from "./ProgressBar";

export default function MiniPlayer() {
  const { currentTrack, isPlaying, isLoading, currentTime, duration } =
    usePlayerStore();

  if (!currentTrack) return null;

  return (
    <TouchableOpacity
      activeOpacity={0.95}
      style={styles.container}
      onPress={() => router.push("/video")}
    >
      <ProgressBar progress={duration > 0 ? currentTime / duration : 0} />

      <Image
        source={{
          uri: currentTrack.image,
        }}
        style={styles.cover}
      />

      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.title}>
          {currentTrack.title}
        </Text>

        <Text numberOfLines={1} style={styles.artist}>
          {currentTrack.artist}
        </Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.primary} />
      ) : (
        <TouchableOpacity onPress={PlayerService.toggle} hitSlop={20}>
          <Ionicons
            name={isPlaying ? "pause" : "play"}
            size={28}
            color="white"
          />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",

    left: 12,

    right: 12,

    bottom: 82,

    height: 72,

    backgroundColor: "#111827",

    borderRadius: 20,

    paddingHorizontal: 14,

    flexDirection: "row",

    alignItems: "center",

    shadowColor: "#000",

    shadowOpacity: 0.25,

    shadowRadius: 12,

    elevation: 10,

    overflow: "hidden",
  },

  cover: {
    width: 52,

    height: 52,

    borderRadius: 14,
  },

  info: {
    flex: 1,

    marginLeft: 12,
  },

  title: {
    color: Colors.text,

    fontWeight: "700",

    fontSize: 14,
  },

  artist: {
    color: Colors.textSecondary,

    marginTop: 4,

    fontSize: 12,
  },
});
