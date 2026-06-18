import { useState } from "react";
import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsPage() {
  const [notification, setNotification] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Settings</Text>

        <View style={styles.item}>
          <Text style={styles.label}>Push Notification</Text>

          <Switch value={notification} onValueChange={setNotification} />
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Dark Mode</Text>

          <Text style={styles.value}>System</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Language</Text>

          <Text style={styles.value}>Indonesia</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Version</Text>

          <Text style={styles.value}>1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 24,
    color: "white",
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#202020",
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
  },

  label: {
    color: "white",
    fontSize: 17,
  },

  value: {
    color: "#999",
  },
});
