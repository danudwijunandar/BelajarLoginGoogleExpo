import { useState } from "react";
import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";

import Screen from "@/components/Screen/Screen";

import Colors from "@/theme/colors";

export default function SettingsPage() {
  const [notification, setNotification] = useState(true);

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.pageTitle}>Settings</Text>

        <Text style={styles.subtitle}>Manage your preferences</Text>

        <Text style={styles.sectionTitle}>Account</Text>

        <View style={styles.card}>
          <SettingRow title="Profile" value="Manage" />

          <SettingRow title="Subscription" value="Free Plan" />
        </View>

        <Text style={styles.sectionTitle}>Preferences</Text>

        <View style={styles.card}>
          <View style={styles.switchRow}>
            <Text style={styles.label}>Push Notifications</Text>

            <Switch value={notification} onValueChange={setNotification} />
          </View>

          <SettingRow title="Language" value="Indonesia" />

          <SettingRow title="Theme" value="Dark" />
        </View>

        <Text style={styles.sectionTitle}>Playback</Text>

        <View style={styles.card}>
          <SettingRow title="Audio Quality" value="High" />

          <SettingRow title="Download Quality" value="High" />
        </View>

        <Text style={styles.sectionTitle}>About</Text>

        <View style={styles.card}>
          <SettingRow title="Version" value="1.0.0" />

          <SettingRow title="Privacy Policy" value="View" />

          <SettingRow title="Terms of Service" value="View" />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Tynu Music</Text>

          <Text style={styles.footerVersion}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </Screen>
  );
}

function SettingRow({ title, value }: { title: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{title}</Text>

      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 40,
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
    marginBottom: 28,
  },

  sectionTitle: {
    color: Colors.text,
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 12,
    marginTop: 8,
  },

  card: {
    backgroundColor: Colors.card,

    borderRadius: 24,

    paddingHorizontal: 18,
    paddingVertical: 8,

    marginBottom: 24,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 18,
  },

  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 14,
  },

  label: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "600",
  },

  value: {
    color: Colors.textSecondary,
    fontSize: 15,
  },

  footer: {
    alignItems: "center",
    marginTop: 20,
  },

  footerText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "700",
  },

  footerVersion: {
    color: Colors.textSecondary,
    marginTop: 4,
  },
});
