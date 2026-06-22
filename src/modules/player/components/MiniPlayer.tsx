import Ionicons from "@expo/vector-icons/Ionicons";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "@/theme/colors";
import { router } from "expo-router";
import PlayerService from "../services/player.service";
import { usePlayerStore } from "../store/player.store";

export default function MiniPlayer() {
  const { currentTrack, isPlaying, play, pause } = usePlayerStore();

  if (!currentTrack) return null;

  return (
    <TouchableOpacity
      activeOpacity={0.95}
      style={styles.container}
      onPress={() => router.push("/video")}
    >
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

      <TouchableOpacity onPress={() => PlayerService.toggle()}>
        <Ionicons name={isPlaying ? "pause" : "play"} size={28} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",

    left: 12,
    right: 12,

    bottom: 82,

    height: 68,

    backgroundColor: "#111827",

    borderRadius: 20,

    paddingHorizontal: 14,

    flexDirection: "row",

    alignItems: "center",

    shadowColor: "#000",

    shadowOpacity: 0.25,

    shadowRadius: 12,

    elevation: 10,
  },

  cover: {
    width: 50,
    height: 50,

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
