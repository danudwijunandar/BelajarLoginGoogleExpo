import { Image, StyleSheet } from "react-native";

type Props = {
  uri: string;
};

export default function Avatar({ uri }: Props) {
  return <Image source={{ uri }} style={styles.avatar} />;
}

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
