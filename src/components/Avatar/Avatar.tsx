import { Image, StyleSheet, View } from "react-native";

type Props = {
  uri: string;
  size?: number;
};

export default function Avatar({ uri, size = 72 }: Props) {
  return (
    <View
      style={[
        styles.wrapper,
        {
          width: size + 8,
          height: size + 8,
          borderRadius: (size + 8) / 2,
        },
      ]}
    >
      <Image
        source={{ uri }}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },
});
