import { STORAGE_KEYS } from "@/constants/storage.contants";
import { useAuthStore } from "@/store/auth.store";
import { storage } from "@/utils/storage";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfilePage() {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    logout();

    await storage.removeItem(STORAGE_KEYS.USER);

    router.replace("/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>👤 Profile</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
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

  button: {
    backgroundColor: "red",
    padding: 16,
    borderRadius: 12,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
});
