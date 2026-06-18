import { StyleSheet, Text, TouchableOpacity } from "react-native";

import Radius from "@/theme/radius";

type Props = {
  title: string;
  color: string;
};

export default function GenreCard({ title, color }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: color,
        },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 110,
    borderRadius: Radius.lg,
    justifyContent: "flex-end",
    padding: 16,
  },

  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});
