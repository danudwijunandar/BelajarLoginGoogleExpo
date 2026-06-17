import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuthStore } from "@/store/auth.store";

export default function HomePage() {
  const user = useAuthStore((state) => state.user);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🏠 Home</Text>

      <View style={styles.card}>
        <Text>Nama: {user?.name}</Text>
        <Text>Email: {user?.email}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },

  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#f3f3f3",
  },
});
