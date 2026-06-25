import { useRouter } from "expo-router";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Screen from "@/components/Screen/Screen";

import { AuthService } from "@/modules/auth/services/auth.service";
import { useAuthStore } from "@/store/auth.store";
import Colors from "@/theme/colors";

import ProfileHeader from "../components/ProfileHeader";
import ProfileMenuItem from "../components/ProfileMenuItem";

export default function ProfilePage() {
  const router = useRouter();

  const user = useAuthStore((state) => state.user);

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
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
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <ProfileHeader
          name={user?.displayName ?? ""}
          email={user?.email ?? ""}
          photoURL={user?.photoURL ?? ""}
        />

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>54</Text>

            <Text style={styles.statLabel}>Favorites</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statValue}>12</Text>

            <Text style={styles.statLabel}>Playlists</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statValue}>128</Text>

            <Text style={styles.statLabel}>Played</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Account</Text>

        <ProfileMenuItem icon="👤" title="Edit Profile" />

        <ProfileMenuItem icon="❤️" title="Favorite Songs" />

        <ProfileMenuItem icon="🎵" title="My Playlists" />

        <Text style={styles.sectionTitle}>Preferences</Text>

        <ProfileMenuItem
          icon="⚙️"
          title="Settings"
          onPress={() => router.push("/settings")}
        />

        <ProfileMenuItem icon="🔔" title="Notifications" />

        <Text style={styles.sectionTitle}>Support</Text>

        <ProfileMenuItem icon="❓" title="Help Center" />

        <ProfileMenuItem icon="📄" title="Terms & Privacy" />

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 180,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 30,
  },

  statCard: {
    flex: 1,

    backgroundColor: Colors.card,

    borderRadius: 20,

    alignItems: "center",

    paddingVertical: 20,

    marginHorizontal: 4,
  },

  statValue: {
    color: Colors.text,

    fontSize: 24,

    fontWeight: "800",
  },

  statLabel: {
    color: Colors.textSecondary,

    marginTop: 6,

    fontSize: 12,
  },

  sectionTitle: {
    color: Colors.text,

    fontSize: 20,

    fontWeight: "800",

    marginBottom: 14,

    marginTop: 12,
  },

  logoutButton: {
    marginTop: 30,

    backgroundColor: Colors.danger,

    height: 58,

    borderRadius: 18,

    justifyContent: "center",
    alignItems: "center",
  },

  logoutText: {
    color: "#FFFFFF",

    fontWeight: "700",

    fontSize: 16,
  },
});
