import { Image } from "expo-image";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

import MusicCard from "@/components/MusicCard/MusicCard";
import Screen from "@/components/Screen/Screen";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

import { albums } from "@/data/albums";
import { usePlayerStore } from "@/modules/player/store/player.store";
import { useAuthStore } from "@/store/auth.store";

import Colors from "@/theme/colors";

export default function HomePage() {
  const setTrack = usePlayerStore((state) => state.setTrack);
  const user = useAuthStore((state) => state.user);

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.greeting}>Good Morning 👋</Text>

            <Text style={styles.name}>
              {user?.displayName || "Music Lover"}
            </Text>
          </View>

          {user?.photoURL ? (
            <Image
              source={{ uri: user.photoURL }}
              style={styles.headerAvatar}
            />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarText}>🎵</Text>
            </View>
          )}
        </View>

        <View style={styles.heroCard}>
          <Text style={styles.heroLabel}>TYNU MUSIC</Text>

          <Text style={styles.heroTitle}>Discover New Music</Text>

          <Text style={styles.heroSubtitle}>
            Explore trending songs and personalized recommendations curated just
            for you.
          </Text>

          <View style={styles.heroIcons}>
            <Text style={styles.heroEmoji}>🎵</Text>
            <Text style={styles.heroEmoji}>🎧</Text>
            <Text style={styles.heroEmoji}>🎤</Text>
          </View>
        </View>

        <View style={styles.shortcutContainer}>
          <View style={styles.shortcutCard}>
            <View>
              <Text style={styles.shortcutTitle}>Favorites</Text>

              <Text style={styles.shortcutSubtitle}>Your liked songs</Text>
            </View>

            <Text style={styles.shortcutEmoji}>❤️</Text>
          </View>

          <View style={styles.shortcutCard}>
            <View>
              <Text style={styles.shortcutTitle}>Playlists</Text>

              <Text style={styles.shortcutSubtitle}>12 playlists</Text>
            </View>

            <Text style={styles.shortcutEmoji}>🎵</Text>
          </View>
        </View>

        <SectionTitle title="Recently Played" />

        <FlatList
          horizontal
          data={albums}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <MusicCard
              image={item.image}
              title={item.title}
              subtitle={item.artist}
            />
          )}
        />

        <View style={styles.spacing} />

        <SectionTitle title="Made For You" />

        <FlatList
          horizontal
          data={albums}
          keyExtractor={(item) => `made-${item.id}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <MusicCard
              image={item.image}
              title={item.title}
              subtitle={item.artist}
              onPress={() =>
                setTrack({
                  id: item.id,
                  title: item.title,
                  artist: item.artist,
                  image: item.image,
                })
              }
            />
          )}
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 6,
    paddingTop: 12,
    paddingBottom: 100,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 24,
  },

  greeting: {
    color: Colors.textSecondary,
    fontSize: 15,
  },

  name: {
    color: Colors.text,
    fontSize: 30,
    fontWeight: "800",

    marginTop: 4,
  },

  headerAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },

  avatarPlaceholder: {
    width: 52,
    height: 52,
    borderRadius: 26,

    backgroundColor: Colors.card,

    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    fontSize: 22,
  },

  heroCard: {
    backgroundColor: Colors.primary,

    borderRadius: 24,

    padding: 22,

    marginBottom: 28,
  },

  heroLabel: {
    color: "#E0E7FF",

    fontSize: 12,

    fontWeight: "700",

    letterSpacing: 2,
  },

  heroTitle: {
    color: "#FFFFFF",

    fontSize: 24,

    fontWeight: "800",

    marginTop: 12,
  },

  heroSubtitle: {
    color: "#E2E8F0",

    marginTop: 10,

    lineHeight: 22,

    maxWidth: "85%",
  },

  heroIcons: {
    flexDirection: "row",

    marginTop: 18,
  },

  heroEmoji: {
    fontSize: 24,

    marginRight: 14,
  },

  shortcutContainer: {
    marginBottom: 28,
  },

  shortcutCard: {
    backgroundColor: Colors.card,

    borderRadius: 22,

    padding: 18,

    marginBottom: 14,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  shortcutTitle: {
    color: Colors.text,

    fontSize: 17,

    fontWeight: "700",
  },

  shortcutSubtitle: {
    color: Colors.textSecondary,

    fontSize: 13,

    marginTop: 4,
  },

  shortcutEmoji: {
    fontSize: 28,
  },

  listContent: {
    paddingRight: 10,
  },

  spacing: {
    height: 28,
  },
});
