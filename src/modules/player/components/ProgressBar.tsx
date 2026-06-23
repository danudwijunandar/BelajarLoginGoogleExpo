import { StyleSheet, View } from "react-native";

interface Props {
  progress: number;
}

export default function ProgressBar({ progress }: Props) {
  const width = Math.max(0, Math.min(progress * 100, 100));

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.progress,
          {
            width: `${width}%`,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",

    top: 0,

    left: 0,

    right: 0,

    height: 3,

    backgroundColor: "#374151",
  },

  progress: {
    height: 3,

    backgroundColor: "#22C55E",
  },
});
