import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "@/theme/colors";

type Props = {
  image: string;
  title: string;
  subtitle: string;
  onPress?: () => void;
};

export default function MusicCard({ image, title, subtitle, onPress }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.card} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>

        <Text numberOfLines={1} style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 155,
    marginRight: 14,
  },

  image: {
    width: 155,
    height: 155,
    borderRadius: 20,
  },

  content: {
    marginTop: 10,
  },

  title: {
    color: Colors.text,
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 20,
  },

  subtitle: {
    color: Colors.textSecondary,
    fontSize: 13,
    marginTop: 4,
  },
});
