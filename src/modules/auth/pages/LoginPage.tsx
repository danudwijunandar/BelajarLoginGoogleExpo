import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthService } from "../services/auth.service";
import { saveUser } from "../services/user.service";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const firebaseUser = await AuthService.login();

      await saveUser(firebaseUser);

      router.replace("/(tabs)/home");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>🎵</Text>

        <Text style={styles.title}>Belajar Login Google</Text>

        <Text style={styles.subtitle}>
          Aplikasi Music Streaming dengan Firebase Authentication
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login dengan Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },

  content: {
    alignItems: "center",
  },

  logo: {
    fontSize: 80,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: 40,
  },

  button: {
    width: "100%",
    backgroundColor: "#000",
    paddingVertical: 16,
    borderRadius: 12,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
});
