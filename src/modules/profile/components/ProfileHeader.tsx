import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  name: string;
  email: string;
  photoURL: string;
};

export default function ProfileHeader({ name, email, photoURL }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: photoURL }} style={styles.avatar} />

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.email}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 32,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 18,
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
  },

  email: {
    marginTop: 6,
    color: "#999",
    fontSize: 15,
  },
});
