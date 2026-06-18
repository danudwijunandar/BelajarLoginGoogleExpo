import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  icon: string;
  onPress?: () => void;
};

export default function ProfileMenuItem({ title, icon, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.icon}>{icon}</Text>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#202020",
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
  },

  icon: {
    fontSize: 22,
    marginRight: 16,
  },

  title: {
    flex: 1,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  arrow: {
    color: "#777",
    fontSize: 26,
  },
});
