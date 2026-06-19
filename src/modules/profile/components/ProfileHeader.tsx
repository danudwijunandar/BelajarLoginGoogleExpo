import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  name: string;
  email: string;
  photoURL: string;
};

export default function ProfileHeader({ name, email, photoURL }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image source={{ uri: photoURL }} style={styles.avatar} />
      </View>

      <Text numberOfLines={1} style={styles.name}>
        {name}
      </Text>

      <Text numberOfLines={1} style={styles.email}>
        {email}
      </Text>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>Tynu Premium Experience</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 30,
  },

  avatarWrapper: {
    width: 128,
    height: 128,
    borderRadius: 64,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },

  avatar: {
    width: 118,
    height: 118,
    borderRadius: 59,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
    marginTop: 18,
    textAlign: "center",
  },

  email: {
    color: "#9CA3AF",
    fontSize: 15,
    marginTop: 8,
    textAlign: "center",
  },

  badge: {
    marginTop: 18,

    backgroundColor: "rgba(255,255,255,0.08)",

    paddingHorizontal: 18,
    paddingVertical: 10,

    borderRadius: 999,

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
});
