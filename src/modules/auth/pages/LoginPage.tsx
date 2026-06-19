import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "@/theme/colors";

import { AuthService } from "../services/auth.service";
import { saveUser } from "../services/user.service";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const firebaseUser = await AuthService.login();

      await saveUser(firebaseUser);

      router.replace("/(tabs)/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>🎵</Text>
        </View>

        <Text style={styles.brand}>TYNU MUSIC</Text>

        <Text style={styles.title}>Music For Everyone</Text>

        <Text style={styles.subtitle}>
          Discover new songs, build playlists, and enjoy your favorite music
          anywhere.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Welcome Back</Text>

        <Text style={styles.cardSubtitle}>
          Continue with your Google account
        </Text>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.googleButton}
          onPress={handleLogin}
        >
          <Text style={styles.googleIcon}>G</Text>

          <Text style={styles.googleText}>Continue with Google</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          By continuing, you agree to our Terms & Privacy Policy.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
  },

  hero: {
    alignItems: "center",
    marginTop: 60,
  },

  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: Colors.card,

    marginBottom: 24,
  },

  logo: {
    fontSize: 54,
  },

  brand: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 4,
    marginBottom: 12,
  },

  title: {
    color: Colors.text,
    fontSize: 34,
    fontWeight: "800",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 16,

    color: Colors.textSecondary,

    textAlign: "center",

    fontSize: 15,
    lineHeight: 24,

    paddingHorizontal: 20,
  },

  card: {
    backgroundColor: Colors.card,

    borderRadius: 28,

    padding: 24,

    borderWidth: 1,
    borderColor: Colors.border,
  },

  cardTitle: {
    color: Colors.text,
    fontSize: 24,
    fontWeight: "700",
  },

  cardSubtitle: {
    color: Colors.textSecondary,
    marginTop: 6,
    marginBottom: 24,
    fontSize: 14,
  },

  googleButton: {
    height: 58,

    borderRadius: 18,

    backgroundColor: "#FFFFFF",

    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
  },

  googleIcon: {
    fontSize: 20,
    fontWeight: "700",

    marginRight: 10,

    color: "#4285F4",
  },

  googleText: {
    color: "#111827",

    fontSize: 16,
    fontWeight: "700",
  },

  footer: {
    color: Colors.textSecondary,

    textAlign: "center",

    marginTop: 18,

    fontSize: 12,
    lineHeight: 18,
  },
});
