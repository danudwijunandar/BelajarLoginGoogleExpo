import { ScrollView, StyleSheet, Text, View } from "react-native";

import MusicListItem from "@/components/MusicListItem/MusicListItem";
import Screen from "@/components/Screen/Screen";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

import { albums } from "@/data/albums";

import Colors from "@/theme/colors";

export default function LibraryPage() {
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.pageTitle}>Your Library</Text>

        <Text style={styles.subtitle}>Manage your music collection</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>❤️</Text>

            <Text style={styles.statNumber}>54</Text>

            <Text style={styles.statLabel}>Favorites</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>🎵</Text>

            <Text style={styles.statNumber}>12</Text>

            <Text style={styles.statLabel}>Playlists</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>🕒</Text>

            <Text style={styles.statNumber}>128</Text>

            <Text style={styles.statLabel}>History</Text>
          </View>
        </View>

        <View style={styles.playlistCard}>
          <Text style={styles.playlistLabel}>YOUR FAVORITE PLAYLIST</Text>

          <Text style={styles.playlistTitle}>Daily Mix</Text>

          <Text style={styles.playlistSubtitle}>
            Updated every day with songs based on your listening habits.
          </Text>
        </View>

        <SectionTitle title="Recently Played" />

        {albums.map((item) => (
          <MusicListItem
            key={item.id}
            image={item.image}
            title={item.title}
            artist={item.artist}
          />
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 80,
  },

  pageTitle: {
    color: Colors.text,
    fontSize: 34,
    fontWeight: "800",
    marginTop: 10,
  },

  subtitle: {
    color: Colors.textSecondary,
    marginTop: 6,
    marginBottom: 24,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 24,
  },

  statCard: {
    flex: 1,

    backgroundColor: Colors.card,

    borderRadius: 20,

    alignItems: "center",

    paddingVertical: 20,

    marginHorizontal: 4,
  },

  statEmoji: {
    fontSize: 24,
  },

  statNumber: {
    color: Colors.text,

    fontSize: 22,

    fontWeight: "800",

    marginTop: 10,
  },

  statLabel: {
    color: Colors.textSecondary,

    marginTop: 4,

    fontSize: 12,
  },

  playlistCard: {
    backgroundColor: Colors.primary,

    borderRadius: 28,

    padding: 24,

    marginBottom: 30,
  },

  playlistLabel: {
    color: "#FFFFFF",

    opacity: 0.8,

    fontSize: 12,

    letterSpacing: 2,

    fontWeight: "700",
  },

  playlistTitle: {
    color: "#FFFFFF",

    fontSize: 28,

    fontWeight: "800",

    marginTop: 12,
  },

  playlistSubtitle: {
    color: "#E2E8F0",

    marginTop: 10,

    lineHeight: 22,
  },
});
