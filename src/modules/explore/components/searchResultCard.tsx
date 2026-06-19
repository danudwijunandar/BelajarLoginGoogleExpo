import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "@/theme/colors";

type Props = {
  item: any;
  onPress: (videoId: string) => void;
};

export default function SearchResultCard({ item, onPress }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(item.id.videoId)}
    >
      <Image
        source={{
          uri: item.snippet.thumbnails.high.url,
        }}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.title}>
          {item.snippet.title}
        </Text>

        <Text style={styles.artist}>{item.snippet.channelTitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 18,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 16,
  },

  info: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "center",
  },

  title: {
    color: Colors.text,
    fontWeight: "700",
    fontSize: 15,
  },

  artist: {
    color: Colors.textSecondary,
    marginTop: 6,
    fontSize: 13,
  },
});
