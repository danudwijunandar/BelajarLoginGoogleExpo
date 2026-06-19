import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  color: string;
};

export default function GenreCard({ title, color }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.card,
        {
          backgroundColor: color,
        },
      ]}
    >
      <View style={styles.overlay} />

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 140,
    borderRadius: 26,
    overflow: "hidden",
    justifyContent: "flex-end",
    padding: 20,
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.18)",
  },

  title: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
});
