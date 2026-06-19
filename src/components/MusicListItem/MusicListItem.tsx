import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "@/theme/colors";

type Props = {
  image: string;
  title: string;
  artist: string;
};

export default function MusicListItem({ image, title, artist }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>

        <Text numberOfLines={1} style={styles.artist}>
          {artist}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "rgba(255,255,255,0.04)",

    padding: 12,
    borderRadius: 18,

    marginBottom: 14,
  },

  image: {
    width: 72,
    height: 72,
    borderRadius: 18,
  },

  info: {
    flex: 1,
    marginLeft: 14,
  },

  title: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "700",
  },

  artist: {
    color: Colors.textSecondary,
    marginTop: 6,
    fontSize: 13,
  },
});
