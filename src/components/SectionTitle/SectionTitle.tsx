import { StyleSheet, Text } from "react-native";

import Colors from "@/theme/colors";
import Typography from "@/theme/typography";

type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: Colors.text,
    fontSize: Typography.h2,
    fontWeight: "700",
    marginBottom: 20,
  },
});
