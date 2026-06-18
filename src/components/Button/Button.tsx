import { StyleSheet, Text, TouchableOpacity } from "react-native";

import Colors from "@/theme/colors";
import Radius from "@/theme/radius";

type Props = {
  title: string;
  onPress: () => void;
};

export default function Button({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: Radius.md,
    padding: 16,
  },

  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});
