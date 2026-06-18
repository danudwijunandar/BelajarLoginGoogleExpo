import { Image, StyleSheet, Text, View } from "react-native";

import Colors from "@/theme/colors";

type Props = {
  image: string;
  title: string;
  artist: string;
};

export default function MusicListItem({ image, title, artist }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.artist}>{artist}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },

  info: {
    marginLeft: 14,
    flex: 1,
  },

  title: {
    color: Colors.text,
    fontWeight: "700",
    fontSize: 16,
  },

  artist: {
    color: Colors.textSecondary,
    marginTop: 5,
  },
});
