import { useRouter } from "expo-router";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthService } from "@/modules/auth/services/auth.service";
import { useAuthStore } from "@/store/auth.store";

import ProfileHeader from "../components/ProfileHeader";
import ProfileMenuItem from "../components/ProfileMenuItem";

export default function ProfilePage() {
  const router = useRouter();

  const user = useAuthStore((state) => state.user);

  const handleLogout = () => {
    Alert.alert("Logout", "Yakin ingin keluar?", [
      {
        text: "Batal",
        style: "cancel",
      },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          await AuthService.logout();

          router.replace("/login");
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeader
          name={user?.displayName ?? ""}
          email={user?.email ?? ""}
          photoURL={user?.photoURL ?? ""}
        />

        <ProfileMenuItem icon="👤" title="Edit Profile" />

        <ProfileMenuItem icon="❤️" title="Favorite Songs" />

        <ProfileMenuItem
          icon="⚙️"
          title="Settings"
          onPress={() => router.push("/settings")}
        />

        <ProfileMenuItem icon="❓" title="Help" />

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  logoutButton: {
    backgroundColor: "#ef4444",
    marginTop: 30,
    padding: 18,
    borderRadius: 18,
  },

  logoutText: {
    color: "white",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
  },
});
