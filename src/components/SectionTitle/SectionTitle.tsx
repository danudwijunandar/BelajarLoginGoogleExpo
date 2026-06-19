import { StyleSheet, Text, View } from "react-native";

import Colors from "@/theme/colors";

type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },

  title: {
    color: Colors.text,
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: 0.3,
  },
});
