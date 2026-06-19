import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  icon: string;
  onPress?: () => void;
};

export default function ProfileMenuItem({ title, icon, onPress }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.arrow}>→</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "rgba(255,255,255,0.05)",

    borderRadius: 22,

    paddingVertical: 16,
    paddingHorizontal: 18,

    marginBottom: 14,

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },

  iconContainer: {
    width: 46,
    height: 46,

    borderRadius: 14,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgba(255,255,255,0.06)",
  },

  icon: {
    fontSize: 22,
  },

  title: {
    flex: 1,
    marginLeft: 14,

    color: "#FFFFFF",

    fontSize: 16,
    fontWeight: "700",
  },

  arrow: {
    color: "#6B7280",
    fontSize: 20,
    fontWeight: "700",
  },
});
