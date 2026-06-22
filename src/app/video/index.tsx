import Screen from "@/components/Screen/Screen";
import { usePlayerStore } from "@/modules/player/store/player.store";
import Colors from "@/theme/colors";
import { Image, StyleSheet, Text, View } from "react-native";

export default function VideoPlayerPage() {
  const track = usePlayerStore((state) => state.currentTrack);

  if (!track) {
    return (
      <Screen>
        <View style={styles.empty}>
          <Text style={styles.text}>Tidak ada lagu dipilih</Text>
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <View style={styles.container}>
        <Image source={{ uri: track.image }} style={styles.cover} />

        <Text style={styles.title}>{track.title}</Text>

        <Text style={styles.artist}>{track.artist}</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  cover: {
    width: 320,
    height: 320,
    borderRadius: 24,
  },

  title: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: "700",
    color: Colors.text,
    textAlign: "center",
  },

  artist: {
    marginTop: 10,
    color: Colors.textSecondary,
    fontSize: 18,
  },

  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: Colors.text,
    fontSize: 18,
  },
});
