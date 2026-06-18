import { FlatList, StyleSheet, Text, View } from "react-native";

import MusicCard from "@/components/MusicCard/MusicCard";
import Screen from "@/components/Screen/Screen";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

import { albums } from "@/data/albums";

import { useAuthStore } from "@/store/auth.store";
import Colors from "@/theme/colors";

export default function HomePage() {
  const user = useAuthStore((state) => state.user);

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.greeting}>Good Morning 👋</Text>

        <Text style={styles.name}>{user?.displayName}</Text>

        <SectionTitle title="Recently Played" />

        <FlatList
          horizontal
          data={albums}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <MusicCard
              image={item.image}
              title={item.title}
              subtitle={item.artist}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  greeting: {
    color: Colors.textSecondary,
    fontSize: 18,
  },

  name: {
    color: Colors.text,
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 30,
  },
});
