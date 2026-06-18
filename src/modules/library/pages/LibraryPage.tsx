import { ScrollView, StyleSheet } from "react-native";

import MusicListItem from "@/components/MusicListItem/MusicListItem";
import Screen from "@/components/Screen/Screen";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

import { albums } from "@/data/albums";

export default function LibraryPage() {
  return (
    <Screen>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <SectionTitle title="Your Library" />
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
  container: {
    flex: 1,
    padding: 20,
  },
  quickActions: {
    flexDirection: "row",
    marginBottom: 30,
  },

  box: {
    flex: 1,
    backgroundColor: "#1E293B",
    padding: 18,
    borderRadius: 16,
    marginRight: 10,
  },

  emoji: {
    fontSize: 30,
  },

  boxTitle: {
    color: "white",
    marginTop: 15,
    fontWeight: "700",
  },
});
