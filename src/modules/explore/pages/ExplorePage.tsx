import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExplorePage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Explore</Text>

        <TextInput
          placeholder="Cari lagu, artis..."
          placeholderTextColor="#888"
          style={styles.search}
        />

        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>🎵 Discover Weekly</Text>

          <Text style={styles.bannerSubtitle}>
            Temukan musik favoritmu setiap minggu
          </Text>
        </View>

        <Text style={styles.section}>Genre</Text>

        <View style={styles.genreContainer}>
          <View style={styles.genre}>
            <Text style={styles.genreText}>Pop</Text>
          </View>

          <View style={styles.genre}>
            <Text style={styles.genreText}>Rock</Text>
          </View>

          <View style={styles.genre}>
            <Text style={styles.genreText}>Jazz</Text>
          </View>

          <View style={styles.genre}>
            <Text style={styles.genreText}>HipHop</Text>
          </View>

          <View style={styles.genre}>
            <Text style={styles.genreText}>K-Pop</Text>
          </View>

          <View style={styles.genre}>
            <Text style={styles.genreText}>Indie</Text>
          </View>
        </View>

        <Text style={styles.section}>Trending</Text>

        {[1, 2, 3, 4].map((item) => (
          <View key={item} style={styles.card}>
            <View style={styles.cover} />

            <View style={{ flex: 1 }}>
              <Text style={styles.song}>Song {item}</Text>

              <Text style={styles.artist}>Unknown Artist</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 20,
  },

  search: {
    backgroundColor: "#2a2a2a",
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 52,
    color: "white",
    marginBottom: 20,
  },

  banner: {
    backgroundColor: "#1DB954",
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
  },

  bannerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
  },

  bannerSubtitle: {
    color: "white",
    marginTop: 8,
  },

  section: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 14,
  },

  genreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 28,
  },

  genre: {
    backgroundColor: "#262626",
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  genreText: {
    color: "white",
    fontWeight: "600",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  cover: {
    width: 60,
    height: 60,
    borderRadius: 14,
    backgroundColor: "#555",
    marginRight: 16,
  },

  song: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  artist: {
    color: "#999",
    marginTop: 4,
  },
});
