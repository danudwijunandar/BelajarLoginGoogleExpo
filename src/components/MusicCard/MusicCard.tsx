import { Image, StyleSheet, Text, View } from "react-native";

import Colors from "@/theme/colors";
import Radius from "@/theme/radius";

type Props = {
  image: string;
  title: string;
  subtitle: string;
};

export default function MusicCard({ image, title, subtitle }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>

      <Text numberOfLines={1} style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    marginRight: 16,
  },

  image: {
    width: 160,
    height: 160,
    borderRadius: Radius.md,
  },

  title: {
    color: Colors.text,
    fontWeight: "700",
    marginTop: 10,
  },

  subtitle: {
    color: Colors.textSecondary,
    marginTop: 4,
  },
});
